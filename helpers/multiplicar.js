
//importo el fyle system (sistema de archivos)
const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base) => {

    console.log('===============');
    console.log('  Tabla del:', base);
    console.log('===============');

    let salida = '';    // se define la variable local salida para mostrar la tabla

    // for que genera la salida de la tabla de multiplicar
    for (let i=1; i < 11; i++){
        let mul = base*i;
        salida += `${base} x ${i} = ${mul}\n`;
    }

    console.log(salida);

    const archivo = fs.writeFileSync(`tabla-${base}.txt`, salida);  // se crea un archivo que mostrará la variable salida concatenada

    console.log(`tabla-${base}.txt creada con exito`);

}

 const crearArchivoPromesa = async(base, hasta, listar=false) => {
    
    try {

        let salida = '';

        for (let i=1; i <= hasta; i++){
            
                let mul = base*i;
                salida += `${base} x ${i} = ${mul}\n`;
            
            
        }
            
        if(listar){
            console.log('==============='.green);
            console.log('  Tabla del:'.red, colors.blue.bold(base));
            console.log('==============='.green);
            
            console.log(salida);
        }

        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
    }

    catch (err){
        throw err;
    }

         
     }

    
 

 const crearArchivoPromesa2 = (base) => {
    promesa = new Promise((resolve, reject) => {
        console.log('===============');
        console.log('  Tabla del:', base);
        console.log('===============');

        let salida = '';

        for (let i=1; i < 11; i++){
            let mul = base*i;
            salida += `${base} x ${i} = ${mul}\n`;
        }

       fs.writeFileSync(`tabla-${base}.txt`, salida);
       
       resolve(`tabla-${base}.txt`)
       
        
    })

    return promesa;
}

// Se implementa para la exportación de funciones
module.exports = {
    crearArchivoPromesa
}
