<template>
    <div class="home">
        <Important />
        <Normal />
        <Unhurried />
    </div>
</template>
<script>

import Important from "./Important.vue"
import Normal from "./Normal.vue"
import Unhurried from "./Unhurried.vue"

import "../../assets/css/home/unhurried.css"
import "../../assets/css/home/important.css"
import "../../assets/css/home/normal.css"
export default {
  name: 'App',
  components: {
    Important,
    Normal,
    Unhurried,
    
  }
}
</script>