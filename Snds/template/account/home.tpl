{extends file="template.tpl"}

{block name=content}
    <section id="ahome">
        <aside>
            <header>
                <h2>Filter <span>Results</span></h2>
                <a href="{$url}/account/advanced" class="button advanced">Advanced Search</a>
            </header>

            <div>
                <form id="filter">
                <h3>University</h3>
                <div class="column">
            {foreach $schools as $school => $email name=schools}
               {if $smarty.foreach.schools.index == ($schools|@count / 2)|ceil}</div><div class="column">{/if}
                   <div class="item"><input type="checkbox" id="{$school}" name="school" value="{$school}" checked="checked" /> <label for="{$school}">{$school}</label></div>
            {/foreach}
                </div>

                <h3>Faith</h3>
                <div class="column">
            {foreach $faiths as $faith name=faiths}
               {if $smarty.foreach.faiths.index == ($faiths|@count / 2)|ceil}</div><div class="column">{/if}
                   <div class="item"><input type="checkbox" value="{$faith}" name="faith" checked="checked" /> {$faith}</div>
            {/foreach}
                </div>

                <h3>Height</h3>
                <div><select class="fancy" name="height" id="height">
                        <option value="">Nothing</option>
                    {foreach $heightOptions as $k => $option}
                        <option value="{$k}">{$option}</option>
                    {/foreach}
                    </select>
                </div>

                <h3>Ethnicity</h3>
                <div class="column">
            {foreach $ethnicities as $ethnicity name=ethnicities}
               {if $smarty.foreach.ethnicities.index == ($ethnicities|@count / 2)|ceil}</div><div class="column">{/if}
                   <div class="item"><input type="checkbox" value="{$ethnicity}" name="ethnicity" checked="checked" /> {$ethnicity}</div>
            {/foreach}
                </div>
                </form>
            </div>
            <a href="{$url}/acount/advanced" class="button advanced">Advanced Search</a>

            <h2>Suggested <span>Dates</span></h2>
            <div id="suggestions">
            {foreach $dates as $name => $src}
                <img src="{$src}" alt="{$name}" />
             {/foreach}
            </div>
            
        </aside>
            
        <section id="updates">
            <h1>Latest <span>Updates</span></h1>

        {foreach $messages as $message}
            <div class="message">
                <img src="{$url}/template/images/members/{$message->getMember()->getUsername()}/profile-85x85.jpg" width="85" height="85" alt="{$message->getMember()->getUsername()}" />
                <p class="quote"><span></span> {$message->getMessage()}</p>
                {if $message->getTag()}<div class="tag"><span></span> {$message->getTag()}</div>{/if}
            </div>
            <a href="{$url}/account/message/{$message->getWid()}" class="button letsdoit">Lets do it!</a>
        {/foreach}
    </section>

{/block}

{block name=javascript}<script src="{$url}/template/js/jquery.account.js"></script>{/block}