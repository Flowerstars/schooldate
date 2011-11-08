$(function() {
    $('#chat ul a').live('click', function() {
        var name = $(this).text();
        if($(this).attr('href') == '#start') {
            $(this).attr('href', '#open');
            
            openChat(name);
        }else if($(this).attr('href') == '#open') {
            showChat(name);
        }
        
        return false;
    })
    $('#chat div a').live('click', function() {
        var name = $(this).attr('rel');
        if($(this).attr('href') == '#close') {
            $(getFriendAFromList(name)).attr('href', '#start');

            closeChat(name);
        }else if($(this).attr('href') == '#minimize') {
            hideChat(name);
        }
    });
    
    var openChat = function(name) {
        $div = $(document.createElement('div'));
        $div.attr('id', name);
        
        $min = $(document.createElement('a'));
        $min.attr('href', '#minimize');
        $min.text('-');
        $min.attr('rel', name);
        $div.append($min);
        
        $close = $(document.createElement('a'));
        $close.attr('href', '#close');
        $close.text('X');
        $close.attr('rel', name);
        $div.append($close);

        $p = $(document.createElement('p'));
        $p.addClass('title').text('Chat with ' + name);
        $div.append($p);
        
        $chatbox = $(document.createElement('div'));
        $chatbox.addClass('chatbox');
        $div.append($chatbox);

        $('#chat').prepend($div);
    }
    
    var showChat = function(name) {
        $('#'+name).show();
    }
    
    var closeChat = function(name) {
        $('#'+name).remove();
    }
    
    var hideChat = function(name) {
        $('#'+name).find('.chatbox').hide();
    }
    
    var getFriendAFromList = function(name) {
        var list = $('#chat ul a');
        for(var i=0; i<list.length; i++) {
            if(list.eq(i).text() == name) {
                return list.eq(i);
            }
        }
        
        return null;
    }
});