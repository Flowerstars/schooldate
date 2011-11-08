{extends file="template.tpl"}

{block name=content}
    <section id="aabout" class="youraccount">
        <nav>
            <ul>
                <li><a href="{$url}/account/aboutme" class="first active">About Me</a></li>
                <li><a href="{$url}/account/description" class="nextactive">Description</a></li>
                <li><a href="{$url}/account/pictures">Pictures</a></li>
                <li><a href="{$url}/account/settings" class="last">Settings</a></li>
            </ul>
        </nav>

        <div>
            <header>
                <h1>Editing: About Me</h1>
            </header>

            <form id="aboutme" method="post">
                <fieldset>
                    <div><label for="status">Your Academic Status</label> <select name="status" class="fancy">{foreach $statusses as $k => $status}<option value="{$k}"{if $k == $member->getProfile('status')} selected="selected"{/if}>{$status}</option>{/foreach}</select></div>
                    <div><label for="university">University</label> <select name="university" class="fancy">{foreach $universities as $k => $university}<option value="{$k}"{if $k == $member->getProfile('university')} selected="selected"{/if}>{$k}</option>{/foreach}</select></div>
                    <div><label for="dateofbirth">Date of Birth</label> <select name="day" class="fancys"><option value="" class="skip">Day</option>{section loop=30 name=day start=1}<option value="{$smarty.section.day.index}"{if $member->getProfile('dateofbirth')|date_format:'%d' == $smarty.section.day.index} selected="selected"{/if}>{$smarty.section.day.index}</option>{/section}</select> <select name="month" class="fancys"><option value="" class="skip">Month</option>{section loop=12 name=month start=1}<option value="{$smarty.section.month.index}"{if $member->getProfile('dateofbirth')|date_format:'%m' == $smarty.section.month.index} selected="selected"{/if}>{$smarty.section.month.index}</option>{/section}</select> <select name="year" class="fancys"><option value="" class="skip">Year</option>{section loop=2012 name=year start=1960}<option value="{$smarty.section.year.index}"{if $member->getProfile('dateofbirth')|date_format:'%Y' == $smarty.section.year.index} selected="selected"{/if}>{$smarty.section.year.index}</option>{/section}</select></div>
                </fieldset>

                <h2>Physical Attributes</h2>
                <fieldset>
                    <div><label for="height">Height</label> <input type="text" name="height" id="height" value="{$member->getProfile('height')}" /></div>
                    <div><label for="bodytype">Body Type </label> <select name="bodytype" class="fancy">{foreach $bodytypes as $k => $bodytype}<option value="{$k}"{if $k == $member->getProfile('bodytype')} selected="selected"{/if}>{$bodytype}</option>{/foreach}</select></div>
                    <div><label for="eyecolor">Eye Color</label> <select name="eyecolor" class="fancy">{foreach $eyecolors as $k => $eyecolor}<option value="{$k}"{if $k == $member->getProfile('eyecolor')} selected="selected"{/if}>{$eyecolor}</option>{/foreach}</select></div>
                    <div><label for="haircolor">Hair Color</label> <select name="haircolor" class="fancy">{foreach $haircolors as $k => $haircolor}<option value="{$k}"{if $k == $member->getProfile('haircolor')} selected="selected"{/if}>{$haircolor}</option>{/foreach}</select></div>
                </fieldset>

                <h2>Background</h2>
                <fieldset>
                    <div><label for="nationality">Nationality</label> <select name="nationality" class="fancy">{foreach $nationalities as $k => $nationality}<option value="{$k}"{if $k == $member->getProfile('nationality')} selected="selected"{/if}>{$nationality}</option>{/foreach}</select></div>
                    <div><label for="ethnicity">Ethnicity</label> <select name="ethnicity" class="fancy">{foreach $ethnicities as $k => $ethnicity}<option value="{$k}"{if $k == $member->getProfile('ethnicity')} selected="selected"{/if}>{$ethnicity}</option>{/foreach}</select></div>
                    <div><label for="political">Political View</label> <select name="political" class="fancy">{foreach $politicals as $k => $political}<option value="{$k}"{if $k == $member->getProfile('political')} selected="selected"{/if}>{$political}</option>{/foreach}</select></div>
                    <div><label for="faith">Faith</label> <select name="faith" class="fancy">{foreach $faiths as $k => $faith}<option value="{$k}"{if $k == $member->getProfile('faith')} selected="selected"{/if}>{$faith}</option>{/foreach}</select></div>
                </fieldset>

                <h2>Habits</h2>
                <fieldset>
                    <div><label for="smoking">Smoking</label> <select name="smoking" class="fancy">{foreach $smokings as $k => $smoking}<option value="{$k}"{if $k == $member->getProfile('smoking')} selected="selected"{/if}>{$smoking}</option>{/foreach}</select></div>
                    <div><label for="drinking">Drinking</label> <select name="drinking" class="fancy">{foreach $drinkings as $k => $drinking}<option value="{$k}"{if $k == $member->getProfile('drinking')} selected="selected"{/if}>{$drinking}</option>{/foreach}</select></div>
                    <div><label for="horoscope">Horoscope</label> <select name="horoscope" class="fancy">{foreach $horoscopes as $k => $horoscope}<option value="{$k}"{if $k == $member->getProfile('horoscope')} selected="selected"{/if}>{$horoscope}</option>{/foreach}</select></div>
                </fieldset>

                <div class="buttons"><input type="submit" value="Save" class="button" /></div>
            </form>
    </section>
{/block}

{block name=javascript}<script src="{$url}/template/js/jquery.account.js"></script>{/block}