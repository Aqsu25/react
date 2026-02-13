<?php

namespace App\Http\Controllers;

use App\Models\TempImg;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class TempController extends Controller
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
        $request->validate([
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $ids = [];
        $name = "";
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $file) {
                $name = time() . '_' . $file->getClientOriginalName();
                $file->move(public_path('/uploads/temp/'), $name);
                $temp = TempImg::create(['image' => $name]);
                $ids[] = $temp->id;
                $name = $temp->image;
            }
        }

        return response()->json([
            'status' => 200,
            'ids' => $ids,
            'image' => $name,
            'message' => "Image has uploaded successfully!",
        ]);
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
}
