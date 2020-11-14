// Array principales donde se almacena la informacion de los clientes(Registrados, En espera, Atendidos) 
let arrayClientesRegistrados = [];
let arrayClientesEnEspera = [];
let arrayClientesAtendidos = [];

// Datos precargados para ejemplo
arrayClientesRegistrados.push(new Cliente('JesuGut22', 'Jesus', 'Gutierrez', 'Hombre', 22, 'VIP', '-'));
arrayClientesRegistrados.push(new Cliente('PaolFlo30', 'Paola', 'Flores', 'Mujer', 30, 'Basico', '-'));
arrayClientesRegistrados.push(new Cliente('MariPer25', 'Maria', 'Peralta', 'Mujer', 25, 'VIP', 'VI1', '-'));
arrayClientesRegistrados.push(new Cliente('PepeMor28', 'Pepe', 'Morelos', 'Hombre', 28, 'Premiun', 'PR1', '-'));
arrayClientesAtendidos.push(new Cliente('MariPer25', 'Maria', 'Peralta', 'Mujer', 25, 'VIP', 'VI0'));
arrayClientesAtendidos.push(new Cliente('KarlHer29', 'Karla', 'Hernandez', 'Mujer', 29, 'Premiun', 'PR0'));
arrayClientesAtendidos.push(new Cliente('JoseAnc27', 'Jose', 'Ancona', 'Hombre', 27, 'Basico', 'BA0'));
arrayClientesEnEspera.push(new Cliente('MariPer25', 'Maria', 'Peralta', 'Mujer', 25, 'VIP', 'VI1'));
arrayClientesEnEspera.push(new Cliente('PepeMor28', 'Pepe', 'Morelos', 'Hombre', 28, 'Premiun', 'PR1'));

// Estructura que debe tener la informacion de nuestros clientes
function Cliente(identificacion, nombre, apellido, genero, edad, tipoUsuario, turno){
    this.identificacion =  identificacion;
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.edad = edad;
    this.tipoUsuario = tipoUsuario;
    this.turno = turno;
}

// Botones de las acciones principales(Registrar, Solicitar Turno, Atender Cliente, Listar Clientes En Espera, Listar Clientes Atendidos)
let buttonRegistrar = document.getElementById('registrar_cliente');
let buttonRegistrarEnviar = document.getElementById('button_registrar--enviar');
let buttonSolicitarTurno = document.getElementById('solicitar_turno');
let buttonSolicitarTurnoEnviar = document.getElementById('button_solicitar--turno');
let buttonAtenderCliente = document.getElementById('atender_cliente');
let buttonListarClientesEnEspera = document.getElementById('mostrar_clientes_espera');
let buttonListarClientesAtendidos = document.getElementById('mostrar_clientes_atendidos');

// Menus desplegables y sus elementos
let menuRegistrar = document.getElementById('main_seccion--registrar');
let idRegistrar = document.getElementById('id_registrar');
let nombreRegistrar = document.getElementById('nombre_registrar');
let apellidoRegistrar = document.getElementById('apellido_registrar');
let generoRegistrar = document.getElementById('genero_registrar');
let edadRegistrar = document.getElementById('edad_registrar');
let tipoRegistrar = document.getElementById('tipo_registrar');
let menuSolicitarTurno = document.getElementById('main_seccion--solicitar--turno');
let noIdentificacionSolicitarTurno = document.getElementById('id_solicitar--turno--enviar');
let tipoCliente = document.getElementById('tipo_cliente');
let turnoAsignado = document.getElementById('turno_asignado');
let mostrarClienteAtendido = document.getElementById('cliente_atendido');
let menuListarClientesEnEspera = document.getElementById('main_seccion_listar--clientes--espera');
let listaClientesEnEspera = document.getElementById('lista_clientes_espera');
let menuListarClientesAtendidos = document.getElementById('main_seccion--listar--clientes--atendidos');
let listaClientesAtendidos = document.getElementById('lista_clientes_atendidos');

// Funciones Utiles
function desplegarMenus(menu, elementos){
    let status = menu.hidden;
    if(elementos){
        limpiarListaClientes(elementos);
    }
    if(status == true){
        menu.hidden = false;
    }else{
        menu.hidden = true;
    }
}

