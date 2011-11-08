<?php
/* @var $smarty Smarty */
/* @var $member Member */
/* @var $db Database */

$smarty->assign("mactive", ' class="mactive"');
$smarty->assign("member", $member);
$smarty->assign("freetimes", $db->getFreetimes());
$smarty->assign("memberFree", explode(";", $member->getProfile("freetime")));