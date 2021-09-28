<template>
  <div>
      <div class="characters">
        <div class="characters_items"
             v-for="(character, index) in characters"
             :key="index"
        >{{character.name}}</div>

        <button v-on:click="addItem()">Кнопка</button>
      </div>
    <span>{{characters[0].name}}</span>
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
      characters: [],
    }
  },
  methods: {
    addItem () {

    }
  },
  created() {
    apiService.get('characters')
    .then(data => this.characters=data.data)
    .catch(error => console.log(error))
  }

  // async created () {
  //   let data = await apiService.get('characters')
  //   console.log('Что у нас здесь',data.data)
  //   this.characters = data.data;
  // }
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

.characters {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}


.characters_items {
  padding: 25px;
  margin-bottom: 30px;
  border: 2px solid red;

}


</style>
