<?php

namespace App\Models;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entrepreneurs extends Model
{
    use HasFactory;

    protected $fillable = [
        'sexe',
        'nationalité',
        'lieu_de_residence',
        'image_cni',
        'téléphone',
        'date_de_naissance',
        'siteweb',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
