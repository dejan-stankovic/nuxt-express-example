import axios from 'axios'
import {markdown} from 'markdown'
import debounce from 'lodash/debounce'

export default {
  data () {
    return {
      identifier: 0,
      title: '',
      text: '',
      createdDate: new Date(),
      isLoading: false
    }
  },

  computed: {
    formattedTitle: {
      get () {
        if (this.title) return markdown.toHTML(`# ${this.title}`)
        if (!this.title) return ''
      }
    },

    formattedText: {
      get () {
        if (this.text) return markdown.toHTML(this.text)
        if (!this.text) return ''
      }
    }
  },

  watch: {
    title () {
      this.isLoading = true
      this.createArticle()
    },

    text () {
      this.isLoading = true
      this.createArticle()
    }
  },

  methods: {
    createArticle: debounce(function () {
      axios
        .post('/api/administration/create', {
          identifier: this.identifier,
          title: this.title,
          text: this.formattedText,
          createdDate: this.createdDate
        })

      this.isLoading = false
    }, 2000)
  }
}
