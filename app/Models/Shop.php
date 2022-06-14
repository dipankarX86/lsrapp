<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;
    
    // Relationship to shop
    // public function user()
    // {
    //     return $this->belongsTo(User::class, 'user_id');
    // }
    
    // Fillables preset
    protected $fillable = [
        'email',
        'phone',

        'addr_line_1',
        'addr_line_1',
        'addr_city',
        'addr_state',
        'addr_country',
        'addr_postal_code',

        'lat_lon',

        'pan',
        'gst',
        'trade_license',

        'owner_name',
        'owner_email',
        'owner_phone',

        'owner_addr_line_1',
        'owner_addr_line_1',
        'owner_addr_city',
        'owner_addr_state',
        'owner_addr_country',
        'owner_addr_postal_code',
    ];

}
