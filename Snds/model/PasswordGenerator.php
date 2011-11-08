<?php

/**
 * It generates passwords, salts and hashes your password with sha256 algoritme
 *
 * @author Ward
 */
class PasswordGenerator {

    /**
     * Generates a unique salt of 6 characters
     *
     * @param <int> $length Length of the salt, default 6
     * @return <string> salt
     */
    public static function generateSalt($length=6) {
        return substr(md5(uniqid(rand(), true)), 0, $length);
    }

    /**
     * Generates a password of 12 characters
     *
     * @param <int> $length Length of the password, default 12
     * @return <string> password
     */
    public static function generatePassword($length=12) {
        $chars = "0123456789_!@#$%&*()-=+abcdfghjkmnpqrstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_!@#$%&*()-=+/";
        $password = "";
        $counter   = 0;

        while($counter < $length) {
            $actChar = substr($chars, rand(0, strlen($chars)-1), 1);

            // All character must be different
            if(!strstr($password, $actChar)) {
                $password .= $actChar;
                $counter++;
            }
        }

        return $password;
    }

    /**
     * Converts the password + the salt to an hashed password (sha256)
     *
     * @param <string> $salt
     * @param <string> $password
     * @return <string> hashed password
     */
    public static function hashPassword($salt, $password) {
        return hash_hmac("sha256", $password, $salt);
    }
}