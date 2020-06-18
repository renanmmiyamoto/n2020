<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Hobbies;
use Illuminate\Http\Request;

class HobbiesController extends Controller
{

    public function index()
    {
        $hobbies = Hobbies::with('usuario')->get();
        return response()->json($hobbies);
    }


    public function show($id)
    {
        $hobbies = Hobbies::with('usuario')->find($id);

        if (!$hobbies) {
            return response()->json([
                'message'   => 'Sem registro no banco de dados',
            ], 404);
        }

        return response()->json($hobbies);
    }

    public function store(Request $request)
    {
        Hobbies::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $hobbies = Hobbies::findOrFail($id);
        $hobbies->update($request->all());
    }

    public function detroy($id)
    {
        $hobbies = Hobbies::findOrFail($id);
        $hobbies->delete();
    }
}
