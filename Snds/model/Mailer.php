<?php

require_once("includes/phpMailer/smtp.inc.php");
require_once("includes/phpMailer/phpmailer.inc.php");

class Mailer {
    public static $sender;
    public static $senderName;

    public static function send($email, $subject, $body, $html = true) {
        $mailer = new phpmailer();
        
        if($html)
            $body = nl2br($body);

        $mailer->AddAddress($email);
        $mailer->Subject = $subject;
        $mailer->IsHTML($html);
        $mailer->Body = $body;
        
        $mailer->Send();
    }
}