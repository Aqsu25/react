<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\ShippingCharge;


class ShippingController extends Controller
{
    public function getShippedUser()
    {
        $shipping = ShippingCharge::first();
        return response()->json([
            'status' => 200,
            'data' => $shipping,
        ]);
    }
}
