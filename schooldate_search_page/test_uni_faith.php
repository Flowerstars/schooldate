<?php
include("config.php");

if(!empty($_GET['selected'])) {
    search();
}
function search() {

$selected  = $_GET['selected'];

if(!empty($_GET['q'])) {
$q = htmlspecialchars($_GET['q']);
}

/*
foreach ($selected as $value) {
$wheretype .= "university LIKE '%".$value."%'";
}
$wheretype = str_replace("''", "OR", $wheretype);
 $sql .= ' WHERE '.implode(' AND ', $clauses).';';
*/

//ethnicity LIKE '%{$q}%'
/*
//$ids = $_POST['ids'];
 $strIds = implode(" OR university LIKE '%" , $selected. "%'");
 //$sql = "DELETE FROM books WHERE university = $strIds";
 
 $strIds = implode("' OR university = '" , $selected);
 $sql = "SELECT * FROM accounts WHERE university =  ";
*/

 $uniIds = implode("' OR university = '" , $selected);
 $faithIds = implode("' OR faith = '" , $selected);
 $heightIds = implode("' OR user_height = '" , $selected);
 $ethniIds = implode("' OR ethnicity = '" , $selected);
 
/*
        $sql = mysql_query("
SELECT distinct 
user_id, user_name, status_quote, profile_img, university, faith, ethnicity, user_height  
FROM accounts
        WHERE (user_name LIKE '%{$q}%') AND (university = '$uniIds' OR faith = '$faithIds' OR user_height = '$heightIds' OR ethnicity = '$ethniIds') 
        ");
  /////////////
  
          $sql = mysql_query("
SELECT distinct 
user_id, user_name, status_quote, profile_img, university, faith, ethnicity, user_height  
FROM accounts
        WHERE (user_name LIKE '%{$q}%') AND 
(university = '$uniIds' AND faith = '$faithIds' AND ethnicity = '$ethniIds') 
        ");
        ////////////////
 (((university = "' OR university = '") AND (faith = '$faithIds') AND (ethnicity = '$ethniIds')) OR 
((university = '$uniIds') AND (faith = "' OR faith = '") AND (ethnicity = '$ethniIds')) OR 
((university = '$uniIds') AND (faith = '$faithIds') AND (ethnicity = "' OR ethnicity = '")) OR 
((university = '$uniIds') AND (faith = "' OR faith = '") AND (ethnicity = "' OR ethnicity = '")) OR 
((university = "' OR university = '") AND (faith = "' OR faith = '") AND (ethnicity = '$ethniIds')) OR 
((university = "' OR university = '") AND (faith = '$faithIds') AND (ethnicity = "' OR ethnicity = '")))       
        
        */

        $sql = mysql_query("
SELECT distinct 
user_id, user_name, status_quote, profile_img, university, faith, ethnicity, user_height  
FROM accounts
        WHERE (user_name LIKE '%{$q}%') AND 
((university = '$uniIds') AND (faith = '$faithIds'))
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
    
    

/*
foreach ($selected as $value) {
$wheretype .= "'$value'";
}
$wheretype = str_replace("''", "', '", $wheretype);

    echo $value . " <br/>";
        $sql = mysql_query("
SELECT
	user_id, user_name, status_quote, profile_img, university 
	FROM accounts
        WHERE 
        university LIKE '%{$value}%'
        OR faith LIKE '%{$value}%' OR ethnicity LIKE '%{$value}%' OR user_height LIKE '%{$value}%'
		
		ORDER BY user_id limit 20
        ");
        
        foreach ($maintypes as $type) {
 $wheretype .= "'$type'";
}
$wheretype = str_replace("''", "', '", $wheretype);
$typesetting = @mysql_query("SELECT batch, quantity FROM batches WHERE type NOT IN ($wheretype) ORDER BY batch");


}
*/
}
?>