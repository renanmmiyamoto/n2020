<?php

use Illuminate\Database\Seeder;

class HobbieSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Hobbies::create([
            'nome' => "Jardinagem",
            'descricao' => "Hobbie de Jardinagem",
            'usuario_id' => 1,
        ]);
    }
}