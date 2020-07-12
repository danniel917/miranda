// $(document).ready(function(){
//     $(".contact-form").bind("submit", function(){
        
        
//         $.ajax({
//             //this hace referencia al formulario
//             //captura method
//             type: $(this).attr("method"),
//             url: $(this).attr("action"),
//             //Captura todos los campos
//             data: $(this).serialize(),
//             //respuesta 200
//             success:function(res){
//                 if(res == "OK"){
//                     $("#alert").removeClass("hide").removeClass('alert-danger').removeClass('alert-success').addClass("alert-success");
//                     $(".respuesta").html("Enviado!");
//                     $(".mensaje-alerta").html("El mensaje ha sido enviado correctamente.")

//                 }else {
//                     $("#alert").removeClass("hide").removeClass('alert-danger').removeClass('alert-success').addClass("alert-danger");
//                     $(".respuesta").html("Error!");
//                     $(".mensaje-alerta").html("El mensaje no se pudo enviar.")
//                 }
//             },
//             //Capturar error
//             error: function(){
//                 $("#alert").removeClass("hide").removeClass('alert-danger').removeClass('alert-success').addClass("alert-danger");
//                 $(".respuesta").html("Error!");
//                 $(".mensaje-alerta").html("El mensaje no se pudo enviar.")
                

//             }


//         });
        
        
//         return false;
//     })
// })



$('#send').click(function(){
    $('#send').prop('disabled', true);
    $.ajax({
        url: 'send.php',
        type: 'POST',
        data: $('.contact-form').serialize()
    })
    .done(function(res){
        $('#send').prop('disabled', false);
        $('#alert').html(res).removeClass('hide');
        $('.contact-form').trigger('reset');
    })
    .fail(function(){
        console.log('error');
    })
    .always(function(){
        console.log('Complete');
    });
            // return false;
})