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

## Utilizar React hot Loader

## Instalação
```cli
$ npm install react-hot-loader --save-dev
```

# EXEMPLOS
## Exemplo Simples com estados e funções puras (button.js e square.js)

App.js
```js 
import React, { Component } from 'react';
import Square from './square';
import Button from './button';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      color: 'green'
    }
  }
  
  render() {
    return (
      <div>
        <Square color={this.state.color} />
        {['red', 'green', 'blue'].map((color) => (
          <Button 
            key={color}
            handleClick={() => this.setState({ color })} >
            {color}
          </Button>
        ))}          
      </div>
    ); 
  }
}

export default App;
```

square.js

```js 
import React from 'react';

const Square = ({ color }) => (
  <div style={{
    background: color,
    height: '100px',
    width: '100px',
  }}>
  </div>
);

Square.defaultProps = {
  color: 'red',
}

export default Square;
```

button.js
```js 
import React from 'react';

const Button = ({children, handleClick}) => (
  <button onClick={handleClick}>
    {children}
  </button>
)

export default Button;
```
## propTypes
Premite validar as propriedades, de um determinado componente.
Mais info: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
App.js
```js
import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  render() {
    return (
      <div>
        <Button handleClick={() => console.log('Clique')}>
          Clique aqui
        </Button>
      </div>
    ); 
  }
}

export default App;
```
button.js
```js
import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>
    {children}
  </button>
)

Buttom.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default Button;

```
## Formulários

### Exemplo input
```js 
import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Valor Inicial',
    }
  }
  
  render() {
    return (
        <div>
          <form>
            <input type='text' value={this.state.value} onChange={(e) => {
              this.setState({
                value: e.target.value
              });
            }}/>
          </form>
        </div>
    )
  }
}

export default App;
```
