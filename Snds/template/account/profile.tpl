{extends file="template.tpl"}

{block name=content}
    <section id="aprofile">
        <aside>
            <div>
                <img src="{$url}/template/images/members/{$member->getUsername()}/profile-300x350.jpg" width="300" height="350" alt="{$member->getUsername()}" />
                <div class="slideshow">
                    <a href="#"><img src="{$url}/template/images/members/{$member->getUsername()}/profile-60x60.jpg" width="300" height="350" alt="{$member->getUsername()}" /></a>
                    <a href="#"><img src="{$url}/template/images/members/{$member->getUsername()}/{$member->getUsername()}01-60x60.jpg" alt="{$member->getUsername()}" /></a>
                    <a href="#"><img src="{$url}/template/images/members/{$member->getUsername()}/{$member->getUsername()}01-60x60.jpg" alt="{$member->getUsername()}" /></a>
                </div>
            </div>
            <div>
                <h2>My Profile</h2>

                <ul>
                    <li><label for="">Status</label> {$statusses[$member->getProfile('status')]}</li>
                    <li><label for="">University</label> {$member->getProfile('school')}</li>
                    <li><label for="">Age</label> {($smarty.now|date_format: "%Y-%m-%d" - $member->getProfile('dateofbirth')|date_format: "%Y-%m-%d")}</li>
                    <li><label for="">Height</label> {$member->getProfile('height')}</li>
                    <li><label for="">Body Type</label> {$bodytypes[$member->getProfile('bodytype')]}</li>
                    <li><label for="">Eye Color</label> {$eyecolors[$member->getProfile('eyecolor')]}</li>
                    <li><label for="">Hair Color</label> {$haircolors[$member->getProfile('haircolor')]}</li>
                    <li><label for="">Nationality</label> {$nationalities[$member->getProfile('nationality')]}</li>
                    <li><label for="">Ethnicity</label> {$ethnicities[$member->getProfile('ethnicity')]}</li>
                    <li><label for="">Political View</label> {$politicals[$member->getProfile('political')]}</li>
                    <li><label for="">Faith</label> {$faiths[$member->getProfile('faith')]}</li>
                    <li><label for="">Smoking</label> {$smokings[$member->getProfile('smoking')]}</li>
                    <li><label for="">Drinking</label> {$drinkings[$member->getProfile('drinking')]}</li>
                </ul>
        </aside>
            
        <section id="profile">
            <div>
                <h1>{$member->getUsername()}</h1>
                <div class="right">
                    <a href="{$url}/account/inbox/{$member->getUsername()}" class="message">Message</a>
                    <a href="" class="addfriend">Add as friend</a>
                    <a href="" class="chat">Chat</a>
                    <a href="" class="videochat">Video chat</a>
                </div>
            </div>

            <div>
                <h2>Status</h2>
                <div class="message">
                    <p class="quote"><span></span> {$message->getMessage()}</p>
                    <div class="tag"><span></span> {if $message->getTag()}$message->getTag(){else}Name of the event/item here{/if}</div>
                    <a class="button edit">Edit</a>
                </div>
            </div>

            <div>
                <h2>A little about me</h2>
                <p>{$member->getProfile('description')}</p>
            </div>

            <div class="columns">
                <div class="col3">
            {foreach $mfreetimes as $free name=freetime}
                {if $smarty.foreach.freetime.index  > 0 && $smarty.foreach.freetime.index % ($mfreetimes|@count / 3)|ceil == 0}</div><div class="col3">{/if}
                    <div>{$freetimes[$free]}</div>
            {/foreach}
                </div>
            </div>

            <div>
                <div class="right">
                    <a href="{$url}/account/inbox/{$member->getUsername()}" class="message">Message</a>
                    <a href="" class="addfriend">Add as friend</a>
                    <a href="" class="chat">Chat</a>
                    <a href="" class="videochat">Video chat</a>
                </div>
            </div>
        </section>
    </section>
{/block}

{block name=javascript}<script src="{$url}/template/js/jquery.account.js"></script>{/block}