<?php

/**
 * MySql Database
 *
 * @author Ward
 */
class Database {

    private static $_instance;
    private static $_db;

    private function __construct($dsn, $user, $password, $options = array()) {
        self::$_db = new PDO($dsn, $user, $password, $options);
    }

    public static function getInstance($dsn, $user, $password) {
        if (self::$_instance == null) {
            $options = array(
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_PERSISTENT => true,
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            );

            self::$_instance = new Database($dsn, $user, $password, $options);
        }

        return self::$_instance;
    }

    /**
     *
     * @param Member $member 
     * 
     */
    public function addMember(Member $member) {
        try {
            $insertQ = "INSERT INTO " . TABLE_MEMBERS . "(username, email, salt, password, account, registration, gender, interested, verification)
                VALUES(:username, :email, :salt, :password, :account, :date, :gender, :interested, :verification)";

            $insertStmt = self::$_db->prepare($insertQ);
            $insertStmt->bindValue('username', $member->getUsername());
            $insertStmt->bindValue('email', $member->getEmail());
            $insertStmt->bindValue('salt', $member->getSalt());
            $insertStmt->bindValue('password', $member->getPassword());
            $insertStmt->bindValue('account', $member->getAccount());
            $insertStmt->bindValue('date', $member->getRegistration());
            $insertStmt->bindValue('gender', $member->getGender());
            $insertStmt->bindValue('interested', $member->getInterested());
            $insertStmt->bindValue('verification', $member->getVerification());
            $insertStmt->execute();
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            if ($ex->getCode() == 23000)
                throw new Exception("Sorry this user already exists.");
            else
                throw new Exception("Something went wrong while registering, please contact the webmaster.");
        }
    }

    public function updateMember($member) {
        try {
            $updateQ = "UPDATE " . TABLE_PROFILES . " SET online = :online, status = :status, school = :school, dateofbirth = :dateofbirth, height = :height, bodytype = :bodytype, eyecolor = :eyecolor, haircolor = :haircolor, nationality = :nationality, ethnicity = :ethnicity, political = :political, faith = :faith, smoking = :smoking, drinking = :drinking, horoscope = :horoscope, description = :description, freetime = :freetime, date = :date, secondary = :secondary, newmessage = :newmessage, latestoffers = :latestoffers
                WHERE memberid = :memberid";

            $updateStmt = self::$_db->prepare($updateQ);
            $updateStmt->bindValue('online', $member->getProfile('online'));
            $updateStmt->bindValue('status', $member->getProfile('status'));
            $updateStmt->bindValue('school', $member->getProfile('school'));
            $updateStmt->bindValue('dateofbirth', $member->getProfile('dateofbirth'));
            $updateStmt->bindValue('height', $member->getProfile('height'));
            $updateStmt->bindValue('bodytype', $member->getProfile('bodytype'));
            $updateStmt->bindValue('eyecolor', $member->getProfile('eyecolor'));
            $updateStmt->bindValue('haircolor', $member->getProfile('haircolor'));
            $updateStmt->bindValue('nationality', $member->getProfile('nationality'));
            $updateStmt->bindValue('ethnicity', $member->getProfile('ethnicity'));
            $updateStmt->bindValue('political', $member->getProfile('political'));
            $updateStmt->bindValue('faith', $member->getProfile('faith'));
            $updateStmt->bindValue('smoking', $member->getProfile('smoking'));
            $updateStmt->bindValue('drinking', $member->getProfile('drinking'));
            $updateStmt->bindValue('horoscope', $member->getProfile('horoscope'));
            $updateStmt->bindValue('description', $member->getProfile('description'));
            $updateStmt->bindValue('freetime', $member->getProfile('freetime'));
            $updateStmt->bindValue('date', $member->getProfile('date'));
            $updateStmt->bindValue('secondary', $member->getProfile('secondary'));
            $updateStmt->bindValue('newmessage', $member->getProfile('newmessage'));
            $updateStmt->bindValue('latestoffers', $member->getProfile('latestoffers'));
            $updateStmt->bindValue('memberid', $member->getMemberid());
            $updateStmt->execute();
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Member could not be updated.");
        }
    }

