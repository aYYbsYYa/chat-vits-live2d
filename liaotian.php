<?php
$msg=$_GET['msg'];//��Ҫ���ĵ�����
if(!$msg){echo "msg ����Ϊ��";exit;}
$url = file_get_contents("http://api.qingyunke.com/api.php?key=free&appid=0&msg=".$msg."");
$url = json_decode($url, true);
echo "".$url["content"]."";
?>