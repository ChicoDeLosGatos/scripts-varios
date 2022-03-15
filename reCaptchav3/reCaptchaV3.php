<?php
    // ...

    $token = $_POST['token']; // El token que ha enviado el formulario y hemos escrito en el script del lado del frontend.
    $secret = 'TU_CLAVE_SECRETA'; // El código secreto que genera en conjunto al token a la web de google para el captcha.
    $url = 'https://www.google.com/recaptcha/api/siteverify'; // Sitio web del challenge para el captcha.

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('secret' => $secret, 'response' => $token)));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    if ($response == false) 
        die (curl_error($ch));
    curl_close($ch);
    $arrResponse = json_decode($response, true);
    
    if( $arrResponse['success'] == '1'    // Si la consulta se ha realizado sin problemas...
            &&  $arrResponse["action"] == 'auth_register' // tenía la acción que toca...
            && $arrResponse["score"] >= 0.5 // y ha sacado una nota mayor a 0.5 (mínimo 0 máximo 1).
        ){
            /** Aquí se debe de introducir el código que debe de ejecutar si pasa el challenge. */
            
            // print_r('He aprobado!!');
        }

    //...
?>
