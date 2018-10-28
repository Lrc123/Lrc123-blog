<template>
<headroom class="my-headroom">
    <div class="my-nav">
        <b-navbar style="" toggleable="md" type="light" variant="light">
            <!-- Single button triggers two b-collapse components -->
            <b-navbar-toggle style="margin-bottom:5px" target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="/">Lrc's blog</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <!-- <b-navbar-nav>
                    <b-nav-item v-b-toggle.collapseA.collapseB href="#">classify</b-nav-item>
                </b-navbar-nav> -->
                <b-nav horizontal class="w-25">
                    <b-nav-item>Github</b-nav-item>
                    <b-nav-item>Code</b-nav-item>
                    <b-nav-item>Notes</b-nav-item>
                </b-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form style="">
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>

        <!-- navbar-1.vue -->
    </div>

</headroom>
</template>

<script>
import {
    headroom
} from 'vue-headroom'

export default {
    components: {
        headroom
    },
    data() {
        return {
            keywords: '',
            title: 'Lrc\'s blog',
            menuList: []
        }
    }

}
</script>

<style scoped>
.my-nav {
    top: 0;
    width: 100%;
    height: 57px;
    z-index: 99;
}

.list {
    margin-top: -10px;
    background: grey;
}
</style>
