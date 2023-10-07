<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfosUser extends Model
{
    use HasFactory;
    protected $fillable = ['sexe', 'nationalité', 'date_de_naissance', 'lieu_de_residence', 'entreprise', 'site_internet','profil', 'image'];
}
