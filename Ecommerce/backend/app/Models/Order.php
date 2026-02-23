<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'sub_total',
        'shipping',
        'grand_total',
        'discount',
        'payment_status',
        'status',
        'phone_num',
        'city',
        'state',
        'zip',
    ];
}
