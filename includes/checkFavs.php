<?php
$params = (array)json_decode(file_get_contents('php://input'));

$r = array();
foreach ($params as $entry) {
	if(!is_dir($entry) && !is_file($entry)) {
		$r[] = $entry;
	}
}

echo json_encode($r);

?>