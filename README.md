# N2020

## About de Project

`Nosso projeto visa criar um app para um publico de terceira idade com foco em atividades como hobbies. Com o Laravel conseguimos criar uma API para o front-end em Angular consumir, isso faz com que nossa arquitetura ganhe maior flexibilidade, melhor manutenção e escalabilidade.`

## Group Data

`Alfredo Henrique - 83993`  
`Gabriel Fellone - 82012`  
`Lais Campitelli - 76134`  
`Leandro Rocha - 84378`  
`Leticia Bora - 82071`  
`Renan Miyamoto- 81348`

---

## API

`Para conseguir acessar e mexer no site, é necessário ter a API do laravel rodando localmente.`

---

## Getting Started (API Laravel)

- Recarrega a lista de classes, pacotes e bibliotecas que estão dentro do seu projeto no arquivo de autoload;

```
$ composer dump-autoload
```

- Este comando ajuda na instalação da dependencia do driver do banco

```
$ composer require doctrine/dbal
```

- Para criar as tabelas baseando nos models

```
$ php artisan migrate:fresh
```

- Para subir o serviço

```
$ php artisan serve
```

---

## Getting Started (Client Angular)

- Para instalar as dependências dos projeto

```
$ npm install
or
$ yarn
```

- Mudar no arquivo [./src/environments/environment.ts](./src/environments/environment.ts), o valor da `api_url`, para a porta que a API do Laravel estiver rodando. (Padrão, porta 8000);

- Subir o servidor

```
$ ng serve
```
