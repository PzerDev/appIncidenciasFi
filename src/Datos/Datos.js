let datosTickets = [
    {
        motivo: "Cambio de IBAN con distinto titular al del servicio",
        categoria: "Cliente",
        subcategoria: "Cambio de datos",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Plantilla: Cliente - Cambio de IBAN a distinto titular",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambio de IBAN de distinto titular
NUEVO IBAN: {actualizarDoc}
TELÉFONO CONTACTO: {contacto}
BREVE DESCRIPCIÓN: {horario}, cliente solicita la modificación del IBAN a nombre de otra persona. Se ha abierto un caso para gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Cambio de documento de identidad",
        categoria: "Cliente",
        subcategoria: "Cambio de datos",
        estadoTicket: "Abierto / Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud de cambio de documento, es necesario que responda este correo adjuntando una copia de su identificación oficial vigente.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Actualización de documento de identidad
NUEVO DOCUMENTO: {actualizarDoc}
TELÉFONO CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita la actualización de su documento de identidad. Se procede a abrir un caso para que puedan gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Cambiar dirección de envío del regalo/terminal",
        categoria: "Cliente",
        subcategoria: "Cambio de dirección de envío",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Plantilla: Envíos - Cambio dirección terminal",
        nota: ``,
        src: ""
    },
    {
        motivo: "Modificar dirección de envío de SIM",
        categoria: "Cliente",
        subcategoria: "Cambio de dirección de envío",
        estadoTicket: "Abierto",
        correoPlantilla: "respecto a su solicitud de cambio de dirección para la tarjeta SIM.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambio de dirección de envío
NUEVA DIRECCIÓN: {actualizarDoc}
TELÉFONO CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita el cambio en la dirección de envío de su tarjeta SIM. Se procede a abrir un caso para que puedan gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Impuesto incorrecto en factura - Si el cliente no tiene fibra activa",
        categoria: "Cliente",
        subcategoria: "Cambio de impuesto",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Plantilla: Cliente - Cambio de impuesto (Cliente debe responder enviando su certificado de empadronamientoi)",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambio de impuesto
TELÉFONO CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita el cambio del impuesto reflejado en su factura. Se procede a abrir un caso para que puedan gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Impuesto incorrecto en factura - Cliente tiene fibra activa en ubicación del impuesto",
        categoria: "Cliente",
        subcategoria: "Cambio de impuesto",
        estadoTicket: "Abierto",
        correoPlantilla: "en relación a su solicitud de modificar el impuesto en las facturas.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambio de impuesto
TELÉFONO CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita el cambio del impuesto reflejado en su factura. Se procede a abrir un caso para que puedan gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Cambio de titular, cuando el cliente indique que no puede firmar el SMS",
        categoria: "Cliente",
        subcategoria: "Cambio titular",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud de cambio de titular, es necesario que responda este correo adjuntando una copia de su documento de identidad (vigente) por ambas caras.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambio de titular
TELÉFONO CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente ha experimentado dificultades al intentar firmar el documento de cambio de titular por medio del enlace proporcionado. Se procede a abrir un caso para gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Avería / Incidencia Fibra - General",
        categoria: "Fibra",
        subcategoria: "Averías / Incidencia",
        estadoTicket: "Abierto. *Si se trata de un desperfecto se abrirá Pendiente de cliente.",
        correoPlantilla: `Gracias por informarnos sobre la incidencia con su servicio de fibra. Entendemos la importancia de contar con una conexión estable y estamos trabajando para resolver este inconveniente lo antes posible.
        
Nuestro equipo técnico se pondrá en contacto contigo a la mayor brevedad.`,
        nota: `CLIENTE: {cliente} - {dni}
ID ORDEN: {idorden}
MODELO ROUTER: {router}
LUCES ENCENDIDAS:
{luces}
TELÉFONO DE CONTACTO: {contacto}
HORARIO DISPONIBILIDAD: {inicio} - {fin} horas

BREVE DESCRIPCIÓN: {averia}`,
        src: "",
        averia: {
            'Sin servicio': ['{horario}, cliente reporta interrupción en el servicio de fibra. Se ha abierto un caso para su gestión.', 
                             `Gracias por informarnos sobre la incidencia con su servicio de fibra. Entendemos la importancia de contar con una conexión estable y estamos trabajando para resolver este inconveniente lo antes posible.
        
Nuestro equipo técnico se pondrá en contacto contigo a la mayor brevedad.`
            ],
            'Velocidad': ['{horario}, cliente reporta lentitud en la conexión de fibra. Se ha abierto un caso para evaluar la causa y optimizar el servicio.', 
                          `Gracias por informarnos sobre la incidencia con su servicio de fibra. Estamos investigando las causas de la lentitud en tu conexión. 
        
Te mantendremos informado sobre el progreso y las posibles soluciones.`
            ],
            'Cortes': ['{horario}, cliente reporta cortes intermitentes en el servicio de fibra. Se ha abierto un caso para identificar y solucionar la falla.',
                       `Gracias por informarnos sobre los cortes en tu servicio de fibra. Estamos trabajando para estabilizar tu conexión y evitar futuras interrupciones.
        
Te mantendremos al tanto de cualquier novedad.`
            ],
            'Unir / Separar redes': ['{horario}, cliente solicita la unión/separación de redes WIFI. Se ha abierto un caso para realizar el cambio solicitado.',
                                     'Gracias por tu solicitud para modificar la configuración de tu red. Hemos registrado tu petición y nuestro equipo técnico se pondrá en contacto contigo para coordinar los detalles y realizar el cambio lo antes posible.'
            ],
            'Router / Cable roto': ['{horario}, cliente reporta un posible daño en el router o cable de fibra. Se ha abierto un caso para verificar y reemplazar el equipo si es necesario.',
                                    'Para poder atender tu solicitud de manera eficiente, es necesario que respondas este correo enviando una foto del dispositivo donde se evidencie el daño. Esto nos ayudará a diagnosticar la falla y programar una visita técnica si es necesario.'
            ],
            'Masivo': ['{horario}, se ha detectado una incidencia masiva en el servicio de fibra en la zona. Se ha abierto un caso para su gestión.',
                       'Plantilla: Masivo'
            ]
        }
    },
    // {
    //     motivo: "",
    //     categoria: "",
    //     subcategoria: "",
    //     estadoTicket: "",
    //     correoPlantilla: "",
    //     nota: ``,
    //     src: ""
    // },

]



export default datosTickets;