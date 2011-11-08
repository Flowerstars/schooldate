<?php /* Smarty version Smarty-3.0.7, created on 2011-08-05 22:05:52
         compiled from "template\account.tpl" */ ?>
<?php /*%%SmartyHeaderCode:170454e3c4d20e2e5c1-00549913%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0ca60de1acab8aa5dd028aed917622c08d8e441e' => 
    array (
      0 => 'template\\account.tpl',
      1 => 1312574750,
      2 => 'file',
    ),
    'c71415d2e3c7217f9d09d2cfcf29efd0526c1664' => 
    array (
      0 => 'template\\template.tpl',
      1 => 1311323536,
      2 => 'file',
    ),
    '35d951b759a63c8e9b92fd61e32d8f06a21c4595' => 
    array (
      0 => 'template\\chat.tpl',
      1 => 1309981069,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '170454e3c4d20e2e5c1-00549913',
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

<link href="template/css/schooldate.css" rel="stylesheet" />

<script src="template/js/jquery.1.6.1.js"></script>
</head>

<body>
<header class="brown">
    <div id="container">
        <a href="/" class="logo">SchoolDate&trade; connect with students</a>
        <a class="loginBut" href="#login">Login</a>
    </div>
</header>


    <?php if ($_smarty_tpl->getVariable('error')->value){?><div class="error"><?php echo $_smarty_tpl->getVariable('error')->value;?>
</div><?php }?>
    <?php if ($_smarty_tpl->getVariable('success')->value){?><div class="success"><?php echo $_smarty_tpl->getVariable('success')->value;?>
</div><?php }?>

    <form action="/FrameWork/login" method="post">
        <div><label for="email">Email:</label> <input type="text" id="email" name="email" placeholder="Your email" value="<?php echo $_smarty_tpl->getVariable('email')->value;?>
" /></div>
        <div><label for="password">Password:</label> <input type="password" name="password" id="password" placeholder="Your password" value="" /></div>

        <div class="buttons"><input type="submit" id="login" value="Login!" /></div>
    </form>
        
    <?php $_template = new Smarty_Internal_Template("chat.tpl", $_smarty_tpl->smarty, $_smarty_tpl, $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null);
$_template->properties['nocache_hash']  = '170454e3c4d20e2e5c1-00549913';
$_tpl_stack[] = $_smarty_tpl; $_smarty_tpl = $_template;?>
<?php /* Smarty version Smarty-3.0.7, created on 2011-08-05 22:05:53
         compiled from "template\chat.tpl" */ ?>
<div id="chat">
    <ul>
        <li><a href="#start">Ward</a></li>
        <li><a href="#start">Test</a></li>
        <li><a href="#start">Test 2</a></li>
        <li><a href="#start">Wouter</a></li>
        <li><a href="#start">Wilma</a></li>
    </ul>
</div><?php $_smarty_tpl->updateParentVariables(0);?>
<?php /*  End of included template "template\chat.tpl" */ ?>
<?php $_smarty_tpl = array_pop($_tpl_stack);?><?php unset($_template);?>


<footer>
    <div id="container">
        <div>
            <a href="/" class="logo">SchoolDate&trade;</a>
            <p>&copy; Copyright 2011<br />
All rights reserved.</p>
        </div>
        <div class="right">
            <nav>
                <ul>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
           </nav>
           <a href="#fb" class="facebook">Facebook</a>
           <a href="#tw" class="twitter">Twitter</a>
        </div>
    </div>
</footer>
<script src="template/js/cufon.js"></script>
<script src="template/js/fonts/Arial_400.font.js"></script>
<script src="template/js/fonts/Bebas_400.font.js"></script>

    <script src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
template/js/chat.js"></script>

<script src="template/js/jquery.functions.js"></script>
</body>
</html>