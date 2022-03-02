var check_int = 0;

$(function(){
    get_setting();
});

function reload_window(){
    location.reload();
}

function login_dg(){
    location.href = '/script/login.html';
}

function coming_soon(){
    alert('敬請期待');
}

function logout_submit(){
    $('#logout-form').submit();
}

function get_setting(){
    jQuery.post("script/get_setting.php",
        function(data){
            data2 = eval('('+data+')');
            var RetVal = data2.RetVal;
            if(RetVal == 'Y'){
                if(data2.user_id != '') {
                    if(data2.iss == 0) {
                        $('#match_btn').attr('onclick','match_master()');
                    } else {
                        $('#match_btn').attr('onclick','');

                        $('#sm1_cnt').html(data2.sm1_cnt);
                        if(data2.sm1_cnt >= 1) {
                            $('#sm1').addClass('finish');
                        }
                        $('#sm2_cnt').html(data2.sm2_cnt);
                        if(data2.sm2_cnt >= 1) {
                            $('#sm2').addClass('finish');
                        }
                        $('#sm3_cnt').html(data2.sm3_cnt);
                        if(data2.sm3_cnt >= 3) {
                            $('#sm3').addClass('finish');
                        }
                        $('#sm4_cnt').html(data2.sm4_cnt);
                        if(data2.sm4_cnt >= 1) {
                            $('#sm4').addClass('finish');
                        }
                        $('#sm5_cnt').html(data2.sm5_cnt);
                        if(data2.sm5_cnt >= 25) {
                            $('#sm5').addClass('finish');
                        }
                        $('#sm6_cnt').html(data2.sm6_cnt);
                        if(data2.sm6_cnt >= 50) {
                            $('#sm6').addClass('finish');
                        }
                        $('#sm7_cnt').html(data2.sm7_cnt);
                        if(data2.sm7_cnt >= 80) {
                            $('#sm7').addClass('finish');
                        }
                        $('#sm8_cnt').html(data2.sm8_cnt);
                        if(data2.sm8_cnt >= 80) {
                            $('#sm8').addClass('finish');
                        }
                        $('#sm9_cnt').html(data2.sm9_cnt);
                        if(data2.sm9_cnt >= 100) {
                            $('#sm9').addClass('finish');
                        }
                        $('#sm10_cnt').html(data2.sm10_cnt);
                        if(data2.sm10_cnt >= 120) {
                            $('#sm10').addClass('finish');
                        }
                        $('#sm11_cnt').html(data2.sm11_cnt);
                        if(data2.sm11_cnt >= 140) {
                            $('#sm11').addClass('finish');
                        }
                        $('#sm12_cnt').html(data2.sm12_cnt);
                        if(data2.sm12_cnt >= 100000000) {
                            $('#sm12').addClass('finish');
                        }
                        $('#sm13_cnt').html(data2.sm13_cnt);
                        if(data2.sm13_cnt >= 500) {
                            $('#sm13').addClass('finish');
                        }
                        $('#sm14_cnt').html(data2.sm14_cnt);
                        if(data2.sm14_cnt >= 1) {
                            $('#sm14').addClass('finish');
                        }
                    }
                    $('#invite_code').val(data2.invite_code);
                    $('#match_cnt').html(data2.match_cnt);

                    $('#mm1_cnt').html(data2.mm1_cnt);
                    $('#mm1_point').html(data2.mm1_point);

                    $('#mm2_cnt').html(data2.mm2_cnt);
                    $('#mm2_point').html(data2.mm2_point);

                    $('#mm3_cnt').html(data2.mm3_cnt);
                    $('#mm3_point').html(data2.mm3_point);

                    $('#mm4_cnt').html(data2.mm4_cnt);
                    $('#mm4_point').html(data2.mm4_point);

                    $('#mm5_cnt').html(data2.mm5_cnt);
                    $('#mm5_point').html(data2.mm5_point);

                    $('#mm6_cnt').html(data2.mm6_cnt);
                    $('#mm6_point').html(data2.mm6_point);

                    $('#mm7_cnt').html(data2.mm7_cnt);
                    $('#mm7_point').html(data2.mm7_point);

                    $('#mm8_cnt').html(data2.mm8_cnt);
                    $('#mm8_point').html(data2.mm8_point);

                    $('#mm9_cnt').html(data2.mm9_cnt);
                    $('#mm9_point').html(data2.mm9_point);

                    $('#mm10_cnt').html(data2.mm10_cnt);
                    $('#mm10_point').html(data2.mm10_point);

                    $('#mm11_cnt').html(data2.mm11_cnt);
                    $('#mm11_point').html(data2.mm11_point);

                    $('#mm12_cnt').html(data2.mm12_cnt);
                    $('#mm12_point').html(data2.mm12_point);

                    $('#mm13_cnt').html(data2.mm13_cnt);
                    $('#mm13_point').html(data2.mm13_point);

                    $('#mm14_cnt').html(data2.mm14_cnt);
                    $('#mm14_point').html(data2.mm14_point);

                    if(data2.point >= 20) {
                        $('#p20').addClass('finish');
                    }
                    if(data2.point >= 50) {
                        $('#p50').addClass('finish');
                    }
                    if(data2.point >= 100) {
                        $('#p100').addClass('finish');
                    }
                    if(data2.point >= 150) {
                        $('#p150').addClass('finish');
                    }
                    if(data2.point >= 200) {
                        $('#p200').addClass('finish');
                    }
                    if(data2.point >= 250) {
                        $('#p250').addClass('finish');
                    }
                    if(data2.point >= 300) {
                        $('#p300').addClass('finish');
                    }
                    if(data2.point >= 400) {
                        $('#p400').addClass('finish');
                    }
                    if(data2.point >= 500) {
                        $('#p500').addClass('finish');
                    }
                }
            }else{
                alert('ERROR'+RetVal);
            }
        });
}

function match_master(){
    if(check_int == 0){
        check_int = 1;
        var enter_code = $('#enter_code').val();
        jQuery.post("script/match_master.php", {enter_code: enter_code},
            function(data){
                data2 = eval('('+data+')');
                var RetVal = data2.RetVal;
                switch(RetVal){
                    case 'Y':
                        alert('綁定成功！');
                        get_setting();
                        break;
                    case '-1':
                        alert('活動尚未開始');
                        break;
                    case '-2':
                        alert('請先註冊掘夢網會員帳號');
                        break;
                    case '-3':
                        alert('請登入掘夢網會員帳號');
                        break;
                    case '-4':
                        alert('您已經綁定過');
                        break;
                    case '-5':
                        alert('請輸入綁定碼');
                        break;
                    case '-6':
                        alert('不能綁定自己喔');
                        break;
                    default:
                        alert('ERROR'+RetVal);
                }
                check_int = 0;
            });
    }else{
        alert('你正在綁定，請勿連續點擊');
    }
}