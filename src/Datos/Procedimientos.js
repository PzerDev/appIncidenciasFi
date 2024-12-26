let Procedimientos = {
    "ONT Alarmada": {
            general: `
1. **Verificar el estado de las luces de la ONT:** Identificar si la luz de alarma o la luz de internet está encendida en rojo. Si en el ticket se especifica claramente que la ONT está en alarma, escalar el problema por API sin realizar contacto telefónico con el cliente. Esto agiliza el proceso de resolución.  
2. **Verificar el cableado (si es necesario):** En caso de que sea necesario contactar al cliente, solicitarle que verifique que todos los cables estén correctamente conectados a la ONT y a los dispositivos. Una conexión suelta o dañada puede causar la alarma.  
3. **Escalar por API:** Si el problema persiste después de verificar el cableado o si no fue necesario verificar el cableado, escalar el problema por API para que un técnico especializado realice una revisión más profunda.          
`,
            NEBA: `
* **Verificar el estado de las luces de la ONT:** Identificar si la luz de alarma o la luz de internet está encendida en rojo.  
* **Verificar el cableado:** Comprobar que todos los cables estén correctamente conectados a la ONT (en caso que tenga) y a los dispositivos.  
* **Actualizar la configuración NEBA:** Realizar un "Refresh NEBA Params" y reiniciar los dispositivos. Este paso técnico actualiza la configuración del equipo NEBA y puede mejorar el rendimiento de la red.  
* **Escalar por API:** Si el problema persiste después de realizar los pasos anteriores, escalar el problema por API.          
`,
            Observaciones: ``
    },
    "Sin servicio": {
        WIFI: {
            general: `
1. **Verificar el estado de las luces:** Asegurarse de que las luces del router que indican la conexión Wi-Fi estén encendidas.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados, tanto al router como al dispositivo del cliente. Una conexión suelta o dañada puede afectar la velocidad.  
3. **Habilitar la Wi-Fi:** Si la luz de Wi-Fi está apagada, habilitarla siguiendo las instrucciones para cada router.  
4. **Verificar configuración de dispositivos:** Asegurarse de que los dispositivos tienen activada la conexión por Wi-Fi.  
5. **Comprobar incidencia en múltiples dispositivos:** Determinar si el problema afecta a un solo dispositivo o a varios.  
6. **Verificar contraseña:** Asegurarse de que se esté ingresando la contraseña correcta de la red Wi-Fi.  
7. **Reiniciar dispositivos:** Reiniciar el dispositivo que intenta conectarse a la red Wi-Fi.  
8. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido. Esto puede resolver problemas temporales causados por configuraciones incorrectas o sobrecargas.  
9. **Acceder al router (si es necesario):** En algunos casos, puede ser necesario acceder a la configuración del router para habilitar las redes Wi-Fi o deshabilitar el Band Steering.  
10. **Utilizar el botón WPS:** Si el router y el dispositivo son compatibles con WPS, se puede utilizar este botón para conectar el dispositivo de forma rápida y segura.  
11. **Escalar la avería:** Si después de realizar todos los pasos anteriores el problema persiste, escalar la avería para que un técnico especializado realice una revisión más profunda.              
`,
            NEBA: `
1. **Verificar el estado de las luces:** Asegurarse de que las luces del router que indican la conexión Wi-Fi estén encendidas.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados, tanto al router como al dispositivo del cliente. Una conexión suelta o dañada puede afectar la velocidad.  
3. **Habilitar la Wi-Fi:** Si la luz de Wi-Fi está apagada, habilitarla siguiendo las instrucciones para cada router.  
4. **Verificar configuración de dispositivos:** Asegurarse de que los dispositivos tienen activada la conexión por Wi-Fi.  
5. **Comprobar incidencia en múltiples dispositivos:** Determinar si el problema afecta a un solo dispositivo o a varios.  
6. **Verificar contraseña:** Asegurarse de que se esté ingresando la contraseña correcta de la red Wi-Fi.  
7. **Reiniciar dispositivos:** Reiniciar el dispositivo que intenta conectarse a la red Wi-Fi.  
8. **Actualizar configuración NEBA:** Si el problema persiste, realizar un "Refresh NEBA Params" y reiniciar los dispositivos. Esto puede resolver problemas de configuración.  
9. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido. Esto puede resolver problemas temporales causados por configuraciones incorrectas o sobrecargas.  
10. **Acceder al router (si es necesario):** Al igual que en FTTH/HFC, puede ser necesario acceder al router para habilitar las redes Wi-Fi o ajustar la configuración del Band Steering.  
11. **Utilizar el botón WPS:** Si el router y el dispositivo son compatibles con WPS, se puede utilizar este botón para conectar el dispositivo de forma rápida y segura.  
12. **Escalar la avería:** Si después de realizar todos los pasos anteriores el problema persiste, escalar la avería.  
`,
            Observaciones: ``
        },
        cable: {
            general: `
1. **Verificar el estado de las luces:** Comprobar que la luz de ETH en el router esté encendida (en caso que disponga). Esto indica que el router detecta el cable de red.
2. **Revisar los cables:** Asegurarse de que los cables estén correctamente conectados tanto al router como al dispositivo. Una conexión suelta o dañada puede interrumpir la señal.
3. **Probar con otro cable:** Utilizar un cable de red diferente para descartar que el problema se deba a un cable defectuoso.
4. **Probar en distintos dispositivos:** Conectar el cable a otro dispositivo para determinar si el problema está en el dispositivo o en la conexión.
5. **Probar en diferentes puertos:** Conectar el cable a diferentes puertos del router para descartar que el problema se deba a un puerto defectuoso.
6. **Resetear el router:** Reiniciar el router puede solucionar problemas temporales causados por configuraciones incorrectas.
7. **Escalar la avería:** Si después de realizar todos los pasos anteriores el problema persiste, escalar la avería para que un técnico especializado realice una revisión más profunda.            
`,
            NEBA: `
1. **Verificar el estado de las luces:** Comprobar que la luz de ETH en el router esté encendida (en caso que disponga). Esto indica que el router detecta el cable de red.
2. **Revisar los cables:** Asegurarse de que los cables estén correctamente conectados tanto al router como al dispositivo. Una conexión suelta o dañada puede interrumpir la señal.
3. **Probar con otro cable:** Utilizar un cable de red diferente para descartar que el problema se deba a un cable defectuoso.
4. **Probar en distintos dispositivos:** Conectar el cable a otro dispositivo para determinar si el problema está en el dispositivo o en la conexión.
5. **Probar en diferentes puertos:** Conectar el cable a diferentes puertos del router para descartar que el problema se deba a un puerto defectuoso.
6. **Actualizar la configuración NEBA:** Realizar un "Refresh NEBA Params" y reiniciar los dispositivos. Esto puede resolver problemas de configuración.
7. **Resetear el router:** Si el problema persiste, reiniciar el router.
8. **Escalar la avería:** Si después de realizar todos los pasos anteriores el problema persiste, escalar la avería.            
`,
            Observaciones: ``
        },
        ambos: {
            general: `
1. **Verificar el estado de las luces:** Comprobar si la luz de Internet/@/S/Online está apagada. Si es así, el cliente no tendrá servicio ni por Wi-Fi ni por cable.  
2. **Revisar las conexiones:** Asegurarse de que todos los cables estén correctamente conectados al router y al módem.  
3. **Resetear el router:** Reiniciar el router puede solucionar problemas temporales causados por configuraciones incorrectas.  
4. **Escalar la avería:** Si después del reinicio la luz de Internet/@/S/Online continúa apagada, escalar la avería.  `,
            NEBA: `
1. **Verificar el estado de las luces:** Comprobar si la luz de Internet/@/S/Online está apagada. Si es así, el cliente no tendrá servicio ni por Wi-Fi ni por cable.  
2. **Revisar las conexiones:** Asegurarse de que todos los cables estén correctamente conectados al router y al módem.  
3. **Actualizar la configuración NEBA:** Realizar un "Refresh NEBA Params" y reiniciar los dispositivos. Esto puede resolver problemas de configuración.  
4. **Resetear el router:** Si el problema persiste, reiniciar el router.  
5. **Escalar la avería:** Si después del reinicio la luz de Internet/@/S/Online continúa apagada, escalar la avería.  
`,
            Observaciones: `
- **Verificar el resto de las luces:** Si la luz de Internet/@/S/Online está encendida, pero no hay conexión, verificar el estado de las demás luces del router para identificar posibles problemas.  
- **Comprobar la conectividad:** En caso de inconvenientes para comprobar la conexión, intentar conectar otros dispositivos a la red para verificar si el problema es específico de un dispositivo en particular.  
- **En caso de sin servicio WIFI o cable:** realizar las comprobaciones dependiendo del motivo.          
`
        }
    },
    Velocidad: {
        WIFI: {
            general: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces estén encendidas y con el color correcto, lo cual indica que el router está funcionando correctamente.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados, tanto al router como al dispositivo del cliente. Una conexión suelta o dañada puede afectar la velocidad.  
3. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido. Esto puede resolver problemas temporales causados por configuraciones incorrectas o sobrecargas.  
4. **Priorizar la conexión por cable:** Si el cliente dispone de conexión por cable, realizar las pruebas de velocidad a través de este medio, ya que ofrece mayor estabilidad y velocidad que la conexión Wi-Fi.  
5. **Verificar la disponibilidad de la red 5 GHz:** Si el cliente no dispone de conexión por cable, realizar el test de velocidad utilizando la red Wi-Fi de 5 GHz desde un ordenador, ya que esta banda suele ofrecer mayores velocidades.  
6. **Deshabilitar Band Steering:** Si el cliente no ve la red 5 GHz y su dispositivo la detecta, deshabilitar Band Steering en la llamada. Realizar test de velocidad en la banda de 5 GHz.  
`,
            NEBA: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces estén encendidas y con el color correcto, lo cual indica que el router está funcionando correctamente.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados, tanto al router como al dispositivo del cliente. Una conexión suelta o dañada puede afectar la velocidad  
3. **Actualizar la configuración NEBA:** Realizar un "Refresh NEBA Params" y reiniciar los dispositivos. Este paso técnico actualiza la configuración del equipo NEBA y puede mejorar el rendimiento de la red.  
4. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido. Esto puede resolver problemas temporales causados por configuraciones incorrectas o sobrecargas.  
5. **Priorizar la conexión por cable:** Si el cliente dispone de conexión por cable, realizar las pruebas de velocidad a través de este medio, ya que ofrece mayor estabilidad y velocidad que la conexión Wi-Fi.  
6. **Verificar la disponibilidad de la red 5 GHz:** Si el cliente no dispone de conexión por cable, realizar el test de velocidad utilizando la red Wi-Fi de 5 GHz desde un ordenador, ya que esta banda suele ofrecer mayores velocidades.  
7. **Deshabilitar Band Steering:** Si el cliente no ve la red 5 GHz y su dispositivo la detecta, deshabilitar Band Steering en la llamada. Realizar test de velocidad en la banda de 5 GHz.  
`,
            Observaciones: `
#### **Si el cliente no puede acceder al router por error de contraseña:**
* Abrir un ticket en HubSpot: Registrar un nuevo ticket indicando el error de contraseña y seguir el procedimiento correspondiente.
* Abrir un ticket en API: Solicitar adicionalmente que deshabiliten el Band Steering para agilizar la resolución.
* Seguimiento del ticket de velocidad: El ticket de velocidad permanecerá en seguimiento hasta que se resuelva el problema con el Band Steering.
* Respuesta de central: Tras respuesta enviar plantilla Fibra - Band Steering. 
* Contactar al cliente: Una vez que se haya deshabilitado el Band Steering, contactar al cliente para verificar que puede acceder al router y que además aparecen ambas redes (2.4 GHz y 5 GHz), realizar el test de velocidad en la banda de 5 GHz.
* Resolver el ticket de error de contraseña: Si el cliente ya puede acceder al router, resolver el ticket correspondiente en HubSpot.
#### **Si el cliente no sabe o no es posible deshabilitar el Band Steering tras acceder al router:**
* Abrir un ticket en API: Utilizar el mismo ticket de la incidencia de velocidad para solicitar que deshabiliten el Band Steering.
* Respuesta de central: Tras respuesta de central enviar plantilla Fibra - Band Steering.
* Contactar al cliente: Para verificar la configuración y realizar el test de velocidad en la banda de 5 GHz.
* Abrir un nuevo ticket si es necesario: Si el problema persiste, abrir un nuevo ticket independiente para seguir investigando.
`
        },
        cable: {
            general: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces indicadoras del router estén encendidas y con el color correcto. Esto indica que el router está recibiendo energía y que las conexiones físicas son correctas.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados tanto al router como al dispositivo del cliente. Una conexión suelta o dañada puede afectar la velocidad de la conexión.  
3. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido. Esto puede resolver problemas temporales causados por configuraciones incorrectas o sobrecargas.  `,
            NEBA: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces indicadoras del router estén encendidas y con el color correcto. Esto indica que el router está recibiendo energía y que las conexiones físicas son correctas.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados tanto al router como al dispositivo del cliente. Una conexión suelta o dañada puede afectar la velocidad de la conexión.  
3. **Actualizar la configuración NEBA:** Realizar un "Refresh NEBA Params" y reiniciar los dispositivos. Este paso técnico actualiza la configuración del equipo NEBA y puede mejorar el rendimiento de la red.  
4. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido. Esto puede resolver problemas temporales causados por configuraciones incorrectas o sobrecargas.  
`,
            Observaciones: `
* **Realizar test de velocidad:** Conectar un ordenador directamente al router mediante un cable Ethernet y realizar un test de velocidad. Solicitar al cliente una captura de pantalla donde se vea el icono de conexión por cable y los resultados del test.  
* **Verificar la categoría del cable:** Asegurarse de que el cable Ethernet sea de categoría 5e o superior. Los cables de categoría 5 están limitados a 100 Mbps.  
* **Comprobar la tarjeta de red:** Verificar si la tarjeta de red del ordenador está configuraa para una velocidad de 100 Mbps o inferior.  
* **Escalar la avería:** Si después de realizar las comprobaciones anteriores la velocidad sigue siendo baja, escalar la avería adjuntando los resultados del test de velocidad.  
`
        },
        ambos: ``
    },
    Cortes: {
        WIFI: {
            general: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces indicadoras del router estén encendidas y con el color correcto.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados tanto al router como al dispositivo del cliente.  
3. **Comprobar si el problema ocurre en un dispositivo o en varios:** Determinar si el corte afecta a todos los dispositivos conectados a la red o solo a uno.  
4. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido.  
5. **Explicar la diferencia entre la banda de 2.4 GHz y 5 GHz:** Informar al cliente sobre las características de cada banda y cómo pueden afectar la velocidad y alcance de la conexión.  
6. **Deshabilitar el Band Steering (solo FTTH):** Si el problema persiste, solicitar al cliente que deshabilite la función Band Steering en el router. Dejar el caso en seguimiento durante 48 horas para verificar si se ha solucionado. Si el cliente no puede realizar este paso, seguir los procedimientos indicados en la tabla.  
7. **Escalar la avería:** Si la incidencia persiste después de realizar los pasos anteriores, es necesario escalar la incidencia a un nivel superior.  
`,
            NEBA: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces indicadoras del router estén encendidas y con el color correcto.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados tanto al router como al dispositivo del cliente.  
3. **Comprobar si el problema ocurre en un dispositivo o en varios:** Determinar si el corte afecta a todos los dispositivos conectados a la red o solo a uno.  
4. **Actualizar la configuración NEBA:** Realizar un "Refresh NEBA Params" y reiniciar los dispositivos.  
5. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido.  
6. **Explicar la diferencia entre la banda de 2.4 GHz y 5 GHz:** Informar al cliente sobre las características de cada banda y cómo pueden afectar la velocidad y alcance de la conexión.  
7. **Deshabilitar el Band Steering (solo FTTH):** Si el problema persiste, solicitar al cliente que deshabilite la función Band Steering en el router. Dejar el caso en seguimiento durante 48 horas para verificar si se ha solucionado. Si el cliente no puede realizar este paso, seguir los procedimientos indicados en la tabla.  
8. **Escalar la avería:** Si la incidencia persiste después de realizar los pasos anteriores, es necesario escalar la incidencia a un nivel superior.  
`,
            Observaciones: `
#### **Si el cliente no puede acceder al router por error de contraseña:**  

- **Abrir un ticket en HubSpot:** Registrar un nuevo ticket indicando el error de contraseña y seguir el procedimiento correspondiente.  
- **Abrir un ticket en API:** Con el motivo de error de contraseña y solicitar adicionalmente que deshabiliten el Band Steering para agilizar la resolución.  
- **Seguimiento:** El ticket de cortes permanecerá en seguimiento hasta que se reciba una respuesta del ticket en API.  
- **Respuesta de central:** Tras respuesta, enviar plantilla **Fibra - Band Steering**.  
- **Contactar al cliente:** Una vez que se haya deshabilitado el Band Steering, contactar al cliente para verificar que puede acceder al router y aparecen ambas redes. Dejar el caso de cortes en seguimiento durante 48 horas.  
- **Resolver el ticket de error de contraseña:** Si el cliente ya puede acceder al router, resolver el ticket correspondiente en HubSpot.  

---  

#### **Si el cliente no sabe o no es posible deshabilitar el Band Steering tras acceder al router:**  

- **Abrir un ticket en API:** Utilizar el mismo ticket (cortes) de HubSpot para solicitar que deshabiliten el Band Steering.  
- **Respuesta de central:** Tras respuesta de central, enviar plantilla **Fibra - Band Steering** (no contactar al cliente) y dejar el caso en seguimiento durante 48 horas.  
- **Abrir otro ticket en API:** Si el problema persiste, abrir un nuevo ticket en API usando el mismo ticket (cortes) de HubSpot.  
`
        },
        cable: {
            general: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces indicadoras del router estén encendidas y con el color correcto.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados tanto al router como al dispositivo del cliente (computadora, televisor, etc.).  
3. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido.  `,
            NEBA: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces indicadoras del router estén encendidas y con el color correcto.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados tanto al router como al dispositivo del cliente (computadora, televisor, etc.).  
3. **Actualizar la configuración NEBA:** Realizar un "Refresh NEBA Params" y reiniciar los dispositivos.  
4. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido.  
`,
            Observaciones: `
- **Probar con otro cable de Ethernet:** Si el problema persiste, intentar conectar el dispositivo a una red utilizando un cable Ethernet diferente.  
- **Probar en otro dispositivo:** Conectar el mismo cable a otro dispositivo para descartar que el problema esté en el dispositivo del cliente.  
- **Verificar todos los puertos:** Probar el cable en diferentes puertos del router.  
- **Esperar y escalar:** Si el problema persiste después de 48 horas, es necesario escalar la incidencia a un nivel superior para una mayor investigación.  `            
},
        ambos: ``
    },
    Cobertura: {
        general: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces indicadoras del router estén encendidas y con el color correcto. Esto indica que el router está recibiendo energía y que las conexiones físicas son correctas.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados tanto al router como al módem o a la conexión de pared. Una conexión suelta puede afectar la estabilidad de la señal.  
3. **Revisar la ubicación del router:** Evaluar si el router se encuentra en un lugar adecuado. El router debe estar ubicado en un lugar centralizado, alejado de obstáculos como paredes gruesas o dispositivos electrónicos que puedan interferir con la señal.  
4. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido.  
`,
        NEBA: `
1. **Verificar el estado de las luces del router:** Asegurarse de que todas las luces indicadoras del router estén encendidas y con el color correcto. Esto indica que el router está recibiendo energía y que las conexiones físicas son correctas.  
2. **Comprobar las conexiones de los cables:** Revisar que todos los cables estén firmemente conectados tanto al router como al módem o a la conexión de pared. Una conexión suelta puede afectar la estabilidad de la señal.  
3. **Revisar la ubicación del router:** Evaluar si el router se encuentra en un lugar adecuado. El router debe estar ubicado en un lugar centralizado, alejado de obstáculos como paredes gruesas o dispositivos electrónicos que puedan interferir con la señal.  
4. **Actualizar la configuración NEBA:** Realizar un **"Refresh NEBA Params"** y reiniciar los dispositivos. Este paso técnico actualiza la configuración del equipo NEBA y puede mejorar el rendimiento de la red.  
5. **Restablecer el router de fábrica:** Esperar unos minutos y verificar si el servicio se ha restablecido.          
`,
        Observaciones: `
- **Comprobar la red Wi-Fi:** Verificar a qué red Wi-Fi se conecta y explicar las diferencias entre las bandas de 2.4 GHz y 5 GHz. Deshabilitar Band Steering según el modelo del router para optimizar la distribución de los dispositivos entre las bandas.  
- **Seguimiento:** Dejar en seguimiento durante 48 horas para verificar si se ha solucionado.  
- **Escalar la avería:** Si después de 48 horas el problema persiste, escalar la avería por API, proporcionando ejemplos específicos como pérdida de cobertura en una habitación determinada (antes no pasaba) o disminución del rendimiento en comparación con situaciones anteriores.  
- **Explicar los motivos de la pérdida de cobertura:** Si no se procede a escalar la avería, explicar al cliente los factores que pueden afectar la cobertura Wi-Fi, como obstáculos físicos, interferencias de otros dispositivos o la distancia al router.  
- **Recomendar un amplificador de señal:** Sugerir al cliente la instalación de un amplificador de señal si los problemas persisten. Enviar plantilla **Consejos ubicación router**.  
`
    },

    "Error contraseña": {
        router: `
1. **Verificación de la contraseña:** Asegúrate de estar utilizando la contraseña correcta para acceder a la interfaz de administración del router. Esta contraseña es diferente a la contraseña de la red Wi-Fi.
2. **Restablecimiento a valores de fábrica:** Si has modificado la contraseña del router y la has olvidado, deberás restablecer el router a su configuración de fábrica. Esto borrará todas las configuraciones personalizadas, incluyendo la contraseña. La contraseña predeterminada (de fábrica) se encuentra en una etiqueta adherida al router.
3. **Procedimiento de reseteo:** Localiza el botón de reinicio (Reset) en el router (generalmente un pequeño orificio). Con el router encendido, introduce un objeto puntiagudo (como un clip) en el orificio y mantenlo presionado durante 10-15 segundos. Las luces del router parpadearán, indicando que se está reiniciando.
4. **Obtención de la contraseña predeterminada:** Si no encuentras la etiqueta o está ilegible, solicita una fotografía de la misma. Solo en casos excepcionales, o con autorización de la Coordinación, se podrá prescindir de la foto. Si es necesario, la contraseña se puede deletrear por teléfono.
5. **Usuario en routers Sercomm Vox:** En los routers de la marca Sercomm Vox, el usuario para acceder a la configuración es "sercomm", no "admin".
6. **Escalado de la incidencia:** Si después de seguir estos pasos el problema persiste, se debe escalar la incidencia a través de los canales correspondientes (API), adjuntando la fotografía de la etiqueta del router.
`,
        WIFI: `
1. **Verificación de la contraseña:** Asegúrate de estar utilizando la contraseña correcta de la red Wi-Fi. Esta es diferente a la contraseña de acceso a la configuración del router.
2. **Prueba en otros dispositivos:** Intenta conectar otros dispositivos a la red Wi-Fi. Si el problema solo ocurre en un dispositivo, es probable que el problema esté en ese dispositivo y no en el router.
3. **Restablecimiento a valores de fábrica del router (como último recurso):** Si has cambiado la contraseña de la red Wi-Fi y la has olvidado, o si sospechas que hay un problema con la configuración del router, puedes restablecerlo a su configuración de fábrica). Recuerda que esto borrará todas las configuraciones, incluyendo el nombre y la contraseña de la red Wi-Fi, que volverán a ser los valores predeterminados de fábrica que se encuentran en la etiqueta.
4. **Obtención de la contraseña predeterminada (Wi-Fi):** Al igual que con la contraseña del router, si no encuentras la etiqueta o está ilegible, solicita una fotografía de la misma. Solo en casos excepcionales, o con autorización de la Coordinación, se podrá prescindir de la foto. Si es necesario, la contraseña se puede deletrear por teléfono.
5. **Escalado de la incidencia:** Si después de seguir estos pasos el problema persiste, se debe escalar la incidencia a través de los canales correspondientes (API), adjuntando la fotografía de la etiqueta del router.
`
    }
}


export default Procedimientos;