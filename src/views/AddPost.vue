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
      <div class="addpost">
        <p>Add post</p>
        <div class="input">
            <label>Body</label>
            <input v-model="postText" placeholder="Insert text" required>
        </div> 
        <br>
        <button @click="addPost">Add</button>
      </div>
    </main>
    <PageFooter />
    </div>
</template>

<style>
.addpost {
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
}

button {
  background-color: #000B6B;
  width: 200px;
  color: white;
  cursor: pointer;
  padding: 5px 7px;
  margin-left: auto;
  margin-right: auto; 
  font-size: 22px;
  font-family: Rockwell Extra Bold, Rockwell Bold, monospace;
}

input {
  width: 200px;
  padding: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
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
