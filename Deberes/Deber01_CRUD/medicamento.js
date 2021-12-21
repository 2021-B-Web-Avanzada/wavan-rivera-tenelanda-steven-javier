const fs = require('fs');
const inquirer = require('inquirer');
const ga = require('./gestion_archivos.js')

async function seleccionar_receta_medica() {
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
    let i = -1
    jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre_paciente === seleccion.option) {
                i = index
                return index
            }
        }
    )
    return i
}

const ingreso_datos_medicamento = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'nombre_medicamento',
                message: 'Ingrese el nombre del medicamento',
                defaultValue: null
            },
            {
                type: 'input',
                name: 'concentracion',
                message: 'Ingresa la concentracion del medicamento',
                defaultValue: null
            },
            {
                type: 'input',
                name: 'via_administracion',
                message: 'Ingrese la via de administracion del medicamento',
                defaultValue: null
            },
            {
                type: 'input',
                name: 'forma_farmaceutica',
                message: 'Ingresa la forma farmaceutica del medicamento',
                defaultValue: null
            },
            {
                type: 'list',
                name: 'venta_libre',
                message: 'El medicamento es de venta libre? ',
                choices: ['true', 'false']
            }
        ]
    )
}

async function crear_medicamento() {
    let id_receta_medica = await seleccionar_receta_medica()
    const medicamento = await ingreso_datos_medicamento();
    let contenido_archivo = fs.readFileSync('./archivo.txt', 'utf-8')
    let jsonFile = JSON.parse(contenido_archivo)
    jsonFile[id_receta_medica].medicamento.push(medicamento)
    await ga.escribir_archivo(jsonFile)
}

async function mostrar_medicamentos() {
    let id_receta_medica = await seleccionar_receta_medica()
    let contenido_archivo = fs.readFileSync('./archivo.txt', 'utf-8')
    let jsonFile = JSON.parse(contenido_archivo)[id_receta_medica].medicamento
    console.log(jsonFile)
}

async function actualizar_medicamento() {
    let id_receta_medica = await seleccionar_receta_medica()
    let contenido_archivo = fs.readFileSync('./archivo.txt', 'utf-8')
    let recetas_medicas = JSON.parse(contenido_archivo)
    let jsonFile = JSON.parse(contenido_archivo)[id_receta_medica].medicamento
    let medicamentos = [];
    jsonFile.forEach(element => {
        medicamentos.push(element.nombre_medicamento);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Seleccione un Medicamento: ',
            choices: medicamentos,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre_medicamento === seleccion.option) {
                return index
            }
        }
    )
    recetas_medicas[id_receta_medica].medicamento[indexUpdate] = await ingreso_datos_medicamento()
    await ga.escribir_archivo(recetas_medicas)
}

async function eliminar_medicamento() {
    let id_receta_medica = await seleccionar_receta_medica()
    let contenido_archivo = fs.readFileSync('./archivo.txt', 'utf-8')
    let recetas_medicas = JSON.parse(contenido_archivo)
    let jsonFile = JSON.parse(contenido_archivo)[id_receta_medica].medicamento
    let medicamentos = [];
    jsonFile.forEach(element => {
        medicamentos.push(element.nombre_medicamento);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Seleccione un Medicamento: ',
            choices: medicamentos,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre_medicamento === seleccion.option) {
                return index
            }
        }
    )
    jsonFile.splice(indexUpdate, 1)
    recetas_medicas[id_receta_medica].medicamento = jsonFile
    await ga.escribir_archivo(recetas_medicas)
}

module.exports = {crear_medicamento, mostrar_medicamentos, actualizar_medicamento, eliminar_medicamento};
