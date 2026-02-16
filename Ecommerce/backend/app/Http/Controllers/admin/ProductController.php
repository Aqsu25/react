<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImg;
use App\Models\TempImg;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('product_images')->
        orderBy('created_at', 'ASC')->get();
        return response()->json([
            'status' => 200,
            'data' => $products,
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
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3',
            'description' => 'nullable',
            'short_description' => 'nullable',
            'price' => 'required|numeric',
            'compare_price' => 'nullable|numeric',
            'category_id' => 'required|exists:categories,id',
            'brand_id' => 'nullable|exists:brands,id',
            'qty' => 'nullable|integer',
            'sku' => 'required|unique:products,sku',
            'status' => 'required|integer',
            'is_Featured' => 'required|in:yes,no',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,gif',
            'gallery' => 'nullable|array'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        $product = Product::create([
            'title' => $request->title,
            'description' => $request->description,
            'short_description' => $request->short_description,
            'price' => $request->price,
            'compare_price' => $request->compare_price,
            'image' => null,
            'category_id' => $request->category_id,
            'brand_id' => $request->brand_id,
            'qty' => $request->qty,
            'sku' => $request->sku,
            'status' => $request->status,
            'barcode' => $request->barcode,
            'is_Featured' => $request->is_Featured,
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('/uploads/products/'), $imageName);
            $product->image = $imageName;
            $product->save();
        }

        if (!empty($request->gallery) && is_array($request->gallery)) {
            foreach ($request->gallery as $key => $tempId) {
                $tempImg = TempImg::find($tempId);
                if (!$tempImg) continue;

                $imageName = time() . '_' . $tempImg->image;
                $oldPath = public_path('/uploads/temp/' . $tempImg->image);
                $newPath = public_path('/uploads/product/' . $imageName);

                if (file_exists($oldPath)) {
                    rename($oldPath, $newPath);

                    ProductImg::create([
                        'product_id' => $product->id,
                        'name' => $imageName
                    ]);

                    if ($key == 0 && !$product->image) {
                        $product->image = $imageName;
                        $product->save();
                    }

                    $tempImg->delete();
                }
            }
        }

        return response()->json([
            'status' => 200,
            'message' => 'Product created successfully',
            'data' => $product
        ]);
    }

    // 


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::with('product_images')->findOrFail($id);

        return response()->json([
            'status' => 200,
            'data' => $product,
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::findOrFail($id);
        return response()->json([
            'status' => 200,
            'data' => $product,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $product = Product::findOrFail($id);
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3',
            'description' => 'nullable',
            'short_description' => 'required',
            'price' => 'required|numeric',
            'compare_price' => 'nullable|numeric',
            'category_id' => 'required|exists:categories,id',
            'brand_id' => 'nullable|exists:brands,id',
            'qty' => 'nullable|integer',
            'sku' => 'required|unique:products,sku,' . $id,
            'status' => 'required|integer',
            'is_Featured' => 'required|in:yes,no',
            'image' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }
        $product->update([

            'title' => $request->title,
            'description' => $request->description,
            'short_description' => $request->short_description,
            'price' => $request->price,
            'compare_price' => $request->compare_price,
            'image' => $request->image,
            'category_id' => $request->category_id,
            'brand_id' => $request->brand_id,
            'qty' => $request->qty,
            'sku' => $request->sku,
            'status' => $request->status,
            'is_Featured' => $request->is_Featured,
        ]);


        return response()->json([
            'status' => 200,
            'message' => "Product Updated Successfully!",
            'data' => $product,
        ], 200);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::findOrFail($id);

        if ($product == null) {
            return response()->json([
                'status' => 404,
                'message' => "Product Not Found!",
                'data' => []
            ], 404);
        }
        $product->delete();
        return response()->json([
            'status' => 200,
            'message' => "Product Deleted Successfully!",

        ], 200);
    }
}
