<template>
  <div id="app">
    <div class="leftBarApp">
      <LeftBar/>
    </div>
  <transition name="pageAnimation" mode="out-in">
    <router-view></router-view>
  </transition>
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
  overflow-x: hidden;

}
.leftBarApp{
  margin-top:300px;
  position:fixed;
  display: flex;
  flex-direction: column; 
  justify-content: center;
}

.pageAnimation-enter, .pageAnimation-leave-active{
  opacity:0;
  transform: translate(50px);
}
.pageAnimation-enter-active, .pageAnimation-leave-active{
  transition: all .5s;
}
  
</style>

