import {
  Router
} from 'express'
import * as Datastore from 'nedb-core'

const router = Router()

router.get('/get-article', function(req, res, next) {
  let db = new Datastore({
    filename: __dirname + '/../db/article',
    autoload: true
  })

  let identifier = req.query.identifier

  let article = db
    .findOne({
      identifier: parseInt(identifier)
    }, (error, article) => {
      return res.json(article)
    })
})

export default router
