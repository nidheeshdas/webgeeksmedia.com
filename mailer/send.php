<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Cloudflare Turnstile verification
    $turnstile_response = $_POST['cf-turnstile-response'] ?? null;
    if (!$turnstile_response) {
        echo "Turnstile token not found.";
        exit;
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://challenges.cloudflare.com/turnstile/v0/siteverify");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
        'secret' => '0x4AAAAAABmlzH060FfaMi4h6GrqLrzeQn0', // Replace with your secret key
        'response' => $turnstile_response,
    ]));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $result = json_decode($response, true);

    if (!isset($result['success']) || $result['success'] !== true) {
        echo "Turnstile verification failed. Res=" . $response;
        exit;
    }

    // Sanitize and validate inputs
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

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
        echo 'Message has been sent successfully!';

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
