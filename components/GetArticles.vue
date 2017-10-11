<template>
<div>
  <table class="table" v-if="articles.length > 0">
    <thead class="thead-inverse">
      <tr>
        <th>Identifier</th>
        <th>Title</th>
        <th>Created</th>
        <th>Administrate</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles">
        <td>{{ article.identifier }}</td>
        <td>{{ article.title }}</td>
        <td>{{ article.createdDate }}
        <td>
          <b-button variant="link" :to="{
            name: 'administration-edit-id',
            params: {
              id: article.identifier
            }
          }">
            Edit
          </b-button>
          <b-button variant="link" @click="deleteArticle(article.identifier)">
            Delete
          </b-button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  async created () {
    this.getArticles()
  },

  data () {
    return {
      articles: []
    }
  },

  methods: {
    async getArticles () {
      let response = await axios
        .get('http://localhost:3000/api/get-articles')

      this.articles = response.data
    },

    async deleteArticle (identifier) {
      await axios
        .delete('http://localhost:3000/api/delete-article', {
          params: {
            identifier
          }
        })

      this.getArticles()
    }
  }
}
</script>
