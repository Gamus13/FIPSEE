<?php
// namespace AppHttpControllers;
namespace App\Http\Controllers;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
// use IlluminateHttpRequest;
use App\Models\Payment;

use Omnipay\Omnipay;
use Omnipay\Common\CreditCard;
// use OmnipayOmnipay;
use AppPayment;

class PaymentController extends Controller
{
    public $gateway;

    public function __construct()
    {
        $this->gateway = Omnipay::create('AuthorizeNetApi_Api');
        $this->gateway->setAuthName(env('ANET_API_LOGIN_ID'));
        $this->gateway->setTransactionKey(env('ANET_TRANSACTION_KEY'));
        $this->gateway->setTestMode(true); //comment this line when move to 'live'
    }

    public function index()
    {
        $payments = Payment::all(); // Récupère toutes les lignes de la table "payments"
        return response()->json(['payments' => $payments]);
    }

    public function indexByProductId(Request $request, $id_product)
    {
        $payments = Payment::where('id_product', $id_product)->get();
        return response()->json(['payments' => $payments]);
    }

    public function calculateSumAndCountByProductId($id_product)
    {
        $payments = Payment::where('id_product', $id_product)->get();

        $totalAmount = $payments->sum('amount');
        $count = $payments->count();

        return response()->json([
            'total_amount' => $totalAmount,
            'count' => $count
        ]);
    }


    public function charge(Request $request)
    {
        try {
            $creditCard = new \Omnipay\Common\CreditCard([
                'number' => $request->input('cc_number'),
                'expiryMonth' => $request->input('expiry_month'),
                'expiryYear' => $request->input('expiry_year'),
                'cvv' => $request->input('cvv'),
            ]);

            // Generate a unique merchant site transaction ID.
            $transactionId = rand(100000000, 999999999);

            $response = $this->gateway->authorize([
                'amount' => $request->input('amount'),
                'currency' => 'USD',
                'transactionId' => $transactionId,
                'card' => $creditCard,
            ])->send();

            if($response->isSuccessful()) {

                // Captured from the authorization response.
                $transactionReference = $response->getTransactionReference();

                $response = $this->gateway->capture([
                    'amount' => $request->input('amount'),
                    'currency' => 'USD',
                    'transactionReference' => $transactionReference,
                    ])->send();

                $transaction_id = $response->getTransactionReference();
                $amount = $request->input('amount');

                // Insert transaction data into the database
                $isPaymentExist = Payment::where('transaction_id', $transaction_id)->first();

                if(!$isPaymentExist)
                {
                    $payment = new Payment;
                    $payment->transaction_id = $transaction_id;
                    $payment->payer_email = $request->input('email');
                    $payment->amount = $request->input('amount');
                    $payment->currency = 'USD';
                    $payment->payment_status = 'Captured';
                    $payment->user_id = $request->input('user_id');
                    $payment->id_product = $request->input('id_product');
                    $payment->save();
                }

                return "Payment is successful. Your transaction id is: ". $transaction_id;
            } else {
                // not successful
                return $response->getMessage();
            }
        } catch(Exception $e) {
            return $e->getMessage();
        }
    }
}
