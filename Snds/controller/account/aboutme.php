<?php
/* @var $smarty Smarty */
/* @var $member Member */
/* @var $db Database */

$smarty->assign("mactive", ' class="mactive"');
$smarty->assign("member", $member);
$smarty->assign("statusses", $db->getStatusses());
$smarty->assign("universities", $db->getSchools());

$smarty->assign("bodytypes", $db->getBodytypes());
$smarty->assign("eyecolors", $db->getEyecolors());
$smarty->assign("haircolors", $db->getHaircolors());

$smarty->assign("nationalities", $db->getNationalities());
$smarty->assign("ethnicities", $db->getEthnicities());
$smarty->assign("politicals", $db->getPoliticals());
$smarty->assign("faiths", $db->getFaiths());

$smarty->assign("smokings", $db->getSmokings());
$smarty->assign("drinkings", $db->getDrinkings());
$smarty->assign("horoscopes", $db->getHoroscopes());