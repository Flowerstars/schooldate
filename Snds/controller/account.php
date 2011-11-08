<?php
/* @var $smarty Smarty */
$pages = array(
    'home',
    'profile',
    'inbox',
    'aboutme',
    'description',
    'settings',
    'ajax'
);
$page = basename($_GET['page']);

if(!$page) 
    $page = "home";
if(!in_array($page, $pages))
    header("Location: ".$config['url']."/404");
if(!($member instanceof Member))
    header("Location: ".$config['url']."/home");

require_once("controller/account/".$page.".php");

$smarty->display("account/".$page.".tpl");