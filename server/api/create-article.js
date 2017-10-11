import {
  Router
} from 'express'
import * as Datastore from 'nedb-core'

const router = Router()

router.post('/administration/create', function (req, res, next) {
  let db = new Datastore({
    filename: __dirname + '/../db/article',
    autoload: true
  })

  let identifier = req.body.identifier
  let title = req.body.title
  let text = req.body.text
  let createdDate

  db
    .findOne({
      identifier
    }, (error, article) => {
      if (!article) {
        createdDate = new Date()

        db
          .insert({
            identifier,
            title,
            text,
            createdDate
          }, error => {
            if (!error) return res.sendStatus(200)
          })
      } else {
        createdDate = req.body.createdDate

        db
          .update({
            identifier
          }, {
            identifier,
            title,
            text,
            createdDate
          }, error => {
            if (!error) return res.sendStatus(200)
          })
      }

      db.persistence.compactDatafile()
    })
})

export default router
