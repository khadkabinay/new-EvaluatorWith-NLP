
   
            // importing postData function
          import { postData } from './postData.js'

            // handleSubmit function 

           
            export function handleSubmit(event) {
                         event.preventDefault()

              // input value that is coming from user (only Url)
              let formText = document.getElementById('name').value
            
              // call postData function 
               postData('http://localhost:8081/sentiment',{ url:formText })
               .then(function(res) {
                let data = res
           
                //  fetched data inserting into dom will be seen on the browser
              document.getElementById('Polarity').innerHTML = ` ${data.polarity}`
              document.getElementById('Polarity-con').innerHTML = ` ${data.polarity_confidence}`
              document.getElementById('Subjectivity-con').innerHTML = ` ${data.subjectivity_confidence}` 
             })
           
            }

    


     