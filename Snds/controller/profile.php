<?php
/* @var $smarty Smarty */

if($_GET['username']) {
    $username = utf8_encode(trim($_GET['username']));
}else {
    $username = $member->getUsername();
}
try {
    $profile = $db->getProfileInfo($username);
    
    // bodytype
    $ft = Func::convertCmToFt($profile['bodytype']);
    $profile['bodytypecm'] = "(".$profile['bodytype'].") cm";
    $profile['bodytypecm'] = $ft[0].'"'.$ft[1]."'";

    $smarty->assign($profile);
    $smarty->display("profile.tpl");
}catch(Exception $e) {
    die($e->getMessage());
}