<template>
  <div 
  :class="[isVisible ? 'closeLeftBar' : 'leftBar']">
    <ul>
      <div class="flexLink">
        <router-link
        active-class="active"
        exact
        to="/"
        tag="li">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" class="svg-inline--fa fa-house icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>
        </router-link>
        <router-link 
        active-class="active"
        exact
        to="/"
        tag="li">
          <a :class="[isVisible ? 'menuOff' : 'menuOn']">Home</a>
        </router-link>
      </div>

      <!-- Add Note -->

      <div class="flexLink">
        <router-link
        active-class="active"
        exact
        to="/addnote"
        tag="li">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" class="svg-inline--fa fa-circle-plus icon addIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256C397.4 512 512 397.4 512 256S397.4 0 256 0zM352 280H280V352c0 13.2-10.8 24-23.1 24C242.8 376 232 365.2 232 352V280H160C146.8 280 136 269.2 136 256c0-13.2 10.8-24 24-24H232V160c0-13.2 10.8-24 24-24C269.2 136 280 146.8 280 160v72h72C365.2 232 376 242.8 376 256C376 269.2 365.2 280 352 280z"></path></svg>
        </router-link>
        <router-link 
        active-class="active"
        exact
        to="/addnote"
        tag="li">
          <a :class="[isVisible ? 'menuOff' : 'menuOn']">Add</a>
        </router-link>
      </div>

      <!-- Favorites -->

      <div class="flexLink">
        <router-link
        active-class="active"
        exact
        to="/favorites"
        tag="li">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path></svg>
        </router-link>
        <router-link 
        active-class="active"
        exact
        to="/favorites"
        tag="li">
          <a :class="[isVisible ? 'menuOff' : 'menuOn']" href="#">Favorites</a>
        </router-link>
      </div>

      <!-- Deleted -->

      <div class="flexLink">
        <router-link
        active-class="active"
        exact
        to="/deleted"
        tag="li">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-can" class="svg-inline--fa fa-trash-can icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464C32 490.5 53.5 512 80 512h288c26.5 0 48-21.5 48-48V128H32V464zM304 208C304 199.1 311.1 192 320 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM208 208C208 199.1 215.1 192 224 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM112 208C112 199.1 119.1 192 128 192s16 7.125 16 16v224C144 440.9 136.9 448 128 448s-16-7.125-16-16V208zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z"></path></svg>
        </router-link>
        <router-link 
        active-class="active"
        exact
        to="/deleted"
        tag="li">
          <a :class="[isVisible ? 'menuOff' : 'menuOn']" href="#">Deleted</a>
        </router-link>
      </div>


    </ul>
    <div v-if="isVisible===true" @click="isVisible = !isVisible" class="visible">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-chevron-right" class="svg-inline--fa fa-circle-chevron-right visibleIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"></path></svg>   
    </div>
    <div v-if="isVisible===false" @click="isVisible = !isVisible" class="visible">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-chevron-left" class="svg-inline--fa fa-circle-chevron-left visibleIconFalse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path></svg>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isVisible: true,
    }
  }
}
</script>
