const inquirer = require('inquirer');
const crudR = require('./receta_medica.js')
const crudM = require('./medicamento.js')

async function menu_principal() {
    await inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'opciones',
                message: 'Seleccionar la opcion que desea realizar:',
                choices: ['Gestionar Recetas Medicas', 'Gestionar Medicamentos', 'Salir'],
            },
        ])
        .then(async respuestas => {
            if (respuestas['opciones'] === 'Gestionar Recetas Medicas') {
                await menu_receta_medica()
            }
            if (respuestas['opciones'] === 'Gestionar Medicamentos') {
                await menu_medicamento()
            }
        });
}

async function menu_receta_medica() {
    await inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'opciones',
                message: 'Seleccionar la opcion que desea realizar:',
                choices: ['Crear Receta Medica',
                'Mostrar todas las recetas medicas',
                'Actualizar Receta Medica',
                'Eliminar Receta Medica',
                'Regresar', 'Salir']
            },
        ])
        .then(async respuestas => {
            switch (respuestas['opciones']) {
                case 'Crear Receta Medica':
                    await crudR.crear_receta_medica().then(r => '')
                    await menu_receta_medica()
                    break
                case 'Mostrar todas las recetas medicas':
                    await crudR.mostrar_recetas_medicas()
                    await menu_receta_medica()
                    break
                case 'Actualizar Receta Medica':
                    await crudR.actualizar_receta_medica()
                    await menu_receta_medica()
                    break
                case 'Eliminar Receta Medica':
                    await crudR.eliminar_receta_medica()
                    await menu_receta_medica()
                    break
                case 'Regresar':
                    await menu_principal()
                    break
                case 'Salir':
                    console.log('Programa Terminado')
                    break
            }
        });
}

async function menu_medicamento() {
    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'opciones',
                message: 'Seleccionar la opcion que desea realizar:',
                choices: ['Crear Medicamento',
                    'Mostrar todos los medicamentos',
                    'Actualizar Medicamento',
                    'Eliminar Medicamento',
                    'Regresar', 'Salir'
                ]
            },
        ])
        .then(async respuestas => {
            switch (respuestas['opciones']) {
                case 'Crear Medicamento':
                    await crudM.crear_medicamento().then(r => '')
                    await menu_medicamento()
                    break
                case 'Mostrar todos los medicamentos':
                    await crudM.mostrar_medicamentos().then(r => '')
                    await menu_medicamento()
                    break
                case 'Actualizar Medicamento':
                    await crudM.actualizar_medicamento().then(r => '')
                    await menu_medicamento()
                    break
                case 'Eliminar Medicamento':
                    await crudM.eliminar_medicamento().then(r => '')
                    await menu_medicamento()
                    break
                case 'Regresar':
                    await menu_principal().then(r => '')
                    await menu_medicamento()
                    break
                case 'Salir':
                    console.log('Programa terminado')
                    await menu_medicamento()
                    break
            }
        })
}

menu_principal().then(r => '')


