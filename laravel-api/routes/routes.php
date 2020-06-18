<?php

use Illuminate\Support\Facades\Route;

Route::group(array('prefix' => 'api'), function()
{

  Route::get('/', function () {
      return response()->json(['message' => 'N2020 API', 'status' => 'Connected']);;
  });

  Route::resource('hobbies', 'HobbiesController');
  Route::resource('usuarios', 'UsuariosController');
});

Route::get('/', function () {
    return redirect('api');
});