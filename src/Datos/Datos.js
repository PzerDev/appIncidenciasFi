let datosTickets = [
    {
        motivo: "Cambio de IBAN con distinto titular al del servicio",
        categoria: "Cliente",
        subcategoria: "Cambio de datos",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Plantilla: Cliente - Cambio de IBAN a distinto titular",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambio de IBAN de distinto titular
NUEVO IBAN: {actualizarDoc}
TELÉFONO DE CONTACTO: {contacto}
BREVE DESCRIPCIÓN: {horario}, cliente solicita la modificación del IBAN a nombre de otra persona. Se ha abierto un caso para gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Cambio de documento de identidad",
        categoria: "Cliente",
        subcategoria: "Cambio de datos",
        pipeline: "Coordinación SAC",
        estadoTicket: "Abierto / Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud de cambio de documento, es necesario que responda este correo adjuntando una copia de su identificación oficial vigente.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Actualización de documento de identidad
NUEVO DOCUMENTO: {actualizarDoc}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita la actualización de su documento de identidad. Se procede a abrir un caso para que puedan gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Cambiar dirección de envío del regalo/terminal",
        categoria: "Cliente",
        subcategoria: "Cambio de dirección de envío",
        pipeline: "Envíos",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Plantilla: Envíos - Cambio dirección terminal",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambiar dirección de envío
NUEVA DIRECCIÓN: {nuevaDireccion}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario},`,
        src: ""
    },
    {
        motivo: "Modificar dirección de envío de SIM",
        categoria: "Cliente",
        subcategoria: "Cambio de dirección de envío",
        pipeline: "Envíos",
        estadoTicket: "Abierto",
        correoPlantilla: "respecto a su solicitud de cambio de dirección para la tarjeta SIM.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambiar dirección de envío
NUEVA DIRECCIÓN: {nuevaDireccion}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita el cambio en la dirección de envío de su tarjeta SIM. Se procede a abrir un caso para que puedan gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Impuesto incorrecto en factura - Si el cliente no tiene fibra activa",
        categoria: "Cliente",
        subcategoria: "Cambio de impuesto",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Plantilla: Cliente - Cambio de impuesto (Cliente debe responder enviando su certificado de empadronamientoi)",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambio de impuesto
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita el cambio del impuesto reflejado en su factura. Se procede a abrir un caso para que puedan gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Impuesto incorrecto en factura - Cliente tiene fibra activa en ubicación del impuesto",
        categoria: "Cliente",
        subcategoria: "Cambio de impuesto",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: "en relación a su solicitud de modificar el impuesto en las facturas.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambio de impuesto
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita el cambio del impuesto reflejado en su factura. Se procede a abrir un caso para que puedan gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Cambio de titular, cuando el cliente indique que no puede firmar el SMS",
        categoria: "Cliente",
        subcategoria: "Cambio titular",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud de cambio de titular, es necesario que responda este correo adjuntando una copia de su documento de identidad (vigente) por ambas caras.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cambio de titular
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente ha experimentado dificultades al intentar firmar el documento de cambio de titular por medio del enlace proporcionado. Se procede a abrir un caso para gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Avería / Incidencia Fibra - General",
        categoria: "Fibra",
        subcategoria: "Averías / Incidencia",
        pipeline: "Fibra / Fibra Onivia / Fibra propia",
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
    {
        motivo: "Incidencia portabilidad - AREC RECH_IDENT / AREC RECH_ BNUME o rechazo equivalente de LOWI",
        categoria: "Cliente",
        subcategoria: "Incidencia portabilidad",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Para que podamos hacer efectiva la portabilidad de la línea, es necesario que responda este correo adjuntando la última factura de su operador actual y una copia de su documento de identidad.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Portabilidad
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha detectado que el cliente ha tenido dificultades al relanzar su proceso de portabilidad. Se procede a abrir un caso para gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Incidencia portabilidad - AREC RECH_ICCID",
        categoria: "Cliente",
        subcategoria: "Incidencia portabilidad",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "Para que podamos hacer efectiva la portabilidad de la línea, es necesario que responda este correo adjuntando una foto de su tarjeta SIM actual y una copia de su documento de identidad.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Portabilidad
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha detectado que el cliente ha tenido dificultades al relanzar su proceso de portabilidad. Se procede a abrir un caso para gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Incidencia portabilidad - AREC RECH_NORES (No hay respuesta del operador actual) o demás rechazos",
        categoria: "Cliente",
        subcategoria: "Incidencia portabilidad",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: "respecto a la portabilidad de la línea {portabilidadLinea}.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Portabilidad
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha detectado que el cliente ha tenido dificultades durante su proceso de portabilidad. Se procede a abrir un caso para gestionar su requerimiento.`,
        src: ""
    },
    {
        motivo: "Validación de pedidos",
        categoria: "Cliente",
        subcategoria: "Solicitud de documentación",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente - Solicitando la documentación necesaria",
        correoPlantilla: "Genérico modificado solicitando documentación",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Validación de pedido
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario},`,
        src: ""
    },
    {
        motivo: "Certificado de defunción del titular del servicio",
        categoria: "Cliente",
        subcategoria: "Solicitud de documentación",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud, es necesario que responda este correo adjuntando una copia del certificado de defunción del titular del servicio.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Aporte de certificado de defunción.
TITULAR FALLECIDO: {otroCliente} - {otroDni}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha registrado una solicitud por parte del cliente para comunicar el fallecimiento del titular del servicio y adjuntar el certificado de defunción. Se apertura caso para realizar los cambios necesarios.`,
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
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Envío de factura en papel
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha registrado una solicitud por parte del cliente para modificar el método de envío de la factura a formato papel. Se ha iniciado el proceso correspondiente para realizar los cambios necesarios.`,
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
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Reclamación información comercial
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente reporta discrepancia entre la información comercial proporcionada al contratar el servicio y la realidad actual. Se ha abierto un caso para verificar y resolver esta situación.`,
        src: ""
    },
    {
        motivo: "Suplantación de identidad - No reconoce los servicios contratados bajo su titularidad",
        categoria: "Cliente",
        subcategoria: "Suplantación de identidad",
        pipeline: "Soporte/ Fibra",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud, es necesario que responda este correo adjuntando una copia de la denuncia realizada. Por favor, asegúrese de que el documento sea legible.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Suplantación de identidad
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, el cliente ha denunciado que alguien está utilizando su identidad para contratar servicios a su nombre. Afirma no reconocer los servicios contratados. Se ha iniciado una investigación para verificar la situación y tomar las medidas correspondientes.`,
        src: ""
    },
    {
        motivo: "Uso fraudulento de cuenta bancaria - Se están haciendo cargos en la cuenta bancaria que él no ha autorizado",
        categoria: "Cliente",
        subcategoria: "Uso fraudulento de cuenta bancaria",
        pipeline: "Soporte/ Fibra",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de dar trámite a su reclamación, solicitamos que responda este correo adjuntando una copia del recibo domiciliado realizado sin su consentimiento.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Uso fraudulento de cuenta bancaria
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, el cliente ha denunciado que se están realizando cargos no autorizados en su cuenta bancaria. Se ha iniciado el caso para verificar la situación y tomar las medidas necesarias.`,
        src: ""
    },
    {
        motivo: "Contratación de menores - Se detecta que un servicio está contratado a nombre de un menor de edad",
        categoria: "Cliente",
        subcategoria: "Contratación de menores",
        pipeline: "Soporte/ Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Genérico sin modificar",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Contrato a nombre de un menor de edad
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha detectado que un servicio ha sido contratado a nombre de un menor de edad, lo cual es una irregularidad. Se apertura caso para tomar las medidas necesarias y corregir esta situación.`,
        src: ""
    },
    {
        motivo: "Solicitud Inglés - No hay respuesta al intentar transferir a cliente de habla inglesa",
        categoria: "Cliente",
        subcategoria: "Solicitud Inglés",
        pipeline: "Soporte Inglés",
        estadoTicket: "Abierto",
        correoPlantilla: "Plantilla: Genérico Inglés",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Inglés
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha registrado una solicitud de servicio en inglés a la que no se ha podido dar respuesta debido a la falta de personal disponible que hable inglés. Se requiere la asignación de un agente bilingüe para atender esta solicitud.`,
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
        motivo: "Solicita cancelación de la instalación del servicio de fibra y no figura en el sistema la opción para cancelarlo o da error",
        categoria: "Fibra",
        subcategoria: "Cancelación de instalación",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Estamos trabajando en tu solicitud de cancelación del servicio de fibra.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cancelación de instalación
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha recibido una solicitud de cancelación de instalación de fibra que no ha podido ser procesada en línea. Se requiere su intervención para proceder con esta petición.`,
        src: ""
    },
    {
        motivo: "Configuración router - Abrir puertos en router / Conectar VPN / Pasos cambio de canales",
        categoria: "Fibra",
        subcategoria: "Configuración router",
        pipeline: "Fibra",
        estadoTicket: "Resuelto",
        correoPlantilla: "Plantillas: Fibra - Abrir puertos en router / Fibra - Conectar VPN / Fibra - Pasos cambio de canales",
        nota: `No aplica para este caso`,
        src: ""
    },
    {
        motivo: "Error dirección - Indicar la dirección correcta incluyendo bloques, escaleras, ciudades, provincias y pedir al cliente REFERENCIA CATASTRAL",
        categoria: "Fibra",
        subcategoria: "Error dirección",
        pipeline: "Fibra",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: "A fin de atender su solicitud, es necesario que responda este correo indicando la referencia catastral de su domicilio.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Referencia catastral
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha detectado una inconsistencia en la dirección del cliente. Se solicita la referencia catastral para verificar y actualizar los datos correctamente.`,
        src: ""
    },
    {
        motivo: "Reprogramar cita Fibra Onivia o Fibra propia",
        categoria: "Fibra",
        subcategoria: "Reprogramación",
        pipeline: "Fibra Onivia/ Fibra propia",
        estadoTicket: "Abierto",
        correoPlantilla: "Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Reprogramación de instalación
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita reprogramar instalación de fibra. Indica que no ha recibido ninguna comunicación para coordinar la cita. Se abre caso para gestionar la reprogramación.`,
        src: ""
    },
    {
        motivo: "Cuando el cliente quiera reprogramar y la fecha de instalación haya PASADO, porque en la anterior cita por cualquier motivo no se haya podido instalar.",
        categoria: "Fibra",
        subcategoria: "Reprogramación",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Reprogramación de instalación
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita reprogramar instalación de fibra que no se pudo realizar en la fecha prevista. Se requiere encontrar una nueva fecha que se ajuste a su disponibilidad.`,
        src: ""
    },
    {
        motivo: "Solicitud de reactivación INMEDIATA de fibra suspendida temportalmente.",
        categoria: "Fibra",
        subcategoria: "Reactivación",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: "Recibimos su solicitud para reactivar el servicio de fibra. Estamos trabajando para procesar la reactivación lo antes posible.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Reactivación de servicio
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente solicita reactivación inmediata de servicio de fibra suspendido temporalmente.`,
        src: ""
    },
    {
        motivo: "Cuando no se pueda seleccionar la misma cita tras añadir el teléfono alternativo y no se pueda contactar con la Cola Enlaces",
        categoria: "Fibra",
        subcategoria: "Teléfono para el instalador",
        pipeline: "Fibra / Fibra Onivia / Fibra propia",
        estadoTicket: "Abierto",
        correoPlantilla: "Estamos atendiendo tu solicitud sobre la instalación de fibra.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Teléfono para el instalador
TELÉFONO PARA TÉCNICO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se comprueba tras actualizar los datos de contacto del cliente que la fecha asignada previamente para la instalación de la fibra ya no está disponible. Se apertura el caso para su gestión.`,
        src: ""
    },
    {
        motivo: "Cuando se produzca algún error al asignar la cita en el sistema",
        categoria: "Fibra",
        subcategoria: "Error Cita",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Instalación de fibra
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha producido un error al asignar la cita al cliente. Se apertura caso para que puedan gestionarlo.`,
        src: ""
    },
    {
        motivo: "Ha enviado algo que no sea el router",
        categoria: "Fibra",
        subcategoria: "Error código Devolución Router",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Devolución router
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente ha enviado un equipo distinto al router. Se requiere verificar el equipo recibido y coordinar la devolución o el cambio correspondiente.`,
        src: ""
    },
    {
        motivo: "'Información dispositivos fibra' está vacío el código de devolución del router y no aparece como entregado",
        categoria: "Fibra",
        subcategoria: "Error código Devolución Router",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Devolución router
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, en la información de dispositivos de fibra del cliente, el campo del código de devolución del router está vacío y el estado de entrega no aparece registrado. Se requiere investigar y actualizar la información.`,
        src: ""
    },
    {
        motivo: "Correos le indica que el código de devolución del router da error o ya está utilizado",
        categoria: "Fibra",
        subcategoria: "Error código Devolución Router",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: "Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.",
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Código de devolución router
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente presenta inconvenientes con el código de devolución. Se solicita verificar y corregir la información.`,
        src: ""
    },
    {
        motivo: "No puede entregar el router por fuerza mayor (casa quemada, derrumbada, orden de alejamiento…)",
        categoria: "Fibra",
        subcategoria: "Error código Devolución Router",
        pipeline: "Fibra",
        estadoTicket: "Abierto/ Pendiente de cliente",
        correoPlantilla: `A fin de dar trámite a su solicitud, es necesario que responda este correo adjuntando una copia del certificado que acredite la imposibilidad de entrega debido a fuerza mayor.

En caso contrario, responda este correo indicando que no le es posible facilitar dicho documento.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Devolución router
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente informa que no puede entregar el router debido a un incidente de fuerza mayor. Se solicita evaluar esta situación y determinar los pasos a seguir, considerando la imposibilidad del cliente de cumplir con la devolución.`,
        src: ""
    },
    {
        motivo: "Quiere devolver router desde el extranjero",
        categoria: "Fibra",
        subcategoria: "Error código Devolución Router",
        pipeline: "",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Devolución router desde el extranjero
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente actualmente ubicado en {país} solicita la devolución del router. Se abre caso para evaluar opciones de devolución internacional.`,
        src: ""
    },
    {
        motivo: "Le siguen llegando SMS, pero ya ha entregado el router en Correos",
        categoria: "Fibra",
        subcategoria: "Error código Devolución Router",
        pipeline: "Fibra",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `A fin de dar trámite a su solicitud, es necesario que responda este correo adjuntando una copia del justificante de entrega emitido por Correos.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Devolución router
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente reporta seguir recibiendo SMS, a pesar de haber entregado el router en Correos. Se ha solicitado justificante de entrega emitido por Correos.`,
        src: ""
    },
    {
        motivo: "Técnico falta a cita (considerar que esté fuera de la franja horaria, EE, Llamada en Hubspot del mismo día con tipificación Mobility y comentario de nuestros compañeros, asegurar con el cliente que el técnico NO le ha llamado)",
        categoria: "Fibra",
        subcategoria: "Técnico falta a cita",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Técnico falta a cita
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha reportado que el técnico asignado no se presentó a la instalación de fibra programada, el cliente asegura que no recibió ninguna llamada del técnico. Se solicita reprogramar la instalación a la brevedad posible.`,
        src: ""
    },
    {
        motivo: "Contratación TESA creada hace más de 15 días y no se han puesto en contacto para la instalación de la fibra",
        categoria: "Fibra",
        subcategoria: "TESA + de 15 días",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Programación de instalación de fibra
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha detectado que la contratación de fibra del cliente, aún no ha sido programada para su instalación. El cliente no ha recibido ninguna comunicación por parte del equipo para coordinar la visita. Se solicita programar la instalación a la brevedad posible.`,
        src: ""
    },
    {
        motivo: "Solicitud de devolución del router (fibra Onivia y Propia) porque no ha recibido instrucciones",
        categoria: "Fibra",
        subcategoria: "Solicitud devolución router",
        pipeline: "Fibra Onivia/ Fibra propia",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud de devolución del router por baja del servicio se encuentra en proceso.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Devolución del router
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente ha solicitado la devolución del router, indica que no ha recibido las instrucciones necesarias para realizar el proceso. Se abre caso para proporcionar las indicaciones correspondientes.`,
        src: ""
    },
    {
        motivo: "Solicitud de IP Fija (Solo para Onivia y Fibra propia)",
        categoria: "Fibra",
        subcategoria: "Solicitud CGNAT",
        pipeline: "Fibra Onivia/ Fibra propia",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud de asignación de una dirección IP fija para el servicio de fibra se encuentra en proceso de evaluación.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: IP fija
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, el cliente ha solicitado la activación de una IP fija en su servicio contratado. Se requiere evaluar la solicitud y realizar los trámites correspondientes para cumplir con su petición.`,
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
        motivo: "Móvil - Incidencia datos (Cuando tras realizar las comprobaciones y, al menos, una prueba sobre el servicio y no se soluciona, abrir ticket para gestión)",
        categoria: "Servicios",
        subcategoria: "Móvil -Incidencia datos",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.

Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Incidencia datos
TELÉFONO AFECTADO: {contacto}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Móvil - Incidencia SMS (Cuando tras realizar las comprobaciones y, al menos, una prueba sobre el servicio y no se soluciona, abrir ticket para gestión)",
        categoria: "Servicios",
        subcategoria: "Móvil - Incidencia SMS",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.

Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Incidencia SMS
TELÉFONO AFECTADO: {contacto}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Móvil - Incidencia sin servicio (Cuando tras realizar las comprobaciones y, al menos, una prueba sobre el servicio y no se soluciona, abrir ticket para gestión)",
        categoria: "Servicios",
        subcategoria: "Móvil - Incidencia sin servicio",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.

Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Incidencia sin servicio
TELÉFONO AFECTADO: {contacto}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Móvil - Calidad de red defectuosa (Cuando tras realizar las pruebas pertinentes, el cliente remite que no tiene buena cobertura en una zona en concreto)",
        categoria: "Servicios",
        subcategoria: "Móvil - Calidad de red defectuosa",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Con el fin de resolver tu solicitud, es necesario descartar cualquier posible falla en la tarjeta SIM, te solicitamos realizar una prueba cruzando la SIM en otro dispositivo.

Tras la realización de la prueba, te agradeceremos puedas responder este correo informando lo siguiente:
- Fecha y hora en que se realizó la prueba
- Marca y modelo del dispositivo utilizado
- Resultado de la prueba (si el problema persiste o no)

Tu colaboración nos permitirá identificar la causa del problema de manera más eficiente.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Calidad de red defectuosa
TELÉFONO AFECTADO: {contacto}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Incidencias relacionadas con Roaming",
        categoria: "Servicios",
        subcategoria: "Móvil - Incidencia roaming",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `CLIENTE: {cliente} - {dni}`,
        src: ""
    },
    {
        motivo: "Activar los servicios premium (solo si no puede hacerlo a través de la APP/WEB)",
        categoria: "Servicios",
        subcategoria: "Serv. Suplementarios",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `Plantilla: Móvil - Serv. Premium`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Activación de servicios premium
TELÉFONO SOLICITADO PARA ACTIVACIÓN: {contacto}

BREVE DESCRIPCIÓN: {horario}, el cliente ha solicitado la activación de los servicios premium, indicando que no puede realizar este proceso a través de la app o la página web. Se abre caso para atender esta solicitud.`,
        src: ""
    },
    {
        motivo: "Aumento de límite de riesgo (más de 5€)",
        categoria: "Servicios",
        subcategoria: "Serv. Suplementarios",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `Plantilla: Móvil - Aumento de riesgo`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Aumento de límite de riesgo
TELÉFONO SOLICITADO PARA AUMENTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, el cliente ha solicitado un incremento en su límite de riesgo. Se abre caso para atender esta solicitud.`,
        src: ""
    },
    {
        motivo: "Incidencia Promociones - Problema con alguna de las promociones activas (no se han aplicado los GB pertenecientes a la promoción...)",
        categoria: "Servicios",
        subcategoria: "Incidencia Promociones",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: 
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Incidencia Promociones - Para desistimiento de promociones de cupones tipo PROMOCIÓN AMAZON PRIME. No terminales. *Si va unido a terminal, emplear Servicios - Desistimiento Hardware - Envíos",
        categoria: "Servicios",
        subcategoria: "Incidencia Promociones",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: 
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Incidencia Promociones - Para relanzar promociones u otras incidencias que no se pueden gestionar desde el Call promociones.",
        categoria: "Servicios",
        subcategoria: "Incidencia Promociones",
        pipeline: "Coordinación SAC",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: 
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Incidencia Promociones - No recibió credenciales de acceso a Elige TV (posible error en correo)",
        categoria: "Servicios",
        subcategoria: "Incidencia Promociones",
        pipeline: "Coordinación SAC",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud de emisión de credenciales para el servicio de Elige TV se encuentra en proceso de evaluación.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Credenciales de acceso Elige TV
CORREO PARA ACCESO: {correo}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, el cliente no ha recibido las credenciales de acceso a Elige TV. Se comprueba que el correo electrónico utilizado para la contratación del servicio es distinto.`,
        src: ""
    },
    {
        motivo: "Incidencia factura - Cuando se detecta un error en la facturación. Buscar el error e indicarlo en NOTA INTERNA",
        categoria: "Servicios",
        subcategoria: "Incidencia factura",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud respecto a la facturación de su servicio se encuentra en proceso de evaluación.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Incidencia factura
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, {detallarError}`,
        src: ""
    },
    {
        motivo: "Incidencia a la hora de realizar pedido, estados no conciliados en pedidos o solicitudes.",
        categoria: "Servicios",
        subcategoria: "Incidencia Fiboard",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud respecto al inconveniente en la realización de pedidos se encuentra en proceso de evaluación.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Incidencia pedidos
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, {detallarError}`,
        src: ""
    },
    {
        motivo: "Si en acometida Tesa aparece el reloj para dar cita de fibra.",
        categoria: "Servicios",
        subcategoria: "Incidencia Fiboard",
        pipeline: "Fibra",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que estamos gestionando la reprogramación con la instalación de su fibra.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Incidencia reprogramación
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se observa que el botón para asignar citas está disponible en instalación con acometida TESA. Se ha abierto un caso para su revisión.`,
        src: ""
    },
    {
        motivo: "Problemas al darse de alta por la Página Web Oficial, incidencias de acceso al área de cliente, etc. y no se soluciona tras realizar las comprobaciones y pruebas pertinentes a APP o WEB",
        categoria: "Servicios",
        subcategoria: "Incidencia Web/App",
        pipeline: "Soporte",
        estadoTicket: "Abierto/ Pendiente de cliente",
        correoPlantilla: `Confirmamos que hemos recibido su solicitud y estamos procediendo con la resolución del inconveniente que ha reportado al intentar acceder a su cuenta.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Incidencia acceso área cliente
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente reporta dificultades al registrarse en la página web oficial y al acceder al área de cliente. Las pruebas realizadas en la app y la web no han solucionado el problema. Se ha abierto caso para su revisión.`,
        src: ""
    },
    {
        motivo: "Cancelación de algún servicio (móvil o fijo) que no se pueda cancelar en llamada. Ej.: Líneas nuevas en procesando activación, errores al cancelar, líneas nuevas fijas, etc",
        categoria: "Servicios",
        subcategoria: "Cancelación",
        pipeline: "Coordinación SAC",
        estadoTicket: "Abierto",
        correoPlantilla: `Estamos gestionando la cancelación del servicio que ha indicado.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Cancelación de servicio
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, se ha detectado inconveniente en el momento de cancelar los servicios {especificarServicios} durante la llamada con el cliente. Se abre caso para concretar la solicitud.`,
        src: ""
    },
    {
        motivo: "Incidencia Hardware - Para gestionar incidencias tras la entrega de dispositivos electrónicos >> En plazo de 48 h tras la entrega",
        categoria: "Servicios",
        subcategoria: "Incidencia Hardware",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `Plantilla: "Garantía"`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Incidencia Hardware
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Incidencia Hardware - Incidencia posventa",
        categoria: "Servicios",
        subcategoria: "Incidencia Hardware",
        pipeline: "Envíos",
        estadoTicket: "Abierto",
        correoPlantilla: `Plantilla: "Garantía". En este caso, no son necesarias pruebas gráficas. Finetwork hace la recogida y actúa de intermediario`,
        nota: `CLIENTE: {cliente} - {dni}`,
        src: ""
    },
    {
        motivo: "Solicitud desistimiento de hardware",
        categoria: "Servicios",
        subcategoria: "Desistimiento Hardware",
        pipeline: "Envíos",
        estadoTicket: "Abierto",
        correoPlantilla: `Genérico modificado`,
        nota: `CLIENTE: {cliente} - {dni}`,
        src: ""
    },
    {
        motivo: "Solicitud de recuperación de línea móvil tras la baja",
        categoria: "Servicios",
        subcategoria: "S. Recuperación línea móvil",
        pipeline: "Soporte",
        estadoTicket: "Abierto",
        correoPlantilla: `Le informamos que su solicitud de recuperación de la línea móvil se encuentra en proceso.`,
        nota: `CLIENTE: {cliente} - {dni}`,
        src: ""
    },
    {
        motivo: "Duplicado, reemplazo SIM - AVERÍA (no pide PIN), PÉRDIDA (Contra reembolso), NO HA RECIBIDO LA SIM (Servicios activos y no se puede dirigir a tienda)",
        categoria: "Tarjeta",
        subcategoria: "Duplicado SIM",
        pipeline: "Envíos",
        estadoTicket: "Abierto",
        correoPlantilla: `Plantilla: Reemplazo SIM - Dirección/E-mail plataforma cuando al confirmar los datos coinciden con los de su ficha o Reemplazo SIM`,
        nota: `CLIENTE: {cliente} - {dni}
TELÉFONO AFECTADO: {telefono}
MOTIVO DE REEMPLAZO: {motivoReemplazo}
DIRECCIÓN DE ENVÍO: {direccion}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Duplicado, reemplazo SIM - ROBO, AVERÍA, PÉRDIDA (TPV)",
        categoria: "Tarjeta",
        subcategoria: "Duplicado SIM",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `Plantilla: Dirección/E-mail distinto cuando, al confirmar los datos, no coinciden con los que nos constan en su ficha.`,
        nota: `CLIENTE: {cliente} - {dni}
TELÉFONO AFECTADO: {telefono}
MOTIVO DE REEMPLAZO: {motivoReemplazo}
DIRECCIÓN DE ENVÍO: {direccion}
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, `,
        src: ""
    },
    {
        motivo: "Para problemas con pagos duplicados, recibos devueltos",
        categoria: "Cobros",
        subcategoria: "Gestión de Impagos",
        pipeline: "Soporte",
        estadoTicket: "Pendiente de cliente",
        correoPlantilla: `A fin de dar trámite a su reclamación, solicitamos que responda este correo adjuntando la captura o el recibo de ambos cobros.`,
        nota: `CLIENTE: {cliente} - {dni}
SOLICITUD: Pago duplicado
TELÉFONO DE CONTACTO: {contacto}

BREVE DESCRIPCIÓN: {horario}, cliente ha informado sobre la aparición de cargos duplicados en sus extractos bancarios correspondientes a nuestros servicios. Se solicitan recibos al cliente para que puedan gestionar.`,
        src: ""
    },
    {
        motivo: "Proporcionar vía email la cuenta bancaria para realizar el pago, etc",
        categoria: "Cobros",
        subcategoria: "Gestión de Impagos",
        pipeline: "Soporte",
        estadoTicket: "Resuelto - Si es para mandar por email la plantilla de métodos de pago o el número de cuenta para pagar por transferencia o ingreso",
        correoPlantilla: `Cobros - Métodos de pago`,
        nota: `⁠INFO: Tienes XX,XX€ pendientes de pago. Haz tu ingreso o transferencia a La Caixa ES2921002291720200220442 y justificante de pago a cobrosypagos@finetwork.com`,
        src: ""
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