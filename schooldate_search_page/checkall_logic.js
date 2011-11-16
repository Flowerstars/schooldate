    ///////////////////// start of check all university block
$(function () { // this line makes sure this code runs on page load
	$('.checkalluni').click(function () {
	window.myUserID = '';
		$(this).parents('#uniField:eq(0)').find(':checkbox').attr('checked', this.checked);

    ////////////////////
 var $myq2 = $('input#q').val();

var checklen = $("input[type=checkbox]:checked").length;

var checkunilen = $("input:checkbox[name=school]:checked").length;
var checkfaithlen = $("input:checkbox[name=faith]:checked").length;
var checkethnilen = $("input:checkbox[name=ethnicity]:checked").length;

 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen == 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	////////////////////// start of uni faith 
    	 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen == 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_faith.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	/////////////////////// end of uni faith
    	
    	//////////////////// start of uni ethni
    	 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_ethni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	///////////////////// end of uni ethni
    	
    	///////////////////// start of none all uni selected
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
    	}, 250);
    	
//////////////////// START OF //// sections: 0 1 0, 0 0 1, 0 1 1, 1 1 1 
 setTimeout(function() {
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen == 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	
    	//////////////////////
 setTimeout(function() {
if(checkunilen == 0 && checkfaithlen == 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_ethni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
 /////////////////////////   	
    	 setTimeout(function() {
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith_ethni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
   //////////////////////
     	 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);  
//////////////////// END OF //// sections: 0 1 0, 0 0 1, 0 1 1, 1 1 1 


    	//////////////////// end of none all uni selected
    	
    /////////////////// below is checkalluni and function
    	});
});
//////////////////////// end of check all university block

    ///////////////// start of check all faith block
   $(function () { // this line makes sure this code runs on page load
	$('.checkallfaith').click(function () {
	window.myUserID = '';
		$(this).parents('#faithField:eq(0)').find(':checkbox').attr('checked', this.checked);

    ////////////////////
 var $myq2 = $('input#q').val();

var checklen = $("input[type=checkbox]:checked").length;

var checkunilen = $("input:checkbox[name=school]:checked").length;
var checkfaithlen = $("input:checkbox[name=faith]:checked").length;
var checkethnilen = $("input:checkbox[name=ethnicity]:checked").length;

 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen == 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	////////////////////// start of uni faith 
    	 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen == 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_faith.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	/////////////////////// end of uni faith
    	
    	//////////////////// start of uni ethni
    	 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_ethni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	///////////////////// end of uni ethni
    	
    	///////////////////// start of none all uni selected
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
    	}, 250);
    	
//////////////////// START OF //// sections: 0 1 0, 0 0 1, 0 1 1, 1 1 1 
 setTimeout(function() {
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen == 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	
    	//////////////////////
 setTimeout(function() {
if(checkunilen == 0 && checkfaithlen == 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_ethni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
 /////////////////////////   	
    	 setTimeout(function() {
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith_ethni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
   //////////////////////
     	 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);  
//////////////////// END OF //// sections: 0 1 0, 0 0 1, 0 1 1, 1 1 1 
    	//////////////////// end of none all faith selected

    ///////////////////
    	});
}); 
    
    ///////////////// end of check all faith block
    
    ////////////////// start of check all ethnicity block
       $(function () { // this line makes sure this code runs on page load
	$('.checkallethni').click(function () {
	window.myUserID = '';
		$(this).parents('#ethniField:eq(0)').find(':checkbox').attr('checked', this.checked);

    ////////////////////
 var $myq2 = $('input#q').val();

var checklen = $("input[type=checkbox]:checked").length;

var checkunilen = $("input:checkbox[name=school]:checked").length;
var checkfaithlen = $("input:checkbox[name=faith]:checked").length;
var checkethnilen = $("input:checkbox[name=ethnicity]:checked").length;

 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen == 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	////////////////////// start of uni faith 
    	 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen == 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_faith.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	/////////////////////// end of uni faith
    	
    	//////////////////// start of uni ethni
    	 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen == 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_uni_ethni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	///////////////////// end of uni ethni
    	
    	///////////////////// start of none all uni selected
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
    	}, 250);
    	
//////////////////// START OF //// sections: 0 1 0, 0 0 1, 0 1 1, 1 1 1 
 setTimeout(function() {
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen == 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
    	
    	//////////////////////
 setTimeout(function() {
if(checkunilen == 0 && checkfaithlen == 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_ethni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
 /////////////////////////   	
    	 setTimeout(function() {
if(checkunilen == 0 && checkfaithlen > 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test_faith_ethni.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);
   //////////////////////
     	 setTimeout(function() {
if(checkunilen > 0 && checkfaithlen > 0 && checkethnilen > 0) { // start of uni block
///////////////////////////////////////
        var selected = new Array();
$("input:checkbox[name=school]:checked, input:checkbox[name=faith]:checked,input:checkbox[name=height]:checked, input:checkbox[name=ethnicity]:checked").each(function() {
selected.push($(this).val());
});
var selectedString = selected.join(",");
   request = $.getJSON("test.php", {selected: selected, q: $myq2 },
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
    ////////////////////
    	}, 250);  
//////////////////// END OF //// sections: 0 1 0, 0 0 1, 0 1 1, 1 1 1 
    	//////////////////// end of none all ethni selected    ///////////////////
    	});
}); 
    //////////////////// end of check all ethnicity block