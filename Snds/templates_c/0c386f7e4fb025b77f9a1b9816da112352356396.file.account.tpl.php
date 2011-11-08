<?php /* Smarty version Smarty-3.0.7, created on 2011-08-29 14:36:08
         compiled from "template\account/account.tpl" */ ?>
<?php /*%%SmartyHeaderCode:234334e3d774db99125-35445283%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0c386f7e4fb025b77f9a1b9816da112352356396' => 
    array (
      0 => 'template\\account/account.tpl',
      1 => 1312650305,
      2 => 'file',
    ),
    'c71415d2e3c7217f9d09d2cfcf29efd0526c1664' => 
    array (
      0 => 'template\\template.tpl',
      1 => 1314621364,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '234334e3d774db99125-35445283',
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
<header class="brown">
    <div class="container">
        <a href="<?php echo $_smarty_tpl->getVariable('url')->value;?>
" class="logo">SchoolDate&trade; connect with students</a>
        
        <nav>
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
    </div>
</header>

<div class="container gray">

    <section id="account">
        <aside>
            <div id="profile">
                <a href="#" class="big"><img src="#" width="" height="" alt="" /></a>

                <a href="#" class="small"><img src="#" width="" height="" alt="" /></a>
                <a href="#" class="small"><img src="#" width="" height="" alt="" /></a>
                <a href="#" class="small"><img src="#" width="" height="" alt="" /></a>
                <a href="#" class="small"><img src="#" width="" height="" alt="" /></a>
            </div>
            
            <div id="profile">
                <h2>My Profile</h2>
                <ul>
                    <li><label>Last online</label> <?php echo $_smarty_tpl->getVariable('online')->value;?>
</li>
                    <li><label>Status</label> <?php echo $_smarty_tpl->getVariable('status')->value;?>
</li>
                    <li><label>University</label> <?php echo $_smarty_tpl->getVariable('university')->value;?>
</li>
                    <li><label>Age</label> <?php echo $_smarty_tpl->getVariable('age')->value;?>
</li>
                    <li><label>Height</label> <?php echo $_smarty_tpl->getVariable('height')->value;?>
</li>
                    <li><label>Body Type</label> <?php echo $_smarty_tpl->getVariable('bodytypeft')->value;?>
 <?php echo $_smarty_tpl->getVariable('bodytypecm')->value;?>
</li>
                    <li><label>Eye Color</label> <?php echo $_smarty_tpl->getVariable('eyecolor')->value;?>
</li>
                    <li><label>Hair Color</label> <?php echo $_smarty_tpl->getVariable('haircolor')->value;?>
</li>
                    <li><label>Nationality</label> <?php echo $_smarty_tpl->getVariable('nationality')->value;?>
</li>
                    <li><label>Ethnicity</label> <?php echo $_smarty_tpl->getVariable('ethnicity')->value;?>
</li>
                    <li><label>Political View</label> <?php echo $_smarty_tpl->getVariable('political')->value;?>
</li>
                    <li><label>Faith</label> <?php echo $_smarty_tpl->getVariable('faith')->value;?>
</li>
                    <li><label>Smoking</label> <?php echo $_smarty_tpl->getVariable('smoking')->value;?>
</li>
                    <li><label>Drinking</label> <?php echo $_smarty_tpl->getVariable('drinking')->value;?>
</li>
                    <li><label>Sun-Sign</label> <?php echo $_smarty_tpl->getVariable('sunsign')->value;?>
</li>
                </ul>
        </aside>
    </section>


</div>

<footer>
    <div class="container">
        <div>
            <a href="/" class="logo">SchoolDate&trade;</a>
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
           <a href="#fb" class="facebook">Facebook</a>
           <a href="#tw" class="twitter">Twitter</a>
        </div>
    </div>
</footer>

    <script src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
template/js/chat.js"></script>

<script src="<?php echo $_smarty_tpl->getVariable('url')->value;?>
/template/js/jquery.functions.js"></script>
</body>
</html>