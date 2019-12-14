    (function(){
            //console.log('HELLO!')
            $('#btn-contact-submit').click(function(event){
                if (event)
                    event.preventDefault()
                //grabbing input field values
                var visitor = {
                    name: $('#contact-form-name').val(),
                    email: $('#contact-form-email').val(),
                    message: $('#contact-form-message').val()
                }    
                //send it via ajax request to api subscriber as post request
                console.log('contact form submitted: ' + JSON.stringify(visitor)) 
                $.ajax({
                    type: 'POST',           //type of request:POST
                    url: '/api/subscriber', //sending request       
                    data: visitor,
                    sucess: function(response){
                        
                    },
                    error: function(response){

                    }
                })   
            })

    })()
