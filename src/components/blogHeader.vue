<template>
<div class="my-header">
    <!-- <img src="../assets/bilibili-header.png" alt="my-header"> -->
    <b-card id="my-card" overlay img-alt="Card Image" text-variant="white">
        <!-- <h1 style="margin-top:56px">Lrc's Blog</h1> -->
        <!-- <p class="card-text" style="margin-top:80px">
            <span style="color:white;font-size:18pt;">Sic transit gloria mundi</span>
        </p> -->
    </b-card>

    <blog-broadcast style="
    border: solid 1px; 
    width: 80%;
    margin-bottom:25px;
    margin-left: auto;
    margin-right: auto;
    "></blog-broadcast>
    <!-- <b-img rounded="circle" src="https://i2.hdslb.com/bfs/face/5728fa73efeaf44ffcfa31c30b912cc583894bab.jpg@72w_72h.webp" width="75" height="75" alt="img" class="m-1" /> -->
</div>
</template>

<script>
import BroadCast from './BroadCast.vue'

export default {
    data(){
        return {

        }
    },
    components:{
        'blog-broadcast': BroadCast
    }

}
</script>

<style scoped>
.my-header {
    text-align: center;
    /* margin-top: -50px; */
    height: 50px;
    z-index: 99;
}

#my-card {
    height: 170px;
    margin-top: 60px;
    width: 89%;
    background-image: url('//i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@100Q.webp');
    background-position: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}
</style>
