//     function goWrite(frm) {
//     var title = frm.title.value;
//     var writer = frm.writer.value;
//     var content = frm.content.value;
//
//     if (title.trim() == ''){
//     alert("제목을 입력해주세요");
//     return false;
// }
//     if (writer.trim() == ''){
//     alert("작성자를 입력해주세요");
//     return false;
// }
//     if (content.trim() == ''){
//     alert("내용을 입력해주세요");
//     return false;
// }
//     frm.submit();
// }


let wrtbdbtn = document.querySelector("#wrtbdbtn");
wrtbdbtn?.addEventListener('click', () => {
    let frm = document.forms.qnafrm;

    if(frm.title.value ==='') alert('제목을 작성하세요!!');
    else if(frm.contents.value === '') alert('본문을 작성하세요');
    else {
        frm.method ='post';
        frm.submit();
    }
});

// let listpopover = document.querySelector('button#listpopover');
//
//     listpopover.onclick = function() {
//         let popOption = "width = 650px, height=550px, top=300px, left=300px";
//         let openUrl = ‘/mypage/membershiprwd’
//     window.open(openUrl, ‘pop’, popOption);
// }
//

//qna view
let newbdbtn = document.querySelector("#newbdbtn");
newbdbtn?.addEventListener('click', () => {
    location.href = '/mypage/qnawrite';
});
let modbdbtn = document.querySelector("#modbdbtn");
let rmvbdbtn = document.querySelector("#rmvbdbtn");
let lstbdbtn = document.querySelector("#lstbdbtn");

modbdbtn?.addEventListener('click', () => {
    if (confirm("정말 수정하시겠어요?")) {
        alert('아직 미지원 기능입니다!!');
    }
});
rmvbdbtn?.addEventListener('click', () => {
    if (confirm("정말 삭제하시겠어요?")) {
        alert('아직 미지원 기능입니다!!');
    }
});
lstbdbtn?.addEventListener('click', () => {
    location.href='/mypage/qna';
});


//
// //board list
//
// let newbdbtn = document.querySelector("#newbdbtn");
// let modbdbtn = document.querySelector("#modbdbtn");
// let rmvbdbtn = document.querySelector("#rmvbdbtn");
// let lstbdbtn = document.querySelector("#lstbdbtn");
//
// newbdbtn?.addEventListener('click', () => {
//     location.href ='/board/write';
// });
// modbdbtn?.addEventListener('click', () => {
//     if (confirm("정말 수정하시겠어요?")) {
//         alert('아직 미지원 기능입니다!!');
//     }
// });
// rmvbdbtn?.addEventListener('click', () => {
//     if (confirm("정말 삭제하시겠어요?")) {
//         alert('아직 미지원 기능입니다!!');
//     }
// });
// lstbdbtn?.addEventListener('click', () => {
//     location.href='/board/list/1';
// });



// let cancelbtn3 = document.querySelector("#cancelbtn3");
// cancelbtn3?.addEventListener('click', () => {
//     location.href = '/board/list/1';
//     if (confirm("정말 취소하시겠어요?")) {
//         }
// });

//board find

let findbtn = document.querySelector("#findbtn");
let findtype = document.querySelector("#findtype");
let findkey = document.querySelector("#findkey");

findbtn?.addEventListener('click', () => {
    if (findkey.value ==='') alert('검색어를 입력하세요!!');
    else {
        //let qry = findtype.value + '/' + findkey.value;
        location.href = `/board/find/${findtype.value}/${findkey.value}/1`;
    }
});


//회원 탈퇴

let deleteacctbtn = document.querySelector("#deleteacctbtn");
deleteacctbtn?.addEventListener('click', () => {
    let frm = document.forms.dlufrm;
    if (frm.password.value === '') alert('비밀번호를 입력하세요!!');
    else {
        frm.method = 'post';
        frm.submit();
    }
});

// 회원 정보 수정
let umodifybtn = document.querySelector("#umodifybtn");

umodifybtn?.addEventListener('click', () => {
    let frm = document.forms.umdfrm;

    if (frm.password.value === '') alert("비밀번호를 입력하세요");

    else if (frm.passwd_confirm.value === '') alert("비밀번호를 확인란을 입력하세요");
    else if (frm.password.value != frm.passwd_confirm.value) alert("비밀번호가 일치하지 않습니다");
    else if (frm.email.value === '') alert("이메일을 입력하세요");
    else if (frm.nickname.value === '') alert("닉네임을 입력하세요");
    else if (frm.phone.value === '') alert("핸드폰번호를 입력하세요");
    else if (frm.name.value === '') alert("이름을 입력하세요");
    else {
        frm.method = 'post';
        frm.submit();
    }
})
