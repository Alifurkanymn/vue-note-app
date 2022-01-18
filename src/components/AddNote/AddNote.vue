<template>
    <div class="addNote">
        <div class="inputs">
            <h3>Title:</h3>
            <input type="text">
        </div>
        <div class="textArea">
            <h3>Content:</h3>
            <textarea></textarea>
        </div>
        <div class="comboBox">
            <h3>Materiality Level</h3>
            <select name="Important">
            <option class="option" value="Important">Important</option>
            <option class="option" value="Normal">Normal</option>
            <option class="option" value="Unhurried">Unhurried</option>
            </select>
        </div>
        <div class="button">
            <button>Add</button>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
    }
  }
}
</script>
