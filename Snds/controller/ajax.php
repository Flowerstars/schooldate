<?php
/* @var $db Database */
foreach($_POST as $k => $v) {
    $$k = utf8_encode(trim($v));
}
$message = array();

switch($_GET['id']) {
    case 'register':
        try {
            MemberSystem::checkRegisterValues($username, $email, $password);
            MemberSystem::register($username, $email, $password, $sex, $interested);

            $message['success'] = "You are successfully registered. Check you email to confirm your registration.";
        } catch (Exception $ex) {
            $message['error'] = $ex->getMessage();
        }
        break;
    case 'login':
        try {
            MemberSystem::login($email, $password);

            $message['success'] = "You are successfully loggedin. Please wait you're being redirected.";
        } catch (Exception $ex) {
            $message['error'] = $ex->getMessage();
        }
        break;
}

echo json_encode($message);