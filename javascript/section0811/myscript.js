/* myscript.js*/

function hap(a, b){ //두수사이의 합을 반환하시오
    //2+3+4+5
    //5+4+3+2
    let answer=0;
    answer = (a+b) * (Math.abs(b-a)+1)/2 //-> n(n+1)/2 는 가우스공식
    return answer;
}//hap() end

function diff(a, b){//두수사이의 차이를 반환하시오
    let answer=0;
    answer=Math.abs(b-a)
    return answer;
}//diff end

function leap(year){//윤년, 평년을 반환하시오
    if(year%4==0 && year&100!=0 || year%400==0){
        return true;
    }else{
        return false;
    }//if end
}//leap() end