(function(){
const spanEl = document.querySelector("main h2 span");
const txtArr = ['루 하 의 이 윤 제','이 제 윤 천 재', '이 혜 린 바 보','♥ 사 랑 해 요 ♥' ]
let index = 0;
let currentTxt = txtArr[index].split("");

function writeTxt(){
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !==0){
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}

function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !==0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}
writeTxt();
})();
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    const browserScrollY = window.pageYOffset;
    if(browserScrollY>0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
})
const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    console.log(targetEl)
    const browserScrollY = window.pageYOffset;
    console.log(browserScrollY)
    console.log(targetEl.getBoundingClientRect().top)
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    console.log(targetScrollY)
    window.scrollTo({ top : targetScrollY, behavior : 'smooth'})
}

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0 ; i < scrollMoveEl.length ; i++){
    scrollMoveEl[i].addEventListener('click' , function(e){
        console.log(this)
        const tg= this.dataset.target;
        console.log(tg)
        animationMove(tg);

    })
};
