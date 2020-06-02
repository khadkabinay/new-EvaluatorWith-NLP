
   
            // importing postData function
          import { postData } from './postData.js'

            // handleSubmit function 

           
            export function handleSubmit(event) {
                         event.preventDefault()

              // input value that is coming from user (only Url)
              let formText = document.getElementById('name').value
              let errorContent = document.getElementById("errorContent")
                
              // checking if url is valid
                 if(inputValidate(formText)){

                    // call postData function 
                   postData('http://localhost:8081/sentiment',{ url:formText })
                  .then(function(res) {
                    let data = res
              
                    //  fetched data inserting into dom will be seen on the browser
                  document.getElementById('Polarity').innerHTML = ` ${data.polarity}`
                  document.getElementById('Polarity-con').innerHTML = ` ${data.polarity_confidence}`
                  document.getElementById('Subjectivity-con').innerHTML = ` ${data.subjectivity_confidence}` 
                })


                }else{
                   let errMsg = "Please! enter valid Url [Must start with http:// or https://]"
                        errorContent.innerHTML = errMsg
                      
                   }
               
                  }

    

     
            
            // define form validation for http or https
     
     
          export function inputValidate(valueOfInput){
                let inputUrl = valueOfInput;
                if (inputUrl.indexOf("http://") == 0 || inputUrl.indexOf("https://") == 0) {
                return true;
                
               }
            }


    