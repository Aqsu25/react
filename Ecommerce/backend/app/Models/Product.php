<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
      protected $fillable = [
        'title',
        'description',
        'short_description',
        'price',
        'compare_price',
        'image',
        'category_id',
        'brand_id',
        'qty',
        'sku',
        'status',
        'is_Featured',
    ];

    protected $appends = ['image_Url'];

    public function getimageUrlAttribute(){
        if($this->image == ''){
            return "";
        }
        return asset(`/uploads/products/small`.$this->image);
    }
}
