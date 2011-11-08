<?php
/* @var $smarty Smarty */
/* @var $member Member */

$smarty->assign("hactive", ' class="hactive"');
$smarty->assign("schools", $db->getSchools());
$smarty->assign("faiths", $db->getFaiths());
$smarty->assign("ethnicities", $db->getEthnicities());
$smarty->assign("heightOptions", $db->getHeights());
$smarty->assign("messages", $db->getWallMessages(7));