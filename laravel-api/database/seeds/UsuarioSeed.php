<?php

use Illuminate\Database\Seeder;

class UsuarioSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Usuario::create([
            'nome' => 'Teste Nome',
            'senha' => bcrypt('Senha'),
            'celular' => 12345,
            'foto' => 'Teste Foto', 
        ]);
    }
}