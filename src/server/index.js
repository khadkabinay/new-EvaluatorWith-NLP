
      // require npm packages
      var path              = require('path')
      const express         = require('express')
      const app             = express()
      const bodyParser      = require('body-parser')
      var aylien            = require('aylien_textapi')
      const dotenv          = require('dotenv')
      dotenv.config();

      // set aylien API credentias

      var textapi = new aylien({
          application_id: process.env.API_ID,
          application_key: process.env.API_KEY
          });
          

      /* Middleware*/
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
      const cors = require('cors');
      app.use(cors());

      app.use(express.static('dist'))

      console.log(__dirname)


      app.get('/', function (req, res) {
          res.sendFile('dist/index.html')
      })



      // designate what port the app will listen to for incoming requests
      app.listen(8081, function () {
          console.log('Example app listening on port 8081!')
      })



      app.post('/sentiment', sendData);



      // receiveing url from users and sending back to end users
      function sendData(req, res) {

        let url = req.body.url

        //aylienApi
          textapi.sentiment({
            url: url,
            mode: 'document'
          },
          function(error, response) {
            if (error) {
              console.log(error)
            } else {
            res.send(response)
            }
          }
        )
      }
