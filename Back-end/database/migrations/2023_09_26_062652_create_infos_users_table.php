<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('infos_users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('sexe');
            $table->text('nationalité');
            $table->string('date_de_naissance');
            $table->text('lieu_de_residence');
            $table->string('entreprise');
            $table->text('site_internet');
            $table->text('profil');
            $table->text('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('infos_users');
    }
};
