<?php
// create_order.php
require __DIR__ . '/config.php';

use PayPalCheckoutSdk\Orders\OrdersCreateRequest;

$client = PayPalClient::client();

$plan = $_GET['plan'];

function getAmount($plan) {
    switch($plan) {
        case 'essential':
            $amount = '49.00';
            break;
        case 'pro':
            $amount = '79.00';
            break;
        default:
            $amount = '49.00';
            break;
    }
    return $amount;
}

// Build request
$request = new OrdersCreateRequest();
$request->prefer('return=representation');
$request->body = [
    'intent' => 'CAPTURE',
    'purchase_units' => [[
        'amount' => [
            'currency_code' => 'USD',
            'value'         => getAmount($plan),
        ]
    ]],
    'application_context' => [
        'return_url' => 'https://webgeeksmedia.com/mailer/capture_order.php',
        'cancel_url' => 'https://webgeeksmedia.com/mailer/cancel.php'
    ]
];

try {
    $response = $client->execute($request);
    // Extract approval link
    foreach ($response->result->links as $link) {
        if ($link->rel === 'approve') {
            header("Location: {$link->href}");
            exit;
        }
    }
    throw new Exception('No approval link found.');
} catch (Exception $e) {
    echo "Error creating order: {$e->getMessage()}";
}
