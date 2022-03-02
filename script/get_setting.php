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

function getValue($method, $string){  
    $str = explode(",", $string);  
    $max=sizeof($str);  
    for($i=0; $i<$max; $i++){    
    $tmp = trim($str[$i]);    
    global $$tmp;    
    switch ($method){      
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
        if(isset($_REQUEST[$tmp])&&$_REQUEST[$tmp]!="")
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
//getValue("REQUEST","play_time_m");

if ($RetVal == "Y") {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://webapi.digeam.com/ato/atoevent20210505_get_setting");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $PostData = "user_id=".$ATO_StrID."&user_ip=".$_SERVER["HTTP_CF_CONNECTING_IP"];
    curl_setopt($ch, CURLOPT_POST,true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $PostData);
    $result = curl_exec($ch);
    curl_close($ch);
    $RetVal = $result;
}

echo $RetVal;
//echo $user_id.' '.$email;
?>