    public function getMemberByEmail($email, $password) {
        $member = null;
        try {
            $memberQ = "SELECT *
                FROM " . TABLE_MEMBERS . "
                WHERE email = :email
                    AND password = :password";

            $memberStmt = self::$_db->prepare($memberQ);
            $memberStmt->bindValue('email', $email);
            $memberStmt->bindValue('password', $password);
            $memberStmt->execute();

            $members = $memberStmt->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Member");
            $member = $members[0];

            if ($member)
                $member->setProfileArray($this->getProfileInfo($member->getMemberid()));
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Member could not be found.");
        }

        return $member;
    }

    public function getMemberEmailByUsername($username) {
        $member = null;
        try {
            $memberQ = "SELECT email
                FROM " . TABLE_MEMBERS . "
                WHERE username = :username";

            $memberStmt = self::$_db->prepare($memberQ);
            $memberStmt->bindValue('username', $username);
            $memberStmt->execute();

            $members = $memberStmt->fetch();

            $member = $members['email'];
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Member could not be found.");
        }

        return $member;
    }

    public function getMemberById($id) {
        $member = null;
        try {
            $memberQ = "SELECT email, password
                FROM " . TABLE_MEMBERS . "
                WHERE memberid = :id";

            $memberStmt = self::$_db->prepare($memberQ);
            $memberStmt->bindValue('id', $id);
            $memberStmt->execute();

            $members = $memberStmt->fetch();

            $member = $this->getMemberByEmail($members['email'], $members['password']);
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Member could not be found.");
        }

        return $member;
    }

    public function getMemberByUsername($username) {
        $member = null;
        try {
            $memberQ = "SELECT email, password
                FROM " . TABLE_MEMBERS . "
                WHERE username = :username";

            $memberStmt = self::$_db->prepare($memberQ);
            $memberStmt->bindValue('username', $username);
            $memberStmt->execute();

            $members = $memberStmt->fetch();

            $member = $this->getMemberByEmail($members['email'], $members['password']);
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Member could not be found.");
        }

        return $member;
    }

