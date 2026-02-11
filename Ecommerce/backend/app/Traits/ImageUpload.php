<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait ImageUpload
{
    public function tempImage($file, $folder)
    {
        $imageName = time() . '.' . $file->getClientOriginalExtension();
        $file->storeAs('public/' . $folder, $imageName);
        return $imageName;
    }

    public function tempDeleteImg($folder, $imageName)
    {
        Storage::delete('public/' . $folder . '/' . $imageName);
    }
}
