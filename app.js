const p1_score = document.querySelector('#p1_score');
const p2_score = document.querySelector('#p2_score');
const maxScore = document.querySelector('#maxScore');
const p1_btn = document.querySelector('#p1_btn');
const p2_btn = document.querySelector('#p2_btn');
const reset = document.querySelector('#reset');

p1_btn.addEventListener('click',function(e){
    let currScore = parseInt(p1_score.innerText);
    if(currScore<maxScore.value){
        currScore++;
        p1_score.innerText = currScore;
    }
    if(currScore==maxScore.value){
        p1_btn.disabled = true;
        p2_btn.disabled = true;
    }
})

p2_btn.addEventListener('click',function(e){
    let currScore = parseInt(p2_score.innerText);
    if(currScore<maxScore.value){
        currScore++;
        p2_score.innerText = currScore;
    }
    if(currScore==maxScore.value){
        p1_btn.disabled = true;
        p2_btn.disabled = true;
    }
})

reset.addEventListener('click',function(){
    p1_score.innerText = 0;
    p2_score.innerText = 0;
    maxScore.value = 1;
    p1_btn.disabled = false;
    p2_btn.disabled = false;
})