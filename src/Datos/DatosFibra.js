
// function mostrarDiaSegunHora() {
//         var horaActual = new Date();
//         var hora = horaActual.getHours();
//         var mes = horaActual.getMonth() + 1;
        
//   var horario;
//   // Establecemos el día a mostrar según la hora
//   if (hora >= 9 && hora < 13) {
//     horario = "Buenos días";
//   } else if (hora >= 13 && hora < 20) {
//     horario = "Buenas tardes";
//   } else {
//     horario = "Buenas noches";
//   }

// }

var horaActual = new Date();
// var hora = horaActual.getHours();
var dia = horaActual.getDate();
var mes = horaActual.getMonth() + 1;

let datosFibra = {   
        estadoTicket: "Abierto",
        notaHistorica: `**Nota Histórica:**  
ID: {idExternal}  
Motivo: {motivoAveriaFibra} {medioAveria}- {velocidadContratada} {tecnologiaRouter}  
Tipo de router: {router}  
**Comprobaciones realizadas en llamada:**  
- Luces: {luces}  
- Cables: {cables}  
{refresh}
- Reinicio/reset: {reset}

**Acciones llevadas a cabo:**  
{acciones}

`, 
        notaEscaladoApi: `{escalado}
- Motivo de la incidencia: {motivoAveriaFibra} {medioAveria}  
- ID: {idExternal}  
- Comprobaciones realizadas:  
  - Luces: {luces}  
  - Cables: {cables}  
  {refresh}
  - Reinicio/reset: {reset}  
- Teléfono de contacto: {contacto}  
- Disponibilidad horaria: {inicio} - {fin} horas  

**Contestaciones de central:**  
**${dia}/${mes}**  `,

        notaReclamoApiNuevo: `**${dia}/${mes} - Reclamado por API**
- Motivo de la incidencia: {motivoAveriaFibra} {medioAveria}  
- ID: {idExternal}  
- Reclamo de avería: {idAveriaApi}  
- Breve descripción:  
- Horario de disponibilidad: {inicio} - {fin} horas  
- Teléfono de contacto: {contacto}  

**Contestaciones de central:**  
**${dia}/${mes}**  
`,

        notaReclamoApi: `**${dia}/${mes} - Reclamado por API**
- RECLAMACIÓN TICKET: {idAveriaApi}  
- MOTIVO: {motivoAveriaFibra} {medioAveria}  
{observacionEscalado}
- ID AMDOCS: {idExternal}  
- DISPONIBILIDAD: {inicio} - {fin} horas  

**Contestaciones de central:**  
**${dia}/${mes}**  
`,

        notaEscaladoAdjunto: {
                asunto: `AVERÍA FINETWORK - {idExternal}`,
                cuerpo: `
{horario},  

Se adjunta {adjuntoCliente} por el cliente.   

ID CLIENTE: {idExternal}  
N° TICKET AVERÍA: {idAveriaApi}

Saludos.     
    `
},

        notaReclamoOutlook: {
            asunto: `AVERÍA FINETWORK - {idExternal}`,
            cuerpo: `
{horario}, equipo  

Estamos escalando este caso por esta vía debido a que han transcurrido más de 48 horas sin recibir actualizaciones desde central.  

RECLAMACIÓN TICKET: {idAveriaApi}  
MOTIVO: {motivoAveriaFibra} {medioAveria}  
ID AMDOCS: {idExternal}  
DISPONIBILIDAD: {inicio} - {fin} horas  

Muchas gracias,  
Saludos.     
`
},

        notaReclamoCoord: `
**ESCALADO A COORDINACIÓN:**  
- ID: {idExternal}  
- Motivo avería: {motivoAveriaFibra} {medioAveria}  
- Comprobaciones realizadas y acciones llevadas a cabo:  
- Motivo escalado:  
`,

        notaBoFacturacion: `
**Escalado a BO Facturación:**  
- El cliente reclama: Compensación económica  
- Motivo de avería: {motivoAveriaFibra} {medioAveria}  
- Apertura de la incidencia:  
- Resolución de la incidencia:  
- Acción que la ha solucionado:  
`,
        src: "",
        observaciones: {
            cableRoto: `Observaciones:
- En este caso se debe cambiar el estado a Pendiente de cliente`,
            ontAlarmada: `Observaciones:
- En NEBA (antes de escalar) se deben refrescar los parametros e indicar al cliente que reinicie el router
- En caso que se pueda reportar por API:
    * Comprobar estado "Pendiente Majorel"
    * Aplicar "Plantilla: Escalado"
- Error al intentar escalar por API:
    * Cambiar estado a Abierto
    * Enviar correo Sin servicio.

Reporte para API:
TIPO DE SERVICIO: FIBRA GENERAL
TIPO DE TIQUET: INDIVIDUAL
CATEGORÍA DE TIQUET: Avería banda ancha
SUBCATEGORÍA DE TIQUET: NET Incomunicado: no conecta
PRIORIDAD: Critical
CLIENTE: {dni}
SERVICIO: {idorden}
DISPONIBILIDAD CLIENTE INICIO: Fecha actual
DISPONIBILIDAD CLIENTE FIN: Fecha lejana aleatoria
FECHA DETECCIÓN: Fecha actual
PRUEBAS REALIZADAS: Si
DESCRIPCIÓN PRUEBAS: .`
        },
        averiaFibra: {
            'Seleccionar avería': ['', ''],
            'Sin servicio ambos': ['{horario}, cliente reporta interrupción en el servicio de fibra. Se ha abierto un caso para su gestión.', 
`Gracias por informarnos sobre la incidencia con su servicio de fibra. Entendemos la importancia de contar con una conexión estable y estamos trabajando para resolver este inconveniente lo antes posible.  
<br>Nuestro equipo técnico se pondrá en contacto contigo a la mayor brevedad.`
            ],
            'Sin servicio Wifi': ['{horario}, cliente reporta interrupción en el servicio de fibra. Se ha abierto un caso para su gestión.', 
`Gracias por informarnos sobre la incidencia con su servicio de fibra. Entendemos la importancia de contar con una conexión estable y estamos trabajando para resolver este inconveniente lo antes posible.  
<br>Nuestro equipo técnico se pondrá en contacto contigo a la mayor brevedad.`
            ],
            'Sin servicio cable': ['{horario}, cliente reporta interrupción en el servicio de fibra. Se ha abierto un caso para su gestión.', 
`Gracias por informarnos sobre la incidencia con su servicio de fibra. Entendemos la importancia de contar con una conexión estable y estamos trabajando para resolver este inconveniente lo antes posible.  
<br>Nuestro equipo técnico se pondrá en contacto contigo a la mayor brevedad.`
            ],
            'Velocidad ambos': ['{horario}, cliente reporta lentitud en la conexión de fibra. Se ha abierto un caso para evaluar la causa y optimizar el servicio.', 
`Gracias por informarnos sobre la incidencia con su servicio de fibra. Estamos investigando las causas de la lentitud en tu conexión.  
<br>Te mantendremos informado sobre el progreso y las posibles soluciones.`
            ],
            'Velocidad Wifi': ['{horario}, cliente reporta lentitud en la conexión de fibra. Se ha abierto un caso para evaluar la causa y optimizar el servicio.', 
`Gracias por informarnos sobre la incidencia con su servicio de fibra. Estamos investigando las causas de la lentitud en tu conexión.  
<br>Te mantendremos informado sobre el progreso y las posibles soluciones.`
            ],
            'Velocidad cable': ['{horario}, cliente reporta lentitud en la conexión de fibra. Se ha abierto un caso para evaluar la causa y optimizar el servicio.', 
`Gracias por informarnos sobre la incidencia con su servicio de fibra. Estamos investigando las causas de la lentitud en tu conexión.  
<br>Te mantendremos informado sobre el progreso y las posibles soluciones.`
            ],
            'Cortes ambos': ['{horario}, cliente reporta cortes intermitentes en el servicio de fibra. Se ha abierto un caso para identificar y solucionar la falla.',
`Gracias por informarnos sobre los cortes en tu servicio de fibra. Estamos trabajando para estabilizar tu conexión y evitar futuras interrupciones.  
<br>Te mantendremos al tanto de cualquier novedad.`
            ],
            'Cortes Wifi': ['{horario}, cliente reporta cortes intermitentes en el servicio de fibra. Se ha abierto un caso para identificar y solucionar la falla.',
`Gracias por informarnos sobre los cortes en tu servicio de fibra. Estamos trabajando para estabilizar tu conexión y evitar futuras interrupciones.  
<br>Te mantendremos al tanto de cualquier novedad.`
            ],
            'Cortes cable': ['{horario}, cliente reporta cortes intermitentes en el servicio de fibra. Se ha abierto un caso para identificar y solucionar la falla.',
`Gracias por informarnos sobre los cortes en tu servicio de fibra. Estamos trabajando para estabilizar tu conexión y evitar futuras interrupciones.  
<br>Te mantendremos al tanto de cualquier novedad.`
            ],
            'Unir / Separar redes': ['{horario}, cliente solicita la unión/separación de redes WIFI. Se ha abierto un caso para realizar el cambio solicitado.',
'Gracias por tu solicitud para modificar la configuración de tu red. Hemos registrado tu petición y nuestro equipo técnico se pondrá en contacto contigo para coordinar los detalles y realizar el cambio lo antes posible.'
            ],
            'Router roto': ['{horario}, cliente reporta un posible daño en el router o cable de fibra. Se ha abierto un caso para verificar y reemplazar el equipo si es necesario.',
'Para poder atender tu solicitud de manera eficiente, es necesario que respondas este correo enviando una foto del dispositivo donde se evidencie el daño. Esto nos ayudará a diagnosticar la falla y programar una visita técnica si es necesario.'
            ],
            'Cable roto': ['{horario}, cliente reporta un posible daño en el router o cable de fibra. Se ha abierto un caso para verificar y reemplazar el equipo si es necesario.',
'Para poder atender tu solicitud de manera eficiente, es necesario que respondas este correo enviando una foto del dispositivo donde se evidencie el daño. Esto nos ayudará a diagnosticar la falla y programar una visita técnica si es necesario.'
            ],
            'Masivo': ['{horario}, se ha detectado una incidencia masiva en el servicio de fibra en la zona. Se ha abierto un caso para su gestión.',
                       'Plantilla: Masivo'
            ],
            'ONT Alarmada': [`{horario}, se ha detectado que el cliente está sin servicio de fibra y que la ONT está alarmada. Se ha abierto un caso para identificar y solucionar la falla.`,

`***${dia}/${mes} - Se ha escalado avería por API***  
<br>**MOTIVO DE LA INCIDENCIA:** ONT ALARMADA  
**ID:** {idorden}  
**COMPROBACIONES REALIZADAS:** Ont alarmada  
**HORARIO DISPONIBILIDAD:** {inicio} - {fin} horas  
**TELÉFONO DE CONTACTO:** {contacto}  `
            ]
        }
    }




export default datosFibra;
export { dia, mes }