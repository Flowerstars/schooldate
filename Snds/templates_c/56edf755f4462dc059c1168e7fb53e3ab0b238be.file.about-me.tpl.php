<?php /* Smarty version Smarty-3.0.7, created on 2011-08-30 03:10:51
         compiled from "template\account/about-me.tpl" */ ?>
<?php /*%%SmartyHeaderCode:238114e5c389bb9c4e3-98525876%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '56edf755f4462dc059c1168e7fb53e3ab0b238be' => 
    array (
      0 => 'template\\account/about-me.tpl',
      1 => 1314666615,
      2 => 'file',
    ),
    'c71415d2e3c7217f9d09d2cfcf29efd0526c1664' => 
    array (
      0 => 'template\\template.tpl',
      1 => 1314655311,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '238114e5c389bb9c4e3-98525876',
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
        </nav>
    </div>
</header>

<div class="container gray">

    <section id="about-me">
        <aside>
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#description">Description</a></li>
                <li><a href="#pictures">Pictures</a></li>
                <li><a href="#looking-for">Looking for</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </aside>

        <form method="post">
            <div><label for="status">Your Academic Status:</label> <input type="text" name="status" id="status" value="<?php echo $_smarty_tpl->getVariable('status')->value;?>
" /></div>
            <div><label for="university">University:</label> <input type="text" name="university" id="university" value="<?php echo $_smarty_tpl->getVariable('university')->value;?>
" /></div>
            <div><label for="status">Your Academic Status:</label> <input type="text" name="status" id="status" value="<?php echo $_smarty_tpl->getVariable('status')->value;?>
" /></div>
            <div><label for="status">Date of Birth:</label> <input type="date" name="age" id="age" value="<?php echo $_smarty_tpl->getVariable('age')->value;?>
" /></div>

            <div><label for="height">Height:</label> <input type="text" name="height" id="height" value="<?php echo $_smarty_tpl->getVariable('height')->value;?>
" /></div>
            <div><label for="bodytype">Body Type</label> <input type="text" name="bodytype" id="bodytype" value="<?php echo $_smarty_tpl->getVariable('bodytype')->value;?>
" /></div>
            <div><label for="eyecolor">Eye Color</label> <input type="text" name="eyecolor" id="eyecolor" value="<?php echo $_smarty_tpl->getVariable('eyecolor')->value;?>
" /></div>
            <div><label for="haircolor">Hair Color</label> <input type="text" name="haircolor" id="haircolor" value="<?php echo $_smarty_tpl->getVariable('haircolor')->value;?>
" /></div>

            <div><label for="nationality">Nationality</label> <input type="text" name="nationality" id="nationality" value="<?php echo $_smarty_tpl->getVariable('nationality')->value;?>
" /></div>
            <div><label for="ethnicity">Ethnicity</label> <input type="text" name="ethnicity" id="ethnicity" value="<?php echo $_smarty_tpl->getVariable('ethnicity')->value;?>
" /></div>
            <div><label for="politcal">Political View</label> <input type="text" name="politcal" id="politcal" value="<?php echo $_smarty_tpl->getVariable('politcal')->value;?>
" /></div>
            <div><label for="faith">Faith</label> <input type="text" name="faith" id="faith" value="<?php echo $_smarty_tpl->getVariable('faith')->value;?>
" /></div>

            <div><label for="smoking">Smoking</label> <input type="text" name="smoking" id="smoking" value="<?php echo $_smarty_tpl->getVariable('smoking')->value;?>
" /></div>
            <div><label for="drinking">Drinking</label> <input type="text" name="drinking" id="drinking" value="<?php echo $_smarty_tpl->getVariable('drinking')->value;?>
" /></div>
            <div><label for="sunsign">Sun-Sign</label> <input type="text" name="sunsign" id="sunsign" value="<?php echo $_smarty_tpl->getVariable('sunsign')->value;?>
" /></div>

            <div class="buttons"><input type="submit" value="Save" class="save" /></div>
        </form>
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
/template/js/jquery.ajax.js"></script>
</body>
</html>