<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\ShippingCharge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ShippingChargeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getShipped()
    {
        $shipping = ShippingCharge::first();
        return response()->json([
            'status' => 200,
            'data' => $shipping,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function getUpdate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'shipping_charge' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        // find id
        $shipping = ShippingCharge::updateOrCreate(
            [
                'id' => 1,
            ],
            [
                'shipping_charge' => $request->shipping_charge,
            ]
        );

        return response()->json([
            'status' => 200,
            'message' => "Shipping-Charge Created Successfully!",
            'data' => $shipping,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
