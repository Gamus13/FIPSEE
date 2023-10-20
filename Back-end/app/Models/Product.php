<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'titre',
        'Secteur',
        'Status',
        'Montant_de_levée',
        'Monnaie',
        'Duree_de_la_levée',
        'description',
        'images'
    ];

    public function progressBar(): BelongsTo
    {
        return $this->belongsTo(ProgressBar::class);
    }

    public function user()
    {
        return $this -> belongsTo(User::class,'id');
    }
}
