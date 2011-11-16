$(window).scroll(function(){
var scounter = 1000;
//var height = $(window).height();
//var scrollTop = $(window).scrollTop();
//alert(height);
// if  ($(window).scrollTop() > scounter){
  if  ($(window).scrollTop() == $(document).height() - $(window).height()){
 //   alert("bottom of page!");
 //   $('.message').remove();
 //////////////////////////////// start of ajax php call
 setTimeout(function() {
 ///////////////////////////////
 var $myq2 = $('input#q').val();

 
$(function() {

var ID;

ID = window.myUserID;

if(ID != '')
{
/////////////////////////////////////////////////////
/*
        request = $.getJSON("ajax_more.php",{
            q:$myq2, lastmsg: window.myUserID
        },function(data){           
            showResults(data,$myq2);
            runningRequest=false;
        });
*/
///////////////////////////////////////////////////////
var $myq2 = $('input#q').val();
var checklen = $("input[type=checkbox]:checked").length;

var checkunilen = $("input:checkbox[name=school]:checked").length;
var checkfaithlen = $("input:checkbox[name=faith]:checked").length;
var checkethnilen = $("input:checkbox[name=ethnicity]:checked").length;
//alert(checklen);
setTimeout(function() {
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen == 0) { // start of uni block
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni.php", {selected: selected, q:$myq2, lastmsg: window.myUserID },
        function(data){
            showResults(data,selected);
            runningRequest=false;
        }); 
        
        function showResults(data, highlight){
           var resultHtml = '';
            $.each(data, function(i,item){
resultHtml+='<ul class="clip_stream uploaded_list">';
resultHtml+='<li class="clip">';
resultHtml+='<a onclick="#" href="#">';
resultHtml+='<img class="thumbnail" width="85" height="85" alt="" src="profile_img/'+item.imgpath+'">';
resultHtml+='</a>';
resultHtml+='<div class="digest">';
resultHtml+='<h3 class="title">';
resultHtml+='<a onclick="#" href="#">'+item.title+'</a>';
resultHtml+='</h3>';
resultHtml+='<div class="description">&#8220;'+item.content+'&#8221;</div>';
resultHtml+='<div class="byline">';
resultHtml+=' 11 days ago';
resultHtml+='</div>';
resultHtml+='<div class="stats">';
resultHtml+='<span class="plays">'+item.user_university+'</span>';
resultHtml+='<span class="plays">'+item.user_faith+'</span>';
resultHtml+='<span class="plays">'+item.user_height+'</span>';
resultHtml+='<span class="plays">'+item.user_ethnicity+'</span>';
resultHtml+='</div>';
resultHtml+='</div>';
resultHtml+='<div class="clear"></div>';
resultHtml+='</li>';
resultHtml+='</ul>';
                window.myUserID = item.msg_id;
                
            });
            
            			if(resultHtml == ''){
			    resultHtml+='<div class="clip_stream uploaded_list">';
                resultHtml+='<div style="word-wrap:break-word;"><p class="nofound" style=padding-top:.33em>Your search - <b style="background-color:#FCFFA3">'+$myq2+'</b> - did not match any documents.  <p class="nofound" style=margin-top:1em>Suggestions:<ul style="margin:0 0 2em;margin-left:1.3em"><li><p class="nofound">&rarr; Make sure all words are spelled correctly.</p><li><p class="nofound">&rarr; Try a different set of filters.</p><li><p class="nofound">&rarr; Try more general keywords.</p></ul></div>';
                
                resultHtml+='</div>';
			}

            
    $(resultHtml).find('img').batchImageLoad({
    loadingCompleteCallback: myCallback
    });
        
        function myCallback() {
								$('div#mystuff_insides').append(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
				
				//$('section#updates').html("<div class='message' id='spinner'><img src='loading.gif' /></div>");
							}
            }


} ///////////// end of uni block
	}, 250);
///////////////////////// start of zero checked block
//else {
setTimeout(function() {
if(checklen == 0) {
//$('.message').remove();
//alert("clicked and zero checked!");
$myq2 = $('input#q').val();

if($myq2 == '' || $myq2.substring(0, 1) == " "){
            $('div#mystuff_insides').html('');
            $('.clip_stream uploaded_list').remove();
            $("#mystuff").hide();
        }

   request = $.getJSON("search.php", {q:$myq2, lastmsg: window.myUserID },
        function(data){
            showResults(data,$myq2);
            runningRequest=false;
        }); 
        
        function showResults(data, highlight){
           var resultHtml = '';
            $.each(data, function(i,item){
resultHtml+='<ul class="clip_stream uploaded_list">';
resultHtml+='<li class="clip">';
resultHtml+='<a onclick="#" href="#">';
resultHtml+='<img class="thumbnail" width="85" height="85" alt="" src="profile_img/'+item.imgpath+'">';
resultHtml+='</a>';
resultHtml+='<div class="digest">';
resultHtml+='<h3 class="title">';
resultHtml+='<a onclick="#" href="#">'+item.title+'</a>';
resultHtml+='</h3>';
resultHtml+='<div class="description">&#8220;'+item.content+'&#8221;</div>';
resultHtml+='<div class="byline">';
resultHtml+=' 11 days ago';
resultHtml+='</div>';
resultHtml+='<div class="stats">';
resultHtml+='<span class="plays">'+item.user_university+'</span>';
resultHtml+='<span class="plays">'+item.user_faith+'</span>';
resultHtml+='<span class="plays">'+item.user_height+'</span>';
resultHtml+='<span class="plays">'+item.user_ethnicity+'</span>';
resultHtml+='</div>';
resultHtml+='</div>';
resultHtml+='<div class="clear"></div>';
resultHtml+='</li>';
resultHtml+='</ul>';
                window.myUserID = item.msg_id;
                

                
            });
            
            			if(resultHtml == ''){
			    resultHtml+='<div class="clip_stream uploaded_list">';
                resultHtml+='<div style="word-wrap:break-word;"><p class="nofound" style=padding-top:.33em>Your search - <b style="background-color:#FCFFA3">'+$myq2+'</b> - did not match any documents.  <p class="nofound" style=margin-top:1em>Suggestions:<ul style="margin:0 0 2em;margin-left:1.3em"><li><p class="nofound">&rarr; Make sure all words are spelled correctly.</p><li><p class="nofound">&rarr; Try a different set of filters.</p><li><p class="nofound">&rarr; Try more general keywords.</p></ul></div>';
                
                resultHtml+='</div>';
			}

            
    $(resultHtml).find('img').batchImageLoad({
    loadingCompleteCallback: myCallback
    });
        
        function myCallback() {
				$('div#mystuff_insides').append(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
				
							}
            }

} //end of else
/////////////////// end of zero checked block
	}, 250);
//////////////// start of faith block
setTimeout(function() {
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen == 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith.php", {selected: selected, q:$myq2, lastmsg: window.myUserID },
        function(data){
            showResults(data,selected);
            runningRequest=false;
        }); 
        
        function showResults(data, highlight){
           var resultHtml = '';
            $.each(data, function(i,item){
resultHtml+='<ul class="clip_stream uploaded_list">';
resultHtml+='<li class="clip">';
resultHtml+='<a onclick="#" href="#">';
resultHtml+='<img class="thumbnail" width="85" height="85" alt="" src="profile_img/'+item.imgpath+'">';
resultHtml+='</a>';
resultHtml+='<div class="digest">';
resultHtml+='<h3 class="title">';
resultHtml+='<a onclick="#" href="#">'+item.title+'</a>';
resultHtml+='</h3>';
resultHtml+='<div class="description">&#8220;'+item.content+'&#8221;</div>';
resultHtml+='<div class="byline">';
resultHtml+=' 11 days ago';
resultHtml+='</div>';
resultHtml+='<div class="stats">';
resultHtml+='<span class="plays">'+item.user_university+'</span>';
resultHtml+='<span class="plays">'+item.user_faith+'</span>';
resultHtml+='<span class="plays">'+item.user_height+'</span>';
resultHtml+='<span class="plays">'+item.user_ethnicity+'</span>';
resultHtml+='</div>';
resultHtml+='</div>';
resultHtml+='<div class="clear"></div>';
resultHtml+='</li>';
resultHtml+='</ul>';
                window.myUserID = item.msg_id;
                
            });
            
            			if(resultHtml == ''){
			    resultHtml+='<div class="clip_stream uploaded_list">';
                resultHtml+='<div style="word-wrap:break-word;"><p class="nofound" style=padding-top:.33em>Your search - <b style="background-color:#FCFFA3">'+$myq2+'</b> - did not match any documents.  <p class="nofound" style=margin-top:1em>Suggestions:<ul style="margin:0 0 2em;margin-left:1.3em"><li><p class="nofound">&rarr; Make sure all words are spelled correctly.</p><li><p class="nofound">&rarr; Try a different set of filters.</p><li><p class="nofound">&rarr; Try more general keywords.</p></ul></div>';
                
                resultHtml+='</div>';
			}

            
    $(resultHtml).find('img').batchImageLoad({
    loadingCompleteCallback: myCallback
    });
        
        function myCallback() {
								$('div#mystuff_insides').append(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 

//////////////// end of faith block
	}, 250);
//////////////// start of ethni block
setTimeout(function() {
if(checkunilen == 0 && checkfaithlen == 0 && checkethnilen > 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_ethni.php", {selected: selected, q:$myq2, lastmsg: window.myUserID },
        function(data){
            showResults(data,selected);
            runningRequest=false;
        }); 
        
        function showResults(data, highlight){
           var resultHtml = '';
            $.each(data, function(i,item){
resultHtml+='<ul class="clip_stream uploaded_list">';
resultHtml+='<li class="clip">';
resultHtml+='<a onclick="#" href="#">';
resultHtml+='<img class="thumbnail" width="85" height="85" alt="" src="profile_img/'+item.imgpath+'">';
resultHtml+='</a>';
resultHtml+='<div class="digest">';
resultHtml+='<h3 class="title">';
resultHtml+='<a onclick="#" href="#">'+item.title+'</a>';
resultHtml+='</h3>';
resultHtml+='<div class="description">&#8220;'+item.content+'&#8221;</div>';
resultHtml+='<div class="byline">';
resultHtml+=' 11 days ago';
resultHtml+='</div>';
resultHtml+='<div class="stats">';
resultHtml+='<span class="plays">'+item.user_university+'</span>';
resultHtml+='<span class="plays">'+item.user_faith+'</span>';
resultHtml+='<span class="plays">'+item.user_height+'</span>';
resultHtml+='<span class="plays">'+item.user_ethnicity+'</span>';
resultHtml+='</div>';
resultHtml+='</div>';
resultHtml+='<div class="clear"></div>';
resultHtml+='</li>';
resultHtml+='</ul>';
                window.myUserID = item.msg_id;
                
            });
            
            			if(resultHtml == ''){
			    resultHtml+='<div class="clip_stream uploaded_list">';
                resultHtml+='<div style="word-wrap:break-word;"><p class="nofound" style=padding-top:.33em>Your search - <b style="background-color:#FCFFA3">'+$myq2+'</b> - did not match any documents.  <p class="nofound" style=margin-top:1em>Suggestions:<ul style="margin:0 0 2em;margin-left:1.3em"><li><p class="nofound">&rarr; Make sure all words are spelled correctly.</p><li><p class="nofound">&rarr; Try a different set of filters.</p><li><p class="nofound">&rarr; Try more general keywords.</p></ul></div>';
                
                resultHtml+='</div>';
			}

            
    $(resultHtml).find('img').batchImageLoad({
    loadingCompleteCallback: myCallback
    });
        
        function myCallback() {
								$('div#mystuff_insides').append(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 

///////////////// end of ethni block
	}, 250);
/////////////////////// start of uni ethni block
setTimeout(function() {
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen > 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_ethni.php", {selected: selected, q:$myq2, lastmsg: window.myUserID },
        function(data){
            showResults(data,selected);
            runningRequest=false;
        }); 
        
        function showResults(data, highlight){
           var resultHtml = '';
            $.each(data, function(i,item){
resultHtml+='<ul class="clip_stream uploaded_list">';
resultHtml+='<li class="clip">';
resultHtml+='<a onclick="#" href="#">';
resultHtml+='<img class="thumbnail" width="85" height="85" alt="" src="profile_img/'+item.imgpath+'">';
resultHtml+='</a>';
resultHtml+='<div class="digest">';
resultHtml+='<h3 class="title">';
resultHtml+='<a onclick="#" href="#">'+item.title+'</a>';
resultHtml+='</h3>';
resultHtml+='<div class="description">&#8220;'+item.content+'&#8221;</div>';
resultHtml+='<div class="byline">';
resultHtml+=' 11 days ago';
resultHtml+='</div>';
resultHtml+='<div class="stats">';
resultHtml+='<span class="plays">'+item.user_university+'</span>';
resultHtml+='<span class="plays">'+item.user_faith+'</span>';
resultHtml+='<span class="plays">'+item.user_height+'</span>';
resultHtml+='<span class="plays">'+item.user_ethnicity+'</span>';
resultHtml+='</div>';
resultHtml+='</div>';
resultHtml+='<div class="clear"></div>';
resultHtml+='</li>';
resultHtml+='</ul>';
                window.myUserID = item.msg_id;
                
            });
            
            			if(resultHtml == ''){
			    resultHtml+='<div class="clip_stream uploaded_list">';
                resultHtml+='<div style="word-wrap:break-word;"><p class="nofound" style=padding-top:.33em>Your search - <b style="background-color:#FCFFA3">'+$myq2+'</b> - did not match any documents.  <p class="nofound" style=margin-top:1em>Suggestions:<ul style="margin:0 0 2em;margin-left:1.3em"><li><p class="nofound">&rarr; Make sure all words are spelled correctly.</p><li><p class="nofound">&rarr; Try a different set of filters.</p><li><p class="nofound">&rarr; Try more general keywords.</p></ul></div>';
                
                resultHtml+='</div>';
			}

            
    $(resultHtml).find('img').batchImageLoad({
    loadingCompleteCallback: myCallback
    });
        
        function myCallback() {
								$('div#mystuff_insides').append(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 
/////////////////////// end of uni ethni block
	}, 250);
//////////////////////// start of uni faith block
setTimeout(function() {
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen == 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_faith.php", {selected: selected, q:$myq2, lastmsg: window.myUserID },
        function(data){
            showResults(data,selected);
            runningRequest=false;
        }); 
        
        function showResults(data, highlight){
           var resultHtml = '';
            $.each(data, function(i,item){
resultHtml+='<ul class="clip_stream uploaded_list">';
resultHtml+='<li class="clip">';
resultHtml+='<a onclick="#" href="#">';
resultHtml+='<img class="thumbnail" width="85" height="85" alt="" src="profile_img/'+item.imgpath+'">';
resultHtml+='</a>';
resultHtml+='<div class="digest">';
resultHtml+='<h3 class="title">';
resultHtml+='<a onclick="#" href="#">'+item.title+'</a>';
resultHtml+='</h3>';
resultHtml+='<div class="description">&#8220;'+item.content+'&#8221;</div>';
resultHtml+='<div class="byline">';
resultHtml+=' 11 days ago';
resultHtml+='</div>';
resultHtml+='<div class="stats">';
resultHtml+='<span class="plays">'+item.user_university+'</span>';
resultHtml+='<span class="plays">'+item.user_faith+'</span>';
resultHtml+='<span class="plays">'+item.user_height+'</span>';
resultHtml+='<span class="plays">'+item.user_ethnicity+'</span>';
resultHtml+='</div>';
resultHtml+='</div>';
resultHtml+='<div class="clear"></div>';
resultHtml+='</li>';
resultHtml+='</ul>';
                window.myUserID = item.msg_id;
                
            });
            
            			if(resultHtml == ''){
			    resultHtml+='<div class="clip_stream uploaded_list">';
                resultHtml+='<div style="word-wrap:break-word;"><p class="nofound" style=padding-top:.33em>Your search - <b style="background-color:#FCFFA3">'+$myq2+'</b> - did not match any documents.  <p class="nofound" style=margin-top:1em>Suggestions:<ul style="margin:0 0 2em;margin-left:1.3em"><li><p class="nofound">&rarr; Make sure all words are spelled correctly.</p><li><p class="nofound">&rarr; Try a different set of filters.</p><li><p class="nofound">&rarr; Try more general keywords.</p></ul></div>';
                
                resultHtml+='</div>';
			}

            
    $(resultHtml).find('img').batchImageLoad({
    loadingCompleteCallback: myCallback
    });
        
        function myCallback() {
								$('div#mystuff_insides').append(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 
///////////////////////// end of uni faith block
	}, 250);
//////////////////////// start of faith ethni block
setTimeout(function() {
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen > 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith_ethni.php", {selected: selected, q:$myq2, lastmsg: window.myUserID },
        function(data){
            showResults(data,selected);
            runningRequest=false;
        }); 
        
        function showResults(data, highlight){
           var resultHtml = '';
            $.each(data, function(i,item){
resultHtml+='<ul class="clip_stream uploaded_list">';
resultHtml+='<li class="clip">';
resultHtml+='<a onclick="#" href="#">';
resultHtml+='<img class="thumbnail" width="85" height="85" alt="" src="profile_img/'+item.imgpath+'">';
resultHtml+='</a>';
resultHtml+='<div class="digest">';
resultHtml+='<h3 class="title">';
resultHtml+='<a onclick="#" href="#">'+item.title+'</a>';
resultHtml+='</h3>';
resultHtml+='<div class="description">&#8220;'+item.content+'&#8221;</div>';
resultHtml+='<div class="byline">';
resultHtml+=' 11 days ago';
resultHtml+='</div>';
resultHtml+='<div class="stats">';
resultHtml+='<span class="plays">'+item.user_university+'</span>';
resultHtml+='<span class="plays">'+item.user_faith+'</span>';
resultHtml+='<span class="plays">'+item.user_height+'</span>';
resultHtml+='<span class="plays">'+item.user_ethnicity+'</span>';
resultHtml+='</div>';
resultHtml+='</div>';
resultHtml+='<div class="clear"></div>';
resultHtml+='</li>';
resultHtml+='</ul>';
                window.myUserID = item.msg_id;
                
            });
            
            			if(resultHtml == ''){
			    resultHtml+='<div class="clip_stream uploaded_list">';
                resultHtml+='<div style="word-wrap:break-word;"><p class="nofound" style=padding-top:.33em>Your search - <b style="background-color:#FCFFA3">'+$myq2+'</b> - did not match any documents.  <p class="nofound" style=margin-top:1em>Suggestions:<ul style="margin:0 0 2em;margin-left:1.3em"><li><p class="nofound">&rarr; Make sure all words are spelled correctly.</p><li><p class="nofound">&rarr; Try a different set of filters.</p><li><p class="nofound">&rarr; Try more general keywords.</p></ul></div>';
                
                resultHtml+='</div>';
			}

            
    $(resultHtml).find('img').batchImageLoad({
    loadingCompleteCallback: myCallback
    });
        
        function myCallback() {
								$('div#mystuff_insides').append(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 
//////////////////////// end of faith ethni block
	}, 250);
//////////////////////// start of uni faith ethni block
setTimeout(function() {
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen > 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test.php", {selected: selected, q:$myq2, lastmsg: window.myUserID },
        function(data){
            showResults(data,selected);
            runningRequest=false;
        }); 
        
        function showResults(data, highlight){
           var resultHtml = '';
            $.each(data, function(i,item){
resultHtml+='<ul class="clip_stream uploaded_list">';
resultHtml+='<li class="clip">';
resultHtml+='<a onclick="#" href="#">';
resultHtml+='<img class="thumbnail" width="85" height="85" alt="" src="profile_img/'+item.imgpath+'">';
resultHtml+='</a>';
resultHtml+='<div class="digest">';
resultHtml+='<h3 class="title">';
resultHtml+='<a onclick="#" href="#">'+item.title+'</a>';
resultHtml+='</h3>';
resultHtml+='<div class="description">&#8220;'+item.content+'&#8221;</div>';
resultHtml+='<div class="byline">';
resultHtml+=' 11 days ago';
resultHtml+='</div>';
resultHtml+='<div class="stats">';
resultHtml+='<span class="plays">'+item.user_university+'</span>';
resultHtml+='<span class="plays">'+item.user_faith+'</span>';
resultHtml+='<span class="plays">'+item.user_height+'</span>';
resultHtml+='<span class="plays">'+item.user_ethnicity+'</span>';
resultHtml+='</div>';
resultHtml+='</div>';
resultHtml+='<div class="clear"></div>';
resultHtml+='</li>';
resultHtml+='</ul>';
                window.myUserID = item.msg_id;
                
            });
            
            			if(resultHtml == ''){
			    resultHtml+='<div class="clip_stream uploaded_list">';
                resultHtml+='<div style="word-wrap:break-word;"><p class="nofound" style=padding-top:.33em>Your search - <b style="background-color:#FCFFA3">'+$myq2+'</b> - did not match any documents.  <p class="nofound" style=margin-top:1em>Suggestions:<ul style="margin:0 0 2em;margin-left:1.3em"><li><p class="nofound">&rarr; Make sure all words are spelled correctly.</p><li><p class="nofound">&rarr; Try a different set of filters.</p><li><p class="nofound">&rarr; Try more general keywords.</p></ul></div>';
                
                resultHtml+='</div>';
			}

            
    $(resultHtml).find('img').batchImageLoad({
    loadingCompleteCallback: myCallback
    });
        
        function myCallback() {
								$('div#mystuff_insides').append(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} //////////////////////////////////////////// END OF BLOCK
	}, 250);

} ////////////////////////////////// END OF IF (ID != '')



//return false;

});
/////////////////////////////
	}, 250);
 //////////////////////////////// end of ajax php call

  }
});