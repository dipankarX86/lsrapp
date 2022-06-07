<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->id();

            $table->string('email')->unique();
            $table->string('phone');
            $table->foreignId('address'); //
            $table->string('gps');
            $table->string('owner_first_name');
            $table->string('owner_last_name');
            $table->string('owner_email');
            $table->string('owner_phone');
            $table->foreignId('owner_address'); //
            
            // $table->foreignId('initial_details'); //
            // $table->foreignId('gallery'); //  load these separately in another rest call if needed
                                            // can be easily searched for the shop id, dont link them in the model

            $table->foreignId('pan'); //
            $table->foreignId('gst'); //
            $table->foreignId('trade_license'); //

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
        Schema::dropIfExists('shops');
    }
}
