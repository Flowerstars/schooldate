var url = "";
if(window.location.hostname === "localhost") {
    url = "/snds"
}

$(function() {
    $('select').fancySelect();

    // ajax
    $('#register').submit(function() {
        $loading = loading("Please wait...").css('float', 'right');
        $('.buttons input', this).css('float', 'right');
        $('.buttons', this).append($loading);

        $.post(url+'/ajax/register', $(this).serialize(), function(data) {
            $('.loading').remove();
            $data = $.parseJSON(data);

            var type = ($data.error ? 'error' : 'success');
            $.jGrowl($data[type], {
                header: type.substring(0,1).toUpperCase() + type.substring(1),
                theme: type,
                life: 5000
            });

            if($data.error == undefined) {
                $(':input','#register')
                    .not(':button, :submit, :reset, :hidden')
                    .val('')
                    .removeAttr('checked')
                    .removeAttr('selected');
            }
        });

        return false;
    });
    $('#login form').submit(function() {
        submitHandler(this, "login", "account/home");
        
        return false;
    });
});

var loading = function(msg) {
    $span = $(document.createElement('span')).text(msg).addClass('loading');

    return $span;
}

var submitHandler = function(form, process, url) {
    $.post(window.url+'/ajax/'+process, $(form).serialize(), function(data) {
        $data = $.parseJSON(data);

        ajaxHandler($data, window.url+'/'+url)
    });
}

var ajaxHandler = function(data, url) {
    var type = ($data.error ? 'error' : 'success');
    $.jGrowl($data[type], {
        header: type.substring(0,1).toUpperCase() + type.substring(1),
        theme: type,
        life: 5000
    });

    if(data.error == undefined) {        
        window.location = url;
    }
};

// http://tutorialzine.com/2010/11/better-select-jquery-css3/
jQuery.fn.fancySelect=function(){$(this).each(function(){var select=$(this);var selectBoxContainer=$('<div>',{html:'<div class="selectBox"></div>'}).addClass('tzSelect');var dropDown=$('<ul>').addClass('dropDown');var selectBox=selectBoxContainer.find('.selectBox').text($('option',this).eq(0).text());select.find('option').each(function(i){var option=$(this);if(i==select.attr('selectedIndex')){selectBox.html(option.text());}if(option.data('skip')){return true;}var li=$('<li>',{html:option.text()});li.click(function(){selectBox.html(option.text());dropDown.trigger('hide');select.val(option.val());return false;});dropDown.append(li);});selectBoxContainer.append(dropDown.hide());select.hide().after(selectBoxContainer);dropDown.bind('show',function(){if(dropDown.is(':animated')){return false;}selectBox.addClass('expanded');dropDown.slideDown();}).bind('hide',function(){if(dropDown.is(':animated')){return false;}selectBox.removeClass('expanded');dropDown.slideUp();}).bind('toggle',function(){if(selectBox.hasClass('expanded')){dropDown.trigger('hide');}else dropDown.trigger('show');});selectBox.click(function(){dropDown.trigger('toggle');return false;});$(document).click(function(){dropDown.trigger('hide');});});};

