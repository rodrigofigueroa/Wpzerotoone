<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
    $errores ='';
  if(isset($_POST['btn-enviar'])){
          $nombre = $_POST[nombre];
         $email = $_POST[email];
         $numero = $_POST[numero];
         $mensaje = $_POST[mensaje];
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
      header('location: http://localhost/avni/html/index.php');
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Avini Seguridad e Higiene</title>
    
    <style>
        @import 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap';

        *{
            padding: 0;margin:0;
            box-sizing: border-box;
        }
        body{
            height: 100vh;
            background: url("../img/industry/1.jpeg");
            position:relative;
            font-family: 'Lato';
        }
        body:after {
            content: '';
            width: 100%;
            height: 100%;
            background: #fff;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            opacity: 0.8; }
        .thank{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items:center;
            z-index:1;
        }
        .center {
            text-align: center;
        }
    </style>
</head>
<body>
    <section class="thank">
        <div class="center">
            <figure><img src="./img/logo.png" alt="lgo"/></figure></a>
                <?php if(!empty(true)):?>
                    <h2> <?php echo $errores;?> </h2>
                <?php endif;?>
                <?php if(empty($errores)):?>
                    <h2> ¡Gracias! <?php echo $nombre?> <br> Nos pondremos en contacto contigo </h2>
                <?php endif;?>
                <p>Te redireccionaremos al Home en seguida. Si no puedes redireccionar click <a href="./index.php">aquí</a>.</p>
        </div>
    </section>
    <script>
        setTimeout(function(){
            window.location = "./index.php";
            }, 10000);
    </script>
</body>
</html>