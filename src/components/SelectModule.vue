<template>
<div id="select">   
<b-list-group>
  <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
  <b-list-group-item href="#" active>Link with active state</b-list-group-item>
  <b-list-group-item href="#">Action links are easy</b-list-group-item>
  <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
</b-list-group>

</div>
</template>

<script>
export default {
   data(){
       return {

       }
   } 
}
</script>

<style scoped>
#select{
    border: solid 1px;
    margin-top:206px;
    height: 500px;
}


</style>
