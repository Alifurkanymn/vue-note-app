<template>
    <div class="addNote">
        <div class="inputs">
            <h3>Title:</h3>
            <input v-model="note.title" type="text">
        </div>
        <div class="textArea">
            <h3>Content:</h3>
            <textarea v-model="note.content"></textarea>
        </div>
        <div class="comboBox">
            <h3>Materiality Level</h3>
            <select v-model="note.options" name="Important">
            <option class="option" value="Important">Important</option>
            <option class="option" value="Normal">Normal</option>
            <option class="option" value="Unhurried">Unhurried</option>
            </select>
        </div>
        <div class="button">
            <button @click="onSubmit()" type="submit">Add</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
  data(){
    return{
        note : {
            title : "",
            content : "",
            options : "",
        }
    }
  },
  methods : {
      onSubmit(){
          axios.post(`https://vue-note-app-be493-default-rtdb.firebaseio.com/note.json`,{
              ...this.note,
          })
          .then(response => {
              console.log(response);
          })
          .catch(e => {
              console.log(e)
            })
      }
  }
}
</script>
