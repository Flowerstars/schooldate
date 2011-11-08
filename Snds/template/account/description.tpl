{extends file="template.tpl"}

{block name=content}
    <section id="adescription" class="youraccount">
        <nav>
            <ul>
                <li><a href="{$url}/account/aboutme" class="first">About Me</a></li>
                <li><a href="{$url}/account/description" class="active">Description</a></li>
                <li><a href="{$url}/account/pictures" class="nextactive">Pictures</a></li>
                <li><a href="{$url}/account/settings" class="last">Settings</a></li>
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
                {foreach $freetimes as $k => $free name=freetime}
                    {if $smarty.foreach.freetime.index  > 0 && $smarty.foreach.freetime.index % ($freetimes|@count / 4)|ceil == 0}</div><div class="col4">{/if}
                        <div><input type="checkbox" name="freetime[]" id="opt-{$smarty.foreach.freetime.index}" value="{$k}"{if $k|in_array:$memberFree} checked="checked"{/if} /> <label for="opt-{$smarty.foreach.freetime.index}">{$free}</label></div>
                {/foreach}
                    </div>
                </div>

                <div class="buttons"><input type="submit" value="Save" class="button" /></div>
            </form>
    </section>
{/block}

{block name=javascript}<script src="{$url}/template/js/jquery.account.js"></script>{/block}