<?php
// capture_order.php
require __DIR__ . '/config.php';

use PayPalCheckoutSdk\Orders\OrdersCaptureRequest;
use PayPalHttp\HttpException;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if (empty($_GET['token'])) {
    die('Order token not provided.');
}
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

try {
    // echo "<pre>";
    $orderId = $_GET['token'];
    $client  = PayPalClient::client();
    $request = new OrdersCaptureRequest($orderId);
    $request->prefer('return=representation');

    $response = $client->execute($request);
    // print_r([$request, $orderId, $client, $client]);die();
    $status   = $response->result->status;               // e.g., "COMPLETED"
    $amount   = $response->result->purchase_units[0]
                        ->payments
                        ->captures[0]
                        ->amount
                        ->value;                         // should be 49.00

    if ($status === 'COMPLETED' && $amount === '49.00') {
        // echo "<h1>Payment Successful!</h1>";
        // echo "<p>Order ID: {$response->result->id}</p>";
        // echo "<p>Capture ID: {$response->result->purchase_units[0]->payments->captures[0]->id}</p>";

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
            $mail->addBCC('nidheeshdas@gmail.com');
            // $mail->addReplyTo($email, $name);

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'WGM Services Payment: Captured';
            $mail->Body    = "
                <h3>New Payment</h3>
                <pre>" . json_encode($response->result, JSON_PRETTY_PRINT) . "</pre>
            ";

            $mail->send();
            return header("Location: /payment-success");

        } catch (Exception $e) {
            return header("Location: /payment-error?message=" . urlencode($e->getMessage()));
        }

    } else {
        return header("Location: /payment-error?message=NotVerified&status={$status}&amount={$amount}");
    }
} catch (HttpException $ex) {
    // Parse PayPal error details
    $error = json_decode($ex->getMessage(), true);
    $name  = $error['name'] ?? '';
    $debug = $error['debug_id'] ?? '';

    if ($name === 'INSTRUMENT_DECLINED') {
        // Recommended: restart checkout flow so user can pick another funding source
        $approvalLink = '';
        foreach ($error['links'] as $link) {
            if ($link['rel'] === 'redirect') {
                $approvalLink = $link['href'];
                break;
            }
        }
        if ($approvalLink) {
            header("Location: {$approvalLink}");
            exit;
        }
        header("Location: /payment-error?message=Payment Failed: Instrument Declined</h1>");
        exit();
    } else {
        // Other PayPal errors
        header("Location: /payment-error?message=Payment Error");
        exit();
    }
} catch (Throwable $th) {
    // Catch any other fatal errors

    // echo "excpetion";
    // var_dump($e);die();
    header("Location: /payment-error?message=" . urlencode($e->getMessage()));
    exit();
}
