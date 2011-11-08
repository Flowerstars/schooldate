<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>{$title}</title>

<link href="{$url}/template/css/schooldate.css" rel="stylesheet" />
{block name=css}{/block}

<script src="{$url}/template/js/jquery.1.6.1.js"></script>
</head>

<body>
<div class="wrapper">
    <header class="black">
        <div class="container">
            <a href="{$url}/" class="logo">SchoolDate&trade; connect with students</a>

            <nav>
                <ul>
                    <li><a href="{$url}/account/home"{$hactive}>Home</a></li>
                    <li><a href="{$url}/account/profile"{$pactive}>Profile</a></li>
                    <li><a href="{$url}/account/friends"{$factive}>Friends</a></li>
                    <li><a href="{$url}/account/search"{$sactive}>Search</a></li>
                    <li><a href="{$url}/account/inbox"{$iactive}>Inbox</a></li>
                    <li><a href="{$url}/account/chatrooms"{$cactive}>Chatrooms</a></li>
                    <li><a href="{$url}/account/aboutme"{$mactive}>My account</a></li>
                    <li><a href="{$url}/account/date-ideas" class="popular{$dactive}">Date ideas</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container account">
        {block name=content}{/block}

    </div>
    <div class="sticky"></div>
</div>

<footer>
    <div class="container">
        <div>
            <a href="{$url}/" class="logo">SchoolDate&trade;</a>
            <p>&copy; Copyright 2011<br />All rights reserved.</p>
        </div>
        <div class="right">
            <nav>
                <ul>
                    <li><a href="{$url}/about-us">About Us</a></li>
                    <li><a href="{$url}/blog">Blog</a></li>
                    <li><a href="{$url}/terms">Terms of Service</a></li>
                    <li><a href="{$url}/privacy">Privacy Policy</a></li>
                </ul>
           </nav>
           <a href="{$facebookurl}" class="facebook">Facebook</a>
           <a href="{$twitterurl}" class="twitter">Twitter</a>
        </div>
    </div>
</footer>

{block name=javascript}{/block}
</body>
</html>