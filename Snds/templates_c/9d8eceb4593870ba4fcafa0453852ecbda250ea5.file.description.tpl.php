<?php /* Smarty version Smarty-3.0.7, created on 2011-09-28 22:08:29
         compiled from "template\account/description.tpl" */ ?>
<?php /*%%SmartyHeaderCode:87714e81b7014bf4f1-94915748%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '9d8eceb4593870ba4fcafa0453852ecbda250ea5' => 
    array (
      0 => 'template\\account/description.tpl',
      1 => 1317073432,
      2 => 'file',
    ),
    'c71415d2e3c7217f9d09d2cfcf29efd0526c1664' => 
    array (
      0 => 'template\\template.tpl',
      1 => 1317205315,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '87714e81b7014bf4f1-94915748',
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
        
    <section id="adescription" class="youraccount">
        <nav>
            <ul>
                <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/aboutme" class="first">About Me</a></li>
                <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/description" class="active">Description</a></li>
                <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/pictures" class="nextactive">Pictures</a></li>
                <li><a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/settings" class="last">Settings</a></li>
            </ul>
        </nav>

        <div>
            <header>
                <h1>Editing: Description</h1>
            </header>

            <form id="description" method="post">
                <p>This text will be visible on your Profile page. This is a good way to give a quick insight to the kind of person you are &ndash; what you like doing, what your idea of a fun date is &ndash; or whatever it is that you want others to read about you!</p>
                <div><textarea row="5" cols="10" name="description" id="descr"></textarea></div>

                <h2>Stuff that you like doing when you&rsquo;ve the time? Or whenever you don’t have time but couldn’t care less &ndash; You just had to do something!</h2>
                <div class="columns">
                    <div class="col4">
                <?php  $_smarty_tpl->tpl_vars['free'] = new Smarty_Variable;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->getVariable('freetimes')->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['freetime']['index']=-1;
if ($_smarty_tpl->_count($_from) > 0){
    foreach ($_from as $_smarty_tpl->tpl_vars['free']->key => $_smarty_tpl->tpl_vars['free']->value){
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['free']->key;
 $_smarty_tpl->tpl_vars['smarty']->value['foreach']['freetime']['index']++;
?>
                    <?php if ($_smarty_tpl->getVariable('smarty')->value['foreach']['freetime']['index']>0&&$_smarty_tpl->getVariable('smarty')->value['foreach']['freetime']['index']%ceil((count($_smarty_tpl->getVariable('freetimes')->value)/4))==0){?></div><div class="col4"><?php }?>
                        <div><input type="checkbox" name="freetime[]" id="opt-<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['freetime']['index'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['k']->value;?>
"<?php if (in_array($_smarty_tpl->tpl_vars['k']->value,$_smarty_tpl->getVariable('memberFree')->value)){?> checked="checked"<?php }?> /> <label for="opt-<?php echo $_smarty_tpl->getVariable('smarty')->value['foreach']['freetime']['index'];?>
"><?php echo $_smarty_tpl->tpl_vars['free']->value;?>
</label></div>
                <?php }} ?>
                    </div>
                </div>

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