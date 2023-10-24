<?php
namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    public function user()
    {
        return $this -> belongsTo(User::class,'id');
    }

    // public function product()
    // {
    //     return $this->belongsTo(Product::class);
    // }

    public function products()
    {
        return $this->belongsTo(Product::class, 'id_product');
    }

}
