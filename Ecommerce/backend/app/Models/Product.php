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
    // product-images
    // function productImages()
    // {
    //     return $this->hasMany(ProductImg::class);
    // }

    public function product_images()
    {
        return $this->hasMany(ProductImg::class);
    }
}
