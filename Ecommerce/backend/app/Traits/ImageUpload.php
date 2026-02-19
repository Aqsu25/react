<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;

trait ImageUpload
{
    public function tempImage($file, $folder)
    {
        $imageName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();

        $file->storeAs($folder, $imageName, 'public');

        return $imageName;
    }
    public function deleteImage($file, $folder)
    {
        $path = $folder . '/' . $file;

        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
            return true;
        }

        return false;
    }
}
