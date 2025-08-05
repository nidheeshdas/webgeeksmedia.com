<?php
// config.php
require __DIR__ . '/vendor/autoload.php';

use PayPalCheckoutSdk\Core\PayPalHttpClient;
// use PayPalCheckoutSdk\Core\SandboxEnvironment as Environment; // For Sandbox
use PayPalCheckoutSdk\Core\ProductionEnvironment as Environment; // For production

class PayPalClient {
    public static function client(): PayPalHttpClient {
        // $clientId     = 'ATBeztKZNDgAz9JdBoJkTRc3HfU3t_7iwIeDvs8S1lkPtM0wiN2lRp_JqRgiWhrXSYjTWoqmrVteeZWD';
        // $clientSecret = 'EDm4pzrG-9SKy_Wq0dt18KFg5HczJlu50Hx0KIqfwKRsHZMBAAkfVzWkSn_vI6l9UKmRgnwAy5ZeA13i';

        $clientId = 'AVjtdOcb_yNFUTx_4iKoX4sJ-aSfRbaEKr9OZQxYKZwiTRT50E3cm-WrbotplxKpaR7Kef9wc784pEya';
        $clientSecret = 'EM3gFfvUvU-KH-Rk4QabNQC7UN0I7y_wlvMur52dBXO4Guo5f13TRMpCergZBORgUpEVaerfG5r41qDH';

        $environment  = new Environment($clientId, $clientSecret);
        return new PayPalHttpClient($environment);
    }
}
