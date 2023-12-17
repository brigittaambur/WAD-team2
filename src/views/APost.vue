<script>
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';


export default {
  name: "APost",
  components: { PageHeader, PageFooter },

  data() {
    return {
      updatedText: "",
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      const postId = this.$route.params.id;
      fetch(`http://localhost:3000/posts/${postId}`, { headers: { "Content-Type": "application/json" } })
        .then((response) => response.json())
        .then((data) => {
          this.post = data["data"];
          console.log(this.post);
          this.updatedText = this.post.text;
        })
        .catch((error) => {
          console.error('Error fetching post: ', error);
        });
    },
    updatePost() {
      const postId = this.$route.params.id;
      fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: this.updatedText,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Post updated successfully:', data.data);
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Error updating post:', error);
        });
    },

    deletePost() {
      const postId = this.$route.params.id;
      fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'DELETE',
      })
        .then(() => {
          console.log('Post deleted');
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        })
    }

  }
};
</script>

<template>
  <div class="container">
    <PageHeader></PageHeader>
    <main>
      <div class="apost">
        <p>A Post</p>
        <div class="input">
          <label>Body</label>
          <input v-model="updatedText" :placeholder="updatedText" required>
        </div>
        <br>
        <button @click="updatePost">Update</button>
        <button @click="deletePost">Delete</button>
      </div>
    </main>
    <PageFooter></PageFooter>
  </div>
</template>

<style>
.apost {
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
