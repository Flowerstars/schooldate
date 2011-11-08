{extends file="template.tpl"}

{block name=css}<link href="{$url}/template/css/jquery.fancybox.css" rel="stylesheet" />{/block}

{block name=content}
    <section id="ainbox">
        <aside>
            <header>
                <h1>Messages</h1>
                <div class="right"><a href="#received" id="received" class="active">Recevied</a> <a href="#sent" id="sent">Sent</a></div>
            </header>

            <div>
                <ul>
                {foreach $messages as $message}
                    <li rel="message-{$message->getId()}"><img src="{$url}/template/images/members/{$message->getSender()->getUsername()}/profile-55x55.jpg" alt="{$message->getSender()->getUsername()}" />
                        <p>{$message->getMessage()}</p>
                    </li>
                {foreachelse}
                    <li>Sorry you don't have any messages yet</li>
                {/foreach}
                </ul>
            </div>
            
        </aside>
            
        <section id="mchat">
            <a href="#newmessagebox" title="Click anywhere in the black area to cancel." class="newmessage button">+ New Message</a>
            <div>
                <h1>Messages between you and <span rel="{$member->getUsername()}">{$mchat.0->getSender()->getUsername()}</span></h1>

            {foreach $mchat as $message name=messages}
                <div class="message{if $smarty.foreach.messages.index is odd} right{/if}">
                    <span class="date">{$message->getDate()}</span>
                    <img src="{$url}/template/images/members/{$message->getSender()->getUsername()}/profile-85x85.jpg" width="85" height="85" alt="{$message->getSender()->getUsername()}" />
                    <p><span></span> {$message->getMessage()}</p>
                </div>
            {/foreach}
            </div>

            <a href="#remove" class="remove">Click here to delete all messages between you and this user</a>
            <h2>Reply</h2>
            <form method="post" id="sendmessage">
                <input type="hidden" name="startid" value="{$mchat.0->getId()}" />
                <textarea name="message"></textarea>
                
                <div class="buttons"><input type="submit" value="Submit" class="button" /></div>
            </form>
        </section>
    </section>

<div id="newmessagebox">
    <form id="newmessage" method="post">
        <h2>New Message</h2>
        <div class="colorfix"></div>

        <div><label for="recipient">Recipient</label> <input type="text" name="recipient" id="recipient" autocomplete="false" /></div>
        <div><label for="message">Message:</label> <textarea name="message" id="message"></textarea></div>

        <div class="buttons"><input type="submit" value="Submit" class="button" /></div>
    </form>
{/block}

{block name=javascript}<script src="{$url}/template/js/jquery.fancybox-1.3.4.js"></script><script src="{$url}/template/js/jquery.account.js"></script>{if $userScript}{$userScript}{/if}{/block}