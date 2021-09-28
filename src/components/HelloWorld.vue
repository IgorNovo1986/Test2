<template>
  <div>
    <ul>
      <li v-for="(character, index) in characters" :key="index">{{character}}</li>
    </ul>
  </div>
</template>

<script>

import apiService from "../services/api/api.service";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      characters: []
    }
  },
  async created () {
      let data = await apiService.get('characters')
      console.log('Что у нас здесь',data)
      this.characters = data;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
text-align: left;
}
a {
  color: #42b983;
}
</style>
