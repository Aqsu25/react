<?php

namespace App\Http\Controllers;

use App\Models\TempImg;
use App\Traits\ImageUpload;
use Illuminate\Http\Request;


class TempController extends Controller
{
    use ImageUpload;
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
        $imageName = "";
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $file) {
                $imageName = $this->tempImage($file, 'temp');
                $temp = TempImg::create(['image' => $imageName]);
                $ids[] = $temp->id;
                $imageName = $temp->image;
            }
        }

        return response()->json([
            'status' => 200,
            'ids' => $ids,
            'image' => $imageName,
            'message' => "Image has uploaded successfully in temp!",
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
