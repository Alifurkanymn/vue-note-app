<template>
    <div class="addNote">
            <form @submit.prevent="onSubmit">
                <div class="inputs">
                    <h3>Title:</h3>
                    <input v-model="note.title" type="text" required>
                    </div>
                    <div class="textArea">
                        <h3>Content:</h3>
                        <textarea v-model="note.content" required></textarea>
                    </div>
                    <div class="comboBox">
                        <h3>Materiality Level</h3>
                        <select v-model="note.options" name="Important" required>
                        <option class="option" value="Important">Important</option>
                        <option class="option" value="Normal">Normal</option>
                        <option class="option" value="Unhurried">Unhurried</option>
                        </select>
                    </div>
                    <div class="button">
                        <button>Add</button>
                </div>
            </form>
        <div id="Warning">
            <h1>Your note has been successfully added !</h1>
        </div>
    </div>
</template>
<script>
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
        if(this.note.options === "Important") {
            this.$store.dispatch('addNoteImportant',this.note)
        }else if(this.note.options === "Normal"){
            this.$store.dispatch('addNoteNormal',this.note)
        }else{
            this.$store.dispatch('addNoteUnhurried',this.note)
        }
    }
  }
}
</script>
