module.exports = (app) => {

  app.get('/api/:date?', (req, res) => {
    if (!req.params.date) {
      let currDate = new Date()
      res.json({
        "unix": currDate.getTime(),
        "utc": currDate.toUTCString()
      })
    }
    else {
      let date = req.params.date
      let currDate = new Date(date)
      if (currDate.getTime()) {
        res.json({
          "unix": currDate.getTime(),
          "utc": currDate.toUTCString()
        })
      }
      else {
        date = parseInt(date)
        currDate = new Date(date)
        if (currDate.getTime()) {
          res.json({
            "unix": currDate.getTime(),
            "utc": currDate.toUTCString()
          })
        }
        else {
          res.json({
            "error": "Invalid Date"
          })
        }
      }
    }
  })
}