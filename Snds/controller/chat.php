<?php

switch($_GET['view']) {
    case 'receive':
        $array = array(
            'sender' => 'Test',
            'receiver' => 'Ward',
            'message' => 'Hello',
            'datum' => '2011-07-03 00:00:00'
        );
        echo json_encode($array);
        break;
}