    public function getUsernamesByLike($username) {
        $usernames = array();
        try {
            $memberQ = "SELECT username
                FROM " . TABLE_MEMBERS . "
                WHERE username LIKE :username";

            $memberStmt = self::$_db->prepare($memberQ);
            $memberStmt->bindValue('username', '%'.$username.'%');
            $memberStmt->execute();

            while($member = $memberStmt->fetch()) {
                $usernames[] = $member['username'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Usernames could not be found.");
        }

        return $usernames;
    }

    /**
     *
     * @param string $email
     * @return string 
     */
    public function getSalt($email) {
        $salt = null;

        try {
            $memberQ = "SELECT salt
                FROM " . TABLE_MEMBERS . "
                WHERE email = :email
                LIMIT 1";

            $insertStmt = self::$_db->prepare($memberQ);
            $insertStmt->bindValue('email', $email);
            $insertStmt->execute();

            $saltRes = $insertStmt->fetch(PDO::FETCH_NUM);
            $salt = $saltRes[0];
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Member could not be found.");
        }

        return $salt;
    }

    public function getProfileInfo($mid) {
        $profile = array();

        try {
            $profileQ = "SELECT *
                FROM " . TABLE_PROFILES . "
                WHERE memberid = :mid
                LIMIT 1";

            $profileStmt = self::$_db->prepare($profileQ);
            $profileStmt->bindValue('mid', $mid);
            $profileStmt->execute();

            $profile = $profileStmt->fetch();
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Member could not be found.");
        }

        return $profile;
    }

    /**
     * Get all schools from the database
     *
     * @return string[] Array of tall chools
     */
    public function getSchools() {
        $schools = array();
        try {
            $schoolsQ = "SELECT *
                FROM " . TABLE_SCHOOLS;

            $schoolStmt = self::$_db->prepare($schoolsQ);
            $schoolStmt->execute();

            while ($s = $schoolStmt->fetch()) {
                $schools[$s['name']] = $s['email'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No schools found.");
        }

        return $schools;
    }

    /**
     * Gets all faiths of the database
     *
     * @param string $langcode
     * @return string[] Array of faiths of a language 
     */
    public function getFaiths($langcode="en") {
        $faiths = array();
        try {
            $faithsQ = "SELECT name, value
                FROM " . TABLE_FAITHS . "
                WHERE langcode = :langcode";

            $faithStmt = self::$_db->prepare($faithsQ);
            $faithStmt->bindValue('langcode', $langcode);
            $faithStmt->execute();

            while ($f = $faithStmt->fetch()) {
                $faiths[$f['name']] = $f['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No faiths found.");
        }

        return $faiths;
    }

    /**
     * Gets all ethnicities of the database
     *
     * @param string $langcode
     * @return string[] Array of ethnicities of a language 
     */
    public function getEthnicities($langcode="en") {
        $ethnicities = array();
        try {
            $ethnicitiesQ = "SELECT name, value
                FROM " . TABLE_ETHNICITIES . "
                WHERE langcode = :langcode";

            $ethnicityStmt = self::$_db->prepare($ethnicitiesQ);
            $ethnicityStmt->bindValue('langcode', $langcode);
            $ethnicityStmt->execute();

            while ($e = $ethnicityStmt->fetch()) {
                $ethnicities[$e['name']] = $e['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No ethnicities found.");
        }

        return $ethnicities;
    }

    /**
     * Gets all statusses of the database
     *
     * @param string $langcode
     * @return string[] Array of statusses of a language 
     */
    public function getStatusses($langcode="en") {
        $statusses = array();
        try {
            $statusesQ = "SELECT name, value
                FROM " . TABLE_STATUSSES . "
                WHERE langcode = :langcode";

            $statussesStmt = self::$_db->prepare($statusesQ);
            $statussesStmt->bindValue('langcode', $langcode);
            $statussesStmt->execute();

            while ($s = $statussesStmt->fetch()) {
                $statusses[$s['name']] = $s['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No statusses found.");
        }

        return $statusses;
    }

    /**
     * Gets all smokings of the database
     *
     * @param string $langcode
     * @return string[] Array of smokings of a language 
     */
    public function getSmokings($langcode="en") {
        $smokings = array();
        try {
            $smokingsQ = "SELECT name, value
                FROM " . TABLE_SMOKINGS . "
                WHERE langcode = :langcode";

            $smokingsStmt = self::$_db->prepare($smokingsQ);
            $smokingsStmt->bindValue('langcode', $langcode);
            $smokingsStmt->execute();

            while ($s = $smokingsStmt->fetch()) {
                $smokings[$s['name']] = $s['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No smokings found.");
        }

        return $smokings;
    }

    /**
     * Gets all drinkings of the database
     *
     * @param string $langcode
     * @return string[] Array of smokings of a language 
     */
    public function getDrinkings($langcode="en") {
        $drinkings = array();
        try {
            $drinkingsQ = "SELECT name, value
                FROM " . TABLE_DRINKINGS . "
                WHERE langcode = :langcode";

            $drinkingsStmt = self::$_db->prepare($drinkingsQ);
            $drinkingsStmt->bindValue('langcode', $langcode);
            $drinkingsStmt->execute();

            while ($s = $drinkingsStmt->fetch()) {
                $drinkings[$s['name']] = $s['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No smokings found.");
        }

        return $drinkings;
    }

    /**
     * Gets all policitals of the database
     *
     * @param string $langcode
     * @return string[] Array of policitals of a language 
     */
    public function getPoliticals($langcode="en") {
        $policitals = array();
        try {
            $politicalQ = "SELECT name, value
                FROM " . TABLE_POLITICALS . "
                WHERE langcode = :langcode
                ORDER BY value";

            $politicalsStmt = self::$_db->prepare($politicalQ);
            $politicalsStmt->bindValue('langcode', $langcode);
            $politicalsStmt->execute();

            while ($p = $politicalsStmt->fetch()) {
                $policitals[$p['name']] = $p['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No policitals found.");
        }

        return $policitals;
    }

    /**
     * Gets all horoscopes of the database
     *
     * @param string $langcode
     * @return string[] Array of horoscopes of a language 
     */
    public function getHoroscopes($langcode="en") {
        $horoscopes = array();
        try {
            $horoscopesQ = "SELECT name, value, date
                FROM " . TABLE_HOROSCOPES . "
                WHERE langcode = :langcode
                ORDER BY date";

            $horoscopesStmt = self::$_db->prepare($horoscopesQ);
            $horoscopesStmt->bindValue('langcode', $langcode);
            $horoscopesStmt->execute();

            while ($h = $horoscopesStmt->fetch()) {
                $horoscopes[$h['name']] = $h['value']." (".$h['date'].")";
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No horoscopes found.");
        }

        return $horoscopes;
    }

    /**
     * Gets all nationalities of the database
     *
     * @param string $langcode
     * @return string[] Array of nationalities of a language 
     */
    public function getNationalities($langcode="en") {
        $nationalities = array();
        try {
            $nationalityQ = "SELECT name, value
                FROM " . TABLE_NATIONALITIES . "
                WHERE langcode = :langcode";

            $nationalitiesStmt = self::$_db->prepare($nationalityQ);
            $nationalitiesStmt->bindValue('langcode', $langcode);
            $nationalitiesStmt->execute();

            while ($n = $nationalitiesStmt->fetch()) {
                $nationalities[$n['name']] = $n['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No nationalities found.");
        }

        return $nationalities;
    }

    /**
     * Gets all bodytypes of the database
     *
     * @param string $langcode
     * @return string[] Array of bodytypes of a language 
     */
    public function getBodytypes($langcode="en") {
        $bodytypes = array();
        try {
            $bodytypesQ = "SELECT name, value
                FROM " . TABLE_BODYTYPES . "
                WHERE langcode = :langcode";

            $bodytypesStmt = self::$_db->prepare($bodytypesQ);
            $bodytypesStmt->bindValue('langcode', $langcode);
            $bodytypesStmt->execute();

            while ($b = $bodytypesStmt->fetch()) {
                $bodytypes[$b['name']] = $b['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No bodytypes found.");
        }

        return $bodytypes;
    }

    /**
     * Gets all eyecolors of the database
     *
     * @param string $langcode
     * @return string[] Array of eyecolors of a language 
     */
    public function getEyecolors($langcode="en") {
        $eyecolors = array();
        try {
            $eyecolorsQ = "SELECT name, value
                FROM " . TABLE_EYECOLORS . "
                WHERE langcode = :langcode";

            $eyecolorsStmt = self::$_db->prepare($eyecolorsQ);
            $eyecolorsStmt->bindValue('langcode', $langcode);
            $eyecolorsStmt->execute();

            while ($e = $eyecolorsStmt->fetch()) {
                $eyecolors[$e['name']] = $e['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No eyecolors found.");
        }

        return $eyecolors;
    }

    /**
     * Gets all haircolors of the database
     *
     * @param string $langcode
     * @return string[] Array of haircolors of a language 
     */
    public function getHaircolors($langcode="en") {
        $haircolors = array();
        try {
            $haircolorsQ = "SELECT name, value
                FROM " . TABLE_HAIRCOLORS . "
                WHERE langcode = :langcode";

            $haircolorsStmt = self::$_db->prepare($haircolorsQ);
            $haircolorsStmt->bindValue('langcode', $langcode);
            $haircolorsStmt->execute();

            while ($h = $haircolorsStmt->fetch()) {
                $haircolors[$h['name']] = $h['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No haircolors found.");
        }

        return $haircolors;
    }

    /**
     * Gets all freetimes of the database
     *
     * @param string $langcode
     * @return string[] Array of freetimes of a language 
     */
    public function getFreetimes($langcode="en") {
        $freetimes = array();
        try {
            $freetimeQ = "SELECT name, value
                FROM " . TABLE_FREETIMES . "
                WHERE langcode = :langcode";

            $freetimesStmt = self::$_db->prepare($freetimeQ);
            $freetimesStmt->bindValue('langcode', $langcode);
            $freetimesStmt->execute();

            while ($f = $freetimesStmt->fetch()) {
                $freetimes[$f['name']] = $f['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No freetimes found.");
        }

        return $freetimes;
    }

    /**
     * Gets all heights of the database
     *
     * @param string $langcode
     * @return string[] Array of heights of a language 
     */
    public function getHeights($langcode="en") {
        $heights = array();
        try {
            $heightsQ = "SELECT name, value
                FROM " . TABLE_HEIGHTS . "
                WHERE langcode = :langcode";

            $heightsStmt = self::$_db->prepare($heightsQ);
            $heightsStmt->bindValue('langcode', $langcode);
            $heightsStmt->execute();

            while ($h = $heightsStmt->fetch()) {
                $heights[$h['name']] = $h['value'];
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No ethnicities found.");
        }

        return $heights;
    }

    public function getWallMessages($limit=0) {
        $messages = array();
        try {
            $messageQ = "SELECT *
                FROM ".TABLE_WALL;
            if ($limit)
                $messageQ .= " LIMIT :limit";

            $messageStmt = self::$_db->prepare($messageQ);
            if ($limit)
                $messageStmt->bindValue('limit', $limit, PDO::PARAM_INT);
            $messageStmt->execute();

            $messages = $messageStmt->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Wall");
            foreach ($messages as $message) {
                $message->setMember($this->getMemberById($message->getMember()));
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No messages found.");
        }

        return $messages;
    }

    public function getWallMessagesOfUserid($id, $limit=0) {
        $messages = array();
        try {
            $messageQ = "SELECT *
                FROM ".TABLE_WALL."
                WHERE member = :member";
            if ($limit)
                $messageQ .= " LIMIT :limit";

            $messageStmt = self::$_db->prepare($messageQ);
            $messageStmt->bindValue('member', $id);
            if ($limit)
                $messageStmt->bindValue('limit', $limit, PDO::PARAM_INT);
            $messageStmt->execute();

            $messages = $messageStmt->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Wall");
            foreach ($messages as $message) {
                $message->setMember($this->getMemberById($message->getMember()));
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No messages found.");
        }

        return $messages;
    }

    public function getWallMessagesByFilter($filter = array(), $limit=0) {
        $messages = array();
        try {
            $messageQ = "SELECT w.*
                FROM " . TABLE_WALL . " AS w
                    INNER JOIN " . TABLE_PROFILES . " AS p ON w.member = p.memberid
                WHERE school IN(" . $this->createINstring("s", sizeof($filter['schools'])) . ")
                    AND faith IN(" . $this->createINstring("f", sizeof($filter['faith'])) . ")
                    AND ethnicity IN(" . $this->createINstring("e", sizeof($filter['ethnicity'])) . ")";

            if ($filter['heights'] === "same")
                $messageQ .= " AND heights = :height";
            else if ($filter['heights'] === "shorter")
                $messageQ .= " AND heights < :height";
            else if ($filter['heights'] === "taller")
                $messageQ .= " AND heights > :height";

            if ($limit)
                $messageQ .= " LIMIT :limit";

            $messageStmt = self::$_db->prepare($messageQ);
            $this->bindINstring("s", $filter['schools'], $messageStmt);
            $this->bindINstring("f", $filter['faith'], $messageStmt);
            $this->bindINstring("e", $filter['ethnicity'], $messageStmt);
            if ($filter['heights'] != "")
                $messageStmt->bindValue('height', $filter['curHeight']);
            if ($limit)
                $messageStmt->bindValue('limit', $limit, PDO::PARAM_INT);
            $messageStmt->execute();

            $messages = $messageStmt->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Wall");
            foreach ($messages as $message) {
                $message->setMember($this->getMemberById($message->getMember()));
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No messages found.");
        }

        return $messages;
    }

    public function addMessage(Message $message) {
        try {
            $insertQ = "INSERT INTO " . TABLE_MESSAGES . "(sender, receiver, date, message, `read`, startid)
                VALUES(:sender, :receiver, :date, :message, :read, :startid)";

            $insertStmt = self::$_db->prepare($insertQ);
            $insertStmt->bindValue('sender', $message->getSender()->getMemberid());
            $insertStmt->bindValue('receiver', $message->getReceiver()->getMemberid());
            $insertStmt->bindValue('date', $message->getDate());
            $insertStmt->bindValue('message', $message->getMessage());
            $insertStmt->bindValue('read', $message->getRead());
            $insertStmt->bindValue('startid', $message->getStartid());
            $insertStmt->execute();
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Something went wrong adding the message.");
        }
    }

    public function getMessages($limit=0) {
        $messages = array();
        try {
            $messagesQ = "SELECT *
                FROM ".TABLE_MESSAGES."
                ORDER BY date DESC";
            if ($limit)
                $messagesQ .= " LIMIT :limit";

            $messagesStmt = self::$_db->prepare($messagesQ);
            if ($limit)
                $messagesStmt->bindValue('limit', $limit, PDO::PARAM_INT);
            $messagesStmt->execute();

            $messages = $messagesStmt->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Message");
            foreach ($messages as $message) {
                $message->setReceiver($this->getMemberById($message->getReceiver()));
                $message->setSender($this->getMemberById($message->getSender()));
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No messages found.");
        }

        return $messages;
    }

    public function getMessageOfId($id) {
        $messages = array();
        try {
            $messagesQ = "SELECT *
                FROM ".TABLE_MESSAGES."
                WHERE id = :id
                ORDER BY date ASC";

            $messagesStmt = self::$_db->prepare($messagesQ);
            $messagesStmt->bindValue('id', $id);
            $messagesStmt->execute();

            $messages = $messagesStmt->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Message");
            foreach ($messages as $message) {
                $message->setReceiver($this->getMemberById($message->getReceiver()));
                $message->setSender($this->getMemberById($message->getSender()));
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No messages found.");
        }

        return $messages[0];
    }

    public function getMessagesOfStartId($id) {
        $messages = array();
        try {
            $messagesQ = "SELECT *
                FROM ".TABLE_MESSAGES."
                WHERE id = :id
                    OR startid = :id
                ORDER BY date ASC";

            $messagesStmt = self::$_db->prepare($messagesQ);
            $messagesStmt->bindValue('id', $id);
            $messagesStmt->execute();

            $messages = $messagesStmt->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Message");
            foreach ($messages as $message) {
                $message->setReceiver($this->getMemberById($message->getReceiver()));
                $message->setSender($this->getMemberById($message->getSender()));
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No messages found.");
        }

        return $messages;
    }

    public function getMessagesOfReceiver($id, $limit=0) {
        $messages = array();
        try {
            $messagesQ = "SELECT *
                FROM ".TABLE_MESSAGES."
                WHERE receiver = :id
                ORDER BY date DESC";
            if ($limit)
                $messagesQ .= " LIMIT :limit";

            $messagesStmt = self::$_db->prepare($messagesQ);
            $messagesStmt->bindValue('id', $id);
            if ($limit)
                $messagesStmt->bindValue('limit', $limit, PDO::PARAM_INT);
            $messagesStmt->execute();

            $messages = $messagesStmt->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Message");
            foreach ($messages as $message) {
                $message->setReceiver($this->getMemberById($message->getReceiver()));
                $message->setSender($this->getMemberById($message->getSender()));
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No messages found.");
        }

        return $messages;
    }

    public function getMessagesOfSender($id, $limit=0) {
        $messages = array();
        try {
            $messagesQ = "SELECT *
                FROM ".TABLE_MESSAGES."
                WHERE sender = :id
                ORDER BY date DESC";
            if ($limit)
                $messagesQ .= " LIMIT :limit";

            $messagesStmt = self::$_db->prepare($messagesQ);
            $messagesStmt->bindValue('id', $id);
            if ($limit)
                $messagesStmt->bindValue('limit', $limit, PDO::PARAM_INT);
            $messagesStmt->execute();

            $messages = $messagesStmt->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Message");
            foreach ($messages as $message) {
                $message->setReceiver($this->getMemberById($message->getReceiver()));
                $message->setSender($this->getMemberById($message->getSender()));
            }
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("No messages found.");
        }

        return $messages;
    }

    public function getAdminSettings() {
        $settings = array();

        try {
            $settingsQ = "SELECT *
                FROM " . TABLE_ADMINSETTINGS;

            $settinsgStmt = self::$_db->prepare($settingsQ);
            $settingsStmt->bindValue('key', $key);
            $settingsStmt->execute();

            $settings = $settingsStmt->fetchAll();
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Settings could not be found.");
        }

        return $settings;
    }

    public function getAdminSettingByKey($key) {
        $setting = array();

        try {
            $settingQ = "SELECT value
                FROM " . TABLE_ADMINSETTINGS . "
                WHERE `key` = :key
                LIMIT 1";

            $settingStmt = self::$_db->prepare($settingQ);
            $settingStmt->bindValue('key', $key);
            $settingStmt->execute();

            $setting = $settingStmt->fetch();
        } catch (PDOException $ex) {
            error_log($ex->getMessage());
            throw new Exception("Setting could not be found.");
        }

        return $setting;
    }

    public function getLastId() {
        return self::$_db->lastInsertId();
    }

    private function createINstring($prefix, $count) {
        $string = "";
        for ($i = 0; $i < $count; $i++) {
            $string .= ":" . $prefix . $i . ",";
        }

        return substr($string, 0, -1);
    }

    private function bindINstring($prefix, $array, $statement) {
        for ($i = 0; $i < sizeof($array); $i++) {
            $statement->bindValue($prefix . $i, $array[$i]);
        }
    }

}