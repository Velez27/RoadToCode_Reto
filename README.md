# RoadToCode_Reto
Road To Code - Reto Fila de Turnos.

El reto: Fila de turnos
Crea una aplicación que permita gestiona una cola con prioridad para brindar orden de atención en un banco u hospital tomando en cuenta los siguientes requerimientos:

  *La aplicación tiene un menú con opciones para registrar clientes, solicitar turno, ver la cola de atención y atender clientes.
  *Al registrar un cliente se ingresan los siguientes datos: número de identificación, nombres, apellidos, género, edad y tipo de cliente (básico, premium y VIP).
  *Pueden existir clientes nuevos para registrar y otros ya registrados.
  *Al solicitar turno se debe especificar si el cliente es uno nuevo o ya está registrado, se le pide su ID sea registrado o no, se le asigna un turno según las restricciones de       la prioridad y por último se muestra en pantalla su turno.
   *Cuando se asignan turnos la cola se modificará según la prioridad de los clientes que vayan llegando. Por ejemplo: si hay 3 clientes básicos y llega un VIP, entonces el VIP        pasa al principio de la cola.
  *La opción “ver cola” muestra la lista de clientes que no han sido atendidos y en orden de prioridad.
  *La opción “atender” muestra los datos del cliente que está al inicio de la cola, lo elimina de la cola de turnos y lo pasa a una lista de clientes atendidos.
  
Restricciones de prioridad
  1.-El orden de prioridad de los clientes es: VIP -> Premium -> Básico.
  2.-Si dos clientes del mismo tipo solicitan turno, sele da prioridad al de mayor edad. Si tienen la misma edad se le asigna turno primero al primero en llegar.
  3.-Los clientes nuevos (no registrados) tienen la menor prioridad. Si 2 clientes nuevos de la misma edad solicitan turno, se le da prioridad al primero en llegar.
