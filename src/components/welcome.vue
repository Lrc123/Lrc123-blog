<template>
<div class="welcome">
    <blog-nav />
    <blog-header />
    <!-- <aside>
        <blog-lnav />
    </aside> -->
    <div class="mainbody">
        <b-container>
            <b-row>
                <b-col lg="3">
                    <blog-select></blog-select>
                </b-col>
                <b-col>
                    <blog-list style="background:white; margin-top:206px"></blog-list>
                </b-col>
            </b-row>
        </b-container>
    </div>
</div>
</template>

<script>
import blogNav from './blogNav.vue'
import blogList from './pages/blogList.vue'
import blogHeader from './blogHeader.vue'
import SelectModule from './SelectModule.vue';

export default {
    components: {
        'blog-nav': blogNav,
        'blog-list': blogList,
        'blog-header': blogHeader,
        'blog-select': SelectModule
    },
    data() {
        return {}
    },
    created() {},
    methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.welcome {
    background: white;
    border: solid 1rem;
    /* background: url('//img.badapple.top/%E4%B8%9C%E6%96%B9Project/%E7%90%AA%E9%9C%B2%E8%AF%BA/img%20(35).jpg') no-repeat center 0; */
    /* background: url('https://i0.hdslb.com/bfs/archive/c694a5cc0761ffb2965a0a87954ede38d7e5770c.png'); */
    background-attachment: fixed;
}

.mainbody {
    /* margin-top: 256px; */
    padding: 0px;
}
</style>
