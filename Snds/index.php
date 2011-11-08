<?php
require_once("includes/core.php");

$view = $_GET['view'];

if(!$view) {
    if($member instanceof Member) {
        header("Location: ".$config['url']."/account");
        die();
    }else {
        $view = "home";
    }
}else if(!$request_map[$view])
    $view = "404";

require_once("controller/".$request_map[$view]);