$(document).ready(function(){

var runningRequest = false;
    var request;
    var myUserID = '';
    
    var crunningRequest = false;
    var crequest;


    $('input#q').keyup(function(e){
        e.preventDefault();
        var $q = $(this);
        window.myUserID = '';
        //$("INPUT").attr('checked', false);
        //var checklen = $("input[type=checkbox]:checked").length;
 /*       
        if(($q.val() == '' || $q.val().substring(0, 1) == " ") && checklen > 0){ //start of if checlen > 0 do this
        /////////////
       // alert("no text, yes checked!");
        /////////////
        } // end of if checlen > 0 do this
        else {
            $('section#updates').html('');
            $('.message').remove();
            return false;
        }
  
  */

        //Abort opened requests to speed it up
        if(runningRequest){
            request.abort();
        }

        runningRequest=true;


// THis needs to be changed to the location of the search.php file

////////////////////////////////////////////// check checkboxes
var $myq2 = $('input#q').val();
var checklen = $("input[type=checkbox]:checked").length;

var checkunilen = $("input:checkbox[name=school]:checked").length;
var checkfaithlen = $("input:checkbox[name=faith]:checked").length;
var checkethnilen = $("input:checkbox[name=ethnicity]:checked").length;
//alert(checklen);
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen == 0) { // start of uni block
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni.php", {selected: selected, q:$myq2 },
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
								$('div#mystuff_insides').html(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
				
				//$('section#updates').html("<div class='message' id='spinner'><img src='loading.gif' /></div>");
							}
            }


} ///////////// end of uni block

///////////////////////// start of zero checked block
//else {
if(checklen == 0) {
//$('.message').remove();
//alert("clicked and zero checked!");
$myq2 = $('input#q').val();

if($myq2 == '' || $myq2.substring(0, 1) == " "){
            $('div#mystuff_insides').html('');
            $('.clip_stream uploaded_list').remove();
            $("#mystuff").hide();
        }

   request = $.getJSON("search.php", {q:$myq2 },
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
                
                ///////////////////////////////
                /*
resultHtml+='<ul class="clip_stream uploaded_list">';
resultHtml+='<li class="clip top">';
resultHtml+='<a onclick="#" href="#">';
resultHtml+='<img class="thumbnail" width="85" height="85" alt="" src="profile_img/'+item.imgpath+'">';
resultHtml+='</a>';
resultHtml+='<div class="digest">';
resultHtml+='<h3 class="title">';
resultHtml+='<a onclick="#" href="#">'+item.title+'</a>';
resultHtml+='</h3>';
resultHtml+='<div class="byline">';
resultHtml+='by';
resultHtml+='<a href="#">'+item.title+'</a>';
resultHtml+='11 days ago';
resultHtml+='</div>';
resultHtml+='<div class="description">'+item.content+'</div>';
resultHtml+='<div class="stats">';
resultHtml+='<span class="plays">76</span>';
resultHtml+='<span class="likes">3</span>';
resultHtml+='<span class="comments">0</span>';
resultHtml+='</div>';
resultHtml+='</div>';
resultHtml+='<div class="clear"></div>';
resultHtml+='</li>';
resultHtml+='</ul>';

*/
                //////////////////////////
                
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
				$('div#mystuff_insides').html(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
				
							}
            }

} //end of else
/////////////////// end of zero checked block

//////////////// start of faith block
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen == 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith.php", {selected: selected, q:$myq2 },
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
								$('div#mystuff_insides').html(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 

//////////////// end of faith block

//////////////// start of ethni block
if(checkunilen == 0 && checkfaithlen == 0 && checkethnilen > 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_ethni.php", {selected: selected, q:$myq2 },
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
								$('div#mystuff_insides').html(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 

///////////////// end of ethni block

/////////////////////// start of uni ethni block
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen > 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_ethni.php", {selected: selected, q:$myq2 },
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
								$('div#mystuff_insides').html(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 
/////////////////////// end of uni ethni block

//////////////////////// start of uni faith block
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen == 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_faith.php", {selected: selected, q:$myq2 },
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
								$('div#mystuff_insides').html(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 
///////////////////////// end of uni faith block

//////////////////////// start of faith ethni block
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen > 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith_ethni.php", {selected: selected, q:$myq2 },
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
								$('div#mystuff_insides').html(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 
//////////////////////// end of faith ethni block

//////////////////////// start of uni faith ethni block
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen > 0) { 
//alert(checklen);
//if(checklen > 0) {
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test.php", {selected: selected, q:$myq2 },
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
								$('div#mystuff_insides').html(resultHtml);
				$(".clip").first().css('border-top', '0');
				$(".clip").first().css('padding-top', '0');
				$("#mystuff").show();
							}
            }


} 

///////////////////////

        $('#qform').submit(function(e){
            e.preventDefault();
            
        });
    });
///////////////////////////////////////// end of keyup block 

/*
    $("input").click(function() {
        	if($(this).is(':checked')) {
	    //alert($(this).val());
/////////////////////////////////////
        var $c = $(this).val();
////////////////////////////////////
        request = $.getJSON("csearch.php",{
            q:$c
        },function(data){           
            showResults(data,$c);
            runningRequest=false;
        });


function showResults(data, highlight){
           var resultHtml = '';
           var gsp = "";
           var e_v = eval('/ /g');
            $.each(data, function(i,item){
            //////////////////////////////////
            /*
            				(function($) {
  var thePage = $('section#updates');
  var e_v = eval('/' + $myq + '/gi');
  thePage.html(thePage.html().replace(e_v, '<b style="background-color:#FCFFA3">'+$myq+'</b>')); 
})(jQuery)
*/
 /*           /////////////////////////////////
                resultHtml+='<div class="message" id="'+item.univ.replace(e_v, gsp)+'">';
                resultHtml+='<img src="profile_img/'+item.imgpath+'"width="85" height="85"  />';

                resultHtml+='<h1><span rel="wardpeet">'+item.title+'</span></h1>';
                resultHtml+='<p class="quote"><span></span>'+item.content.replace(highlight, '<b style="background-color:#FCFFA3">'+highlight+'</b>')+'</p>';
                
                resultHtml+='<div align="right" ><a href="#" class="button letsdoit" style="align-right">See profile</a></div>';
                resultHtml+='</div>';
                window.myUserID = item.msg_id;
                
            });
            
    $(resultHtml).find('img').batchImageLoad({
    loadingCompleteCallback: myCallback
    });
        
        function myCallback() {
				$('section#updates').append(resultHtml);
							}
            }

//////////////////////////////////
			} // semi end if this is checked
			
///////////////////////////////////////////////////	
			/*
			else{
			
			    $("input").click(function() {
        	if($(this).is(':checked')) {
	    //alert($(this).val());
/////////////////////////////////////
        var $c = $(this).val();
			
			if($(this).not(':checked')) {
		//	if('input').attr('id', '$c').not(':checked')){
			$('.message').attr('id', '$c').remove();
			}
			}
			
			*/
////////////////////////////

/*		
			
	});	 // semi-end input click function
////////////////////////////////////////// end of checkbox block

/////////////////////////// if unchecked start	
			    $("input").click(function() {
			    if ($(this).is(":not(:checked)")) {
			   // var id = $(this).attr('id');
			   // var cl = "\"#"+id+".message\"";
//	    alert(id);
//	    var $u = $(this).val();
//	    var uid = eval('/ /g');
//	    $u.replace(uid, "");
//	    var fid = '"#'+$u+'"';
			//$('#YaleUniversity.message').remove();
			            $('input:checkbox:checked').each(function(i) {
                alert(this.value);
            });
			}
			});
			*/
//////////////////////////// if unchecked end
////////////////////////// start of checkbox test 2
/*
$("input").click(function() {
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
        $.post("test.php", {selected: selected },
        function(data){
            $('section#updates').html(data);
        });  
        });
        */
//////////////////////////// end of checkbox test 2

///////////////////////////
 }); // end of window ready function

