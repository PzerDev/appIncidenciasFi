var horaActual = new Date();
// var hora = horaActual.getHours();
var dia = horaActual.getDate();
var mes = horaActual.getMonth() + 1;

let datosTickets = [
    {
        motivo: "Cambio de IBAN con distinto titular al del servicio",
        categoria: "Cliente",
        subcategoria: "Cambio de datos",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Plantilla: Cliente - Cambio de IBAN a distinto titular",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Cambio de IBAN (distinto titular)  
BREVE DESCRIPCIÓN: {horario}, cliente solicita la modificación del IBAN a nombre de otra persona. Se ha abierto un caso para gestionar su requerimiento.  
NUEVO IBAN: {cambioDatos}  
TELÉFONO DE CONTACTO: {contacto}
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  `,
        src: ""
    },
    {
        motivo: "Cambio de documento de identidad",
        categoria: "Cliente",
        subcategoria: "Cambio de datos",
        pipeline: "Coordinación SAC",
        estadoTicket: "Abierto / Pendiente de cliente",
        correoPlantilla: "A fin de atender tu solicitud de cambio de documento, es necesario que responda este correo adjuntando una copia de su identificación oficial vigente. En caso de estar cambiando NIE por DNI, también necesitamos que nos envíes el certificado de concordancia.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Actualización de documento de identidad  
BREVE DESCRIPCIÓN: {horario}, cliente solicita la actualización de su documento de identidad. Se procede a abrir un caso para que puedan gestionar su requerimiento.  
NUEVO DOCUMENTO: {cambioDatos}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Cambiar dirección de envío del regalo/terminal",
        categoria: "Cliente",
        subcategoria: "Cambio de dirección de envío",
        pipeline: "Envíos",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Plantilla: Cliente - Cambio dirección terminal",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Cambiar dirección de envío  
BREVE DESCRIPCIÓN: {horario}, cliente solicita el cambio en la dirección de envío de su regalo/terminal. Se procede a abrir un caso para que puedan gestionar su requerimiento.  
NUEVA DIRECCIÓN: {cambioDatos}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Modificar dirección de envío de SIM",
        categoria: "Cliente",
        subcategoria: "Cambio de dirección de envío",
        pipeline: "Envíos",
        estadoTicket: "Abierto",
        correoPlantilla: "respecto a su solicitud de cambio de dirección para la tarjeta SIM.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Cambiar dirección de envío  
BREVE DESCRIPCIÓN: {horario}, cliente solicita el cambio en la dirección de envío de su tarjeta SIM. Se procede a abrir un caso para que puedan gestionar su requerimiento.  
NUEVA DIRECCIÓN: {cambioDatos}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Impuesto incorrecto en factura",
        categoria: "Cliente",
        subcategoria: "Cambio de impuesto",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Cambio de impuesto  
BREVE DESCRIPCIÓN: {horario}, cliente solicita el cambio del impuesto reflejado en su factura. Se procede a abrir un caso para que puedan gestionar su requerimiento.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: "",
        cambioDatos: {
            "Seleccionar incidencia": ['', ''],

            "Si el cliente no tiene fibra activa": [        
                '', 
                'Plantilla: Cliente - Cambio de impuesto (Cliente debe responder enviando su certificado de empadronamientoi)'
            ],

            "Cliente tiene fibra activa en ubicación del impuesto": [        
                '', 
                'en relación a su solicitud de modificación del impuesto en las facturas'
            ]
        }
    },

    {
        motivo: "Cambio de titular, cuando el cliente indique que no puede firmar el SMS",
        categoria: "Cliente",
        subcategoria: "Cambio titular",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        // correoPlantilla: "de cambio de titular",
        correoPlantilla: "A fin de atender su solicitud de cambio de titular, es necesario que responda este correo adjuntando una copia de su documento de identidad (vigente) por ambas caras.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Cambio de titular  
BREVE DESCRIPCIÓN: {horario}, cliente ha experimentado dificultades al intentar firmar el documento de cambio de titular por medio del enlace proporcionado. Se procede a abrir un caso para gestionar su requerimiento.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Avería / Incidencia Fibra - General",
        categoria: "Fibra",
        subcategoria: "Averías / Incidencia",
        pipeline: "Fibra / Fibra Onivia / Fibra propia",
        estadoTicket: "Abierto",
        correoPlantilla: `Gracias por informarnos sobre la incidencia con su servicio de fibra. Entendemos la importancia de contar con una conexión estable y estamos trabajando para resolver este inconveniente lo antes posible.  
<br>Nuestro equipo técnico se pondrá en contacto contigo a la mayor brevedad.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
**ID ORDEN:** {idorden}
BREVE DESCRIPCIÓN: {incidenciaSeleccionada}
**MODELO ROUTER:** {router}  
**LUCES ENCENDIDAS:**  
{luces}  
*(&ast;) Luces intermitentes*  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
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
        averia: {
            'Seleccionar avería': ['', ''],
            'Sin servicio': ['{horario}, cliente reporta interrupción en el servicio de fibra. Se ha abierto un caso para su gestión.  ', 
                             `Gracias por informarnos sobre la incidencia con su servicio de fibra. Entendemos la importancia de contar con una conexión estable y estamos trabajando para resolver este inconveniente lo antes posible.  
<br>Nuestro equipo técnico se pondrá en contacto contigo a la mayor brevedad.`
            ],
            'Velocidad': ['{horario}, cliente reporta lentitud en la conexión de fibra. Se ha abierto un caso para evaluar la causa y optimizar el servicio.  ', 
                          `Gracias por informarnos sobre la incidencia con su servicio de fibra. Estamos investigando las causas de la lentitud en tu conexión.  
<br>Te mantendremos informado sobre el progreso y las posibles soluciones.`
            ],
            'Cortes': ['{horario}, cliente reporta cortes intermitentes en el servicio de fibra. Se ha abierto un caso para identificar y solucionar la falla.  ',
                       `Gracias por informarnos sobre los cortes en tu servicio de fibra. Estamos trabajando para estabilizar tu conexión y evitar futuras interrupciones.  
<br>Te mantendremos al tanto de cualquier novedad.`
            ],
            'Unir / Separar redes': ['{horario}, cliente solicita la unión/separación de redes WIFI. Se ha abierto un caso para realizar el cambio solicitado.  ',
                                     'Gracias por tu solicitud para modificar la configuración de tu red. Hemos registrado tu petición y nuestro equipo técnico se pondrá en contacto contigo para coordinar los detalles y realizar el cambio lo antes posible.'
            ],
            'Router / Cable roto': ['{horario}, cliente reporta un posible daño en el router o cable de fibra. Se ha abierto un caso para verificar y reemplazar el equipo si es necesario.  ',
                                    'Para poder atender tu solicitud de manera eficiente, es necesario que respondas este correo enviando una foto del dispositivo donde se evidencie el daño. Esto nos ayudará a diagnosticar la falla y programar una visita técnica si es necesario.'
            ],
            'Masivo': ['{horario}, se ha detectado una incidencia masiva en el servicio de fibra en la zona. Se ha abierto un caso para su gestión.  ',
                       'Plantilla: Masivo'
            ],
            'ONT Alarmada': [`{horario}, se ha detectado que el cliente está sin servicio de fibra y que la ONT está alarmada. Se ha abierto un caso para identificar y solucionar la falla.  `,

`**${dia}/${mes} - Escalado por API**  
<br>MOTIVO DE LA INCIDENCIA: ONT Alarmada  
ID: {idorden}  
COMPROBACIONES REALIZADAS: ONT Alarmada  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
TELÉFONO DE CONTACTO: {contacto}  `
            ]
        }
    },

    {
        motivo: "Incidencia portabilidad",
        categoria: "Cliente",
        subcategoria: "Incidencia portabilidad",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: {afectado}  
SOLICITUD: Portabilidad  
BREVE DESCRIPCIÓN: {horario}, se ha detectado que el cliente ha tenido dificultades al relanzar su proceso de portabilidad. Se procede a abrir un caso para gestionar su requerimiento.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: "",
        cambioDatos: {
            "Seleccionar incidencia": ['', ''],

            "AREC RECH_IDENT / AREC RECH_BNUME o rechazo equivalente de LOWI": [
``,

`Para que podamos hacer efectiva la portabilidad de la línea, es necesario que responda este correo adjuntando la última factura de su operador actual y una copia de su documento de identidad.`,
 
`Observaciones:  
- RECH_IDENT: "Rechazo por identidad: El titular o los datos proporcionados no coinciden."
- RECH_BNUME: "Rechazo por número de baja: El número se encuentra dado de baja en el operador de origen."
`
           ],


            "AREC RECH_ICCID": [
``,

`Para que podamos hacer efectiva la portabilidad de la línea, es necesario que responda este correo adjuntando una foto de su tarjeta SIM actual y una copia de su documento de identidad.`,

`Observaciones:  
- RECH_ICCID: ICCID incorrecto o no corresponde al número introducido, o se intentó realizar una portabilidad de una línea prepago como contrato.
`
            ],


            "AREC RECH_NORES / Demás rechazos": [
``,

`respecto a la portabilidad de la línea {afectado}`,

`Observaciones:  
- RECH_NORES: No hay respuesta del operador de origen
`
            ]
        }
    },


    {
        motivo: "Solicitud de certificados",
        categoria: "Cliente",
        subcategoria: "Solicitud certificado",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: "",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Certificado de {incidencia}  
BREVE DESCRIPCIÓN: {horario}, el cliente requiere la emisión de un certificado de {incidencia}. Se procede a abrir un caso para gestionar su requerimiento.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: "",
        cambioDatos: {
            "Seleccionar incidencia": ['', ''],  

            "titularidad": [
                '', 
                'respecto a la emisión del certificado de {incidencia}',
                'En este documento viene reflejada la titularidad de los servicios contratados. Puede solicitarse tanto para móvil, fijo o fibra'
            ],  
            "deuda": [
                '',
                'respecto a la emisión del certificado de {incidencia}',
                'Este documento detalla la deuda que el cliente tiene con la compañía'
            ],
            "bloqueo de IMEI": [
                '',
                'respecto a la emisión del certificado de {incidencia}',
                'Este documento muestra la inclusión del terminal en las listas negras'
            ],
            "duplicado de SIM": [
                '',
                'respecto a la emisión del certificado de {incidencia}',
                'Este documento detalla la fecha y la hora en que se realizó el reemplazo de la SIM'
            ],
            "duplicado de SIM y bloqueo de IMEI": [
                '',
                'respecto a la emisión del certificado de {incidencia}',
                'Este documento detalla la información de ambos certificados'
            ],
            "incidencia fibra": [
                '',
                'respecto a la emisión del certificado de {incidencia}',
                'Este documento muestra los días en los que el cliente se ha visto afectado por una avería, siempre que la misma haya sido gestionada'
            ],
        
        }
    
    },

    {
        motivo: "Validación de pedidos",
        categoria: "Cliente",
        subcategoria: "Solicitud de documentación",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente - Solicitando la documentación necesaria",
        correoPlantilla: "Genérico modificado solicitando documentación",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Validación de pedido  
BREVE DESCRIPCIÓN: {horario},  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Certificado de defunción del titular del servicio",
        categoria: "Cliente",
        subcategoria: "Solicitud de documentación",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud, es necesario que responda este correo adjuntando una copia del certificado de defunción del titular del servicio.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Aporte de certificado de defunción.  
BREVE DESCRIPCIÓN: {horario}, se ha registrado una solicitud por parte del cliente para comunicar el fallecimiento del titular del servicio y adjuntar el certificado de defunción. Se apertura caso para realizar los cambios necesarios.  
TITULAR FALLECIDO: {cambioDatos}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Solicitud de contrato",
        categoria: "Cliente",
        subcategoria: "Solicitud contrato",
        pipeline: "Soporte",
        estadoTicket: "Resuelto",
        correoPlantilla: "Adjunto encontrará el contrato con los términos y condiciones de su servicio.",
        nota: `No aplica para este caso`,
        src: ""
    },
    {
        motivo: "Solicitud factura por e-mail de forma puntual",
        categoria: "Cliente",
        subcategoria: "Solicitud factura",
        pipeline: "Soporte",
        estadoTicket: "Resuelto",
        correoPlantilla: "Adjunto encontrará la factura correspondiente a los servicios contratados.",
        nota: `No aplica para este caso`,
        src: ""
    },
    {
        motivo: "Solicitud factura por papel",
        categoria: "Cliente",
        subcategoria: "Solicitud factura",
        pipeline: "Envíos",
        estadoTicket: "Abierto",
        correoPlantilla: "con respecto al envío de la factura a su dirección.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Envío de factura en papel  
BREVE DESCRIPCIÓN: {horario}, se ha registrado una solicitud por parte del cliente para modificar el método de envío de la factura a formato papel. Se ha iniciado el proceso correspondiente para realizar los cambios necesarios.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Información comercial - Solicitud de información referente a productos, servicios o tarifas (se puede adjuntar enlaces a la web)",
        categoria: "Cliente",
        subcategoria: "Información comercial",
        pipeline: "Soporte",
        estadoTicket: "Resuelto",
        correoPlantilla: "Genérico modificado con la información solicitada",
        nota: `No aplica para este caso`,
        src: ""
    },
    {
        motivo: "Reclamación información comercial - Se ha facilitado información contradictoria o errónea con respecto a las condiciones de su contrato",
        categoria: "Cliente",
        subcategoria: "Reclamación información comercial",
        pipeline: "Soporte/ Empresas/ Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Plantilla: 'Revisión escucha de llamada'",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Reclamación información comercial  
BREVE DESCRIPCIÓN: {horario}, cliente reporta discrepancia entre la información comercial proporcionada al contratar el servicio y la realidad actual. Se ha abierto un caso para verificar y resolver esta situación.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Suplantación de identidad - No reconoce los servicios contratados bajo su titularidad",
        categoria: "Cliente",
        subcategoria: "Suplantación de identidad",
        pipeline: "Soporte/ Fibra",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud, es necesario que responda este correo adjuntando una copia de la denuncia realizada. Por favor, asegúrese de que el documento sea legible.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Suplantación de identidad  
BREVE DESCRIPCIÓN: {horario}, el cliente ha denunciado que alguien está utilizando su identidad para contratar servicios a su nombre. Afirma no reconocer los servicios contratados. Se ha iniciado una investigación para verificar la situación y tomar las medidas correspondientes.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Uso fraudulento de cuenta bancaria - Se están haciendo cargos no autorizados en la cuenta bancaria",
        categoria: "Cliente",
        subcategoria: "Uso fraudulento de cuenta bancaria",
        pipeline: "Soporte/ Fibra",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de dar trámite a su reclamación, solicitamos que responda este correo adjuntando una copia del recibo domiciliado realizado sin su consentimiento.",
        nota: `**AFECTADO:** **{cliente}** - **{dni}**  
CLIENTE: {cambioDatos}  
SOLICITUD: Uso fraudulento de cuenta bancaria  
BREVE DESCRIPCIÓN: {horario}, el cliente ha denunciado que se están realizando cargos no autorizados en su cuenta bancaria. Se ha iniciado el caso para verificar la situación y tomar las medidas necesarias.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Contratación de menores - Se detecta que un servicio está contratado a nombre de un menor de edad",
        categoria: "Cliente",
        subcategoria: "Contratación de menores",
        pipeline: "Soporte/ Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico sin modificar
<br>**Información para nota interna:** Adjuntar la documentación del menor en la nota y especificar en donde se ha encontrado

        `,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Contrato a nombre de un menor de edad  
BREVE DESCRIPCIÓN: {horario}, se ha detectado que un servicio ha sido contratado a nombre de un menor de edad, lo cual es una irregularidad. Se apertura caso para tomar las medidas necesarias y corregir esta situación.  
MOTIVO DE LA LLAMADA: {cambioDatos}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Solicitud Inglés - No hay respuesta al intentar transferir a cliente de habla inglesa",
        categoria: "Cliente",
        subcategoria: "Solicitud Inglés",
        pipeline: "Soporte Inglés",
        estadoTicket: "Abierto",
        correoPlantilla: "Plantilla: Genérico Inglés",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Agente bilingüe (inglés/español)
BREVE DESCRIPCIÓN: {horario}, se registró una solicitud de servicio en inglés que no pudo ser atendida por falta de personal. Se requiere la asignación de un agente que hable inglés.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Cualquier referencia a la Lista Robinson",
        categoria: "Cliente",
        subcategoria: "Lista Robinson",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: "A fin de dar trámite a tu solicitud es necesario que nos puedas indicar las numeraciones desde las que recibe llamadas con propósito comercial.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Lista Robinson  
BREVE DESCRIPCIÓN: {horario}, se ha registrado una solicitud por parte del cliente para inhabilitar llamadas con propósito comercial. Se ha abierto caso para su atención.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "SIM swapping (duplicados fraudulentos)",
        categoria: "Cliente",
        subcategoria: "SIM swapping",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: "Estamos trabajando para revisar la situación.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: SIM swapping  
BREVE DESCRIPCIÓN: {horario}, se ha registrado un reporte por parte del cliente de suplantación de identidad para la adquisición de una tarjeta SIM. Se ha abierto caso para su atención.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Solicita acuse de recibo sobre la cancelación",
        categoria: "Fibra",
        subcategoria: "Cancelación de instalación",
        pipeline: "Fibra",
        estadoTicket: "Resuelto",
        correoPlantilla: "Tu solicitud de cancelación de fibra ha sido procesada satisfactoriamente.",
        nota: `No aplica para este caso`,
        src: ""
    },
    {
        motivo: "Cancelación de instalación del servicio de fibra y no figura en el sistema la opción para cancelarlo o da error",
        categoria: "Fibra",
        subcategoria: "Cancelación de instalación",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Estamos trabajando en tu solicitud de cancelación del servicio de fibra.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Cancelación de instalación  
BREVE DESCRIPCIÓN: {horario}, se ha recibido una solicitud de cancelación de instalación de fibra que no ha podido ser procesada en línea. Se requiere su intervención para proceder con esta petición.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Configuración router - Abrir puertos en router / Conectar VPN / Pasos cambio de canales",
        categoria: "Fibra",
        subcategoria: "Configuración router",
        pipeline: "Fibra",
        estadoTicket: "Resuelto",
        correoPlantilla: `Plantillas:  

Fibra - Abrir puertos en router  

Fibra - Conectar VPN  

Fibra - Pasos cambio de canales`,
        nota: `No aplica para este caso`,
        src: ""
    },
    {
        motivo: "Error dirección - Referencia Catastral",
        categoria: "Fibra",
        subcategoria: "Error dirección",
        pipeline: "Fibra",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud, es necesario que responda este correo indicando la referencia catastral de su domicilio.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Error dirección  
BREVE DESCRIPCIÓN: {horario}, se ha detectado una inconsistencia en la dirección del cliente. Se solicita la referencia catastral para verificar y actualizar los datos correctamente.  
TELÉFONO DE CONTACTO: {contacto}  
DIRECCIÓN: {cambioDatos}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Reprogramar cita Fibra Onivia / Fibra propia / Fibra Adamo",
        categoria: "Fibra",
        subcategoria: "Reprogramación",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Reprogramación de instalación  
BREVE DESCRIPCIÓN: {horario}, cliente solicita reprogramar instalación de fibra. Indica que no ha recibido ninguna comunicación para coordinar la cita. Se abre caso para gestionar la reprogramación.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Cuando el cliente quiera reprogramar y la fecha de instalación haya PASADO, porque en la anterior cita por cualquier motivo no se haya podido instalar.",
        categoria: "Fibra",
        subcategoria: "Reprogramación",
        pipeline: "Fibra (VDF)",
        estadoTicket: "Abierto",
        correoPlantilla: "Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Reprogramación de instalación  
BREVE DESCRIPCIÓN: {horario}, cliente solicita reprogramar instalación de fibra que no se pudo realizar en la fecha prevista. Se requiere encontrar una nueva fecha que se ajuste a su disponibilidad.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Reactivación INMEDIATA de fibra suspendida temporalmente.",
        categoria: "Fibra",
        subcategoria: "Reactivación",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: "Recibimos su solicitud para reactivar el servicio de fibra. Estamos trabajando para procesar la reactivación lo antes posible.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Reactivación de servicio  
BREVE DESCRIPCIÓN: {horario}, cliente solicita reactivación inmediata de servicio de fibra suspendido temporalmente.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Cuando no se pueda seleccionar la misma cita tras añadir el teléfono alternativo y no se pueda contactar con la Cola Enlaces",
        categoria: "Fibra",
        subcategoria: "Teléfono para el instalador",
        pipeline: "Fibra / Fibra Onivia / Fibra propia",
        estadoTicket: "Abierto",
        correoPlantilla: "Estamos atendiendo tu solicitud sobre la instalación de fibra.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Teléfono para el instalador  
BREVE DESCRIPCIÓN: {horario}, se comprueba tras actualizar los datos de contacto del cliente que la fecha asignada previamente para la instalación de la fibra ya no está disponible. Se apertura el caso para su gestión.  
TELÉFONO PARA TÉCNICO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Error cita. Cuando se produzca algún error al asignar la cita en el sistema",
        categoria: "Fibra",
        subcategoria: "Error Cita",
        pipeline: "Fibra (VDF)",
        estadoTicket: "Abierto",
        correoPlantilla: "Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Instalación de fibra  
BREVE DESCRIPCIÓN: {horario}, se ha producido un error al asignar la cita al cliente. Se apertura caso para que puedan gestionarlo.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Devolución router",
        categoria: "Fibra",
        subcategoria: "Error código Devolución Router",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "",
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: {afectado}  
{incidenciaSeleccionada}TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: "",
        cambioDatos: {
            "Seleccionar incidencia": ['', ''],
            
            "Entregó el router en correos y siguen llegando SMS de devolución": [
`SOLICITUD: Devolución router  
BREVE DESCRIPCIÓN: {horario}, cliente reporta seguir recibiendo SMS, a pesar de haber entregado el router en Correos. Se ha solicitado justificante de entrega emitido por Correos.  
`, 
            
`A fin de dar trámite a su solicitud, es necesario que responda este correo adjuntando una copia del justificante de entrega emitido por Correos.`
],


            "Código de devolución del router da error o ya está utilizado": [
`SOLICITUD: Código de devolución router  
BREVE DESCRIPCIÓN: {horario}, cliente presenta inconvenientes con el código de devolución. Se solicita verificar y corregir la información.  
`, 

`Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.`
],

            "Envió algo que no es el router": [
`SOLICITUD: Devolución router  
BREVE DESCRIPCIÓN: {horario}, cliente ha enviado un equipo distinto al router. Se requiere verificar el equipo recibido y coordinar la devolución o el cambio correspondiente.  
`, 
                
`Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.`
],
            "Código de devolución del router vacío y no aparece entregado": [
`SOLICITUD: Devolución router  
BREVE DESCRIPCIÓN: {horario}, en la información de dispositivos de fibra del cliente, el campo del código de devolución del router está vacío y el estado de entrega no aparece registrado. Se requiere investigar y actualizar la información.  
`, 

`Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.`
],

            "No puede entregar el router por fuerza mayor": [
`SOLICITUD: Devolución router  
BREVE DESCRIPCIÓN: {horario}, cliente informa que no puede entregar el router debido a un incidente de fuerza mayor. Se solicita evaluar esta situación y determinar los pasos a seguir, considerando la imposibilidad del cliente de cumplir con la devolución.  
`, 

`A fin de dar trámite a su solicitud, es necesario que responda este correo adjuntando una copia del certificado que acredite la imposibilidad de entrega debido a fuerza mayor.  
<br>En caso contrario, responda este correo indicando que no le es posible facilitar dicho documento.`,

`Observaciones:
- Fuerza mayor: Incluye incidencias graves como incendio, derrumbe o una orden de alejamiento, entre otras.  `
],
            "Devolver router desde el extranjero": [
`SOLICITUD: Devolución router desde el extranjero  
BREVE DESCRIPCIÓN: {horario}, cliente actualmente ubicado en {país} solicita la devolución del router. Se abre caso para evaluar opciones de devolución internacional.  
`, 

`Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.`
],

        }
    },

    {
        motivo: "Técnico falta a cita",
        categoria: "Fibra",
        subcategoria: "Técnico falta a cita",
        pipeline: "Fibra (VDF)",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Técnico falta a cita  
BREVE DESCRIPCIÓN: {horario}, se ha reportado que el técnico asignado no se presentó a la instalación de fibra programada, el cliente asegura que no recibió ninguna llamada del técnico. Se solicita reprogramar la instalación a la brevedad posible.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Contratación TESA creada hace más de 15 días y no se han puesto en contacto para la instalación de la fibra",
        categoria: "Fibra",
        subcategoria: "TESA + de 15 días",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: {cambioDatos}  
SOLICITUD: Programación de instalación de fibra  
BREVE DESCRIPCIÓN: {horario}, se ha detectado que la contratación de fibra del cliente, aún no ha sido programada para su instalación. El cliente no ha recibido ninguna comunicación por parte del equipo para coordinar la visita. Se solicita programar la instalación a la brevedad posible.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Devolución router (fibra Onivia y Propia) porque no ha recibido instrucciones",
        categoria: "Fibra",
        subcategoria: "Solicitud devolución router",
        pipeline: "Fibra Onivia/ Fibra propia",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Devolución del router  
BREVE DESCRIPCIÓN: {horario}, cliente ha solicitado la devolución del router, indica que no ha recibido las instrucciones necesarias para realizar el proceso. Se abre caso para proporcionar las indicaciones correspondientes.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "IP Fija (Solo para Onivia y Fibra propia)",
        categoria: "Fibra",
        subcategoria: "Solicitud CGNAT",
        pipeline: "Fibra Onivia/ Fibra propia",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud de asignación de una dirección IP fija para el servicio de fibra se encuentra en proceso de evaluación.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: {cambioDatos}  
SOLICITUD: IP fija  
BREVE DESCRIPCIÓN: {horario}, el cliente ha solicitado la activación de una IP fija en su servicio contratado. Se requiere evaluar la solicitud y realizar los trámites correspondientes para cumplir con su petición.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Móvil - Configuración (APN, Búsqueda manual de redes, etc.), que no se pueda hacer en llamada",
        categoria: "Servicios",
        subcategoria: "Móvil - Configuración",
        pipeline: "Soporte",
        estadoTicket: "Resuelto",
        correoPlantilla: `Seleccionar dispositivo móvil a configurar`,
        nota: `No aplica para este caso`,
        src: ""
    },


    {
        motivo: "Móvil - Incidencia sin servicio",
        categoria: "Servicios",
        subcategoria: "Móvil - Incidencia sin servicio",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: ``,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {afectado}  
SOLICITUD: Sin servicio - {incidencia}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
{incidenciaSeleccionada}
`,
        src: "",
        cambioDatos: {
            "Seleccionar incidencia": ['', ''],

            "Líneas de reciente activación": [
`<br><u>**COMPROBACIONES:**</u>  
- Línea y tarjeta SIM activas  
- ICCID de la tarjeta SIM confirmado  
- Tarjeta SIM solicita código PIN  
- No se registran consumos  
- Dispositivo móvil no solicita PIN de desbloqueo de red SIM  

<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***
`, 

`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,

`Observaciones:  
- Si el ICCID no coincide o la tarjeta SIM no solicita el código PIN, abrir ticket de reemplazo de SIM a envíos. Asegurarse de incluir las comprobaciones realizadas y de cumplir con la política de seguridad correspondiente
- Cualquier consumo registrado debe pertenecer únicamente al buzón de voz asociado al número 698902242
`
            ], 


            "Líneas de activación no reciente": [
`<br><u>**COMPROBACIONES:**</u>  
- Línea y tarjeta SIM activas  
- Reporta la incidencia desde  
    - No se registran consumos  
- Tarjeta SIM solicita código PIN  
- Zona reportada: {especificarZona}  
- [Se ha verificado que no existe incidencia reportada](https://app.hubspot.com/contacts/7545391/record/0-1/30366051)  
- [Cobertura](https://www.vodafone.es/c/conocenos/es/vodafone-espana/mapa-cobertura-movil/ "Solo verificar en caso que el cliente reporte el inconveniente en una ubicación en especifico")  
    5G:  
    4G:  
    3G:  
<br>**<u>PRUEBAS REALIZADAS:</u>**  
- Configuración APN (- horas)  
- Búsqueda manual de redes (- horas)  
- Tipo de red preferida (- horas)  

<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***
`, 


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,


`Observaciones:  
- En caso de que se registren consumos, especificar la duración de las llamadas y los datos consumidos
- Si la tarjeta SIM no solicita el código PIN, abrir ticket de reemplazo de SIM a envíos. Asegurarse de incluir las comprobaciones realizadas y de cumplir con la política de seguridad correspondiente
`
            ], 


            "Estando en Roaming": [
`<br><u>**COMPROBACIONES:**</u>  
- Línea y tarjeta SIM activas  
- Servicio activo desde  
- Tarjeta SIM solicita código PIN  
- Reporta la incidencia desde  
    - No se registran consumos  
- [Se ha verificado que no existe incidencia reportada](https://app.hubspot.com/contacts/7545391/record/0-1/30366051)  
<br>**<u>PRUEBAS REALIZADAS:</u>**  
- Configuración APN (- horas)  
- Búsqueda manual de redes en red compatible de acuerdo al pais (- horas)  
- Prueba cruzada (opcional)  
`, 


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,


`Observaciones:  
- Si la portabilidad se ha realizado en el extranjero se debe activar el roaming (comprobando antes en qué país se encuentra el cliente)
- Si la línea está suspendida por impago, no tendrá servicio. Esto se debe a que es un servicio Premium y, en estos casos, no estamos obligados a garantizar la recepción de llamadas, a diferencia de lo que ocurre en territorio nacional
- Si la tarjeta SIM no solicita el código PIN, tendrá que verificar el ICCID y de ser posible realizar una prueba cruzada
- En caso de que se registren consumos, especificar la duración de las llamadas y los datos consumidos
- En caso de dificultades de conexión de red en la busqueda manual de redes, forzar la conexión hasta en 5 intentos  
`
            ], 
        }
    },




    {
        motivo: "Móvil - Incidencia datos",
        categoria: "Servicios",
        subcategoria: "Móvil - Incidencia datos",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: ``,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {afectado}  
SOLICITUD: {incidencia}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
{incidenciaSeleccionada}  
`,
        src: "",
        cambioDatos: {
            "Seleccionar incidencia": ['', ''],


            "Lentitud en los datos": [
`<br><u>**COMPROBACIONES:**</u> 
- Línea activa desde  
- Dispone de GB  
- Itinerancia activa  
- Le ocurre siempre  
- Reporta la incidencia desde  
- [Cobertura](https://www.vodafone.es/c/conocenos/es/vodafone-espana/mapa-cobertura-movil/ "Solo verificar en caso que el cliente reporte el inconveniente en una ubicación en especifico")  
    5G:  
    4G:  
    3G:  
- [Se ha verificado que no existe incidencia reportada](https://app.hubspot.com/contacts/7545391/record/0-1/30366051)  
<br>**<u>PRUEBAS REALIZADAS (SIN ÉXITO):</u>**  
- Configuración APN (- horas)  
- Búsqueda manual de redes (- horas)  
- Tipo de red preferida (- horas)  

<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***`,


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`
            ],



            "Sin conexión": [
`<br><u>**COMPROBACIONES:**</u>  
- Línea activa desde  
- Datos activos en sistema y en dispositivo móvil  
- Itinerancia activa  
- Le ocurre siempre  
- Reporta la incidencia desde  
- [Cobertura](https://www.vodafone.es/c/conocenos/es/vodafone-espana/mapa-cobertura-movil/ "Solo verificar en caso que el cliente reporte el inconveniente en una ubicación en especifico")  
    5G:  
    4G:  
    3G:  
- [Se ha verificado que no existe incidencia reportada](https://app.hubspot.com/contacts/7545391/record/0-1/30366051)  
<br>**<u>PRUEBAS REALIZADAS (SIN ÉXITO):</u>**  
- Configuración APN (- horas)  
- Búsqueda manual de redes (- horas)  
- Tipo de red preferida (- horas)  

<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***`,
            
            
`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`
            ],
            
            "Incidencias relacionadas con 5G": [
`<br><u>**COMPROBACIONES:**</u>  
- Línea activa desde  
- Datos activos en sistema y en dispositivo móvil  
- Dispositivo compatible con 5G  
- Itinerancia activa  
- Le ocurre siempre  
- Reporta la incidencia desde  
- [Cobertura](https://www.vodafone.es/c/conocenos/es/vodafone-espana/mapa-cobertura-movil/ "Solo verificar en caso que el cliente reporte el inconveniente en una ubicación en especifico")  
    5G:  
    4G:  
    3G:  
- [Se ha verificado que no existe incidencia reportada](https://app.hubspot.com/contacts/7545391/record/0-1/30366051)  
<br>**<u>PRUEBAS REALIZADAS (SIN ÉXITO):</u>**  
- Configuración APN (- horas)  
- Búsqueda manual de redes priorizando red 5G (- horas)  
- Tipo de red preferida (- horas)  

<br>***Se solicita prueba cruzada de la tarjeta SIM al cliente en otro dispositivo compatible con 5G.***`,


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo compatible con 5G.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`
            ],


        }
    },


    {
        motivo: "Móvil - Incidencia voz",
        categoria: "Servicios",
        subcategoria: "Móvil - Incidencia voz",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: ``,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {afectado}  
SOLICITUD: {incidencia}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
{incidenciaSeleccionada}
`,
        src: "",
        cambioDatos: {
            "Seleccionar incidencia": ['', ''],

            "No emite a determinados números": [
`<br><u>**COMPROBACIONES:**</u> 
- Línea activa desde  
- Los números a los que intenta emitir no cumplen lo siguiente:  
  &nbsp;&nbsp;- Numeración extranjera  
  &nbsp;&nbsp;- Numeración de tarificación especial  
  &nbsp;&nbsp;- Numeración 118xx  
  &nbsp;&nbsp;- Numeración premium  
- Limite de riesgo  
- No ha superado los minutos de su tarifa  
- Al itentar llamar no muestra al receptor ocupado  
- El número al que intenta llamar existe  
<br>**<u>PRUEBAS REALIZADAS:</u>**  
Se reportan 3 pruebas de llamada fallida a los siguientes números:  
  &nbsp;&nbsp;&nbsp;- {numero1} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero2} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero3} {fecha/hora}  

Se ha verificado en oculto desde otro número que la llamada se establece

<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***`,


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,


`Observaciones:  
- Locución en número premium: El número al que usted llama no tiene disponible este servicio  
- En caso de que salga "ocupado" al intentar llamar es posible que el receptor haya bloqueado las llamadas entrantes de la línea del cliente. Se puede verificar haciendo una llamada en oculto marcando #31# + número.`
],



            "No emite a ningún número en España": [

`<br><u>**COMPROBACIONES:**</u> 
- Línea activa desde  
- No puede emitir a todos los números || No puede emitir a determinados números  
- Problema presentado desde, {especificarFecha}  
- Consumos no pertenecientes al buzón  
  &nbsp;&nbsp;&nbsp;- {llamada1}  
  &nbsp;&nbsp;&nbsp;- {llamada2}  
- [Se ha verificado que no existe incidencia reportada](https://app.hubspot.com/contacts/7545391/record/0-1/30366051)  
- Cobertura  
  &nbsp;&nbsp;&nbsp;5G:  
  &nbsp;&nbsp;&nbsp;4G:  
  &nbsp;&nbsp;&nbsp;3G:  
<br>**<u>PRUEBAS REALIZADAS:</u>**  
&nbsp;- Búsqueda manual de redes (- horas)  

Se reportan 3 pruebas de llamada fallida a los siguientes números:  
  &nbsp;&nbsp;&nbsp;- {numero1} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero2} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero3} {fecha/hora}  

<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***`, 


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,


`Observaciones:
- En caso de que no pueda emitir a determinados números, seguir el procedimiento de enrutamiento o de no emite a determinados números
- Si al revisar los consumos la numeración es 698902242 hace referencia al buzón
`],



            "No emite estando en Roaming": [

`<br><u>**COMPROBACIONES:**</u> 
- Línea activa desde  
- Problema presentado desde, {especificarFecha}  
- Consumos no pertenecientes al buzón  
  &nbsp;&nbsp;&nbsp;- {llamada1} {duración de llamada}
  &nbsp;&nbsp;&nbsp;- {llamada2} {duración de llamada}
- [Se ha verificado que no existe incidencia reportada](https://app.hubspot.com/contacts/7545391/record/0-1/30366051)  
<br>**<u>PRUEBAS REALIZADAS:</u>**  
&nbsp;- Búsqueda manual de redes en red compatible de acuerdo al pais (- horas)  

Se reportan 3 pruebas de llamada fallida a los siguientes números:  
  &nbsp;&nbsp;&nbsp;- {numero1} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero2} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero3} {fecha/hora}  

<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***`, 


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,


`Observaciones:  
- En caso de dificultades para llamar a números de España o del pais destino: Desactivar y activar el roaming durante la llamada  
- Si no puede emitir a números extranjeros, revisar activación de llamadas internacionales  
- No es posible usar el servicio de llamadas premium estando en Roaming  
- No es posible llamar a líneas 900 y 800 estando en Roaming  
- No es posible llamar a números de tarificación especial estando en Roaming  
- En caso de dificultades de conexión de red en la busqueda manual de redes, forzar la conexión hasta en 5 intentos  
- La prueba cruzada no es obligatoria en Roaming, en caso de que el cliente no pueda efectuarla dejar el caso abierto  
`],



            "No recibe de determinados números": [
`<br><u>**COMPROBACIONES:**</u> 
- Línea activa desde  
- Problema presentado desde  
- Se ha verificado que no tiene algún tipo de bloqueo de llamadas entrantes ni desvíos activados
<br>**<u>PRUEBAS REALIZADAS:</u>**  
&nbsp;- Se desactivan desvíos a través de código USSD: ##002# y ##21# || Error al intentar desactivar los desvíos  
&nbsp;- Búsqueda manual de redes (- horas)  

Se reportan 3 pruebas de llamada fallida:  
  &nbsp;&nbsp;&nbsp;- {numero1} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero2} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero3} {fecha/hora}  
  
<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***`,


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,


`Observaciones:
- Confirma si el cliente no puede recibir llamadas de operadores específicos. Si es así, procede a gestionarlo como un problema de enrutamiento.
- Si el problema afecta a un número específico, verifica que el cliente no tenga ese número bloqueado. Cuando el emisor intenta contactar, el número aparecerá ocupado. El emisor puede realizar una prueba de llamada en modo oculto utilizando #31# para verificar la posibilidad de establecer conexión.
- En caso de que persista la dificultad desde una numeración en concreto, se debe verificar "la lista negra" de ambos dispositivos. Se solicitará que eliminen los contactos y puedan añadirlos nuevamente.
`
],



            "Enrutamiento - No recibe de operadores determinados": [
`<br><u>**COMPROBACIONES:**</u> 
- Línea activa desde  
- Problema presentado desde  
- Se ha verificado que los números que se intentan contactar pertenecen a la misma compañía. La locución recibida es 'el número no existe' o 'el número al que llama ha restringido las llamadas entrantes'. 
- Se ha realizado una llamada en modo oculto desde un operador externo a la compañía reportada, y se ha establecido conexión
<br>**<u>PRUEBAS REALIZADAS:</u>**  

Llamadas fallidas desde el operador reportado:  
  &nbsp;&nbsp;&nbsp;- {numero1} {fecha/hora} {operador/se puede comprobar en CNMC}  
  &nbsp;&nbsp;&nbsp;- {numero2} {fecha/hora} {operador/se puede comprobar en CNMC}   

Llamada establecida desde otro operador:  
  &nbsp;&nbsp;&nbsp;- {numero1} {fecha/hora} {operador/se puede comprobar en CNMC}    
`,


`con respecto a la incidencia que reporta con su línea móvil`,


`Observaciones:
- Si la línea establece comunicación, pero la llamada se corta inmediatamente, o la locución es 'apagado, no disponible o fuera de cobertura', es probable que no sea un problema de enrutamiento.
`
],



            "No recibe de ningún número": [
`<br><u>**COMPROBACIONES:**</u> 
- Línea activa desde  
- Problema presentado desde   
- Zona reportada: {especificarZona}  
- Se desactivan desvíos a través de código USSD: ##002# y ##21# || Error al intentar desactivar los desvíos  
- Se comprueba que no arroja locución "el número no se encuentra disponible"  
- Cobertura presente en dispositivo  
- Puede realizar llamadas  
<br>**<u>PRUEBAS REALIZADAS:</u>**  
&nbsp;- Búsqueda manual de redes (- horas)  

Se reportan 3 pruebas de llamada fallida a los siguientes números:  
  &nbsp;&nbsp;&nbsp;- {numero1} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero2} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero3} {fecha/hora}  
  
<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***`,


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,


`Observaciones:
- Si la locución es "el número no se encuentra disponible" se debería solucionar con busqueda manual de red
- Si el dispositivo no tiene cobertura comprobar incidencias en (https://app.hubspot.com/contacts/7545391/record/0-1/30366051)
- Si puede realizar llamadas se procede con las pruebas, en caso contrario seguir incidencia de sin servicio`
]
        }
    },
    {
        motivo: "Móvil - Incidencia SMS",
        categoria: "Servicios",
        subcategoria: "Móvil - Incidencia SMS",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: {afectado}  
SOLICITUD: Incidencia SMS  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
BREVE DESCRIPCIÓN: {horario},   
`,
        src: ""
    },

    {
        motivo: "Móvil - Problemas de cobertura",
        categoria: "Servicios",
        subcategoria: "Móvil - Calidad de red defectuosa",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: ``,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {afectado}  
SOLICITUD: Incidencia de cobertura  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
{incidenciaSeleccionada}  
`,
        src: "",
        cambioDatos: {
            "Seleccionar incidencia": ['', ''],
            
             "Problema de cobertura": [
`<br><u>**COMPROBACIONES:**</u> 
- Línea y tarjeta SIM activas  
- El cliente reporta:  
    - Baja señal  
    - Cortes en llamadas  
    - Desconexión de datos  
- Le ocurre tanto en interiores como en exteriores  
- ¿Le ocurre a más personas de su zona?  
- Problema presentado desde, {especificarFecha}  
- Consumo de llamadas: 
    - {llamada1} {fecha/duración}  
    - {llamada2} {fecha/duración}  
- Consumo de datos:  
    - {fecha/consumo}  
    - {fecha/consumo}  
- [Se ha verificado que no existe incidencia reportada](https://app.hubspot.com/contacts/7545391/record/0-1/30366051)  
- Cobertura  
    5G:  
    4G:  
    3G:  
<br>**<u>PRUEBAS REALIZADAS:</u>**  
- Configuración APN (- horas)  
- Búsqueda manual de redes (- horas)  
- Tipo de red preferida (- horas)  

Se reportan 3 pruebas de llamada fallida a los siguientes números:  
  &nbsp;&nbsp;&nbsp;- {numero1} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero2} {fecha/hora}  
  &nbsp;&nbsp;&nbsp;- {numero3} {fecha/hora}  

<br>***Se solicita prueba cruzada de tarjeta SIM al cliente.***`, 


`Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.  
<br>Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:  
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`
]
        }
    },
    {
        motivo: "Incidencias relacionadas con Roaming",
        categoria: "Servicios",
        subcategoria: "Móvil - Incidencia roaming",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: {cambioDatos}  
SOLICITUD: Incidencia con Roaming 
BREVE DESCRIPCIÓN: {horario}, {explicar}. Se abre caso para atender esta solicitud.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
        `,
        src: ""
    },
    {
        motivo: "Activar los servicios premium (solo si no puede hacerlo a través de la APP/WEB)",
        categoria: "Servicios",
        subcategoria: "Serv. Suplementarios",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `Plantilla: Móvil - Serv. Premium`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Activación de servicios premium  
BREVE DESCRIPCIÓN: {horario}, el cliente ha solicitado la activación de los servicios premium, indicando que no puede realizar este proceso a través de la app o la página web. Se abre caso para atender esta solicitud.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Aumento de límite de riesgo (más de 50€)",
        categoria: "Servicios",
        subcategoria: "Serv. Suplementarios",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `Plantilla: Móvil - Aumento de riesgo`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Aumento de límite de riesgo  
BREVE DESCRIPCIÓN: {horario}, el cliente ha solicitado un incremento en su límite de riesgo. Se abre caso para atender esta solicitud.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Incidencia Promociones - Problema con alguna de las promociones activas (no se han aplicado los GB pertenecientes a la promoción...)",
        categoria: "Servicios",
        subcategoria: "Incidencia Promociones",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: {cambioDatos}  
SOLICITUD:  
BREVE DESCRIPCIÓN: {horario},   
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Incidencia Promociones - Desistimiento de promoción Amazon Prime (que no incluya terminal). *Nota: Si va unido a terminal, emplear Servicios - Desistimiento Hardware - Envíos",
        categoria: "Servicios",
        subcategoria: "Incidencia Promociones",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: Amazon Prime  
SOLICITUD: Desistimiento de promoción  
BREVE DESCRIPCIÓN: {horario},   
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Incidencia Promociones - Amazon Prime",
        categoria: "Servicios",
        subcategoria: "Incidencia Promociones",
        pipeline: "Coordinación SAC",
        estadoTicket: "Abierto",
        correoPlantilla: ``,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: Amazon Prime  
SOLICITUD: Código promocional  
BREVE DESCRIPCIÓN: {incidenciaSeleccionada}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: "",
        amazon: {
            'Seleccionar incidencia': ['', ''],
            'Código no recibido': ['{horario}, cliente no ha recibido código promocional de Amazon Prime. Verificar sistema de envío y contactar al cliente.', 
                             `Lamentamos que no hayas recibido tu código promocional de Amazon Prime. Estamos revisando el caso y te daremos una respuesta pronto.`
            ],
            'Código utilizado': ['{horario}, cliente indica que el código promocional de Amazon Prime ya ha sido utilizado. Se solicita verificar el sistema de envío de códigos y contactar al cliente para brindarle una solución.', 
                          `Lamentamos mucho que el código introducido en Amazon Prime te genere un error. Estamos revisando el caso y te daremos una respuesta pronto.`
            ],
            'Código inválido': ['{horario}, cliente indica que el código promocional de Amazon Prime es inválido. Se solicita verificar el sistema de envío de códigos y contactar al cliente para brindarle una solución.',
                          `Lamentamos mucho que el código introducido en Amazon Prime te genere un error. Estamos revisando el caso y te daremos una respuesta pronto.`
            ]
        }
    },
    {
        motivo: "Incidencia Promociones - Para relanzar promociones u otras incidencias que no se pueden gestionar desde el Call promociones.",
        categoria: "Servicios",
        subcategoria: "Incidencia Promociones",
        pipeline: "Coordinación SAC",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD:  
BREVE DESCRIPCIÓN: {horario},   
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Incidencia Promociones - No recibió credenciales de acceso a Elige TV (posible error en correo)",
        categoria: "Servicios",
        subcategoria: "Incidencia Promociones",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud de emisión de credenciales para el servicio de Elige TV se encuentra en proceso de evaluación.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: Elige TV  
SOLICITUD: Credenciales de acceso
BREVE DESCRIPCIÓN: {horario}, el cliente no ha recibido las credenciales de acceso a Elige TV. Se comprueba que el correo electrónico utilizado para la contratación del servicio es distinto.  
CORREO PARA ACCESO: {cambioDatos}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Incidencia factura - Cuando se detecta un error en la facturación. Buscar el error e indicarlo en NOTA INTERNA",
        categoria: "Servicios",
        subcategoria: "Incidencia factura",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud respecto a la facturación de su servicio se encuentra en proceso de evaluación.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Incidencia factura  
BREVE DESCRIPCIÓN: {horario}, {detallarError}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Incidencia a la hora de realizar pedido, estados no conciliados en pedidos o solicitudes. Fiboard",
        categoria: "Servicios",
        subcategoria: "Incidencia Fiboard",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud respecto al inconveniente en la realización de pedidos se encuentra en proceso de evaluación.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Incidencia pedidos  
BREVE DESCRIPCIÓN: {horario}, {detallarError}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Si en acometida Tesa aparece el reloj para dar cita de fibra.",
        categoria: "Servicios",
        subcategoria: "Incidencia Fiboard",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: {cambioDatos}  
SOLICITUD: Incidencia reprogramación  
BREVE DESCRIPCIÓN: {horario}, se observa que el botón para asignar citas está disponible en instalación con acometida TESA. Se ha abierto un caso para su revisión.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Problemas al darse de alta por la Página Web Oficial, incidencias de acceso al área de cliente, etc. y no se soluciona tras realizar las comprobaciones y pruebas pertinentes a APP o WEB",
        categoria: "Servicios",
        subcategoria: "Incidencia Web/App",
        pipeline: "Soporte",
        estadoTicket: "Abierto/ Pendiente de cliente",
        correoPlantilla: `Confirmamos que hemos recibido su solicitud y estamos procediendo con la resolución del inconveniente que ha reportado al intentar acceder a su cuenta.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Incidencia acceso área cliente  
BREVE DESCRIPCIÓN: {horario}, cliente reporta dificultades al registrarse en la página web oficial y al acceder al área de cliente. Las pruebas realizadas en la app y la web no han solucionado el problema. Se ha abierto caso para su revisión.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Cancelación de algún servicio (móvil o fijo) que no se pueda cancelar en llamada. Ej.: Líneas nuevas en procesando activación, errores al cancelar, líneas nuevas fijas, etc",
        categoria: "Servicios",
        subcategoria: "Cancelación",
        pipeline: "Coordinación SAC",
        estadoTicket: "Abierto",
        correoPlantilla: `Estamos gestionando la cancelación del servicio que ha indicado.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**  
SERVICIO: {cambioDatos}  
SOLICITUD: Cancelación de servicio  
BREVE DESCRIPCIÓN: {horario}, se ha detectado un inconveniente al intentar cancelar servicios durante la llamada con el cliente. Se abre caso para concretar la solicitud.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Incidencia Hardware - Para gestionar incidencias tras la entrega de dispositivos electrónicos >> En plazo de 48 h tras la entrega",
        categoria: "Servicios",
        subcategoria: "Incidencia Hardware",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `Plantilla: "Garantía"`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Incidencia Hardware  
BREVE DESCRIPCIÓN: {horario},   
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Incidencia Hardware - Incidencia posventa",
        categoria: "Servicios",
        subcategoria: "Incidencia Hardware",
        pipeline: "Envíos",
        estadoTicket: "Abierto",
        correoPlantilla: `Plantilla: "Garantía". En este caso, no son necesarias pruebas gráficas. Finetwork hace la recogida y actúa de intermediario`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Incidencia posventa  
BREVE DESCRIPCIÓN: {horario},   
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  `,
        src: ""
    },
    {
        motivo: "Solicitud desistimiento de hardware",
        categoria: "Servicios",
        subcategoria: "Desistimiento Hardware",
        pipeline: "Envíos",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Desistimiento de hardware  
BREVE DESCRIPCIÓN: {horario},  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  `,
        src: ""
    },
    {
        motivo: "Recuperación de línea móvil tras baja",
        categoria: "Servicios",
        subcategoria: "S. Recuperación línea móvil",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud de recuperación de la línea móvil está siendo procesada.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {cambioDatos}  
SOLICITUD: Recuperar numeración de línea 
BREVE DESCRIPCIÓN: {horario}, el cliente solicita recuperar la línea móvil previamente dada de baja.   
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  `,
        src: ""
    },
    {
        motivo: "Duplicado, reemplazo SIM - No pide PIN, Contra reembolso, No ha recibido la SIM",
        categoria: "Tarjeta",
        subcategoria: "Duplicado SIM",
        pipeline: "Envíos",
        estadoTicket: "Abierto",
        correoPlantilla: `Plantilla: Reemplazo SIM - Dirección/E-mail plataforma (Datos coinciden con los de su ficha)  
<br>Plantilla: Dirección/E-mail distinto (Datos no coinciden con los de su ficha)`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SERVICIO: {afectado}  
MOTIVO DE REEMPLAZO: {incidencia}  
BREVE DESCRIPCIÓN: {incidenciaSeleccionada}  
DIRECCIÓN DE ENVÍO: {nuevaDireccion}  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: "",
        observaciones: `Observación:
- En caso de solicitar duplicado por Robo o Pérdida podemos suspender la línea afectada por seguridad.`,
        sim: {
            "Motivo de reemplazo": '',
            "No pide PIN": '{horario}, cliente reportó un incidente con su tarjeta SIM. Indicó que el dispositivo no solicita el código PIN al encenderse, se abre caso para que puedan enviar un reemplazo.',
            "Pérdida (Contra reembolso)": '{horario}, cliente reportó la pérdida de su tarjeta SIM. Se ha solicitado un reemplazo bajo la modalidad de contra reembolso.',
            "Bloqueo de PUK (Contra reembolso)": '{horario}, cliente informa que su tarjeta SIM se encuentra bloqueada por PUK. Se ha solicitado un reemplazo bajo la modalidad de contra reembolso.',
            "No ha recibido la SIM": '{horario}, cliente reportó no haber recibido su tarjeta SIM solicitada. Se abre caso para que lo puedan revisar.'
        }
    },
    {
        motivo: "Duplicado, reemplazo SIM",
        categoria: "Tarjeta",
        subcategoria: "Duplicado SIM",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `Plantillas: 

En los casos que sean direccón/email distintos abrir a soporte pendiente de cliente
Plantilla: Dirección/E-mail distinto

En los otros casos abrir a envíos en abierto
Plantilla: Reemplazo SIM - Dirección/E-mail plataforma 
`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
MSISDN AFECTADO: {afectado} 
SITUACIÓN: {situacion}  
MOTIVO DE REEMPLAZO: {incidencia}  
BREVE DESCRIPCIÓN: {horario}, cliente reporta reemplazo SIM. Se abre caso para que lo puedan gestionar.  
DIRECCIÓN DE ENVÍO: {nuevaDireccion}  
TELÉFONO DE CONTACTO: {contacto}  
`,
        src: "",
        observaciones: `Observación:
- En caso de solicitar duplicado por Robo o Pérdida podemos suspender la línea afectada por seguridad.`,
        situacion: {
            "Seleccionar situación": '',
            "Sin cambios en los datos": '{horario}, cliente reporta que la tarjeta SIM está dañada o no funciona correctamente. Se abre caso para que lo puedan gestionar.',
            "Sin cambios en los datos y se requiere denuncia": '{horario}, cliente solicita reemplazo de su tarjeta SIM por robo. Se abre caso para que puedan dar solución.',
            "El correo electrónico es distinto": '{horario}, cliente solicita reemplazo de tarjeta SIM por rotura. Se abre caso para que puedan dar solución.',
            "El correo electrónico es distinto y se requiere denuncia": '',
            "La dirección es distinta": '{horario}, cliente reportó la pérdida de su tarjeta SIM, solicita reemplazo de la misma. Se abre caso para que puedan dar solución.',
            "La dirección es distinta y se requiere denuncia": ''
        },
        sim: {
            "Motivo de reemplazo": '',
            "Robo": '',
            "Avería": '',
            "Pérdida": '',
            "Rotura": '',
            "No ha recibido la SIM": ''
        }
    },
    {
        motivo: "Para problemas con pagos duplicados, recibos devueltos",
        categoria: "Cobros",
        subcategoria: "Gestión de Impagos",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `A fin de dar trámite a su reclamación, solicitamos que responda este correo adjuntando la captura o el recibo de ambos cobros.`,
        nota: `**CLIENTE:** **{cliente}** - **{dni}**   
SOLICITUD: Pago duplicado  
BREVE DESCRIPCIÓN: {horario}, cliente ha informado sobre la aparición de cargos duplicados en sus extractos bancarios correspondientes a nuestros servicios. Se solicitan recibos al cliente para que puedan gestionar.  
TELÉFONO DE CONTACTO: {contacto}  
DISPONIBILIDAD HORARIA: {inicio} a {fin} horas  
`,
        src: ""
    },
    {
        motivo: "Proporcionar vía email la cuenta bancaria/IBAN para realizar el pago, etc",
        categoria: "Cobros",
        subcategoria: "Gestión de Impagos",
        pipeline: "Soporte",
        estadoTicket: "Resuelto",
        correoPlantilla: `Cobros - Métodos de pago`,
        nota: `⁠INFO: Tienes XX,XX€ pendientes de pago. Haz tu ingreso o transferencia a La Caixa ES2921002291720200220442 y justificante de pago a cobrosypagos@finetwork.com`,
        src: ""
    }

]



export default datosTickets;