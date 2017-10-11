<template>
  <section class="container">
    <div class="row" v-for="article in articles" v-if="articles.length > 0">
      <div class="col">
        <h1>{{article.title}}</h1>
        <p class="text-muted">{{article.createdDate}}</p>
        <div v-html="article.text"></div>
      </div>
    </div>
  </section>
</section>
</template>

<script>
export default {
  props: ['articles']
}
</script>
