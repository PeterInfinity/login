# User

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Instalar Node y Angular 7

1.  descargar el instalador de node.js y ejecutar
2.  abrir la consola de comandos y ejecutar:
3.  npm install -g npm@latest
4.  npm cache clean --force
5.  npm set audit false //desactiva la auditoria que hace npm sobre los paquetes de descarga
6.  npm uninstall -g angular-cli // desisntala la ultima version de angular-cli, esto para actualizar la version
7.  npm cache clean --force // borra la cache nuevamente
8.  npm install -g @angular/cli@latest // descarga la ultima version de angular-cli
9.  ng new user // se agrega nuevo usuario, si pide borrar una carpeta por favor hacerlo
10. seleccionar yes cuando realice la pregunta de nuevo usuario y elegir la opcion CSS

## Angular 7

1. Crear un nuevo proyecto angular

=> ng new name-module

2. Crear el modelo del proyecto y un objeto TS

=> ng generate class model/user --type=model --spec=false

genera una clase ts modelo en la carpeta sepecificada: ruta:'./model/' clase: 'user', las clases representan objetos como en Java y seran los que transportemos como objetos JSON dentro de la aplicacion

3. Crear un componente

=> ng generate component page/user/add-user --spec=false -s --module=app

genera un componente en la ruta specificada '.page/user/' nombre del componente: 'add-user', genera 3 archivos un .ts, .html y .css en la ruta dada, pero para este caso el comando -s indica que no queremos un .css


## Angular 7 tips

- el comando: '--spec=false' es para que no genere clases de testeo
- el comando '-s' es para no generar un css propio para un componente, se usa cuando se crea un componente
- el comando '--module=app' es para especificar el componente donde debe ser importado, 
  para caso general es nuestra aplicacion 'app-module.ts'

npm config set proxy http://localhost:4200
npm config set https-proxy http://localhost:4200
