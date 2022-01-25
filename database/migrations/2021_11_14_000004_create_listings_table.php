<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('type_id');     
            $table->foreignId('suburb_id');            
            $table->string('title');
            $table->string('street_address');
            $table->integer('area');
            $table->integer('rooms');
            $table->integer('price');
            $table->text('blurb');
            $table->text('description');
            $table->string('img_path');
            $table->timestamp('listed_at');
            $table->timestamp('sold_at')->nullable();
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
        Schema::dropIfExists('listings');
    }
}
