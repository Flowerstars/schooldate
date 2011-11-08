<?php
// This is the core of the script which will make sure every requests needed are handled correctly.
session_start();

require_once("config/config.php");
require_once("request_map.php");
require_once("smarty/Smarty.class.php");

// class loader
function class_loader($class) {
    if(file_exists("model/".$class.".php"))
        require_once("model/".$class.".php");
    else
        error_log($class." not found. Make sure the class is in the domain folder.");
}
spl_autoload_register("class_loader");

$smarty = new Smarty();
$smarty->setTemplateDir("template");

$smarty->assign($config);

$db = Database::getInstance("mysql:host=".DBHOST.";dbname=".DBNAME.";", DBUSER, DBPASS);

// member
$member = unserialize($_SESSION['member']);