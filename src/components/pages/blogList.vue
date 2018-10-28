<template>
<div class="blog-list">
    <div class="my-list" v-for="item in list" v-bind:key="item.id">
        <b-card class="my-card" :title="item.title" :sub-title="item.title">
            <p class="card-text">
                {{item.text}}
            </p>
            <a href="javascript:void(0);" class="card-link" @click="readPage()">Card link</a>
            <!-- <b-link href="#" class="card-link">Another link</b-link> -->
        </b-card>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            list: [{
                    id: '1',
                    title: 'compiler',
                    author: 'Lrc123',
                    text: 'I wrote a compiler',
                    stars: '5'
                }, {
                    id: '2',
                    title: 'compiler',
                    author: 'Lrc123',
                    text: 'I wrote a compiler',
                    stars: '5'
                }, {
                    id: '3',
                    title: 'compiler',
                    author: 'Lrc123',
                    text: 'I wrote a compiler',
                    stars: '5'
                }, {
                    id: '4',
                    title: 'compiler',
                    author: 'Lrc123',
                    text: 'I wrote a compiler',
                    stars: '5'
                }, {
                    id: '5',
                    title: 'compiler',
                    author: 'Lrc123',
                    text: 'I wrote a compiler',
                    stars: '5'
                },
                {
                    id: '6',
                    title: 'algo',
                    author: 'Lrc123',
                    text: 'i have a special algo',
                    stars: '11'
                }
            ]
        }

    },
    methods: {
        readPage() {
            // 命名的路由
            this.$router.push(
                '/blog/context'
            )
        }
    },

}
</script>

<style scoped>
.blog-list {
    margin-top: 156px;
}

.my-list {
    padding: 10px;
}

.my-card {
    margin: 10px;
}
</style>
