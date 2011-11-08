<?php
error_reporting(E_ALL & ~E_NOTICE);

$websiteUrl = "http://localhost/snds";

// email options
$adminEmail = "no-reply@coding-tech.com";
$adminName = "No-Reply";

// url
$config['facebookurl'] = "http://www.facebook.com";
$config['twitterurl'] = "http://www.twitter.com";

// local dev
define(LOCAL_DEVELOPMENT, true);

// database options
if(LOCAL_DEVELOPMENT) {
    define(DBHOST, "localhost");
    define(DBNAME, "schooldate");
    define(DBUSER, "root");
    define(DBPASS, "");
    define(DOCUMENT_ROOT, $_SERVER['DOCUMENT_ROOT']."/snds");
    $config['url'] = "/snds";
}else {
    define(DBHOST, "localhost");
    define(DBNAME, "database");
    define(DBUSER, "user");
    define(DBPASS, "password");
    define(DOCUMENT_ROOT, $_SERVER['DOCUMENT_ROOT']);
    $config['url'] = "";
}

// tables
define(TABLE_MEMBERS, "sd_members");
define(TABLE_PROFILES, "sd_profiles");
define(TABLE_PHOTOS, "sd_photos");
define(TABLE_SCHOOLS, "sd_schools");
define(TABLE_FAITHS, "sd_faiths");
define(TABLE_ETHNICITIES, "sd_ethnicities");
define(TABLE_HEIGHTS, "sd_heights");
define(TABLE_WALL, "sd_wall");
define(TABLE_MESSAGES, "sd_messages");
define(TABLE_STATUSSES, "sd_academic");
define(TABLE_SMOKINGS, "sd_smokings");
define(TABLE_DRINKINGS, "sd_drinkings");
define(TABLE_POLITICALS, "sd_politicals");
define(TABLE_HOROSCOPES, "sd_horoscopes");
define(TABLE_NATIONALITIES, "sd_nationalities");
define(TABLE_BODYTYPES, "sd_bodytypes");
define(TABLE_EYECOLORS, "sd_eyecolors");
define(TABLE_HAIRCOLORS, "sd_haircolors");
define(TABLE_BODYTYPES, "sd_bodytypes");
define(TABLE_FREETIMES, "sd_freetimes");
define(TABLE_ADMINSETTINGS, "sd_adminsettings");

// timezone
define(TIMEZONE, "Europe/Brussels");