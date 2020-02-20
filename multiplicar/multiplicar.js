// Requires

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
  console.log('================'.green);
  console.log(`=== Tabla de ${ base } =`.green);
  console.log('================'.green);
  return new Promise( (resolve, reject) => {
    if (!Number(base)){
      reject(`El valor introducido '${base}' no es un numero`);
      return;
    }

    let data = '';
    for( let i = 1; i <=  limite ; i++ ){
      data += (`${ base } * ${ i } = ${ base * i }\n`);
    }
    if(!limite){
      reject(console.log("No hay asignado ningun limite"));
      } else {
      resolve(data);
    }
  });
}

let crearArchivo = ( base, limite = 10 ) => {
  return new Promise( (resolve, reject) => {
    if (!Number(base)){
      reject(`El valor introducido '${base}' no es un numero`);
      return;
    }

    let data = '';
    for( let i = 1; i <= limite; i++ ){
      data += (`${ base } * ${ i } = ${ base * i }\n`);
    }

    fs.writeFile(`tablas/tabla-${ base }-limite-${limite}.txt`, data, (err) => {
      if (err)
          reject(err)
      else
          resolve(`tabla-${base}-limite-${limite}.txt`);
    });
  });
}

module.exports = {
  crearArchivo,
  listarTabla
}
