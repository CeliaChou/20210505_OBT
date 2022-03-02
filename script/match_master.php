<?php 
header("Cache-Control:no-cache"); 
header("Expires:0" ); 
header("Pragma:no-cache"); 
header("Content-Type:text/html;charset=utf-8");

$_COOKIE_DOMAIN=".digeam.com";
if($_COOKIE["StrID"]){
  $ATO_StrID   = $_COOKIE["StrID"];
} else {
  $ATO_StrID = '';
}

function getValue($method, $string)
{  
  $str = explode(",", $string);  
  $max=sizeof($str);  
  for($i=0; $i<$max; $i++)
  {    
    $tmp = trim($str[$i]);    
    global $$tmp;    
    switch ($method)
    {      
      case "GET" :       
        $tmp = $_GET[$tmp];      
        break;      
      case "POST" :        
        $$tmp = $_POST[$tmp];        
        break;      
      case "COOKIE" :        
        $$tmp = $_COOKIE[$tmp];        
        break;      
      case "SERVER" :        
        $$tmp = $_SERVER[$tmp];        
        break;      
      case "REQUEST" :
        if(isset($_REQUEST[$tmp]) && $_REQUEST[$tmp]!="")
        {
          $$tmp = $_REQUEST[$tmp];
        } else {
          $$tmp = '';
        }        
        break;    
    }    
    $$tmp = trim($$tmp);  
  }
}

$RetVal = "Y";
$nowDate=date("YmdHis");
// $esday = "20210209000000";
$esday = "20210121160000";
$eeday = "20211231235959";

if (($nowDate < $esday) || ($nowDate > $eeday)) {
  $RetVal = '{"RetVal":"-1"}';
}

if ($RetVal == "Y") {
  if($_COOKIE["StrID"]){
    $ATO_StrID   = $_COOKIE["StrID"];
  } else {
    $RetVal = '{"RetVal":"-3"}';
  }
}

getValue("REQUEST","index");
getValue("REQUEST",'enter_code');

if ($RetVal == "Y") {
  if($enter_code == '') {
    $RetVal = '{"RetVal":"-5"}';
  }
}
  
if ($RetVal == "Y") {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "https://webapi.digeam.com/ato/atoevent20210505_match_master");
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $PostData = "user_id=".$ATO_StrID."&user_ip=".$_SERVER["HTTP_CF_CONNECTING_IP"]."&index=".$index."&enter_code=".$enter_code;
  curl_setopt($ch, CURLOPT_POST,true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $PostData);
  $result = curl_exec($ch);
  curl_close($ch);
  $RetVal = $result;
}

echo $RetVal;
?>