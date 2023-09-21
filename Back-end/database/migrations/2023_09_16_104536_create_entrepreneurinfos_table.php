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
        Schema::create('entrepreneurinfos', function (Blueprint $table) {
            $table->id();
            $table->string('sexe');
            $table->string('nationalité');
            $table->string('lieu_de_residence');
            $table->string('image_cni', 2048)->nullable();
            $table->string('Nom_de_votre_société')->nullable();
            $table->string('téléphone');
            $table->date('date_de_naissance') -> nullable();
            $table->text('siteweb') -> nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entrepreneurinfos');
    }
};
