const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

const server = app.listen(PORT, () => {
  //eslint-disable-next-line no-console
  console.log('server started on port 5000')
})

  //eslint-disable-next-line no-console
console.log('Adress Info',server.address());


