<?php
//sleep(1);
time_nanosleep(0, 250000000);
include("config.php");

if(!empty($_GET['q'])) {
    search();
}
function search() {


    $q = htmlspecialchars($_GET['q']);

    $sql = mysql_query("
SELECT
	user_id, user_name, status_quote, profile_img, university, faith, user_height, ethnicity
        FROM accounts
        WHERE 
        user_name LIKE '%{$q}%' 
        ORDER BY user_id limit 20
        ");
/*
    $sql = mysql_query("
SELECT
	user_id, user_name, status_quote, profile_img
        FROM accounts
        WHERE 
        user_name LIKE '%{$q}%' OR status_quote LIKE '%{$q}%' OR university LIKE '%{$q}%'
        OR faith LIKE '%{$q}%' OR ethnicity LIKE '%{$q}%' OR user_height LIKE '%{$q}%'
		
		ORDER BY user_id limit 20
        ");
*/

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

