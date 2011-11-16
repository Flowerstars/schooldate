var url = "";
if(window.location.hostname === "localhost:8888") {
    url = "/schooldate_search/"
}


$(function() {
    $('.fancy').fancySelect();
    $('.fancys').fancySelect({className: 'szSmall'});

    $('#filter input, #filter select').change(function() {
        var $form = $(this).closest('form');
        var postData = "";
        var current;
/*
        $('input:checked').each(function() {
            if($(this).attr('name') == current) {
                postData += ","+$(this).val();
            }else {
                postData += "&"+$(this).attr('name')+"="+$(this).val();
            }
            current = $(this).attr('name');
        });
        postData = postData.substring(1);
        postData += "&height="+$('#height').val();

        $('#updates div, #updates .letsdoit').remove();
        $div = $(document.createElement('div')).addClass('message')
            .append(loading("Loading messages.."));
        $('#updates').append($div);

        $.post(url+'/account/ajax/filter-updates', postData, function($data) {
            try {
                $div.remove();
                if($data.error) {
                    $div = $(document.createElement('div')).addClass('message').append('No messsages found');
                    $('#updates').append($div);
                }else {
                    if(!$data.length) {
                        $div = $(document.createElement('div')).addClass('message').append('No messsages found!');
                        $('#updates').append($div);
                    }
                    $.each($data, function(i, item) {
                        $div = $(document.createElement('div')).addClass('message');
                        $img = $(document.createElement('img'))
                            .attr('src', url + "/template/images/members/" + item.member.username + "/profile-85x85.jpg")
                            .attr('alt', item.member.username);
                        $p = $(document.createElement('p')).addClass('quote');
                        $span = $(document.createElement('span'));
                        $p.append($span).append(item.message);

                        $div.append($img).append($p);
                        $('#updates').append($div);
                    });
                }
            }catch(e) {
                $.jGrowl(e.message, {
                    header: 'Error',
                    theme: 'error'
                });
            }
        });
    });
*/
    $('#received,#sent').click(function() {
        if($(this).hasClass('active')) return false;

        var $elm = $(this);
        $.get(url+'/account/ajax/'+$(this).attr('id')+'-messages', "", function($data) {
            $elm.parent().find('a').removeClass('active');
            $elm.addClass('active');

            $('aside li').remove();
            if(!$data.length) {
                $li = $(document.createElement('li')).append('No messsages found!');
                $('aside ul').append($li);
            }
            $.each($data, function(i, item) {
                $li = $(document.createElement('li')).attr('rel', 'message-' + item.id);
                $img = $(document.createElement('img'))
                    .attr('src', url + "/template/images/members/" + item.sender.username + "/profile-55x55.jpg")
                    .attr('alt', item.sender.username);
                $p = $(document.createElement('p')).append(item.message);

                $li.append($img).append($p);
                $('aside ul').append($li);
            });

            if($data.length) {
                $('.message').remove();
                $span = loading("We are loading the conversation..");
                $('#mchat > div').append($span);

                getConversation($data[0].id);
                $('.loading').remove();
            }
        });

        return false;
    });

    $('#ainbox aside li').click(function() {
        id = $(this).attr('rel').split('-');

        $('.message').remove();
        $span = loading("We are loading the conversation..");
        $('#mchat > div').append($span);

        getConversation(id[1]);
        $('.loading').remove();
    });
    
    function getConversation(id) {
        $.post(url+'/account/ajax/conversation', "id="+id, function($data) {
            if(!$data.length) {
                $div = $(document.createElement('div')).append('No messsages found!');
                $('#mchat > div').append($div);
                $('h1 span').val('');
            }
            $.each($data, function(i, item) {
                $('#mchat > div').append(createMchatMessage(item, i));
            });

            $('h1 span').text(($data[0].sender.username == $('h1 span').attr('rel') ? $data[0].receiver.username : $data[0].sender.username));
        });
    }

    $('#sendmessage').submit(function() {
        $loading = loading('Sending message..');
        $loading.css('float', 'right');
        $('.buttons input').css('float', 'right');
        $('.buttons').append($loading);

        $(this).formSubmit(function(message) {
            if(message) {
                $('#mchat > div').append(createMchatMessage(message, $('.message').length));
                $('.message:last').scrollTop();
            }
        });
        return false;
    });

    $('.slideshow a').click(function() {
        var src = $('img', $(this)).attr('src').replace('60x60', '300x350');
        $('.slideshow').prev().attr('src', src);
    })

    $('#recipient').keyup(function(e) {
        var string = $(this).val();
        var elm = $(this);
        $.post(url+'/account/ajax/getUsernames', 'username='+string, function($data) {
           elm.autocomplete($data);
        });
    });

    $('#aboutme').submit(function() {
        $loading = loading('Saving information..');
        $loading.css('float', 'right');
        $('.buttons input').css('float', 'right');
        $('.buttons').append($loading);

        $(this).formSubmit();
        return false;
    });

    $('#description').submit(function() {
        $loading = loading('Saving information..');
        $loading.css('float', 'right');
        $('.buttons input').css('float', 'right');

        var current, postData;
        postData = "description="+$('#descr', this).val();
        $('input:checked', this).each(function() {
            if($(this).attr('name').indexOf('[]') > -1) {
                if($(this).attr('name') == current) {
                    postData += ","+$(this).val();
                }else {
                    postData += "&"+$(this).attr('name').substring(0, $(this).attr('name').length - 2)+"="+$(this).val();
                }
                current = $(this).attr('name');
            }
        });

        $(this).formSubmit(function() {}, postData);
        return false;
    });
    $('#newmessage').submit(function() {
        $(this).formSubmit(function() {
            $.fancybox.close();
            $('#newmessage ul').remove();
            $('#recipient').val('');
            $('#message').val('');
        });
        
        return false;
    });
    $('#settings').submit(function() {
        $(this).formSubmit();

        return false;
    });
    $('.disable,.enable').click(function() {
        $(this).formSubmit(function(){}, "empty");

        return false;
    });

    if(jQuery.fancybox) {
        $('.newmessage').fancybox({
            onStart: function() {
                $('#newmessagebox').show();
            },
            onClosed: function() {
                $('#newmessagebox').hide();
            }
        })
    }

    jQuery.fn.formSubmit = function(callback, extra) {
        $.post(url+'/account/ajax/'+$(this).attr('id'), (extra ? extra : $(this).serialize()), function($data) {
            try {
                var type = ($data.error ? 'error' : 'success');
                $('.loading').remove();

                $.jGrowl($data[type], {
                    header: type.substring(0,1).toUpperCase() + type.substring(1),
                    theme: type,
                    life: 5000
                });
                if(callback)
                    callback($data.obj);
            }catch(e) {
                $.jGrowl(e.message, {
                    header: 'Error',
                    theme: 'error'
                });
            }
            complete = true;
        });
    };

    jQuery.fn.autocomplete = function(usernames) {
        $(this).parent().find('ul').remove();

        $ul = $(document.createElement('ul'));
        for(i in usernames) {
            $li = $(document.createElement('li'));
            $img = $(document.createElement('img'));
            $img.attr('src', url+'/template/images/members/'+usernames[i]+'/profile-55x55.jpg');
            $img.attr('alt', usernames[i]);
            $li.append($img);
            $li.append(usernames[i]);
            $ul.append($li);

            $li.bind('click', function() {
                var username = $(this).text();

                createMessageReceiver(username);
                $ul.remove();
            })
        }

        $(this).parent().append($ul);
        $(document).click(function() {$ul.remove();});
    }
});
var loading = function(msg) {
    $span = $(document.createElement('span')).addClass('loading').append(msg);

    return $span;
}
var createMchatMessage = function(item, i) {
    $div = $(document.createElement('div')).addClass("message");
    if(i%2==1) $div.addClass("right");
    $date = $(document.createElement('img')).addClass('date').append(item.date);
    $img = $(document.createElement('img'))
        .attr('src', url + "/template/images/members/" + item.sender.username + "/profile-85x85.jpg")
        .attr('alt', item.sender.username);
    $p = $(document.createElement('p')).append(item.message);

    $div.append($date).append($img).append($p);

    return $div;
}
var createMessageReceiver = function(username) {
    $img = $(document.createElement('img'));
    $img.attr('src', url+'/template/images/members/'+username+'/profile-55x55.jpg');
    $img.attr('alt', username);
                
    $a = $(document.createElement('a')).append('Remove');
    $a.addClass('remove');
    $a.bind('click', function() {
        $('#recipient').val('').show();
        $('.recipient').remove();
    })
                
    $div = $(document.createElement('div')).addClass('recipient');
    $div.append($img).append(username).append($a);

    $('#recipient').hide().val(username);
    $('#recipient').parent().append($div);
}

// http://tutorialzine.com/2010/11/better-select-jquery-css3/
jQuery.fn.fancySelect=function(options){
    var settings = {
        'className': 'tzSelect'
    };
    if (options) { 
        $.extend(settings, options);
    }

    $(this).each(function(){
        var select=$(this);
        var selectBoxContainer=$('<div>',{
            html:'<div class="selectBox"></div>'
        }).addClass(settings.className);
        var dropDown=$('<ul>').addClass('dropDown');
        var selectBox = $('.selectBox', selectBoxContainer).text($('option',this).eq(0).text());

        select.find('option').each(function(i){
            var option=$(this);
            if(i==select.prop('selectedIndex')){
                selectBox.html(option.text());
            }
            if(option.hasClass('skip')){
                return true;
            }
            var li=$('<li>',{
                html:option.text()
                });
            li.click(function(){
                selectBox.html(option.text());
                dropDown.trigger('hide');
                select.val(option.val());
                select.trigger("change");
                return false;
            });
            dropDown.append(li);
        });
        selectBoxContainer.append(dropDown.hide());
        select.hide().after(selectBoxContainer);
        dropDown.bind('show',function(){
            if(dropDown.is(':animated')){
                return false;
            }
            selectBox.addClass('expanded');
            dropDown.slideDown();
        }).bind('hide',function(){
            if(dropDown.is(':animated')){
                return false;
            }
            selectBox.removeClass('expanded');
            dropDown.slideUp();
        }).bind('toggle',function(){
            if(selectBox.hasClass('expanded')){
                dropDown.trigger('hide');
            }else dropDown.trigger('show');
        });
        selectBox.click(function(){
            $('.dropDown').trigger('hide');
            dropDown.trigger('toggle');
            return false;
        });
        $(document).click(function(){
            dropDown.trigger('hide');
        });
    });
};

// JGrowl
(function(a){a.jGrowl=function(c,b){if(a("#jGrowl").size()==0)a('<div id="jGrowl"></div>').addClass(b&&b.position?b.position:a.jGrowl.defaults.position).appendTo("body");a("#jGrowl").jGrowl(c,b)};a.fn.jGrowl=function(c,b){if(a.isFunction(this.each)){var e=arguments;return this.each(function(){if(a(this).data("jGrowl.instance")==undefined){a(this).data("jGrowl.instance",a.extend(new a.fn.jGrowl,{notifications:[],element:null,interval:null}));a(this).data("jGrowl.instance").startup(this)}a.isFunction(a(this).data("jGrowl.instance")[c])?a(this).data("jGrowl.instance")[c].apply(a(this).data("jGrowl.instance"),a.makeArray(e).slice(1)):a(this).data("jGrowl.instance").create(c,b)})}};a.extend(a.fn.jGrowl.prototype,{defaults:{pool:0,header:"",group:"",sticky:false,position:"top-right",glue:"after",theme:"default",themeState:"highlight",corners:"10px",check:250,life:3000,closeDuration:"normal",openDuration:"normal",easing:"swing",closer:true,closeTemplate:"&times;",closerTemplate:"<div>[ close all ]</div>",log:function(){},beforeOpen:function(){},afterOpen:function(){},open:function(){},beforeClose:function(){},close:function(){},animateOpen:{opacity:"show"},animateClose:{opacity:"hide"}},notifications:[],element:null,interval:null,create:function(c,b){b=a.extend({},this.defaults,b);if(typeof b.speed!=="undefined"){b.openDuration=b.speed;b.closeDuration=b.speed}this.notifications.push({message:c,options:b});b.log.apply(this.element,[this.element,c,b])},render:function(c){var b=this,e=c.message,d=c.options;c=a('<div class="jGrowl-notification '+d.themeState+" ui-corner-all"+(d.group!=undefined&&d.group!=""?" "+d.group:"")+'"><div class="jGrowl-close">'+d.closeTemplate+'</div><div class="jGrowl-header">'+d.header+'</div><div class="jGrowl-message">'+e+"</div></div>").data("jGrowl",d).addClass(d.theme).children("div.jGrowl-close").bind("click.jGrowl",function(){a(this).parent().trigger("jGrowl.close")}).parent();a(c).bind("mouseover.jGrowl",function(){a("div.jGrowl-notification",b.element).data("jGrowl.pause",true)}).bind("mouseout.jGrowl",function(){a("div.jGrowl-notification",b.element).data("jGrowl.pause",false)}).bind("jGrowl.beforeOpen",function(){d.beforeOpen.apply(c,[c,e,d,b.element])!=false&&a(this).trigger("jGrowl.open")}).bind("jGrowl.open",function(){if(d.open.apply(c,[c,e,d,b.element])!=false){d.glue=="after"?a("div.jGrowl-notification:last",b.element).after(c):a("div.jGrowl-notification:first",b.element).before(c);a(this).animate(d.animateOpen,d.openDuration,d.easing,function(){if(a.browser.msie&&(parseInt(a(this).css("opacity"),10)===1||parseInt(a(this).css("opacity"),10)===0))this.style.removeAttribute("filter");if(a(this).data("jGrowl")!=null)a(this).data("jGrowl").created=new Date;a(this).trigger("jGrowl.afterOpen")})}}).bind("jGrowl.afterOpen",function(){d.afterOpen.apply(c,[c,e,d,b.element])}).bind("jGrowl.beforeClose",function(){d.beforeClose.apply(c,[c,e,d,b.element])!=false&&a(this).trigger("jGrowl.close")}).bind("jGrowl.close",function(){a(this).data("jGrowl.pause",true);a(this).animate(d.animateClose,d.closeDuration,d.easing,function(){if(a.isFunction(d.close))d.close.apply(c,[c,e,d,b.element])!==false&&a(this).remove();else a(this).remove()})}).trigger("jGrowl.beforeOpen");d.corners!=""&&a.fn.corner!=undefined&&a(c).corner(d.corners);a("div.jGrowl-notification:parent",b.element).size()>1&&a("div.jGrowl-closer",b.element).size()==0&&this.defaults.closer!=false&&a(this.defaults.closerTemplate).addClass("jGrowl-closer ui-state-highlight ui-corner-all").addClass(this.defaults.theme).appendTo(b.element).animate(this.defaults.animateOpen,this.defaults.speed,this.defaults.easing).bind("click.jGrowl",function(){a(this).siblings().trigger("jGrowl.beforeClose");a.isFunction(b.defaults.closer)&&b.defaults.closer.apply(a(this).parent()[0],[a(this).parent()[0]])})},update:function(){a(this.element).find("div.jGrowl-notification:parent").each(function(){if(a(this).data("jGrowl")!=undefined&&a(this).data("jGrowl").created!=undefined&&a(this).data("jGrowl").created.getTime()+parseInt(a(this).data("jGrowl").life)<(new Date).getTime()&&a(this).data("jGrowl").sticky!=true&&(a(this).data("jGrowl.pause")==undefined||a(this).data("jGrowl.pause")!=true))a(this).trigger("jGrowl.beforeClose")});if(this.notifications.length>0&&(this.defaults.pool==0||a(this.element).find("div.jGrowl-notification:parent").size()<this.defaults.pool))this.render(this.notifications.shift());a(this.element).find("div.jGrowl-notification:parent").size()<2&&a(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose,this.defaults.speed,this.defaults.easing,function(){a(this).remove()})},startup:function(c){this.element=a(c).addClass("jGrowl").append('<div class="jGrowl-notification"></div>');this.interval=setInterval(function(){a(c).data("jGrowl.instance").update()},parseInt(this.defaults.check));a.browser.msie&&parseInt(a.browser.version)<7&&!window.XMLHttpRequest&&a(this.element).addClass("ie6")},shutdown:function(){a(this.element).removeClass("jGrowl").find("div.jGrowl-notification").remove();clearInterval(this.interval)},close:function(){a(this.element).find("div.jGrowl-notification").each(function(){a(this).trigger("jGrowl.beforeClose")})}});a.jGrowl.defaults=a.fn.jGrowl.prototype.defaults})(jQuery);





