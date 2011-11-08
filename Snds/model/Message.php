<?php
/**
 * Description of Message
 *
 * @author Ward
 */
class Message {
    public $id, $sender, $receiver, $date, $message, $read, $startid;
    
    public function __construct($sender=0, $receiver=0, $date=null, $message=null, $read=0, $startid=0) {
        $this->setSender($sender);
        $this->setReceiver($receiver);
        $this->setDate($date);
        $this->setMessage($message);
        $this->setRead($read);
        $this->setStartid($startid);
    }
    
    public function getId() {
        return $this->id;
    }
    public function setId($id) {
        $this->id = $id;
    }

    public function getSender() {
        return $this->sender;
    }
    public function setSender($sender) {
        $this->sender = $sender;
    }

    public function getReceiver() {
        return $this->receiver;
    }
    public function setReceiver($receiver) {
        $this->receiver = $receiver;
    }

    public function getDate() {
        return $this->date;
    }
    public function setDate($date) {
        $this->date = $date;
    }

    public function getMessage() {
        return $this->message;
    }
    public function setMessage($message) {
        $this->message = $message;
    }

    public function getRead() {
        return $this->read;
    }
    public function setRead($read) {
        $this->read = $read;
    }

    public function getStartid() {
        return $this->startid;
    }
    public function setStartid($startid) {
        $this->startid = $startid;
    }
}