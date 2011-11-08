<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of PDOTester
 *
 * @author Ward
 */
class PDOTester {
    
    public static function showQuery(PDOStatement $statement, Member $member) {
        $query = $statement->queryString;
        $params = explode(":", $query);
        foreach($params as $p) {
            $p = explode(",", $p);
            $query = str_replace(":".$p[0], "'".addslashes($member->getProfile($p[0]))."'", $query);
        }
        
        echo $query;
    }
}

?>