function verificarCamposVacios(){
    if(idRegistrar.value == '' || nombreRegistrar.value == '' || apellidoRegistrar.value == '' || edadRegistrar.value == ''){
        return true;
    }else{
        return false;
    }
}

function verificarClientesExistentes(arrayClientes, elemento){
    for(let i = 0; i < arrayClientes.length; i++){
        if(arrayClientes[i].identificacion == elemento.value){
            return true;
        }
    }
}

function comprobarCliente(arrayClientes, elemento){
    for(let i = 0; i < arrayClientes.length; i++){
        if(arrayClientes[i].identificacion == elemento.value){
            return arrayClientes[i];
        }
    }
}

// Variables Globales
let basico = 1;
let premiun = 2;
let vip = 2;
let noRegistrado = 0;

function generarTurno(tipoUsuario){
    switch (tipoUsuario) {
        case 'Basico':
            return `BA${basico++}`;
        case 'Premiun':
            return `PR${premiun++}`;
        case 'VIP':
            return `VI${vip++}`;
        case 'No Registrado':
            return `NR${noRegistrado++}`;
        default:
            break;
    }
}

function clasificarClientes(arrayClientes, tipo){
    let arrayClasificado = [];
    for(let i = 0; i < arrayClientes.length; i++){
        if(arrayClientes[i].tipoUsuario == tipo){
            arrayClasificado.push(arrayClientes[i]);
        }
    }
    return arrayClasificado;
}

function ordenarClientesPorEdad(arrayClientes){
    arrayClientes.sort((a, b) => b.edad - a.edad);
    return arrayClientes;
}

function ordenarClientesEnEspera(){
    let basico = clasificarClientes(arrayClientesEnEspera, 'Basico');
    let premiun = clasificarClientes(arrayClientesEnEspera, 'Premiun');
    let vip = clasificarClientes(arrayClientesEnEspera, 'VIP');
    let noRegistrado = clasificarClientes(arrayClientesEnEspera, 'No Registrado');
    ordenarClientesPorEdad(basico);
    ordenarClientesPorEdad(premiun);
    ordenarClientesPorEdad(vip);
    arrayClientesEnEspera = [];
    arrayClientesEnEspera = arrayClientesEnEspera.concat(vip, premiun, basico, noRegistrado);
}

function listarClientes(elementoLista, arrayClientes){
    let encabezados = document.createElement('tr');
    elementoLista.appendChild(encabezados);
    encabezados.innerHTML = `<th>Turno</th> <th>ID</th> <th>Nombre Completo</th> <th>Genero</th> <th>Edad</th> <th>Tipo de Usuario</th>`;
    
    for(let i = 0; i < arrayClientes.length; i++){
        let item = document.createElement('tr');
        elementoLista.appendChild(item);
        item.innerHTML = ` <td> ${arrayClientes[i].turno} </td> <td> ${arrayClientes[i].identificacion} </td> <td> ${arrayClientes[i].nombre} ${arrayClientes[i].apellido} </td> <td> ${arrayClientes[i].genero} </td> <td> ${arrayClientes[i].edad} </td> <td> ${arrayClientes[i].tipoUsuario} </td>`;
    }
}

function limpiarListaClientes(elementoLista){
    if(elementoLista.hasChildNodes()){
        while(elementoLista.childNodes.length >= 1){
            elementoLista.removeChild(elementoLista.firstChild);
        }
    }
}

// Funciones de los botones principales
buttonRegistrar.addEventListener('click', () => {
    desplegarMenus(menuRegistrar);
});

buttonRegistrarEnviar.addEventListener('click', () => {
    let camposVacios = verificarCamposVacios();
    let clienteExistente = verificarClientesExistentes(arrayClientesRegistrados, idRegistrar.value);
    if(camposVacios == true){
        alert('Por favor rellena todos los campos');
    }else{
        if(clienteExistente == true){
            alert('El cliente ya esta registrado');
        }else{
            arrayClientesRegistrados.push(new Cliente(idRegistrar.value, nombreRegistrar.value, apellidoRegistrar.value, generoRegistrar.value, edadRegistrar.value, tipoRegistrar.value));
        }
    }
});

