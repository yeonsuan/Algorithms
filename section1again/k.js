//대문자로 통일
function solution(s) {
    let answer=''; //여기 answer을 비우고 answer에 답을 채우는거 기억하기 

    for(let x of s){
        if(x===x.toLowerCase()){
            answer+=x.toUpperCase();
        }else{answer+=x};
    }
    return answer;
}

let str='ItisTimeToStudy';
console.log(solution(str));