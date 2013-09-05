<?php

function scandirSorted($path) {
    $sortedDataF = array();$sortedDataD = array();
    foreach(array_diff(scandir($path, 1), array('.', '..')) as $file) {
        if(is_file($path . $file)) {
            array_unshift($sortedDataF, array('name'=>$file, 'type'=>'file', 'path'=>'../../'.$file));
        } else {
            array_unshift($sortedDataD, array('name'=>$file, 'type'=>'dir', 'path'=>'../../'.$file));
        }
    }
    return array_merge($sortedDataD, $sortedDataF);
}

$r = scandirSorted('../../');

echo json_encode($r);

?>