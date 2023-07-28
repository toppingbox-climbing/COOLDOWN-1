// board list
let newbdbtn = document.querySelector("#newbdbtn")
newbdbtn?.addEventListener('click', () => {
    location.href = '/board/write';
});


// board view
let bdlist = document.querySelector("#bdlist")
bdlist?.addEventListener('click', ()=> {
    location.href = '/board/list/1';
});

let siren1 = document.querySelector("#siren1")
siren1?.addEventListener('click', () => {
   alert("죄송합니다. 아직 미지원 기능입니다. 고객센터로 연락주시면 감사하겠습니다.")
});
let siren2 = document.querySelector("#siren2")
siren2?.addEventListener('click', () => {
    alert("죄송합니다. 아직 미지원 기능입니다. 고객센터로 연락주시면 감사하겠습니다.")
});


// board write
let bdwrtcancelbtn = document.querySelector("#bdwrtcancelbtn")
bdwrtcancelbtn?.addEventListener('click', ()=> {
    location.href = '/board/list/1'
})

let wrtbdbtn = document.querySelector("#wrtbdbtn")
wrtbdbtn?.addEventListener('click', () => {
    let frm = document.forms.post_form;
    if(frm.title.value === '') alert('제목을 작성하세요.');
    else if(frm.contents.value === '') alert('본문을 작성하세요.');
    else {
        let b_category=document.querySelector("#b_category")
        let categoryValue=document.querySelector("#categoryValue")
        categoryValue.value=b_category.value;

        //frm.action='/board/write'
        frm.method = 'post';
        frm.enctype  = 'multipart/form-data';
        frm.submit();
    }
});


// board comment
let newboardcommentbtn = document.querySelector("#newboardcommentbtn")
newboardcommentbtn?.addEventListener('click', ()=> {
    let frm = document.forms.comment_form;
    if(frm.u_id.value === '') alert('로그인 하세요.');
    else if(frm.contents.value === '') alert('댓글을 작성하세요.');
    else{
        frm.method = 'post';
        frm.action = '/board/boardcomments/write';
        frm.submit();
    }
});

// board reply
$('#replyModal').on('shown.bs.modal', function (event) {
    let button = $(event.relatedTarget);
    let ref = button.data('ref');
    let modal = $(this);
    modal.find('.modal-body .ref').val(ref)
})
/*let modal = null;
const showReply = (ref) => {
    const refno = document.querySelector("#ref");
    refno.value = ref;
    modal = new bootstrap.Modal(replyModal, {});
    modal.show();
};*/
const replybtn = document.querySelector("#replybtn");
replybtn?.addEventListener('click', () => {
    let frm = document.querySelector("#replyfrm")
    if(frm.contents.value === '') alert('대댓글을 작성하세요.');
    else {
        frm.method = 'post';
        frm.action = '/board/boardreply/write';
        frm.submit();
    }
});


// board find category
let findallbtn = document.querySelector("#findallbtn")
let findbdbtn = document.querySelector("#findbdbtn")
let findwithbtn = document.querySelector("#findwithbtn")
let findintrobtn = document.querySelector("#findintrobtn")
let findqnabtn = document.querySelector("#findqbtn")
findallbtn?.addEventListener('click', () => {
    location.href = `/board/list/1`;
});
/*findbdbtn?.addEventListener('click', () => {
    location.href = `/board/find/자유글/1`;
});
findwithbtn?.addEventListener('click', () => {
    location.href = `/board/find/동행구하기/1`;
});
findintrobtn?.addEventListener('click', () => {
    location.href = `/board/find/자기소개/1`;
});
const findqnabtn = (btype) => {
    location.href = `/board/find/${btype}/1`;
};*/
$('.category')?.on('click',(e)=>{
    location.href='/board/category/'+e.target.value;
})


// like
/*
let view_like_count = document.querySelector("#view_like_count");
const plusLike = (board_id) => {
    if(session.user = null) {
        alert('로그인해주세요');
    } else {
        // AJAX 요청 시작
        fetch(`/likes/${board_id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                view_like_count.textContent = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
};*/
