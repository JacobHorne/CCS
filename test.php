<?php

require_once("include/class.phpmailer.php");

$mailer = new PHPMailer();
$name = $_POST["name"];
$email = $_POST["email"];
$phonenumber = $_POST["phonenumber"];
$message = $_POST["message"];

$mailer->Body = "We got a message from " . $name . $message . $phonenumber . "!";
$mailer->AddAddress("jacobhorne@gmail.com");
$mailer->Send();
echo "Email sent!";