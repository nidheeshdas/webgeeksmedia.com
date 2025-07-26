<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_POST || true) {
    $name = $_POST['name'] ?? "test name";
    $email = $_POST['email'] ?? "nidheeshdas@gmail.com";
    $subject = $_POST['subject'] ?? "test subject";
    $message = $_POST['message'] ?? "test message";

    // Validate inputs
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'richardmorse441@gmail.com';  // Your Gmail address
        $mail->Password   = 'hdfn cman koza gdrw';     // Your Gmail App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('richardmorse441@gmail.com', 'Contact Form');
        $mail->addAddress('richardmorse441@gmail.com');  // Where to send the email
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'WGM Services Contact: ' . $subject;
        $mail->Body    = "
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>
        ";

        $mail->send();
        // echo 'Message has been sent successfully!';

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
