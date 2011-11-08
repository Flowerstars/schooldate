<?php
/**
 * Description of Function
 *
 * @author Ward
 */
class Func {
    
    public static function convertCmToFt($height) {
        $ft = floor($height / 30.48);
        $in = floor($height % 30.48);
        
        return array($ft, $in);
    }
}
