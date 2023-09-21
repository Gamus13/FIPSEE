<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('titre');
            $table->integer('user_id')->nullable();
            $table->string('Secteur');
            $table->string('Montant_de_levée');
            $table->string('Monnaie');
            $table->date('Duree_de_la_levée') -> nullable();
            $table->text('description');
            $table->json('images') -> nullable(); // Modifier le type de la colonne en "json"

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
