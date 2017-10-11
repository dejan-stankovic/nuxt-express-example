<template>
<div class="row">
  <div class="col">
    <b-form-input
      class="mb-3"
      v-model="title"
      type="text">
    </b-form-input>

    <b-form-textarea
      v-model="text"
      :rows="25">
    </b-form-textarea>
  </div>

  <div class="col" :class="{loading: isLoading}">
    <span v-html="formattedTitle"></span>
    <span v-html="formattedText"></span>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import ArticleMixin from './mixins/ArticleMixin'

export default {
  mixins: [ArticleMixin],

  async created () {
    let response = await axios
      .get('http://localhost:3000/api/get-articles')

    let articles = response.data

    this.identifier = articles[articles.length - 1].identifier + 1
  }
}
</script>

<style>
  .loading {
    opacity: 0.5;
  }
</style>
