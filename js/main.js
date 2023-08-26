let boxColorWidth = $("#sideFixed").width()

$("#open").click(() => {
    $("#sideBar").animate({ left: 0 }, 500)
})

$("#close").click(() => {
    $("#sideBar").animate({ left: `-${boxColorWidth}` }, 500)
})

$(".openClose p").click(function () {
    let aHref = $(this).attr("id");
    let tmp = $(`#Item${aHref}`).css("display");
    if(tmp == "none"){
        $(".openClose .downItem").css("display","none") 
    }
    $(`#Item${aHref}`).toggle(500)

})

let cnt1 = document.getElementById("day");
let count1 = Number(cnt1.innerText);
let clr1 = setInterval(() => {
    count1--;
    cnt1.innerHTML = count1;
    if(count1==0){
        clearInterval(clr1)
    }
},86400000);

let cnt2 = document.getElementById("hour");
let count2 = Number(cnt2.innerText);
let clr2 = setInterval(() => {
    count2--;
    cnt2.innerHTML = count2;
    if(count2==0){
        count2 = 23;
    }
    if(count2==0 && count1==0 ){
        clearInterval(clr2)
    }
},3600000);

let cnt3 = document.getElementById("min");
let count3 = Number(cnt3.innerText);
let clr3 = setInterval(() => {
    count3--;
    cnt3.innerHTML = count3;
    if(count3==0){
        count3 = 59;
    }
    if(count3==0 && count1==0 && count2==0){
        clearInterval(clr3)
    }
},60000);

let cnt4 = document.getElementById("sec");
let count4 = Number(cnt4.innerText);
let clr4 = setInterval(() => {
    count4--;
    cnt4.innerHTML = count4;
    if(count4==0){
        count4 = 59;
    }
    if(count4==0 && count1==0 && count2==0 && count3==0){
        clearInterval(clr4)
    }
},1000);

let inp = document.getElementById("input");
let cnt = document.getElementById("char");
let count = Number(cnt.innerText);
inp.addEventListener("keyup",function(){
  let x = inp.value,y;
  console.log(x.length);
    y=count-x.length;
    cnt.innerHTML = y;
    if(y<=0){
        cnt.innerHTML = 0;
    }
})

$(".sideFixed .items").click(function () {
    let aHref = $(this).attr("href");
    let offset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: offset }, 1000)
})