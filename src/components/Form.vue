<template>
  <div>
      <form target="_blank" action="">
              <label for="name">
              <input id="name" v-for="(name, value, index) in userData" :key="index">{{value}}
              </label>
      </form>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      userData: 
        {
         email: '', 
         firstName: '' ,
         lastName: '' ,
         phone:'',
        }
    }
  }
}

</script>

<style scoped>

form {
  display:flex;

}

</style>