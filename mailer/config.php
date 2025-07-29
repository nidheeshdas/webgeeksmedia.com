<?php
// config.php
require __DIR__ . '/vendor/autoload.php';

use PayPalCheckoutSdk\Core\PayPalHttpClient;
use PayPalCheckoutSdk\Core\SandboxEnvironment as Environment;
// For production, use PayPalCheckoutSdk\Core\ProductionEnvironment as Environment

class PayPalClient {
    public static function client(): PayPalHttpClient {
        $clientId     = 'ATBeztKZNDgAz9JdBoJkTRc3HfU3t_7iwIeDvs8S1lkPtM0wiN2lRp_JqRgiWhrXSYjTWoqmrVteeZWD';
        $clientSecret = 'EDm4pzrG-9SKy_Wq0dt18KFg5HczJlu50Hx0KIqfwKRsHZMBAAkfVzWkSn_vI6l9UKmRgnwAy5ZeA13i';
        $environment  = new Environment($clientId, $clientSecret);
        return new PayPalHttpClient($environment);
    }
}
