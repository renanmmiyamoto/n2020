<?php

use App\Http\Controllers\UsuariosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


  Route::group(array('prefix' => 'api'), function () {

  Route::get('/', function () {
    return response()->json(['message' => 'N2020 API', 'status' => 'Connected']);;
  });

  Route::resource('hobbies', 'HobbiesController');
  Route::resource('usuarios', 'UsuariosController');

});

 // Route::get('auth/{celular}/pass/{senha}','UsuariosController@show');

  Route::get('auth/celular/{celular}/pass/{senha}', function($celular, $senha) {
    return UsuariosController::auth($celular, $senha);
 });