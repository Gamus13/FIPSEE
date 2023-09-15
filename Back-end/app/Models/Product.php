<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    protected $fillable = [
        'titre',
        'Secteur',
        'Montant_de_levée',
        'Monnaie',
        'Duree_de_la_levée',
        'description',
        'images'
    ];

    // protected $casts = [
    //     'images' => 'array'
    // ];
}
