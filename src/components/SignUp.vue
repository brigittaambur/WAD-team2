<script>
import { ref } from 'vue';

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.email, password: this.password }),
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
  setup() {
    const passwordValidation = ref(true);

    const validatePassword = () => {
      const lengthCheck = this.password.length >= 8 && this.password.length < 15;
      const uppercase = /[A-Z]/.test(this.password);
      const lowercase = /[a-z].*[a-z]/.test(this.password);
      const numericCheck = /\d/.test(this.password);
      const uppercaseStart = /^[A-Z]/.test(this.password);
      const underscore = /_/.test(this.password);

      passwordValidation.value =
        lengthCheck &&
        uppercase &&
        lowercase &&
        numericCheck &&
        uppercaseStart &&
        underscore;
    };

    return { passwordValidation, validatePassword };
  }
}
</script>

<template >
  <div>
    <div class="form-container">
      <label for="email">Email</label>
      <input v-model="email" type="email" placeholder="Email" name="email" required> <br>
      <label for="password">Password</label>
      <!-- <input v-model="password" @input="validatePassword" type="password" placeholder="Password" name="password" required> -->
      <input v-model="password" type="password" placeholder="Password" name="password" required>
      <errortext v-if="!passwordValidation" class="error-message"><br>
        The password you entered is not valid. Follow these conditions:
        <br>
        * The password should contain at least 8 chars and less than 15 chars<br>
        * Include at least one uppercase alphabet character <br>
        * Include at least two lowercase alphabet characters<br>
        * Include at least one numeric value <br>
        * It should start with an uppercase alphabet <br>
        * It should include the character “_” <br>
      </errortext>
      <button :disabled="!passwordValidation" @click="signUp">Sign up</button>
    </div>
  </div>
</template>

<style>
.form-container {
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

h4+p {
  padding: 20px;
}

errortext {
  font-size: xx-small;
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
