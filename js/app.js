// Array principales donde se almacena la informacion de los clientes(Registrados, En espera, Atendidos) 
let arrayClientesRegistrados = [];
let arrayClientesEnEspera = [];
let arrayClientesAtendidos = [];

// Estructura que debe tener la informacion de nuestros clientes
function Cliente(identificacion, nombre, apellido, genero, edad, tipoUsuario){
    this.identificacion =  identificacion;
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.edad = edad;
    this.tipoUsuario = tipoUsuario;
}

// Botones de las acciones principales(Registrar, Solicitar Turno, Atender Cliente, Listar Clientes En Espera, Listar Clientes Atendidos)
let buttonRegistrar = document.getElementById('registrar_cliente');
let buttonRegistrarEnviar = document.getElementById('button_registrar--enviar');
let buttonSolicitarTurno = document.getElementById('solicitar_turno');
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

// Funciones Utiles
function desplegarMenus(menu){
    let status = menu.hidden;
    if(status == true){
        menu.hidden = false;
    }else{
        menu.hidden = true;
    }
}

// Funciones de los botones principales
buttonRegistrar.addEventListener('click', () => {
    desplegarMenus(menuRegistrar);
});

buttonRegistrarEnviar.addEventListener('click', () => {
    let camposVacios = false; //Funcion para verificar los campos
    if(camposVacios == true){

    }else{
        arrayClientesRegistrados.push(new Cliente(idRegistrar.value, nombreRegistrar.value, apellidoRegistrar.value, generoRegistrar.value, edadRegistrar.value, tipoRegistrar.value));
    }
});

buttonSolicitarTurno.addEventListener('click', () => {

});
buttonAtenderCliente.addEventListener('click', () => {

});
buttonListarClientesEnEspera.addEventListener('click', () => {

});
buttonListarClientesAtendidos.addEventListener('click', () => {

});