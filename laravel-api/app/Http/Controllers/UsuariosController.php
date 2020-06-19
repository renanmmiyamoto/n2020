<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Usuario;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();
        return response()->json($usuarios);
    }

    public static function auth($celular, $senha)
    {
        $usuario_id = Usuario::select('id')->where('celular', $celular)->first();
        $usuario_id_pass = Usuario::select('id')->where('senha', $senha)->first();
    
        foreach ($usuario_id_pass as &$senhaId) {
            $senhaId = $senhaId;
        }

        foreach ($usuario_id as &$celularId) {
            $celularId = $celularId;
        }

        if($celularId != $senhaId){
            return response()->json([
                'message'   => 'Senha incorreta',
            ], 404);
        }
        $usuarios = Usuario::find($usuario_id);

        if (!$usuarios) {
            return response()->json([
                'message'   => 'Sem registro no banco de dados',
            ], 404);
        } 

        return response()->json($usuarios);
    }
    public function store(Request $request)
    {
        Usuario::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->update($request->all());
    }

    public function detroy($id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
    }
}
