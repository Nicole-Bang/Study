/* myscript.js*/

function hap(a, b){ //두수사이의 합을 반환하시오
    //2+3+4+5
    //5+4+3+2
   /* 내가 푼 방식
    let answer=0;
    answer = (a+b) * (Math.abs(b-a)+1)/2 //-> n(n+1)/2 는 가우스공식
    return answer;
    */ 


   if(a<b){
    let tmp=a; a=b; b=tmp;
   }//if end

   let sum=0;
   for(let n=a; n<=b; n++){
    sum += n;
   }//for end

   return sum;


}//hap() end




function diff(a, b){//두수사이의 차이를 반환하시오 (절대값)
    let answer=0;
    answer=Math.abs(a-b);
    return answer;
}//diff end

function leap(year){//윤년, 평년을 반환하시오
    if(year%4==0 && year&100!=0 || year%400==0){
        return true;
    }else{
        return false;
    }//if end
}//leap() end