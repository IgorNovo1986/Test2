<template>
  <div>
    <img :src="imgUrl" alt="">
    <ul>
      <li
          v-for="(ingredient, index) in ingredients"
          :key="index"
      > {{index + 1}}
        <span style="margin-left: 20px">{{ingredient.id}}</span>
        {{ingredient.text}} -- {{ingredient.rank}}</li>
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
      imgUrl: null,
      ingredients: []
    }
  },
  async created () {
      let data = await apiService.get('/product/737628064502.json')
      this.imgUrl = data.data.product.image_nutrition_small_url
      console.log(data.data.product)
      this.ingredients = data.data.product.ingredients
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
