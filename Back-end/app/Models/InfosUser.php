<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfosUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'sexe',
        'nationalité',
        'date_de_naissance',
        'lieu_de_residence',
        'entreprise',
        'site_internet',
        'profil',
        'image'
    ];

    public function user()
    {
        return $this -> belongsTo(User::class,'id');
    }
}
