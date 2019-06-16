<template>
  <div id="app">
    <img alt="Vue logo" style="150px" src="./assets/relogo.png">
    <!-- html 작성하는 곳  -->
    
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <ul class="list-group">
            <li class="list-group-item">전체</li>
            <!-- <li class="list-group-item">가격순</li> -->
            <li class="list-group-item" v-on:click="sortPrice">가격순</li>
            <!-- <li class="list-group-item" v-on:click="filterPrice">가격필터</li> -->
            <!-- map() 또는 filter() 함수를 이용하여 가격 필터 버튼 만들어보기 -->
            <!-- <li class="list-group-item" v-on:click="tansPrice">환율변환</li> -->
            <!-- 원 -> 달러 변환 버튼 만들어보기 -->
          </ul>
        </div>
        <div class="col-md-10">
          <div class="row">

            <!-- <p v-if="show">{{숫자}}</p> -->

            <!-- <Card v-bind:infoD="addr[0]"/>
            <Card v-bind:infoD="addr[1]"/>
            <Card v-bind:infoD="addr[2]"/>
            <Card v-bind:infoD="addr[3]"/>     
            <Card v-bind:infoD="addr[4]"/>   
            <Card v-bind:infoD="addr[5]"/>           -->

            <Card v-bind:infoD="addList" v-for="(addList, i) in addr" v-bind:key="i"/>   
            <!-- <Card v-bind:infoD="addList" v-for="addList in addr" />    -->

            <!-- <List v-bind:내가 List.vue에서 사용할 이름="전송할 데이터"/> -->
            <!-- <List v-bind:내꺼="아빠바지"/> -->

          </div>
        </div>

        <!-- 과제 : 탭버튼 만들기 -->
        <!-- <button>버튼 01</button>
        <button>버튼 02</button>
        <button>버튼 03</button>
        <div>내용 01</div>
        <div>내용 02</div>
        <div>내용 03</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import Post from './data/post.js';
import List from './components/List.vue';

export default {
  name: 'app',
  data(){
    return{
      addrOrig : [...Post], // deepcopy 방법 : 원본을 그대로 복사하기 위한 방법(array는 보통 주소를 참조해 오는 것이기 때문)
      addr : Post,
      아빠바지 : "슬랙스",
      숫자 : 1,
      show : true,
    }
  },
  components: {
    Card,
    List
  },
  methods: {
    // add(){
    //    this.show = false;
    // }

    sortPrice(){
      this.addr = Post.sort( function(a,b){
        // return a.price - b.price;
        return a.price - b.price ? -1 : a.price > b.price ? 1:0 ;
      }); //sort() : 원본을 변경하여 재배치 하는 함수
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
