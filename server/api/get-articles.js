import {
  Router
} from 'express'
import * as Datastore from 'nedb-core'

const router = Router()

router.get('/get-articles', function(req, res, next) {
  let db = new Datastore({
    filename: __dirname + '/../db/article',
    autoload: true
  })

  db.find({}, (err, articles) => {
    return res.json(articles)
  })
})

export default router
