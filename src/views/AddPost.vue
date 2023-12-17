<script>
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';

export default {
  name: "AddPost",
  components: { PageHeader, PageFooter },

  methods: {
    addPost() {
      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: this.postText }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  },
}
</script>

<template>
  <div class="container">
    <PageHeader />
    <main>
      <div class="form-container">
        <label>Body</label>
        <input v-model="postText" placeholder="body" required> <br>
        <button @click="addPost">Add</button>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px;
  background: rgb(255, 232, 170);
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 350px;
  height: 380px;
  text-align: center;
  font-size: 22px;
  font-family: Rockwell Extra Bold, Rockwell Bold, monospace;
  padding-top: 20px;

}

label {
  color: black;
  padding: 5%;
}

button {
  background-color: #000B6B;
  color: white;
  cursor: pointer;
  padding: 5px 7px;
  margin: 20px 0;
  font-size: 22px;
  font-family: Rockwell Extra Bold, Rockwell Bold, monospace;
}

input[type=email],
input[type=password] {
  width: 150px;
  padding: 8px;
  margin: 5px 0;
  font-size: 22px;
  font-family: Rockwell Extra Bold, Rockwell Bold, monospace;

}

a:link,
a:visited {
  text-decoration: none;
  color: #66B2FF;
}

a:active {
  color: #000B6B;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
