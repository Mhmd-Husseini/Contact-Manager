<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::post("add", [ContactController::class, "add"]);
Route::get('contacts/{id?}', [ContactController::class, 'get']);