// JGrowl
(function(a){a.jGrowl=function(c,b){if(a("#jGrowl").size()==0)a('<div id="jGrowl"></div>').addClass(b&&b.position?b.position:a.jGrowl.defaults.position).appendTo("body");a("#jGrowl").jGrowl(c,b)};a.fn.jGrowl=function(c,b){if(a.isFunction(this.each)){var e=arguments;return this.each(function(){if(a(this).data("jGrowl.instance")==undefined){a(this).data("jGrowl.instance",a.extend(new a.fn.jGrowl,{notifications:[],element:null,interval:null}));a(this).data("jGrowl.instance").startup(this)}a.isFunction(a(this).data("jGrowl.instance")[c])?a(this).data("jGrowl.instance")[c].apply(a(this).data("jGrowl.instance"),a.makeArray(e).slice(1)):a(this).data("jGrowl.instance").create(c,b)})}};a.extend(a.fn.jGrowl.prototype,{defaults:{pool:0,header:"",group:"",sticky:false,position:"top-right",glue:"after",theme:"default",themeState:"highlight",corners:"10px",check:250,life:3000,closeDuration:"normal",openDuration:"normal",easing:"swing",closer:true,closeTemplate:"&times;",closerTemplate:"<div>[ close all ]</div>",log:function(){},beforeOpen:function(){},afterOpen:function(){},open:function(){},beforeClose:function(){},close:function(){},animateOpen:{opacity:"show"},animateClose:{opacity:"hide"}},notifications:[],element:null,interval:null,create:function(c,b){b=a.extend({},this.defaults,b);if(typeof b.speed!=="undefined"){b.openDuration=b.speed;b.closeDuration=b.speed}this.notifications.push({message:c,options:b});b.log.apply(this.element,[this.element,c,b])},render:function(c){var b=this,e=c.message,d=c.options;c=a('<div class="jGrowl-notification '+d.themeState+" ui-corner-all"+(d.group!=undefined&&d.group!=""?" "+d.group:"")+'"><div class="jGrowl-close">'+d.closeTemplate+'</div><div class="jGrowl-header">'+d.header+'</div><div class="jGrowl-message">'+e+"</div></div>").data("jGrowl",d).addClass(d.theme).children("div.jGrowl-close").bind("click.jGrowl",function(){a(this).parent().trigger("jGrowl.close")}).parent();a(c).bind("mouseover.jGrowl",function(){a("div.jGrowl-notification",b.element).data("jGrowl.pause",true)}).bind("mouseout.jGrowl",function(){a("div.jGrowl-notification",b.element).data("jGrowl.pause",false)}).bind("jGrowl.beforeOpen",function(){d.beforeOpen.apply(c,[c,e,d,b.element])!=false&&a(this).trigger("jGrowl.open")}).bind("jGrowl.open",function(){if(d.open.apply(c,[c,e,d,b.element])!=false){d.glue=="after"?a("div.jGrowl-notification:last",b.element).after(c):a("div.jGrowl-notification:first",b.element).before(c);a(this).animate(d.animateOpen,d.openDuration,d.easing,function(){if(a.browser.msie&&(parseInt(a(this).css("opacity"),10)===1||parseInt(a(this).css("opacity"),10)===0))this.style.removeAttribute("filter");if(a(this).data("jGrowl")!=null)a(this).data("jGrowl").created=new Date;a(this).trigger("jGrowl.afterOpen")})}}).bind("jGrowl.afterOpen",function(){d.afterOpen.apply(c,[c,e,d,b.element])}).bind("jGrowl.beforeClose",function(){d.beforeClose.apply(c,[c,e,d,b.element])!=false&&a(this).trigger("jGrowl.close")}).bind("jGrowl.close",function(){a(this).data("jGrowl.pause",true);a(this).animate(d.animateClose,d.closeDuration,d.easing,function(){if(a.isFunction(d.close))d.close.apply(c,[c,e,d,b.element])!==false&&a(this).remove();else a(this).remove()})}).trigger("jGrowl.beforeOpen");d.corners!=""&&a.fn.corner!=undefined&&a(c).corner(d.corners);a("div.jGrowl-notification:parent",b.element).size()>1&&a("div.jGrowl-closer",b.element).size()==0&&this.defaults.closer!=false&&a(this.defaults.closerTemplate).addClass("jGrowl-closer ui-state-highlight ui-corner-all").addClass(this.defaults.theme).appendTo(b.element).animate(this.defaults.animateOpen,this.defaults.speed,this.defaults.easing).bind("click.jGrowl",function(){a(this).siblings().trigger("jGrowl.beforeClose");a.isFunction(b.defaults.closer)&&b.defaults.closer.apply(a(this).parent()[0],[a(this).parent()[0]])})},update:function(){a(this.element).find("div.jGrowl-notification:parent").each(function(){if(a(this).data("jGrowl")!=undefined&&a(this).data("jGrowl").created!=undefined&&a(this).data("jGrowl").created.getTime()+parseInt(a(this).data("jGrowl").life)<(new Date).getTime()&&a(this).data("jGrowl").sticky!=true&&(a(this).data("jGrowl.pause")==undefined||a(this).data("jGrowl.pause")!=true))a(this).trigger("jGrowl.beforeClose")});if(this.notifications.length>0&&(this.defaults.pool==0||a(this.element).find("div.jGrowl-notification:parent").size()<this.defaults.pool))this.render(this.notifications.shift());a(this.element).find("div.jGrowl-notification:parent").size()<2&&a(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose,this.defaults.speed,this.defaults.easing,function(){a(this).remove()})},startup:function(c){this.element=a(c).addClass("jGrowl").append('<div class="jGrowl-notification"></div>');this.interval=setInterval(function(){a(c).data("jGrowl.instance").update()},parseInt(this.defaults.check));a.browser.msie&&parseInt(a.browser.version)<7&&!window.XMLHttpRequest&&a(this.element).addClass("ie6")},shutdown:function(){a(this.element).removeClass("jGrowl").find("div.jGrowl-notification").remove();clearInterval(this.interval)},close:function(){a(this.element).find("div.jGrowl-notification").each(function(){a(this).trigger("jGrowl.beforeClose")})}});a.jGrowl.defaults=a.fn.jGrowl.prototype.defaults})(jQuery);