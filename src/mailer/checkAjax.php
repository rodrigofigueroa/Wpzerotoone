<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';
    $mail = new PHPMailer(true);
    $errores ='';
    $getData = file_get_contents('php://input');
    $decode = json_decode($getData, true);
    var_dump($decode);
    if($decode !== ''){
        $nombre = $decode[nombre];
         $email = $decode[correo];
         $numero = $decode[numero];
         $mensaje = $decode[mensaje];
         if(!empty($nombre)){
            $nombre = trim($nombre);
            $nombre = htmlspecialchars($nombre);
            $nombre = stripcslashes($nombre);
            $nombre = filter_var($nombre, FILTER_SANITIZE_STRING);
         }else{
             $errores = 'Algo salio mal vuelve a intentarlo';
         }
         if(!empty($email)){
                // $email = filter_var($mail, FILTER_SANITIZE_EMAIL);
         }else{
             $errores = 'Algo salio mal vuelve a intentarlo';
         }
         if(!empty($numero)){
            $numero = filter_var($numero, FILTER_SANITIZE_STRING);
         }else{
            $errores = 'Algo salio mal vuelve a intentarlo';
        }

        if(!empty($mensaje)){
            // $mensaje = filter_var($mensaje, FILTER_SANITIZE_STRING);
         }else{
            $errores = 'Algo salio mal vuelve a intentarlo';
        }
        if(!$errores){
            $enviarA = "desarrollo274@gmail.com";
            $asunto = 'Detalles de algun posible cliente';
            $mensaje_p = "de: " . $nombre . "<br>";
            // $mensaje_p .= "Correo " . $email . "\n";
            $mensaje_p .= "Numero :" . $numero . "<br>";
            $mensaje_p .= "Mensaje :" . $mensaje . "<br>";
            
            try {
                //Server settings
                $mail->SMTPDebug = 0;                                       // Enable verbose debug output
                $mail->isSMTP();                                            // Set mailer to use SMTP
                $mail->Host       = 'smtp.mailbox.org';  // Specify main and backup SMTP servers
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = 'contactoweb@mailbox.org';                     // SMTP username
                $mail->Password   = '2_3q5065143GNUd';                               // SMTP password
                $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
                $mail->Port       = 587;                                    // TCP port to connect to

                //Recipients
                $mail->setFrom('contactoweb@mailbox.org', 'Mailer');
                $mail->addAddress('desarrollo274@gmail.com', 'Joe User');     // Add a recipient
                // $mail->addAddress('ellen@example.com');               // Name is optional
                // $mail->addReplyTo('info@example.com', 'Information');
                $mail->addCC('cc@example.com');
                $mail->addBCC('bcc@example.com');

                // Content
                $mail->isHTML(true);                                  // Set email format to HTML
                $mail->Subject = $asunto . '\n';
                $mail->Body    = $mensaje_p.'  ' . 'correo: '. $email;

                $mail->send();
            } catch (Exception $e) {
                echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            }
        }

    }else{
        echo false
    }