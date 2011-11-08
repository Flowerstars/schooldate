<?php
/**
 * Description of MemberSystem
 *
 * @author Ward
 */
class MemberSystem {
    private static $db;

    public static function checkRegisterValues($username, $email, $password) {
        if(!$username)
            throw new InvalidArgumentException("Please provide us with an username.");
        if(!$email)
            throw new InvalidArgumentException("Please provide us with an email.");
        if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            throw new InvalidArgumentException("Please provide us with a valid email.");
        if(!$password)
            throw new InvalidArgumentException("Please provide us with a password.");
    }

    public static function register($username, $email, $password, $gender, $interested) {
        self::checkDB();

        $schoolRegex = self::getSchoolsRegex();
        if(preg_match($schoolRegex, $email))
            $accountType = "freemium";
        else
            $accountType = "premium";

        $salt = PasswordGenerator::generateSalt();
        $password = PasswordGenerator::hashPassword($salt, $pass);
        $verification = PasswordGenerator::generatePassword(40);
        $date = new DateTime(null, new DateTimeZone(TIMEZONE));

        $member = new Member($username, $email, $salt, $password, $accountType, $date->format("Y-m-d H:i:s"), $gender, $interested, $verification);
        self::$db->addMember($member);

        $subject = $site_name." - Verification code";

        $body = 'Hi,

Thank you for registering. Please use the link below to confirm your registration.

Verification code: '.$verification.'

<a href="'.$websiteUrl.'/verify/code/'.$verification.'">'.$websiteUrl.'/verify/code/"'.$verification.'</a>
If the above link is not working, please go to the below url and put the the verification code on that page.
<a href="'.$websiteUrl.'/verify">'.$websiteUrl.'/verify</a>

Thank you,
Ward';

        Mailer::$sender = $adminEmail;
        Mailer::$senderName = $adminName;
        //Mailer::send($email, $subject, $body);
    }
    
    public static function login($info, $password) {
        self::checkDB();

        if(!filter_var($info, FILTER_VALIDATE_EMAIL))
            $info = self::$db->getMemberEmailByUsername($info);

        $salt = self::$db->getSalt($info);
        $password = PasswordGenerator::hashPassword($salt, $password);

        $member = self::$db->getMemberByEmail($info, $password);

        if(!$member)
            throw new Exception("Member could not be found.");
        if(!$member->getVerified())
            throw new Exception("Your email hasn't been verified yet! Please do this first before you can continue.");

        $_SESSION['member'] = serialize($member);
    }

    private static function getSchoolsRegex() {
        $schools = self::$db->getSchools();

        return "/.*@.*(".implode("|", $schools).")/";
    }
    
    private static function checkDB() {
        if(!self::$db)
            self::$db = Database::getInstance(null, nul, null);
    }
}