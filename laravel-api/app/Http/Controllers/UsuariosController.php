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

    public function show($id)
    {
        $usuarios = Usuario::find($id);

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
