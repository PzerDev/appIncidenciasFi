let NotasProcedimientos = {
    "ONT Alarmada": `Se ha verificado que la ONT del router se encuentra en estado de alarma`,
    "Sin servicio": {
        WiFi: `El cliente experimenta inconvenientes de conexión a través de WiFi
`,
        cable: `El cliente informa que no tiene conectividad a través de cable
`,
        ambos: `Se ha verificado que el router presenta dificultades para establecer conexión
`
    },
    Velocidad: {
        WiFi: `Se realiza prueba de velocidad en la banda de 5GHz y los valores oscilan entre los XX/XX Mbps
`,
        cable: `Se realiza prueba de velocidad por cable y los valores oscilan entre los XX/XX Mbps
`,
        ambos: `Tras realizar la prueba de velocidad, se obtuvieron los siguientes resultados:
    - WiFi (5GHz): XX/XX Mbps
    - Conexión por cable: XX/XX Mbps
`
    },
    Cortes: {
        WiFi: `El cliente reporta interrupciones en la conexión de los dispositivos conectados a la red WiFi
`,
        cable: `El cliente experimenta desconexiones intermitentes en los dispositivos que utilizan la conexión por cable
`,
        ambos: `El cliente reporta interrupciones frecuentes del servicio, tanto en los dispositivos conectados por WiFi como por cable
`
    },
    Cobertura: `El cliente ha manifestado que la cobertura WiFi se reduce significativamente tras alejarse del router
`,

    "Error contraseña": {
        router: `Se ha verificado que el cliente experimenta dificultades para acceder al router debido a un error en la contraseña
`,
        WiFi: `El cliente reporta dificultades para conectar sus dispositivos en la red WiFi debido a un error en la contraseña
`
    },
    "Cambiar contraseña": {
        "acceso router": `El cliente ha solicitado el cambio de la contraseña de acceso al router por XX`,
        "redes WiFi": `El cliente ha solicitado el cambio de la contraseña de la red WiFi por XX`
    },
    "Desactivar band steering": `No fue posible desactivar la función de band steering debido a las dificultades que ha presentado el cliente
`,

    "Renombrar redes WiFi": `No fue posible renombrar las redes WiFi debido a incovenientes presentados por el cliente
`,

    "Cable roto": `El cliente ha informado que el cable XX del router se encuentra roto/en mal estado
`,
    "Router roto": ``,

    "Masiva": ``,

    "Desperfecto": ``,
    "Reubicación": ``
}


export default NotasProcedimientos;