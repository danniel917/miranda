<?php

//Seguridad
function validar_data($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    return $data;
}

if (
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['msg']) && !empty($_POST['msg'])) {
    
//Llamando datas
$name = validar_data($_POST['name']);
$email = validar_data($_POST['email']);
$msg = validar_data($_POST['msg']);

// Datos para el correo
$emailDestino = 'info@mirandamassagetherapy.ca';
$asunto = "Email from website";

$message = "From: " . $name . "\n";
$message .= "Email: " . $email . "\n";
$message .= "Message: " . $msg;

$header = "From: info@mirandamassagetherapy.ca" . "\r\n";
$header .= "Reply-To: info@mirandamassagetherapy.ca" . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion();

//Enviando mensaje
$emailSent = mail($emailDestino, $asunto, $message, $header);

}

if ($emailSent) {
    echo "<span class='success'>Your message have been sent correctly!</span>";
    
} else {
    echo "<span class='error'> Error: Email wasn't sent! </span>";
}

?>