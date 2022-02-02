<template>
  <div id="app">
    <div class="leftBarApp">
      <LeftBar/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import LeftBar from './components/LeftBar/LeftBar.vue'
import './assets/css/leftBar.css'
import './assets/css/addNote.css'
import './assets/css/home/home.css'
export default {
  name: 'App',
  components: {
    LeftBar,
  }
}
</script>


<style scoped>
#app{
  display: flex;
  background-color: black;
}
.leftBarApp{
  margin-top:300px;
  position:fixed;
  display: flex;
  flex-direction: column; 
  justify-content: center;
}
</style>

