### Vue 
- 대세는 리엑트. 공식 튜토도 어려움
- 보통 뷰로 시작 -> 리엑트 전향

### 기본 세팅
- yarn global add @vue/cli 

- yarn = npm 같은 성향의 Vue 라이브러리/모듈 모음
- nodejs 10 버전 이하로는 연동 안됨

### 시작하기
- npm run serve -> 가동 시키기
- html 변경하기 : 안에 내용 바꾸기 or 속성을 바꾼다  => 내용 : {{...}} / 속성 : v-bind:... 을 사용하면 된다
- npm run build -> 만든 자료를 배포용으로(단순화, 단축화) 변환

- < + enter -> vue파일 기본 셋팅

### 기본 문법

1) 기본형 & if문형
    <template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- html 작성하는 곳  -->
        <p v-bind:style="스타일">{{ 글씨 }}</p> <!-- 기본형 : v-bind: = : 축약어 --> 
        <div v-if="보여줄까요"><p>글씨</p></div> <!-- if문 -->
    </div>
    </template>

    <script>
    // html은 모두 데이터를 통해서 만든다!! 
    export default {
    name: 'app',
    data(){ // html에 뿌릴 데이터를 저장하는 공간
        return{
        글씨: '오호', // 한글로 명령어를 넣어도 상관없다!
        스타일 : 'font-size: 30px',
        보여줄까요 : true,
        }
    },
    components: {
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

2) for문
    <template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- html 작성하는 곳  -->
        <p v-for="상품 in 상품목록">{{상품}}</p>
        <!-- 반복문의 경우 데이터의 갯수 만큼 반복을 해준다. -->
    </div>
    </template>

    <script>
    // html은 모두 데이터를 통해서 만든다!! 
    export default {
    name: 'app',
    data(){
        return{
        상품목록 : ['신발', '바지', '아우터']
        }
    },
    components: {
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

    **응용
    <template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!-- html 작성하는 곳  -->
        <div v-for="dataList in posts">
        <h4>{{ dataList.title }}</h4>
        <p>{{ dataList.date }}</p>
        </div>

    </div>
    </template>

    <script>
    // html은 모두 데이터를 통해서 만든다!! 
    export default {
    name: 'app',
    data(){
        return{
        posts : [ 
            {
            title :'오늘의 일기',
            date :'4월 20일'
            },
            {
            title :'수분크림 추천',
            date :'3월4일'
            },
            {
            title :'강남 맛집 후기',
            date :'2월 22일'
            }
        ],
        }
    },
    components: {
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

    3) 자료 사용하기 : 컴포넌트 제작
    - export / import 사용하여 내보내고 불러오기
    - export 의 경우 여러개 작성 가능하며 이름(변수명)을 겹치지 않게 작성해야한다.
    - import 로 만든 변수(값)만을 가져올 수 있다.
    - 모든 데이터의 관리는 app.vue에서만 사용하고, 하위 컴포넌트는 모듈의 역할만 한다.
    - 컴포넌트 안에선 하나의 묶음만 사용 가능하다 -> div 안에 모든 내용을 다 저장

    4) Props
    - 데이터를 관리하는 문법
    - app.vue 데이터를 받아오기 위해 사용
    - 사용하기 : 
        [app.vue] <List v-bind:내가 List.vue에서 사용할 이름="전송할 데이터"/> -> <List v-bind:infoD="post"/>
        [List.vue] <script>
                    export default {
                        props:{
                            infoD: String// 데이터의 타입을 선언해줌
                        }
                    }
                    </script>

    **응용 : 불러온 데이터를 반복문 돌리기
    [app.vue] 
        <Card v-bind:infoD="addList" v-for="addList in addr" />   
            - infoD : 컴포넌트에서 사용할 이름
            - addList : 반복문에서 데이터를 뽑아 올 이름
            - addr : 다른 데이터 js에서 가지고 온 데이터 이름
        <script>
        import Card from './components/Card.vue';
        import Post from './data/post.js';

        export default {
        name: 'app',
        data(){
            return{
            addr : Post //post.js에서 가지고 온 데이터를 addr에 저장
            }
        },
        components: {
            Card
        }
        }
        </script>

    [Card.vue]
        <template>    
            <div class="col-md-6">
                <img v-bind:src=infoD.image width="100%" alt="#">
                <h4 style="margin-top: 15px;">위치 명 : {{ infoD.title }}</h4>
                <p>건물 특징 : {{ infoD.caption }}</p>
                <p> 가격 : {{ infoD.price }} 원</p>
            </div>
        </template>

        <script>
        export default {
            props:{
                infoD: Object // 데이터의 타입을 선언해줌
            }
        }
        </script>

