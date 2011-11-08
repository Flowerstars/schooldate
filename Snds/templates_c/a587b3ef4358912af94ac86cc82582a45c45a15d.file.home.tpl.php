<?php /* Smarty version Smarty-3.0.7, created on 2011-09-16 12:45:38
         compiled from "template\home.tpl" */ ?>
<?php /*%%SmartyHeaderCode:82424e7328d258fc24-76596218%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a587b3ef4358912af94ac86cc82582a45c45a15d' => 
    array (
      0 => 'template\\home.tpl',
      1 => 1316169932,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '82424e7328d258fc24-76596218',
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
<div class="wrapper">
    <header class="black">
        <div class="container">
            <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/" class="logo">SchoolDate&trade; connect with students</a>

            <div id="login" class="arial">
                <form action="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/account/home">
                    <div><label for="email">Email:</label> <input type="email" id="email" name="email" />
                        <div class="keeplogin"><input type="checkbox" name="keeplogin" id="keeplogin" value="1" /> <label for="keeplogin">Keep me logged in?</label></div></div>
                    <div><label for="password">Password:</label> <input type="password" id="password" name="password" />
                        <a href="forgotpw">Forgot Password?</a></div>
                    <div class="buttons"><input type="submit" value="Login" /></div>
                </form>
            </div>
        </div>
    </header>

    <div class="container">
        <section class="home">
            <div class="col1">
                <h1>School<span>date</span> helps you find <span>like-minded</span> dates in a whole new, <span>fun</span> way!</h1>
                <img src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/images/schooldate-home.jpg" width="" height="" alt="Schooldate" />
            </div>

            <form action="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/ajax/register" method="post" id="register">
                <h2>Sign <span>up</span></h2>
                <p class="underheader">Signing up is free and takes only a few seconds.</p>

                <div class="border"><label for="sex">I'm a</label> <select name="sex"><option value="male">Male</option><option value="female">Female</option><</select> <label for="interested">interested in</label> <select name="interested"><option value="women">Women</option></select></div>
                <div><label for="username">Username:</label> <input type="text" name="username" id="username" placeholder="enter desired username here" /></div>
                <div><label for="email">Email:</label> <input type="email" name="email" id="email" placeholder="enter your .edu address or you're shit outta luck" /></div>
                <div><label for="password">Password:</label> <input type="password" name="password" id="password" placeholder="enter desired password here" /></div>
                <div><label for="confirm">Confirm:</label> <input type="password" name="confirm" id="confirm" placeholder="confirm password" /></div>

                <div class="buttons"><input type="submit" value="Sign Up" /></div>
                <p class="required">*By signing up, you agree to our <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/terms">Terms of Service</a> &amp; our <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/privacy">Privacy Policy</a></p>

                <h2 class="underline">Sign <span>up using Facebook</span></h2>
                <div id="facebook"></div>
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

<script src="template/js/jquery.login.js"></script>
</body>
</html>