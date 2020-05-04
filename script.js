let cnt=2, currentNo;
let listClass = document.querySelectorAll(".ques-content-wrapper");
let btnClass = document.querySelectorAll(".button-tab");
document.getElementById('btn-tab-1').classList.add('add-shadow')
var contentAnimation = setInterval(automaticChangeContent, 3000);
function automaticChangeContent(){
    if(cnt==7){
        cnt=1;
    }
    currentNo= cnt%7;
    for (let i = 0; i < listClass.length; ++i) {
        listClass[i].classList.add('hide-elem');
        btnClass[i].classList.remove('add-shadow');
     }
    document.getElementById('content-'+currentNo).classList.remove('hide-elem');
    document.getElementById('btn-tab-'+currentNo).classList.add('add-shadow');
    cnt++;
}

function hideShowContent(btn){
    clearInterval(contentAnimation);

    for (let i = 0; i < listClass.length; ++i) {
        listClass[i].classList.add('hide-elem');
        btnClass[i].classList.remove('add-shadow');

        // btnClass[i].style.boxShadow = '0 2px 8px #fff';

     }
     document.getElementById('content-'+btn).classList.remove('hide-elem');
     document.getElementById('btn-tab-'+btn).classList.add('add-shadow');

    //  document.getElementById('btn-tab-'+btn).style.boxShadow = '0 2px 8px #aaa';
}
// Ajax call to get Movies List

$(document).ready(function(){
    $.ajax({
        url: "https://imdb.hriks.com/movie/",
        type:"GET",
        dataType: "json",
        success:function(response) {
            console.log(response)
        },
        error:function(err){
            console.log(err);
        }
    });
})