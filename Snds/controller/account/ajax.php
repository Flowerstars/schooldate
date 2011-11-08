<?php
/* @var $smarty Smarty */
/* @var $member Member */
/* @var $db Database */
header('Content-type: application/json');

$msg = array();
if(!($member instanceof Member))
    $msg['error'] = "You need to login first.";

foreach($_POST as $k => $v) {
    if(!is_array($v))
        $$k = trim($v);
    else
        $$k = $v;
}

try {
    switch($_GET['id']) {
        case 'filter-updates':
            $school = explode(",", $school);
            $faith = explode(",", $faith);
            $ethnicity = explode(",", $ethnicity);

            $data = array('schools' => $school,
                'faith' => $faith,
                'ethnicity' => $ethnicity,
                'heights' => $height,
                'curHeight' => $member->getProfile("height"));

            $messages = $db->getWallMessagesByFilter($data, 7);
            die(json_encode($messages));

            break;
        case 'received-messages':
            $messages = $db->getMessagesOfReceiver($member->getMemberid(), 10);
            die(json_encode($messages));

            break;
        case 'sent-messages':
            $messages = $db->getMessagesOfSender($member->getMemberid(), 10);
            die(json_encode($messages));

            break;
        case 'conversation':
            $message = $db->getMessageOfId($id);
            $messages = $db->getMessagesOfStartId(($message->getStartid() ? $message->getStartid() : $message->getId()));
            die(json_encode($messages));

            break;
        case 'sendmessage':
            $dbmessage = $db->getMessageOfId($startid);
            if(!$dbmessage || $dbmessage->getSender() != $member && $dbmessage->getReceiver() != $member)
                throw new Exception("Sorry, we could not reply to this message!");
            if(!$message)
                throw new Exception("Please fill in your message to reply");

            $date = new DateTime(null, new DateTimeZone(TIMEZONE));
            $receiver = ($dbmessage->getSender() == $member ? $dbmessage->getReceiver() : $dbmessage->getSender());
            $sender = $member;
            $message = new Message($sender, $receiver, $date->format("Y-m-d H:i:s"), nl2br(htmlentities($message)), 0, $startid);

            $db->addMessage($message);
            $message->setId($db->getLastId());

            if($receiver->getProfile('newmessage')) {
                $message = $receiver->getUsername().",
You have received a new private message from ".$sender->getUsername().". Checkout http://www.schooldate.com to view it.

Regards,
Schooldate.com";
                Mailer::send($receiver->getEmail(), "Schooldate - New Private Message", $message, false);
            }

            $msg['success'] = "You have successfully replied to the message!";
            $msg['obj'] = $message;
            break;
        case 'aboutme':
            $statusses = $db->getStatusses();
            if(!$statusses[$status])
                throw new Exception("Academic Status is not in the list!");
            $schools = $db->getSchools();
            if(!key_exists($university, $schools))
                throw new Exception("University is not in the list!");
            $nationalities = $db->getNationalities();
            if(!$nationalities[$nationality])
                throw new Exception("Nationality is not in the list!");
            $ethnicities = $db->getEthnicities();
            if(!$ethnicities[$ethnicity])
                throw new Exception("Ethnicity is not in the list!");
            $politicals = $db->getPoliticals();
            if(!$politicals[$political])
                throw new Exception("Political view is not in the list!");
            $faiths = $db->getFaiths();
            if(!$faiths[$faith])
                throw new Exception("Faiths view is not in the list!");
            $smokings = $db->getSmokings();
            if(!$smokings[$smoking])
                throw new Exception("Smoking view is not in the list!");
            $drinkings = $db->getDrinkings();
            if(!$drinkings[$drinking])
                throw new Exception("Drinking is not in the list!");
            $date = new DateTime(null, new DateTimeZone(TIMEZONE));
            $date->setDate($year, $month, $day);

            foreach($_POST as $k => $v) {
                $member->setProfile($k, $$k);
            }
            $member->setProfile('dateofbirth', $date->format('Y-m-d'));
            $db->updateMember($member);
            $_SESSION['member'] = serialize($member);

            $msg['success'] = "Information successfully saved!";
            break;
        case 'description':
            $freetimesdata = explode(",", $freetime);
            $freetimes = $db->getFreetimes();
            foreach($freetimesdata as $f) {
                if(!key_exists($f, $freetimes))
                    throw new Exception("Free time is not in the list!");
            }

            $member->setProfile('description', $description);
            $member->setProfile('freetime', implode(";", $freetimesdata));
            $db->updateMember($member);
            $_SESSION['member'] = serialize($member);

            $msg['success'] = "Information successfully saved!";
            break;
        case 'enable-account':
            $member->setActive(1);
            $db->updateMember($member);
            $_SESSION['member'] = serialize($member);

            $msg['success'] = "Your account was renabled";
            break;
        case 'disable-account':
            $member->setActive(0);
            $db->updateMember($member);
            $_SESSION['member'] = serialize($member);

            $msg['success'] = "Your account was disabled";
            break;
        case 'settings':
            if($secondary && !filter_var($secondary, FILTER_VALIDATE_EMAIL))
                throw new Exception("Secondary email is not a valid email address");
            
            if($current) {
                if(PasswordGenerator::hashPassword($member->getSalt(), $current) != $member->getPassword())
                    throw new Exception("Your current password is not correct.");
                if(!$newpass)
                    throw new Exception("New password can not be empty!");
                if($confirm != $newpass)
                    throw new Exception("The confirmed password does not match your new.");

                $member->setPassword(PasswordGenerator::hashPassword($member->getSalt(), $newpass));
            }

            $member->setProfile("newmessage", ($newmessage ? 1 : 0));
            $member->setProfile("latestoffers", ($latestoffers ? 1 : 0));
            $member->setInterested($results);

            $db->updateMember($member);
            $_SESSION['member'] = serialize($member);
            $msg['success'] = "Settings successfully saved!";
            break;
        case 'getUsernames':
            $usernames = $db->getUsernamesByLike($username);

            die(json_encode($usernames));
            break;
        case 'newmessage':
            $receiver = $db->getMemberByUsername($recipient);
            if(!$receiver)
                throw new Exception("Receiver is not an existing user!");            
            if(!$message)
                throw new Exception("Please fill a message in!");
            
            $date = new DateTime(null, new DateTimeZone(TIMEZONE));
            $message = new Message($member, $receiver, $date->format("Y-m-d H:i:s"), $message);
            $db->addMessage($message);

            if($receiver->getProfile('newmessage')) {
                $message = $receiver->getUsername().",
You have received a new private message from ".$sender->getUsername().". Checkout http://www.schooldate.com to view it.

Regards,
Schooldate.com";
                Mailer::send($receiver->getEmail(), "Schooldate - New Private Message", $message, false);
            }

            $msg['success'] = "Message was sent to ".$receiver->getUsername();
            break;
        default: 
            $msg['error'] = "This action does not exists";
    }
}catch(Exception $e) {
    $msg['error'] = $e->getMessage();
}

die(json_encode($msg));