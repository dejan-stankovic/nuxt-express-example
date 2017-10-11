<template>
<div>
  <h1>Sign-in</h1>
  <p>Sign-in to start writing for your blog. Just enter your first name and your password. Finally, click <kbd>Enter</kbd>.</p>

  <div class="row">
    <div class="col">
      <b-form-fieldset description="Enter your first name" label="First name" :label-size="1">
        <b-form-input v-model="firstName" type="text"></b-form-input>
      </b-form-fieldset>
    </div>

    <div class="col">
      <b-form-fieldset description="Enter your password" label="Password" :label-size="1">
        <b-form-input @keyup.enter.native="signInPost" v-model="password" type="password"></b-form-input>
      </b-form-fieldset>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      firstName: '',
      password: ''
    }
  },

  methods: {
    async signInPost () {
      await axios
        .post('/api/sign-in', {
          firstName: this.firstName,
          password: this.password
        })

      this.$store.commit('setIsUserAuthenticated', true)
      this.$router.push('/administration/list')
    }
  }
}
</script>
