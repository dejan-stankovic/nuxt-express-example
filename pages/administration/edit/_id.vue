<template>
<div>
  <section class="container-fluid">
    <h1>Edit</h1>
    <p>Edit a blog post.</p>

    <edit-article :article="article" v-if="article.identifier"></edit-article>
  </section>
</div>
</template>

<script>
import axios from 'axios'
import EditArticle from '~/components/EditArticle'

export default {
  async asyncData ({ params }) {
    let response = await axios.get('http://localhost:3000/api/get-article', {
      params: {
        identifier: params.id
      }
    })

    return { article: response.data }
  },

  components: {
    EditArticle
  }
}
</script>
