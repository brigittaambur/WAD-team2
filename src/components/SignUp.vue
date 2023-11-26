<template >
    <div>
      <div class="form-container">
          <form>
            <label for="email">Email</label>
            <input type="email" placeholder="Email" name="email" required> <br>
            <label for="password">Password</label>
            <input v-model="password" @input="validatePassword" type="password" placeholder="Password" name="password" required> 
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
            <button type="submit">Sign up</button>
          </form>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const passwordValidation = ref(true);

    const validatePassword = () => {
      // Password validation rules
      const lengthCheck = password.value.length >= 8 && password.value.length < 15;
      const uppercase = /[A-Z]/.test(password.value);
      const lowercase = /[a-z].*[a-z]/.test(password.value); // at least two lowercase letters
      const numericCheck = /\d/.test(password.value);
      const uppercaseStart = /^[A-Z]/.test(password.value);
      const underscore = /_/.test(password.value);

      // Check all conditions
      passwordValidation.value =
        lengthCheck &&
        uppercase &&
        lowercase &&
        numericCheck &&
        uppercaseStart &&
        underscore;
    };

    return { email, password, passwordValidation, validatePassword };
  }
}
</script>

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

label{
  color: black;
  padding: 5%;
}

h4~form {
    display: flex;
    flex-direction: column;
    align-items: center;
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
