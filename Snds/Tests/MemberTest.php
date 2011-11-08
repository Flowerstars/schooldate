<?php
require_once("../model/PasswordGenerator.php");
require_once("../model/Member.php");

class MemberTest extends PHPUnit_Framework_TestCase {
    private $salt, $pass;
    
    protected function setUp() {
        $this->salt = PasswordGenerator::generateSalt();
        $this->pass = PasswordGenerator::hashPassword($salt, "testtest");
    }

    public function testConstructorValid() {
        $member = new Member("warrepeeters@gmail.com", $this->salt, $this->pass, "freemium");

        $this->assertEquals($this->salt, $member->getSalt());
        $this->assertEquals($this->pass, $member->getPassword());
        $this->assertEquals("warrepeeters@gmail.com", $member->getEmail());
        $this->assertEquals("freemium", $member->getAccount());
    }
    
    /**
     * @expectedException InvalidArgumentException
     */
    public function testConstructorEmptyName() {
        $member = new Member("", $this->salt, $this->pass, "warrepeeters@gmail.com", "freemium");
    }
    /**
     * @expectedException InvalidArgumentException
     */
    public function testConstructorEmptySalt() {
        $member = new Member("Test", "", $this->pass, "warrepeeters@gmail.com", "freemium");
    }
    /**
     * @expectedException InvalidArgumentException
     */
    public function testConstructorEmptyPassword() {
        $member = new Member("Test", $this->salt, "", "warrepeeters@gmail.com", "freemium");
    }
    /**
     * @expectedException InvalidArgumentException
     */
    public function testConstructorEmptyEmail() {
        $member = new Member("Test", $this->salt, $this->pass, "", "freemium");
    }
    /**
     * @expectedException InvalidArgumentException
     */
    public function testConstructorInvalidEmail() {
        $member = new Member("Test", $this->salt, $this->pass, "warrepeeters", "freemium");
    }
    /**
     * @expectedException InvalidArgumentException
     */
    public function testConstructorInvalidAccount() {
        $member = new Member("Test", $this->salt, $this->pass, "warrepeeters@gmail.com", "free");
    }
}