<template>
  <!--템플릿은 출력될 내용을 적는 곳-->
  <!-- html 태그를 그대로 이용하면 된다-->
  <img alt="Vue logo" src="./assets/b_pro.png">
  <!-- 1) 데이터 바인딩-->
  <div>
    {{ logo }}
    <h4 class="red" :style="style1">OO원룸</h4>
    <p>{{ price1 }}만원</p>
  </div>
  <div>
    <h4>OO원룸</h4>
    <p>{{ price2 }}만원</p>
  </div>
  <hr>

  <!-- 2) 데이터 바인딩(배열)-->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>10만원</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>20만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>30만원</p>
  </div>
  <hr>

  <!-- 3) 반복문 -->
  <div class = "menu">
    <a>Home</a>
    <a>Product</a>
    <a>About</a>
  </div>
  <hr>
  <div class="menu">
    <a v-for="m in 3" :key="m">HOME</a>
  </div>
  <hr>
  <div class="menu">
    <a v-for="m in menus" :key="m">{{ m }}</a>
  </div>
  <hr>
  <div class="menu">
    <a v-for="(m,i) in menus" :key="i">{{ i }}</a>
  </div>
  <hr>

  <!-- 4) products를 반복문으로 해보자 -->
  <div v-for="(p,i) in products" :key="i">
    <h4>{{ p }}</h4>
    <p>40만원</p>
  </div>
  <hr>

  <!-- 5) 이벤트 핸들러 -->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>10만원</p>
    <!--<button v-on:click="함수명">허위매물신고</button>-->
    <button @click="lieCount++">허위매물신고</button>
    <span>신고수:{{ lieCount }}</span>
  </div>

  <!-- 6) 이벤트와 함수 -->
  <div>
    <h4>{{ products[1] }}</h4>
    <p>30만원</p>
    <button @click="increase">허위매물신고</button>
    <span>신고수:{{ lieCount }}</span>
    <!--5)의 내용을 script에 method를 활용해 함수로 만들고 함수를 불러와 사용한 것-->
  </div>

  <!-- 6) 마우스오버 -->
  <div>
    <h4>{{ products[2] }}</h4>
    <p>30만원</p>
    <button @mouseover="increase">허위매물신고</button>
    <span>신고수:{{ lieCount }}</span>
    <!--5)의 내용을 script에 method를 활용해 함수로 만들고 함수를 불러와 사용한 것-->
  </div>
  <hr>
  
  <!-- 7) 각각 동작하기 -->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>10만원</p>
    <button @click="lieCounts[0] += 100">허위매물신고</button>
    <span>신고수 : {{ lieCounts[0] }}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>20만원</p>
    <button @click="lieCounts[1] += 1">허위매물신고</button>
    <span>신고수 : {{ lieCounts[1] }}</span>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>30만원</p>
    <button @click="lieCounts[2] += 2">허위매물신고</button>
    <span>신고수 : {{ lieCounts[2] }}</span>
  </div>
  <hr>
  
  <!-- 8) 모달창 만들기 - 조건문 -->
  <div>
    <h4 @click="modalwin=true">{{ products[0] }}</h4>
    <p>30만원</p>
  </div>
  <div class="black-bg" v-if="modalwin == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="modalwin=false">닫기</button>
    </div>
  </div>
  <hr>
  <div>
    {{ a }}<br>{{ b }}
  </div>
</template>

<script>
//선언된 변수를 사용하지 않으면 에러가 난다. 사용을 안할 시 깨끗하게 삭제를 해주어야 한다
//기존 JavaScript와 jQuery에서의 데이터 바이딩
//document.getElementById("아이디명").innerHTML=??
//$("아이디명").html(??)

import {apple, apple2} from './assets/oneroom.js'

export default {
  name: 'App',
  components: {
  },
  data(){//데이터보관통(변수 등) funtion
    return{
      a:apple,
      b:apple2,
      price1 : 60,
      price2 : 70,
      logo : '원룸샵',
      style1 : 'color:blue',
      products : ['역삼동원룸','천호동원룸','서초동원룸'],
      menus : ['HOME','SHOP','ABOUT'],
      lieCount : 0,
      lieCounts : [0,0,0],
      modalwin : false
    }
  },
  methods:{
    increase(){
      this.lieCount += 1;
      //반드시 this라고 지칭해야만 동적변수로 사용할 수 있다.
    } 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  --position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
