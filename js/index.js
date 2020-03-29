let aImg=document.querySelectorAll(".con img"),
    mark=document.querySelector(".context>p"),
    fail=document.querySelector(".fail"),
    resetB=document.querySelector(".fail>button");

let marks=0,a=-1;

let imgSrc=["images/yx/2.png","images/yx/cube_2.png","images/yx/cube_4.png","images/yx/cube_8.png","images/yx/cube_16.png","images/yx/cube_32.png","images/yx/cube_64.png","images/yx/cube_128.png","images/yx/cube_256.png","images/yx/cube_512.png","images/yx/cube_1024.png","images/yx/cube_2048.png","images/yx/cube_4096.png","images/yx/cube_8192.png"];

// ~~function(){
//     for(let i=0;i<aImg.length;i++){
//         aImg[i].setAttribute("value",0);
//     }
// }();

// aImg[3].setAttribute("value",2);
// aImg[3].src="images/yx/cube_2.png";
// aImg[8].setAttribute("value",2);
// aImg[8].src="images/yx/cube_2.png";

// function random(min,max){
//     return Math.floor(Math.random()*(max-min)+min);
// }

for(let i=0;i<3;i++){
    createA();
}
function _2048(arr){
    let nowArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=0){
            // let j=i+1;
            for(var j=i+1;j<arr.length;j++){
                if(arr[j]!=0) break;
            }
            if(arr[i]!=arr[j]){
                nowArr.push(arr[i]);
            }else{
                nowArr.push(arr[i]+arr[j]);
                i=j;
            }
        }
    }
    for(let i=0;i<arr.length;i++){
        if(!nowArr[i]) nowArr[i]=0
    }
    return nowArr;
}
// console.log(_2048([2,0,2,0]))
document.onkeydown = function (ev = window.event) {
    switch (ev.keyCode) {
        case 37:
            failPage();
            run([0, 1, 2, 3]);
            run([4, 5, 6, 7]);
            run([8, 9, 10, 11]);
            run([12, 13, 14, 15]);
            createA();
            markS();
            break;
        case 38:
            failPage();
            run([0, 4, 8, 12]);
            run([1, 5, 9, 13]);
            run([2, 6, 10, 14]);
            run([3, 7, 11, 15]);
            createA();
            markS();
            break;
        case 39:
            failPage();
            run([3, 2, 1, 0]);
            run([7, 6, 5, 4]);
            run([11, 10, 9, 8]);
            run([15, 14, 13, 12]);
            createA();
            markS();
            break;
        case 40:
            failPage();
            run([12, 8, 4, 0]);
            run([13, 9, 5, 1]);
            run([14, 10, 6, 2]);
            run([15, 11, 7, 3]);
            createA();
            markS();
            break;
    }
}

function failPage() {
    a++;
    if (a > marks) {
        fail.classList.add("active");
        resetB.onclick = function () {
            location.reload();
        }
    }
}

function run(arry){
    // console.log(1);
    let newValue=_2048([
        Number(aImg[arry[0]].getAttribute("value")),
        Number(aImg[arry[1]].getAttribute("value")),
        Number(aImg[arry[2]].getAttribute("value")),
        Number(aImg[arry[3]].getAttribute("value"))
    ]);
    // console.log(newValue);
    for(let i=0;i<arry.length;i++){
        aImg[arry[i]].setAttribute("value",newValue[i]);
        aImg[arry[i]].src="images/yx/cube_"+newValue[i]+".png";
    }
}

function createA() {
    // console.log(a++);
    // a++;
    let random = Math.floor(Math.random() * aImg.length);
    if (Number(aImg[random].getAttribute("value") == 0)) {
        aImg[random].setAttribute("value", 2);
        aImg[random].src = imgSrc[1];
    } else {
        createA();
    }
    
    
}

function markS(){
    // console.log(a++)
    marks++;
    mark.innerHTML="得分："+marks;
}
