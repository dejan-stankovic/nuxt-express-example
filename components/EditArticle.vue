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
import ArticleMixin from './mixins/ArticleMixin'
import striptags from 'striptags'
import cloneDeep from 'lodash/cloneDeep'

export default {
  props: ['article'],

  mixins: [ArticleMixin],

  created () {
    this.identifier = cloneDeep(this.article.identifier)
    this.title = cloneDeep(this.article.title)

    let text = cloneDeep(this.article.text)
    this.text = striptags(text)
    this.createdDate = this.article.createdDate
  }
}
</script>

<style>
  .loading {
    opacity: 0.5;
  }
</style>
