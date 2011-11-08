<?php /* Smarty version Smarty-3.0.7, created on 2011-09-29 02:00:09
         compiled from "template\account/settings.tpl" */ ?>
<?php /*%%SmartyHeaderCode:54034e83b509c80302-12545467%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'baf6181647aff7844a8bcfc3b661097e3e82c784' => 
    array (
      0 => 'template\\account/settings.tpl',
      1 => 1317254405,
      2 => 'file',
    ),
    'c71415d2e3c7217f9d09d2cfcf29efd0526c1664' => 
    array (
      0 => 'template\\template.tpl',
      1 => 1317205315,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '54034e83b509c80302-12545467',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
)); /*/%%SmartyHeaderCode%%*/?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title><?php echo $_smarty_tpl->getVariable('title')->value;?>
</title>

<link href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/css/schooldate.css" rel="stylesheet" />

<script src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/js/jquery.1.6.1.js"></script>
</head>

<body>
<div class="wrapper">
    <header class="black">
        <div class="container">
            <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/" class="logo">SchoolDate&trade; connect with students</a>

            <nav>
                <ul>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/home"<?php echo $_smarty_tpl->getVariable('hactive')->value;?>
>Home</a></li>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/profile"<?php echo $_smarty_tpl->getVariable('pactive')->value;?>
>Profile</a></li>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/search"<?php echo $_smarty_tpl->getVariable('sactive')->value;?>
>Search</a></li>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/inbox"<?php echo $_smarty_tpl->getVariable('iactive')->value;?>
>Inbox</a></li>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/chatrooms"<?php echo $_smarty_tpl->getVariable('cactive')->value;?>
>Chatrooms</a></li>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/aboutme"<?php echo $_smarty_tpl->getVariable('mactive')->value;?>
>My account</a></li>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/date-ideas" class="popular<?php echo $_smarty_tpl->getVariable('dactive')->value;?>
">Date ideas</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container account">
        
    <section id="asettings" class="youraccount">
        <nav>
            <ul>
                <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/aboutme" class="first">About Me</a></li>
                <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/description" class="">Description</a></li>
                <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/pictures">Pictures</a></li>
                <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/settings" class="active last">Settings</a></li>
            </ul>
        </nav>

        <div>
            <header>
                <h1>Editing: Settings</h1>
            </header>

            <form id="settings" method="post">
                <p>You can reactivate it anytime: Next time you sign in, you’ll get all your account back (pictures, and information included). You will not receive any emails: We’ll  encrypt your email address to be sure you won’t receive anything. It will look like you deleted your account from our website (although you wouldn’t be really  deleted).</p>
                <div class="buttons"><?php if ($_smarty_tpl->getVariable('member')->value->getActive()==1){?><a href="#disable" id="disable-account" class="button disable black">Disable account</a><?php }else{ ?><a href="#enable" id="enable-account" class="button disable">Enable account</a><?php }?></div>

                <h2>Mail Settings</h2>
                <div><label for="primary">Primary Email</label> <input type="text" name="primary" id="primary" value="<?php echo $_smarty_tpl->getVariable('member')->value->getEmail();?>
" /></div>
                <div><label for="secondary">Secondary Email</label> <input type="text" name="secondary" id="secondary" value="<?php echo $_smarty_tpl->getVariable('member')->value->getProfile('secondary');?>
" /></div>

                <h2>Email Notifications</h2>
                <div class="checkbox"><input type="checkbox" value="1" name="newmessage" id="newmessage"<?php if ($_smarty_tpl->getVariable('member')->value->getProfile('newmessage')==1){?> checked="checked"<?php }?> /> <label for="newmessage">New Messages</label></div>
                <div class="checkbox"><input type="checkbox" value="1" name="latestoffers" id="latestoffers"<?php if ($_smarty_tpl->getVariable('member')->value->getProfile('latestoffers')==1){?> checked="checked"<?php }?> /> <label for="latestoffers">Latest offers and deals for SD Members only</label></div>

                <h2>Change password</h2>
                <div><label for="current">Current Password</label><input type="text" id="current" name="current" /></div>
                <div><label for="newpass">New Password</label><input type="text" id="newpass" name="newpass" /></div>
                <div><label for="confirm">Confirm Password</label><input type="text" id="confirm" name="confirm" /></div>

                <h2>Search Results on the Site</h2>
                <div class="checkbox"><input type="radio" name="results" value="men" id="malemembers"<?php if ($_smarty_tpl->getVariable('member')->value->getInterested()=='men'){?> checked="checked"<?php }?> /> <label for="malemembers">Show only MALE members</label></div>
                <div class="checkbox"><input type="radio" name="results" value="women" id="femalemembers"<?php if ($_smarty_tpl->getVariable('member')->value->getInterested()=='women'){?> checked="checked"<?php }?> /> <label for="femalemembers">Show FEMALE members only</label></div>
                <div class="checkbox"><input type="radio" name="results" value="both" id="bothmembers"<?php if ($_smarty_tpl->getVariable('member')->value->getInterested()=='both'){?> checked="checked"<?php }?> /> <label for="bothmembers">Show either, I don&rsquo;t care.</label></div>

                <div class="buttons"><input type="submit" value="Save" class="button" /></div>
            </form>
    </section>


    </div>
    <div class="sticky"></div>
</div>

<footer>
    <div class="container">
        <div>
            <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/" class="logo">SchoolDate&trade;</a>
            <p>&copy; Copyright 2011<br />All rights reserved.</p>
        </div>
        <div class="right">
            <nav>
                <ul>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/about-us">About Us</a></li>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/blog">Blog</a></li>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/terms">Terms of Service</a></li>
                    <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/privacy">Privacy Policy</a></li>
                </ul>
           </nav>
           <a href="<?php echo $_smarty_tpl->getVariable('facebookurl')->value;?>
" class="facebook">Facebook</a>
           <a href="<?php echo $_smarty_tpl->getVariable('twitterurl')->value;?>
" class="twitter">Twitter</a>
        </div>
    </div>
</footer>

<script src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/js/jquery.account.js"></script>
</body>
</html>