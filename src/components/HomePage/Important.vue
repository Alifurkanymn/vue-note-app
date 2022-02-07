<template>
    <div class="important">
        <h1>Important</h1>
        <hr>
        <div class="content">
            <div :style="{backgroundColor: randomColor()}" v-for="post in important" :key="post.id" class="note">
                <div class="title">
                    <h3>{{post.title}}</h3>
                    <h3>{{post.id}}</h3>
                    <div class="right">
                        <svg @click="postDeleted(post)" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-can" class="svg-inline--fa fa-trash-can deleteIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464C32 490.5 53.5 512 80 512h288c26.5 0 48-21.5 48-48V128H32V464zM304 208C304 199.1 311.1 192 320 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM208 208C208 199.1 215.1 192 224 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM112 208C112 199.1 119.1 192 128 192s16 7.125 16 16v224C144 440.9 136.9 448 128 448s-16-7.125-16-16V208zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z"></path></svg>
                        <svg @click="postFavorite(post)" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star noteIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path></svg>
                    </div>
                </div>
                <hr>
                <p>{{post.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods : {
      postFavorite(post){
        this.$store.dispatch('postFavorite', post)
      },
      postDeleted(post){
          console.log(post);
        this.$store.dispatch('postDeleted', post)
      },
      randomColor(){
        const r = () => Math.floor(256 * Math.random());
        const g = () => Math.floor(200 * Math.random());
        const b = () => Math.floor(100 * Math.random());

        return `rgb(${r()}, ${g()}, ${b()})`;
      }
  },

  computed:{
      important(){
          return this.$store.getters.importantData
      }
  },

  created(){
      this.$store.dispatch('initImportant')
 },
}
</script>