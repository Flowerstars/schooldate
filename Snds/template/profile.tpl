{extends file="template.tpl"}

{block name=content}
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
                    <li><label>Last online</label> {$online}</li>
                    <li><label>Status</label> {$status}</li>
                    <li><label>University</label> {$university}</li>
                    <li><label>Age</label> {$age}</li>
                    <li><label>Height</label> {$height}</li>
                    <li><label>Body Type</label> {$bodytypeft} {$bodytypecm}</li>
                    <li><label>Eye Color</label> {$eyecolor}</li>
                    <li><label>Hair Color</label> {$haircolor}</li>
                    <li><label>Nationality</label> {$nationality}</li>
                    <li><label>Ethnicity</label> {$ethnicity}</li>
                    <li><label>Political View</label> {$political}</li>
                    <li><label>Faith</label> {$faith}</li>
                    <li><label>Smoking</label> {$smoking}</li>
                    <li><label>Drinking</label> {$drinking}</li>
                    <li><label>Sun-Sign</label> {$sunsign}</li>
                </ul>
        </aside>
    </section>

{/block}

{block name=javascript}
    <script src="{$url}template/js/chat.js"></script>
{/block}