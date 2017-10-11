<template>
<div>
  <b-nav>
    <b-nav-item :to="{name: 'index'}">Home</b-nav-item>
    <b-nav-item :to="{name: 'sign-in'}" v-if="!isUserAuthenticated">Sign-in</b-nav-item>
    <b-nav-item :to="{name: 'administration-list'}" v-if="isUserAuthenticated">Administration</b-nav-item>
    <b-nav-item :to="{name: 'administration-create'}" v-if="isUserAuthenticated">Create</b-nav-item>
  </b-nav>
</div>
</template>

<script>
export default {
  computed: {
    isUserAuthenticated: {
      get () {
        return this.$store.state.user.isUserAuthenticated
      }
    }
  }
}
</script>
