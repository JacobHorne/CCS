<?php

require_once("include/class.phpmailer.php");

$mail = new PHPMailer();

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];


$mail->Subject = "CCS Website Message";
$mail->Body = "Contact:   " . $name . "<br>" . " Phone:   " . $phone . "<br>" . " Email:   " . $email . "<br>" . " Message:   " . "<br>" . $message;
$mail->AltBody = $message;
$mail->addAddress("info@ccscable.com");
$mail->setFrom($email, $name);


if(!$mail->send()) {
    header('Location: index.html?email_sent=false');
} else {
    header('Location: index.html?email_sent=true');
}
