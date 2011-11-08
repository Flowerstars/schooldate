{extends file="template.tpl"}

{block name=content}
    <section id="asettings" class="youraccount">
        <nav>
            <ul>
                <li><a href="{$url}/account/aboutme" class="first">About Me</a></li>
                <li><a href="{$url}/account/description" class="">Description</a></li>
                <li><a href="{$url}/account/pictures">Pictures</a></li>
                <li><a href="{$url}/account/settings" class="active last">Settings</a></li>
            </ul>
        </nav>

        <div>
            <header>
                <h1>Editing: Settings</h1>
            </header>

            <form id="settings" method="post">
                <p>You can reactivate it anytime: Next time you sign in, you’ll get all your account back (pictures, and information included). You will not receive any emails: We’ll  encrypt your email address to be sure you won’t receive anything. It will look like you deleted your account from our website (although you wouldn’t be really  deleted).</p>
                <div class="buttons">{if $member->getActive() == 1}<a href="#disable" id="disable-account" class="button disable black">Disable account</a>{else}<a href="#enable" id="enable-account" class="button disable">Enable account</a>{/if}</div>

                <h2>Mail Settings</h2>
                <div><label for="primary">Primary Email</label> <input type="text" name="primary" id="primary" value="{$member->getEmail()}" /></div>
                <div><label for="secondary">Secondary Email</label> <input type="text" name="secondary" id="secondary" value="{$member->getProfile('secondary')}" /></div>

                <h2>Email Notifications</h2>
                <div class="checkbox"><input type="checkbox" value="1" name="newmessage" id="newmessage"{if $member->getProfile('newmessage') == 1} checked="checked"{/if} /> <label for="newmessage">New Messages</label></div>
                <div class="checkbox"><input type="checkbox" value="1" name="latestoffers" id="latestoffers"{if $member->getProfile('latestoffers') == 1} checked="checked"{/if} /> <label for="latestoffers">Latest offers and deals for SD Members only</label></div>

                <h2>Change password</h2>
                <div><label for="current">Current Password</label><input type="text" id="current" name="current" /></div>
                <div><label for="newpass">New Password</label><input type="text" id="newpass" name="newpass" /></div>
                <div><label for="confirm">Confirm Password</label><input type="text" id="confirm" name="confirm" /></div>

                <h2>Search Results on the Site</h2>
                <div class="checkbox"><input type="radio" name="results" value="men" id="malemembers"{if $member->getInterested() == 'men'} checked="checked"{/if} /> <label for="malemembers">Show only MALE members</label></div>
                <div class="checkbox"><input type="radio" name="results" value="women" id="femalemembers"{if $member->getInterested() == 'women'} checked="checked"{/if} /> <label for="femalemembers">Show FEMALE members only</label></div>
                <div class="checkbox"><input type="radio" name="results" value="both" id="bothmembers"{if $member->getInterested() == 'both'} checked="checked"{/if} /> <label for="bothmembers">Show either, I don&rsquo;t care.</label></div>

                <div class="buttons"><input type="submit" value="Save" class="button" /></div>
            </form>
    </section>
{/block}

{block name=javascript}<script src="{$url}/template/js/jquery.account.js"></script>{/block}