<?php
header("Content-Type: text/csv; charset=utf-8");
$csv = readfile("https://docs.google.com/spreadsheets/d/1tVx0lv0mAeZNGCkmnaMqYfPOdGe0Vp3DMzlyNSTodN8/pub?output=csv");
return $csv;
?>
