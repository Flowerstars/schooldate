<?php
/**
 * Description of Member
 *
 * @author Ward
 */
class Wall {
    // need to be public for json
    public $wid, $member, $message, $tag;

    /**
     *
     * @param int $memberid
     * @param string $message
     * @param string $tag
     */
    public function __construct($member = null, $message = null, $tag = null) {
        $this->setMember($member);
        $this->setMessage($message);
        $this->setTag($tag);
    }

    // Getters And Setters
    public function getWid() {
        return $this->wid;
    }
    public function setWid($wid) {
        $this->wid = $wid;
    }

    public function getMember() {
        return $this->member;
    }
    public function setMember($member) {
        $this->member = $member;
    }

    public function getMessage() {
        return $this->message;
    }
    public function setMessage($message) {
        $this->message = $message;
    }

    public function getTag() {
        return $this->tag;
    }
    public function setTag($tag) {
        $this->tag = $tag;
    }
}