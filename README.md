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

