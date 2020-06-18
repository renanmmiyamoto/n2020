<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hobbies extends Model
{

    protected $fillable = ['nome', 'descricao', 'usuario_id'];

    protected $dates = ['deleted_at'];

    function usuario() {
        return $this->belongsTo('App\Usuario');
    }
}
