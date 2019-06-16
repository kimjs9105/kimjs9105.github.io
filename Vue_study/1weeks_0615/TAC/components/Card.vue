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
    name: 'card', // 디버깅 시 컴포넌트의 문제가 어디인지 알려주는 타이틀 같은 것
    props:{
        infoD: Object
    }
}
</script>

<style>

</style>
