# Apontamentos do Curso de ReactJs

###### Problemas que o ReactJs resolve:
* Modularização ou seja separação de responsabilidades;
* Criação de Componentes;
* Performance;

[Página Oficial](https://reactjs.org/)

## Instalação do módulo http-server
### Instalação global
```cli 
$ sudo npm install -g http-server
```

### Instalação local
```cli 
$ sudo npm install http-server
```

### Inicializar servidor http
No terminal, aceder a pasta do projeto e digitar o seguinte comando:
```cli
$ http-server
```

## Acesso a elementos do DOM
 No chrome, nas ferramentas de administrador, se selecionar-mos um determinado elemento e digitarmos na consola `$1`, será mostrado o elemento que se encontra dentro do elemento pai. se fizermos `console.dir($1)`, vê-mos todas as propriedades desse elemento.

## Instalar Webpack Server

```CLI
$ npm install --save-dev webpack-dev-server
$ sudo npm install -g webpack-dev-server
```

Adicionar o parâmetro de output a webpack.config.js
```js
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    }
};
```

Alterar o caminho no index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="/static/bundle.js"></script>
</body>
</html>
```

Executar servidor:

```cli
$ npm install webpack-cli -D
$ webpack-dev-server
```

## Criar aplicação em ReactJs
### Instalar dependências (react e react-dom)
```cli
$ npm install --save react react-dom
```

## Usar sistema de módulos do ES6E5
```cli
$ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-stage-0
```