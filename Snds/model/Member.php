<?php
/**
 * Description of Member
 *
 * @author Ward
 */
class Member {
    // public for json
    public $memberid, $username, $email, $salt, $password, $account, $registration, $gender, $interested, $verification, $verified, $active;
    private static $accountTypes = array(
        'freemium',
        'premium',
    );
    public $profile = array();

    /**
     *
     * @param type $username
     * @param type $salt
     * @param type $password
     * @param type $email 
     */
    public function __construct($username = null, $email = null, $salt = null, $password = null, $account = null, $registration = null, $gender = null, $interested = null, $verification = null) {
        $this->setUsername($username);
        $this->setEmail($email);
        $this->setSalt($salt);
        $this->setPassword($password);
        $this->setRegistration($registration);
        $this->setAccount($account);
        $this->setGender($gender);
        $this->setInterested($interested);
        $this->setVerification($verification);
    }

    // Getters And Setters
    public function getMemberid() {
        return $this->memberid;
    }
    public function setMemberid($memberid) {
        $this->memberid = $memberid;
    }

    public function getUsername() {
        return $this->username;
    }
    public function setUsername($username) {
        $this->username = $username;
    }

    
    public function getEmail() {
        return $this->email;
    }
    public function setEmail($email) {
        if($email && !filter_var($email, FILTER_VALIDATE_EMAIL))
            throw new InvalidArgumentException("Email is not valid.");

        $this->email = $email;
    }

    public function getSalt() {
        return $this->salt;
    }
    public function setSalt($salt) {
        if($salt && $salt == "")
            throw new InvalidArgumentException("Salt can not be empty.");

        $this->salt = $salt;
    }

    public function getPassword() {
        return $this->password;
    }
    public function setPassword($password) {
        if($password && $password == "")
            throw new InvalidArgumentException("Password can not be empty.");

        $this->password = $password;
    }
    
    public function getAccount() {
        return $this->account;
    }
    public function setAccount($account) {
        if($account && !in_array($account, self::$accountTypes))
            throw new InvalidArgumentException("Account type is not valid.");
        
        $this->account = $account;
    }

    public function getRegistration() {
        return $this->registration;
    }
    public function setRegistration($registration) {
        $this->registration = $registration;
    }
    
    public function getGender() {
        return $this->gender;
    }
    public function setGender($gender) {
        $this->gender = $gender;
    }

    public function getInterested() {
        return $this->interested;
    }
    public function setInterested($interested) {
        $this->interested = $interested;
    }

    public function getVerification() {
        return $this->verification;
    }
    public function setVerification($verification) {
        $this->verification = $verification;
    }
    
    public function getVerified() {
        return $this->verified;
    }
    public function setVerified($verified) {
        $this->verified = $verified;
    }

    public function getActive() {
        return $this->active;
    }
    public function setActive($active) {
        $this->active = $active;
    }

    public function setProfile($key, $value) {
        $this->profile[$key] = $value;
    }
    public function getProfile($key) {
        return $this->profile[$key];
    }
    public function setProfileArray($profile) {
        $this->profile = $profile;
    }

    
}