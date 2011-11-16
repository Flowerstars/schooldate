<?php
//sleep(4);
include("config.php");

if(!empty($_GET['q'])) {
    search();
}
function search() {


    $q = htmlspecialchars($_GET['q']);
    $lastmsg = htmlspecialchars($_GET['lastmsg']);

    $sql = mysql_query("
SELECT distinct 
user_id, user_name, status_quote, profile_img, university, faith, ethnicity, user_height
        FROM accounts
        WHERE 
        (user_name LIKE '%{$q}%' OR status_quote LIKE '%{$q}%' OR university LIKE '%{$q}%'
        OR faith LIKE '%{$q}%' OR ethnicity LIKE '%{$q}%' OR user_height LIKE '%{$q}%') 
        AND user_id > '$lastmsg' 
        ORDER BY user_id limit 3
        ");

    //Create an array with the results
    $results=array();
    while($v = mysql_fetch_object($sql)){
        $results[] = array(
          'title'=>$v->user_name,
          'content'=>$v->status_quote,
          'imgpath'=>$v->profile_img,
          'msg_id'=>$v->user_id,
          'user_university'=>$v->university,
          'user_faith'=>$v->faith,
          'user_height'=>$v->user_height,
          'user_ethnicity'=>$v->ethnicity
        );
    }

    //using JSON to encode the array
    echo json_encode($results);
    
    //////////////
    while($row=mysql_fetch_array($sql))
{
$msg_id=$row['user_id'];
 }
 
 
}
?>

