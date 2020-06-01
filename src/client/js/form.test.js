
    
            // importing funtions
                const handleSubmit = require('./formHandler');
                const postData = require("./postData")


            // checking if both function exit
            
            //  handleSubmit Data
                test('test if function exits', ()=>{ 
                        expect(handleSubmit).toBeDefined()

                });

                // postData function
                test('test if function exits', ()=>{ 
                        expect(postData).toBeDefined()

                });

