<?php /* Smarty version Smarty-3.0.7, created on 2011-09-29 12:38:24
         compiled from "template\account/home.tpl" */ ?>
<?php /*%%SmartyHeaderCode:54384e81b7707c8189-36778242%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '01e102bd4de146498e9c47785283350f8fcb7d63' => 
    array (
      0 => 'template\\account/home.tpl',
      1 => 1317123923,
      2 => 'file',
    ),
    'c71415d2e3c7217f9d09d2cfcf29efd0526c1664' => 
    array (
      0 => 'template\\template.tpl',
      1 => 1317254835,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '54384e81b7707c8189-36778242',
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
        
    <section id="ahome">
        <aside>
            <header>
                <h2>Filter <span>Results</span></h2>
                <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/advanced" class="button advanced">Advanced Search</a>
            </header>

            <div>
                <form id="filter">
                <h3>University</h3>
                <div class="column">
            <?php  $_smarty_tpl->tpl_vars['email'] = new Smarty_Variable;
 $_smarty_tpl->tpl_vars['school'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('schools')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['schools']['index']=-1;
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['email']->key => $_smarty_tpl->tpl_vars['email']->value){
 $_smarty_tpl->tpl_vars['school']->value = $_smarty_tpl->tpl_vars['email']->key;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['schools']['index']++;
?>
               <?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['schools']['index']==ceil((count($_smarty_tpl->getVariable('schools')->value)/2))){?></div><div class="column"><?php }?>
                   <div class="item"><input type="checkbox" id="<?php echo $_smarty_tpl->tpl_vars['school']->value;?>
" name="school" value="<?php echo $_smarty_tpl->tpl_vars['school']->value;?>
" checked="checked" /> <label for="<?php echo $_smarty_tpl->tpl_vars['school']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['school']->value;?>
</label></div>
            <?php }} ?>
                </div>

                <h3>Faith</h3>
                <div class="column">
            <?php  $_smarty_tpl->tpl_vars['faith'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('faiths')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['faiths']['index']=-1;
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['faith']->key => $_smarty_tpl->tpl_vars['faith']->value){
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['faiths']['index']++;
?>
               <?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['faiths']['index']==ceil((count($_smarty_tpl->getVariable('faiths')->value)/2))){?></div><div class="column"><?php }?>
                   <div class="item"><input type="checkbox" value="<?php echo $_smarty_tpl->tpl_vars['faith']->value;?>
" name="faith" checked="checked" /> <?php echo $_smarty_tpl->tpl_vars['faith']->value;?>
</div>
            <?php }} ?>
                </div>

                <h3>Height</h3>
                <div><select class="fancy" name="height" id="height">
                        <option value="">Nothing</option>
                    <?php  $_smarty_tpl->tpl_vars['option'] = new Smarty_Variable;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('heightOptions')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['option']->key => $_smarty_tpl->tpl_vars['option']->value){
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['option']->key;
?>
                        <option value="<?php echo $_smarty_tpl->tpl_vars['k']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['option']->value;?>
</option>
                    <?php }} ?>
                    </select>
                </div>

                <h3>Ethnicity</h3>
                <div class="column">
            <?php  $_smarty_tpl->tpl_vars['ethnicity'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('ethnicities')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['ethnicities']['index']=-1;
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['ethnicity']->key => $_smarty_tpl->tpl_vars['ethnicity']->value){
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['ethnicities']['index']++;
?>
               <?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['ethnicities']['index']==ceil((count($_smarty_tpl->getVariable('ethnicities')->value)/2))){?></div><div class="column"><?php }?>
                   <div class="item"><input type="checkbox" value="<?php echo $_smarty_tpl->tpl_vars['ethnicity']->value;?>
" name="ethnicity" checked="checked" /> <?php echo $_smarty_tpl->tpl_vars['ethnicity']->value;?>
</div>
            <?php }} ?>
                </div>
                </form>
            </div>
            <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/acount/advanced" class="button advanced">Advanced Search</a>

            <h2>Suggested <span>Dates</span></h2>
            <div id="suggestions">
            <?php  $_smarty_tpl->tpl_vars['src'] = new Smarty_Variable;
 $_smarty_tpl->tpl_vars['name'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('dates')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['src']->key => $_smarty_tpl->tpl_vars['src']->value){
 $_smarty_tpl->tpl_vars['name']->value = $_smarty_tpl->tpl_vars['src']->key;
?>
                <img src="<?php echo $_smarty_tpl->tpl_vars['src']->value;?>
" alt="<?php echo $_smarty_tpl->tpl_vars['name']->value;?>
" />
             <?php }} ?>
            </div>
            
        </aside>
            
        <section id="updates">
            <h1>Latest <span>Updates</span></h1>

        <?php  $_smarty_tpl->tpl_vars['message'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('messages')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['message']->key => $_smarty_tpl->tpl_vars['message']->value){
?>
            <div class="message">
                <img src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/images/members/<?php echo $_smarty_tpl->getVariable('message')->value->getMember()->getUsername();?>
/profile-85x85.jpg" width="85" height="85" alt="<?php echo $_smarty_tpl->getVariable('message')->value->getMember()->getUsername();?>
" />
                <p class="quote"><span></span> <?php echo $_smarty_tpl->getVariable('message')->value->getMessage();?>
</p>
                <?php if ($_smarty_tpl->getVariable('message')->value->getTag()){?><div class="tag"><span></span> <?php echo $_smarty_tpl->getVariable('message')->value->getTag();?>
</div><?php }?>
            </div>
            <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/message/<?php echo $_smarty_tpl->getVariable('message')->value->getWid();?>
" class="button letsdoit">Lets do it!</a>
        <?php }} ?>
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