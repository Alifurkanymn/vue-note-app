<template>
    <div class="addNote">
            <div class="inputs">
            <h3>Title:</h3>
            <input v-model="note.title" type="text" required="required">
            </div>
            <div class="textArea">
                <h3>Content:</h3>
                <textarea v-model="note.content" required="required"></textarea>
            </div>
            <div class="comboBox">
                <h3>Materiality Level</h3>
                <select v-model="note.options" name="Important" required="required">
                <option class="option" value="Important">Important</option>
                <option class="option" value="Normal">Normal</option>
                <option class="option" value="Unhurried">Unhurried</option>
                </select>
            </div>
            <div class="button">
                <button @click="onSubmit()">Add</button>
            </div>
        <div id="Warning">
            <h1>Your note has been successfully added !</h1>
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
            headers: { "Access-Control-Allow-Origin": "*" },
            ...this.note,
        })
        .then(() =>{
            if (this.note.title != "" && this.note.content != "" && this.note.option != "") {
                document.getElementById("Warning").style.display = "block";
                setTimeout(function(){
                    document.getElementById("Warning").style.display = "none";
                },3000)
                this.note = ""
            }
        })
        .catch(e => {
            console.log(e)
        })
      }
  }
}
</script>
