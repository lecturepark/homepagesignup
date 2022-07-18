// 예제 81
// 암호와 재확인 암호가 같은지도 체크 처리
// 각 체크에 대해 성공 실패 여부를 로그 남기기

var str_id = "";
var str_pw = "";

var input_id;
var input_pw;


var div_s;

window.onload = function(){



    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    div_s = document.getElementById("s")
//todo

    // str_id = input_id.value;
    // str_pw = input_pw.value;

}



function login(){

    // alert("id : " + input_id.value + " pw : " + input_pw.value);

    var local_id = input_id.value;
    var local_pw = input_pw.value;

    if(local_id == "Lecturepark" && local_pw == "1234"){
    // alert("로그인 성공");
    s.innerHTML = local_id + " 로그인 성공 @회원님 반갑습니다.@"
    }
    else{
    // alert("로그인 실패");
    s.innerHTML = "로그인 실패 @아이디, 비밀번호를 다시 확인해 주세요@"
    }
}
