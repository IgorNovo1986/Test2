<template>
  <div class="form" >
      <form target="_blank" action="" class="form__blanc" v-if="visible">
            <div class="form__group" v-for="userData,index in userDatas" :key="index">
              <label class="form__label" :for="userData.label">{{userData.label}}</label>
              <input class="form__input" :id="userData.label" v-model="userData.value" type="text">
            </div>
            <button class="form__addFriends" v-on:click.prevent="addInputFriends()">Add Friends</button>
            <div class="form__group" v-for="nameFriend,index in nameFriends" :key="index">
              <label :for="nameFriend.label">{{nameFriend.label}}</label>
              <input class="form__input" :id="nameFriend.label" placeholder="" v-model="nameFriend.value" type="text">
            </div>
            <input type="submit" v-on:click.prevent="visible=!visible">
      </form>
      <div v-if="!visible">
        <h1>Приветствие</h1>
        <!-- <p>Phone: {{userDatas[0].value}}</p>
        <p>First name:{{userDatas[1].value}}</p>
        <p>Second name:{{userDatas[2].value}}</p>
        <p>Email:{{userDatas[3].value}}</p>
        <p>{{nameFriends.value}}</p> -->
        <div v-for="userData,index in userDatas" :key="index">
          <p> {{userData.label}}:  {{userData.value}}</p>
        </div>
        <div v-for="nameFriend,index in nameFriends" :key="index">
          <p>{{nameFriend.label}} {{index + 1 }}:  {{nameFriend.value}}</p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      userDatas: [
        { label: "Phone", value: ''}, 
        { label: "First name", value: ''}, 
        { label: "Second name", value: ''}, 
        { label: "Email", value: ''} 
      ],
      nameFriends: [
      ],
      visible: true
    }
  },
  methods: {
    addInputFriends() {
      this.nameFriends.push({
        label: 'Имя Гостя',
        value: ''
      })
    },
  }
}

</script>

<style scoped>

.form {
  width: 980px;
  display: flex;
  margin: 0 auto;
  flex-direction:column;
}

.form__blanc{
  margin: 0 auto;
}

.form__label{
  align-items: flex-start;
  margin-bottom: 10px;
}

.form__group{
  display: flex;
  justify-content: space-between;
}

.form__input {
  margin-bottom: 10px;
}

.form__addFriends{
  margin-bottom: 10px;
}

</style>