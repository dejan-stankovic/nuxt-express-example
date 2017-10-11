<template>
  <section class="container">
    <list-articles :articles="articles"></list-articles>
  </section>
</section>
</template>

<script>
import axios from 'axios'
import ListArticles from '~/components/ListArticles'

export default {
  async asyncData ({ params }) {
    let response = await axios.get('http://localhost:3000/api/get-articles')

    return { articles: response.data }
  },

  head () {
    return {
      title: 'Home'
    }
  },

  components: {
    ListArticles
  }
}
</script>
