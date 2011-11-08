<?php
/* @var $smarty Smarty */
/* @var $member Member */
/* @var $db Database */

$id = filter_var($_GET['id'], FILTER_SANITIZE_STRING);

if($id) {
    $profilem = $db->getMemberById($id);
    $smarty->assign("member", $profilem);
}else {
    $smarty->assign("member", $member);
}

$smarty->assign("statusses", $db->getStatusses());
$smarty->assign("bodytypes", $db->getBodytypes());
$smarty->assign("eyecolors", $db->getEyecolors());
$smarty->assign("haircolors", $db->getHaircolors());
$smarty->assign("nationalities", $db->getNationalities());
$smarty->assign("ethnicities", $db->getEthnicities());
$smarty->assign("politicals", $db->getPoliticals());
$smarty->assign("faiths", $db->getFaiths());
$smarty->assign("smokings", $db->getSmokings());
$smarty->assign("drinkings", $db->getDrinkings());

$messages = $db->getWallMessagesOfUserid($member->getMemberid(), 1);
$smarty->assign("message", $messages[0]);

$smarty->assign("mfreetimes", explode(";", $member->getProfile('freetime')));
$smarty->assign("freetimes", $db->getFreetimes());