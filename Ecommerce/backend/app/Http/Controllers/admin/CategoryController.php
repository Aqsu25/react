<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::orderBy('created_at', 'ASC')->get();
        return response()->json([
            'status' => 200,
            'data' => $categories,
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
            'name' => 'required|min:3|unique:categories',
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }
        $category = Category::create(
            [
                'name' => $request->name,
                'status' => $request->status,
            ]
        );
        return response()->json([
            'status' => 200,
            'message' => "Category Created Successfully!",
            'data' => $category,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $category = Category::findOrFail($id);

        if ($category == null) {
            return response()->json([
                'status' => 404,
                'message' => "Category Not Found!",
                'data' => []
            ], 404);
        }
        return response()->json([
            'status' => 200,
            'data' => $category,
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::findOrFail($id);
        return response()->json([
            'data' => $category,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::findOrFail($id);

        if ($category == null) {
            return response()->json([
                'status' => 404,
                'message' => "Category Not Found!",
                'data' => []
            ], 404);
        }
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3|unique:categories,name,' . $id,
            'status' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }
        $category->update([
            'name' => $request->name,
            'status' => $request->status,
        ]);

        return response()->json([
            'status' => 200,
            'message' => "Category Updated Successfully!",
            'data' => $category,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);

        if ($category == null) {
            return response()->json([
                'status' => 404,
                'message' => "Category Not Found!",
                'data' => []
            ], 404);
        }
        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => "Category Deleted Successfully!",

        ], 200);
    }
}
