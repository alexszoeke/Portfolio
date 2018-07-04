$(document).ready(function () {
    // $("#contact-form").on("submit", function submitContactForm(event) {
    //     event.preventDefault();
    //     var name = $("#name").val().trim();
    //     var email = $("#email").val().trim();
    //     var message = $("#message").val().trim();
    //     console.log(name);
    //     console.log(email);
    //     console.log(message);


    //     var form = {
    //         name: name,
    //         email: email,
    //         message: message
    //     };

    //     submitForm(form);


    // });

    // function submitForm(Contact) {
    //     $.post("/api/submit/", Contact, function () {
    //         $('#myModal').modal(options);
    //     });
    // }

    //     $("#close").on("click", function close() {
    //         window.location.href = "/contact";
    //     });

    // var data = {
    //     name: $("#name").val(),
    //     email: $("#email").val(),
    //     message: $("#message").val()
    // };
    // $.ajax({
    //     type: "POST",
    //     url: $("form").attr('action'),
    //     data: data,
    //     success: function(){
    //         $('.success').fadeIn(1000);
    //     }
    // });

    $("#contact-form").click(function() {
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();
        console.log(name);
        console.log(email);
        console.log(message);


        var form = {
            name: name,
            email: email,
            message: message
        };
        $.ajax({
            type: “POST”,
            url: "mandrillapp.com/api/1.0/messages/send.json",
            data: {
              ‘key’: ‘3OFrXm32FEuJs_wkCqqlzQ’,
              ‘message’: {
                ‘from_email’: "alex_szoeke@outlook.com’,
                ‘to’: [
                    {
                      ‘email’: ‘alexszoeke@gmail.com’,
                      ‘type’: ‘to’
                    }
                  ],
                ‘autotext’: ‘true’,
                ‘subject’: ‘New Website Email’,
                ‘html’: form,
              }
            }
           }).done(function(response) {
             console.log(response); // if you're into that sorta thing
           });
    })

    

});