buttonSolicitarTurno.addEventListener('click', () => {
    desplegarMenus(menuSolicitarTurno);
});

buttonSolicitarTurnoEnviar.addEventListener('click', () => {
    if(noIdentificacionSolicitarTurno.value == ''){
        alert('Por favor escribe tu No. Identificacion');
    }else{
        let clienteExistenteEnEspera = verificarClientesExistentes(arrayClientesEnEspera, noIdentificacionSolicitarTurno);
        if(clienteExistenteEnEspera == true){
            let turnoExistente = comprobarCliente(arrayClientesEnEspera, noIdentificacionSolicitarTurno);
            alert(`El ID: ${turnoExistente.identificacion} ya tiene el turno: ${turnoExistente.turno}`);
        }else{
            let clienteExistente = verificarClientesExistentes(arrayClientesRegistrados, noIdentificacionSolicitarTurno);
            if(clienteExistente == true && tipoCliente.value == 'Registrado'){
                let cliente = comprobarCliente(arrayClientesRegistrados, noIdentificacionSolicitarTurno);
                let turno = generarTurno(cliente.tipoUsuario);
                cliente.turno = turno;
                arrayClientesEnEspera.push(cliente);
                turnoAsignado.innerHTML = `Su turno es: ${turno}`;
                ordenarClientesEnEspera();
                limpiarListaClientes(listaClientesEnEspera);
                listarClientes(listaClientesEnEspera, arrayClientesEnEspera);
            }
            if(clienteExistente == null && tipoCliente.value == 'Nuevo'){
                let clienteNoRegistrado = 'No Registrado';
                let clienteNoRegistradoTurno = generarTurno(clienteNoRegistrado);
                arrayClientesEnEspera.push(new Cliente(noIdentificacionSolicitarTurno.value, 'Cliente', 'Sin Registrar', '-', 0, clienteNoRegistrado, clienteNoRegistradoTurno));
                turnoAsignado.innerHTML = `Su turno es: ${clienteNoRegistradoTurno}`;
                ordenarClientesEnEspera();
                limpiarListaClientes(listaClientesEnEspera);
                listarClientes(listaClientesEnEspera, arrayClientesEnEspera);
            }
            if(clienteExistente == true && tipoCliente.value == 'Nuevo'){
                alert(`${noIdentificacionSolicitarTurno.value} ya esta registrado, cambie el tipo de cliente para continuar`);
            }
            if(clienteExistente == null && tipoCliente.value == 'Registrado'){
                alert(`${noIdentificacionSolicitarTurno.value} no esta registrado, cambie el tipo de cliente para continuar`);
            }
        }
    }
});

buttonAtenderCliente.addEventListener('click', () => {
    if(arrayClientesEnEspera.length == 0){
        alert('No hay clientes en espera');
    }else {
        let clienteAtendido = arrayClientesEnEspera.shift();
        mostrarClienteAtendido.innerHTML = `ID: ${clienteAtendido.identificacion} - Nombre Completo: ${clienteAtendido.nombre} ${clienteAtendido.apellido} - Genero: ${clienteAtendido.genero} - Edad: ${clienteAtendido.edad} - Tipo de Usuario: ${clienteAtendido.tipoUsuario}`;
        arrayClientesAtendidos.push(clienteAtendido);
        limpiarListaClientes(listaClientesEnEspera);
        listarClientes(listaClientesEnEspera, arrayClientesEnEspera);
        limpiarListaClientes(listaClientesAtendidos);
        listarClientes(listaClientesAtendidos, arrayClientesAtendidos);
    }
});

buttonListarClientesEnEspera.addEventListener('click', () => {
    desplegarMenus(menuListarClientesEnEspera, listaClientesEnEspera);
    listarClientes(listaClientesEnEspera, arrayClientesEnEspera);
});
buttonListarClientesAtendidos.addEventListener('click', () => {
    desplegarMenus(menuListarClientesAtendidos, listaClientesAtendidos);
    listarClientes(listaClientesAtendidos, arrayClientesAtendidos);
});