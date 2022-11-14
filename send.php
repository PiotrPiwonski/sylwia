<?php 

if (isset($_POST['submit'])) {
  require 'phpmailer/PHPMailerAutoload.php';

  $mail = new PHPMailer();
  $mail->setFrom($_POST['email']);
  $mail->addAddress('piotr.piwonski@vp.pl');
  
  $mail->isHTML(true);

  $user_name = $_POST['username'];

  $mail->Subject = 'Formularz kontaktowy ('. $user_name . ')';

  $institutionname = $_POST['institutionname'];
  $options = $_POST['option'];
  $contents = $_POST['contents'];

  $mail->Body = "
    <html>
    <h2><b>Imię i Nazwisko: ".$user_name." </b></h2><br>
    <h2><b>Instytucja: ".$institutionname." </b></h2><br>
    <h2><b>Warsztaty: ".$options." </b></h2><br>
    <h2><b>Treść: <br> ".$contents." </b></h2>
    </html>";

  
  if ($mail->send()) {
echo "Wysłane";
  }else {
    echo "Nie udało się " . $mail->ErrorInfo;
  }
}

?>