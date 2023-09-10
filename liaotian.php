<?php
$msg=$_GET['msg'];//需要陪聊的内容
if(!$msg){echo "msg 参数为空";exit;}
$url = file_get_contents("http://api.qingyunke.com/api.php?key=free&appid=0&msg=".$msg."");
$url = json_decode($url, true);
echo "".$url["content"]."";
?>