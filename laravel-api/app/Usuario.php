<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{

    protected $fillable = ['nome', 'senha', 'celular', 'foto'];

    // protected $hidden = ['senha'];

    protected $dates = ['deleted_at'];

    public function hobbies()
    {
        return $this->hasMany('App\Hobbies');
    }
}
