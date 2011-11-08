<?php /* Smarty version Smarty-3.0.7, created on 2011-09-29 02:08:06
         compiled from "template\account/inbox.tpl" */ ?>
<?php /*%%SmartyHeaderCode:164734e83a6c3bf1779-65345031%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c007e636e5ec4edec4b7f9b0af25060662d820b6' => 
    array (
      0 => 'template\\account/inbox.tpl',
      1 => 1317250754,
      2 => 'file',
    ),
    'c71415d2e3c7217f9d09d2cfcf29efd0526c1664' => 
    array (
      0 => 'template\\template.tpl',
      1 => 1317254835,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '164734e83a6c3bf1779-65345031',
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
<link href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/css/jquery.fancybox.css" rel="stylesheet" />

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
/account/friends"<?php echo $_smarty_tpl->getVariable('factive')->value;?>
>Friends</a></li>
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
        
    <section id="ainbox">
        <aside>
            <header>
                <h1>Messages</h1>
                <div class="right"><a href="#received" id="received" class="active">Recevied</a> <a href="#sent" id="sent">Sent</a></div>
            </header>

            <div>
                <ul>
                <?php  $_smarty_tpl->tpl_vars['message'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('messages')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['message']->key => $_smarty_tpl->tpl_vars['message']->value){
?>
                    <li rel="message-<?php echo $_smarty_tpl->getVariable('message')->value->getId();?>
"><img src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/images/members/<?php echo $_smarty_tpl->getVariable('message')->value->getSender()->getUsername();?>
/profile-55x55.jpg" alt="<?php echo $_smarty_tpl->getVariable('message')->value->getSender()->getUsername();?>
" />
                        <p><?php echo $_smarty_tpl->getVariable('message')->value->getMessage();?>
</p>
                    </li>
                <?php }} else { ?>
                    <li>Sorry you don't have any messages yet</li>
                <?php } ?>
                </ul>
            </div>
            
        </aside>
            
        <section id="mchat">
            <a href="#newmessagebox" title="Click anywhere in the black area to cancel." class="newmessage button">+ New Message</a>
            <div>
                <h1>Messages between you and <span rel="<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
"><?php echo $_smarty_tpl->getVariable('mchat')->value[0]->getSender()->getUsername();?>
</span></h1>

            <?php  $_smarty_tpl->tpl_vars['message'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('mchat')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['messages']['index']=-1;
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['message']->key => $_smarty_tpl->tpl_vars['message']->value){
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['messages']['index']++;
?>
                <div class="message<?php if ((1 & $_smarty_tpl->getVariable('smarty')->value['foreach']['messages']['index'])){?> right<?php }?>">
                    <span class="date"><?php echo $_smarty_tpl->getVariable('message')->value->getDate();?>
</span>
                    <img src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/images/members/<?php echo $_smarty_tpl->getVariable('message')->value->getSender()->getUsername();?>
/profile-85x85.jpg" width="85" height="85" alt="<?php echo $_smarty_tpl->getVariable('message')->value->getSender()->getUsername();?>
" />
                    <p><span></span> <?php echo $_smarty_tpl->getVariable('message')->value->getMessage();?>
</p>
                </div>
            <?php }} ?>
            </div>

            <a href="#remove" class="remove">Click here to delete all messages between you and this user</a>
            <h2>Reply</h2>
            <form method="post" id="sendmessage">
                <input type="hidden" name="startid" value="<?php echo $_smarty_tpl->getVariable('mchat')->value[0]->getId();?>
" />
                <textarea name="message"></textarea>
                
                <div class="buttons"><input type="submit" value="Submit" class="button" /></div>
            </form>
        </section>
    </section>

<div id="newmessagebox">
    <form id="newmessage" method="post">
        <h2>New Message</h2>
        <div class="colorfix"></div>

        <div><label for="recipient">Recipient</label> <input type="text" name="recipient" id="recipient" autocomplete="false" /></div>
        <div><label for="message">Message:</label> <textarea name="message" id="message"></textarea></div>

        <div class="buttons"><input type="submit" value="Submit" class="button" /></div>
    </form>


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
/template/js/jquery.fancybox-1.3.4.js"></script><script src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/js/jquery.account.js"></script><?php if ($_smarty_tpl->getVariable('userScript')->value){?><?php echo $_smarty_tpl->getVariable('userScript')->value;?>
<?php }?>
</body>
</html>