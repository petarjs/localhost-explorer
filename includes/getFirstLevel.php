<?php

function scandirSorted($path) {
    $sortedDataF = array();$sortedDataD = array();
    foreach(array_diff(scandir($path, 1), array('.', '..')) as $file) {
        if(is_file($path . $file)) {
            array_unshift($sortedDataF, array('name'=>$file, 'type'=>'file', 'path'=>'../../'.$file, 'level'=>0));
        } else {
            array_unshift($sortedDataD, array('name'=>$file, 'type'=>'dir', 'path'=>'../../'.$file, 'level'=>0));
        }
    }
    return array_merge($sortedDataD, $sortedDataF);
}

$r = scandirSorted('../../');

echo json_encode($r);

?>