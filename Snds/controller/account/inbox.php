<?php
/* @var $smarty Smarty */
/* @var $member Member */
$messages = $db->getMessagesOfReceiver($member->getMemberid(), 10);
$mchat = $db->getMessagesOfStartId(($messages[0]->getStartid() ? $messages[0]->getStartid() : $messages[0]->getId()));

$smarty->assign("iactive", ' class="iactive"');
$smarty->assign("member", $member);
$smarty->assign("messages", $messages);
$smarty->assign("mchat", $mchat);
if($_GET['id']) {
    $script = "<script>$(function(){createMessageReceiver('".$_GET['id']."');$('.newmessage').trigger('click');});</script>";
    $smarty->assign("userScript", $script);
}