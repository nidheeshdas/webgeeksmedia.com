<?php
// cancel.php
echo "<h1>Payment Canceled</h1>";
echo "<p>You have canceled the payment. <a href='create_order.php'>Try again</a>.</p>";

header("/payment-error?message=PaymentCancelled");
exit();
