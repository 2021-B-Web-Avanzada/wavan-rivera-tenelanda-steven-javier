const inquirer = require('inquirer');
const fs = require ('fs');
const ga = require ('./gestion_archivos')

const ingreso_datos_receta_medica = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'nombre_paciente',
                message: 'Ingresa el nombre del paciente de la receta medica'
            },
            {
                type: 'input',
                name: 'fecha_receta_medica',
                message: 'Ingrese la fecha de la receta medica'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa la edad del paciente de la receta medica'
            },
            {
                type: 'input',
                name: 'diagnostico',
                message: 'Ingresa el diagnostico de la receta medica'
            },
            {
                type: 'input',
                name: 'frecuencia_duracion_tratamiento',
                message: 'Ingresa la frecuencia y la duracion del tratamiento de la receta medica'
            }
        ]
    )
}

async function crear_receta_medica() {
    const receta_medica = await ingreso_datos_receta_medica();
    receta_medica.medicamento = []
    contenido_archivo = fs.readFileSync('./archivo.txt', 'utf-8')
    jsonFile = JSON.parse(contenido_archivo)
    jsonFile.push(receta_medica)
    await ga.escribir_archivo(jsonFile)
}

async function mostrar_recetas_medicas() {
    let contenido_archivo = fs.readFileSync('./archivo.txt', 'utf-8')
    let jsonFile = JSON.stringify(JSON.parse(contenido_archivo), null, '    ')
    console.log(jsonFile)
}

async function actualizar_receta_medica() {
    let contenido_archivo = fs.readFileSync('./archivo.txt', 'utf-8')
    let jsonFile = JSON.parse(contenido_archivo)
    let recetas_medicas = [];
    jsonFile.forEach(element => {
        recetas_medicas.push(element.nombre_paciente);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Seleccione una Receta Medica: ',
            choices: recetas_medicas,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre_paciente === seleccion.option) {
                return index
            }
        }
    )
    const receta_medica = await ingreso_datos_receta_medica();
    let menuAuxiliar = jsonFile[indexUpdate].medicamento
    jsonFile[indexUpdate] = receta_medica
    jsonFile[indexUpdate].medicamento = menuAuxiliar
    await ga.escribir_archivo(jsonFile)
}

async function eliminar_receta_medica() {
    contenido_archivo = fs.readFileSync('./archivo.txt', 'utf-8')
    jsonFile = JSON.parse(contenido_archivo)
    let recetas_medicas = [];
    jsonFile.forEach(element => {
        recetas_medicas.push(element.nombre_paciente);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Seleccione una Receta Medica: ',
            choices: recetas_medicas,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre_paciente === seleccion.option) {
                return index
            }
        }
    )
    jsonFile.splice(indexUpdate, 1)
    await ga.escribir_archivo(jsonFile)
}

module.exports = {crear_receta_medica, mostrar_recetas_medicas, actualizar_receta_medica, eliminar_receta_medica}