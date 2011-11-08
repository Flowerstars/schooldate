<?php /* Smarty version Smarty-3.0.7, created on 2011-09-29 02:07:58
         compiled from "template\account/profile.tpl" */ ?>
<?php /*%%SmartyHeaderCode:254954e83a0f3e36822-98654806%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '22dd40013a181d3ed1b2414cf096ca0c1528cbfd' => 
    array (
      0 => 'template\\account/profile.tpl',
      1 => 1317249190,
      2 => 'file',
    ),
    'c71415d2e3c7217f9d09d2cfcf29efd0526c1664' => 
    array (
      0 => 'template\\template.tpl',
      1 => 1317254835,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '254954e83a0f3e36822-98654806',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
)); /*/%%SmartyHeaderCode%%*/?>
<?php if (!is_callable('smarty_modifier_date_format')) include 'C:\xampp\htdocs\Snds\includes\smarty\plugins\modifier.date_format.php';
?><!DOCTYPE html>
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
        
    <section id="aprofile">
        <aside>
            <div>
                <img src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/images/members/<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
/profile-300x350.jpg" width="300" height="350" alt="<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
" />
                <div class="slideshow">
                    <a href="#"><img src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/images/members/<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
/profile-60x60.jpg" width="300" height="350" alt="<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
" /></a>
                    <a href="#"><img src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/images/members/<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
/<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
01-60x60.jpg" alt="<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
" /></a>
                    <a href="#"><img src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/images/members/<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
/<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
01-60x60.jpg" alt="<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
" /></a>
                </div>
            </div>
            <div>
                <h2>My Profile</h2>

                <ul>
                    <li><label for="">Status</label> <?php echo $_smarty_tpl->getVariable('statusses')->value[$_smarty_tpl->getVariable('member')->value->getProfile('status')];?>
</li>
                    <li><label for="">University</label> <?php echo $_smarty_tpl->getVariable('member')->value->getProfile('school');?>
</li>
                    <li><label for="">Age</label> <?php echo (smarty_modifier_date_format(time(),"%Y-%m-%d")-smarty_modifier_date_format($_smarty_tpl->getVariable('member')->value->getProfile('dateofbirth'),"%Y-%m-%d"));?>
</li>
                    <li><label for="">Height</label> <?php echo $_smarty_tpl->getVariable('member')->value->getProfile('height');?>
</li>
                    <li><label for="">Body Type</label> <?php echo $_smarty_tpl->getVariable('bodytypes')->value[$_smarty_tpl->getVariable('member')->value->getProfile('bodytype')];?>
</li>
                    <li><label for="">Eye Color</label> <?php echo $_smarty_tpl->getVariable('eyecolors')->value[$_smarty_tpl->getVariable('member')->value->getProfile('eyecolor')];?>
</li>
                    <li><label for="">Hair Color</label> <?php echo $_smarty_tpl->getVariable('haircolors')->value[$_smarty_tpl->getVariable('member')->value->getProfile('haircolor')];?>
</li>
                    <li><label for="">Nationality</label> <?php echo $_smarty_tpl->getVariable('nationalities')->value[$_smarty_tpl->getVariable('member')->value->getProfile('nationality')];?>
</li>
                    <li><label for="">Ethnicity</label> <?php echo $_smarty_tpl->getVariable('ethnicities')->value[$_smarty_tpl->getVariable('member')->value->getProfile('ethnicity')];?>
</li>
                    <li><label for="">Political View</label> <?php echo $_smarty_tpl->getVariable('politicals')->value[$_smarty_tpl->getVariable('member')->value->getProfile('political')];?>
</li>
                    <li><label for="">Faith</label> <?php echo $_smarty_tpl->getVariable('faiths')->value[$_smarty_tpl->getVariable('member')->value->getProfile('faith')];?>
</li>
                    <li><label for="">Smoking</label> <?php echo $_smarty_tpl->getVariable('smokings')->value[$_smarty_tpl->getVariable('member')->value->getProfile('smoking')];?>
</li>
                    <li><label for="">Drinking</label> <?php echo $_smarty_tpl->getVariable('drinkings')->value[$_smarty_tpl->getVariable('member')->value->getProfile('drinking')];?>
</li>
                </ul>
        </aside>
            
        <section id="profile">
            <div>
                <h1><?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
</h1>
                <div class="right">
                    <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/inbox/<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
" class="message">Message</a>
                    <a href="" class="addfriend">Add as friend</a>
                    <a href="" class="chat">Chat</a>
                    <a href="" class="videochat">Video chat</a>
                </div>
            </div>

            <div>
                <h2>Status</h2>
                <div class="message">
                    <p class="quote"><span></span> <?php echo $_smarty_tpl->getVariable('message')->value->getMessage();?>
</p>
                    <div class="tag"><span></span> <?php if ($_smarty_tpl->getVariable('message')->value->getTag()){?>$message->getTag()<?php }else{ ?>Name of the event/item here<?php }?></div>
                    <a class="button edit">Edit</a>
                </div>
            </div>

            <div>
                <h2>A little about me</h2>
                <p><?php echo $_smarty_tpl->getVariable('member')->value->getProfile('description');?>
</p>
            </div>

            <div class="columns">
                <div class="col3">
            <?php  $_smarty_tpl->tpl_vars['free'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('mfreetimes')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['freetime']['index']=-1;
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['free']->key => $_smarty_tpl->tpl_vars['free']->value){
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['freetime']['index']++;
?>
                <?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['freetime']['index']>0&&$_smarty_tpl->getVariable('smarty')->value['foreach']['freetime']['index']%ceil((count($_smarty_tpl->getVariable('mfreetimes')->value)/3))==0){?></div><div class="col3"><?php }?>
                    <div><?php echo $_smarty_tpl->getVariable('freetimes')->value[$_smarty_tpl->tpl_vars['free']->value];?>
</div>
            <?php }} ?>
                </div>
            </div>

            <div>
                <div class="right">
                    <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/inbox/<?php echo $_smarty_tpl->getVariable('member')->value->getUsername();?>
" class="message">Message</a>
                    <a href="" class="addfriend">Add as friend</a>
                    <a href="" class="chat">Chat</a>
                    <a href="" class="videochat">Video chat</a>
                </div>
            </div>
        </section>
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