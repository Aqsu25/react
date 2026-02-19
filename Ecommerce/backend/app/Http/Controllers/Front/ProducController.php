<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProducController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    // latestproduct
    public function latestProduct()
    {
        $latestProduct = Product::orderBy('created_at', 'DESC')->where('status', 1)->limit(6)->get();

        return response()->json([
            'status' => 200,
            'data' => $latestProduct,
        ]);
    }
    // featured
    public function featuredProduct()
    {
        $featuredProduct = Product::orderBy('created_at', 'DESC')->where('status', 1)->where('is_Featured', 'yes')->limit(8)->get();

        return response()->json([
            'status' => 200,
            'data' => $featuredProduct,
        ]);
    }
    // getcategories
    public function getCategories()
    {
        $categories = Category::orderBy('created_at', 'DESC')->where('status', 1)->get();

        return response()->json([
            'status' => 200,
            'data' => $categories,
        ]);
    }

    // getbrand
    public function getBrands()
    {
        $brand = Brand::orderBy('created_at', 'DESC')->where('status', 1)->get();

        return response()->json([
            'status' => 200,
            'data' => $brand,
        ]);
    }
}
