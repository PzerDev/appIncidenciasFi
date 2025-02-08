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
        WiFi: {
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
        WiFi: {
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
        WiFi: {
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
6. **Escalado de la incidencia:** Si después de seguir estos pasos el problema persiste, se debe escalar la incidencia por API, adjuntando la fotografía de la etiqueta del router.
`,
        WiFi: `
1. **Verificación de la contraseña:** Asegúrate de estar utilizando la contraseña correcta de la red Wi-Fi. Esta es diferente a la contraseña de acceso a la configuración del router.
2. **Prueba en otros dispositivos:** Intenta conectar otros dispositivos a la red Wi-Fi. Si el problema solo ocurre en un dispositivo, es probable que el problema esté en ese dispositivo y no en el router.
3. **Restablecimiento a valores de fábrica del router (como último recurso):** Si has cambiado la contraseña de la red Wi-Fi y la has olvidado, o si sospechas que hay un problema con la configuración del router, puedes restablecerlo a su configuración de fábrica). Recuerda que esto borrará todas las configuraciones, incluyendo el nombre y la contraseña de la red Wi-Fi, que volverán a ser los valores predeterminados de fábrica que se encuentran en la etiqueta.
4. **Obtención de la contraseña predeterminada (Wi-Fi):** Al igual que con la contraseña del router, si no encuentras la etiqueta o está ilegible, solicita una fotografía de la misma. Solo en casos excepcionales, o con autorización de la Coordinación, se podrá prescindir de la foto. Si es necesario, la contraseña se puede deletrear por teléfono.
5. **Escalado de la incidencia:** Si después de seguir estos pasos el problema persiste, se debe escalar la incidencia por API, adjuntando la fotografía de la etiqueta del router.
`
    },
    "Cambiar contraseña": {
        "acceso router": `
1.  **Conexión:** Conéctate a la red del router, ya sea por cable Ethernet o de forma inalámbrica (Wi-Fi).  
2.  **Acceso:** Abre un navegador web (como Chrome, Firefox, Edge, Safari, etc.) en tu dispositivo (ordenador, móvil, tableta) y escribe la URL de acceso al router 192.168.0.1 en la barra de direcciones.  
3.  **Identificación:** Introduce los datos de acceso al router: el nombre de usuario y la contraseña.  
4.  **Cambio de contraseña:** Una vez dentro de la configuración del router, busca la sección llamada "Configuración de tu router", y luego la opción "Contraseña". Sigue las instrucciones para cambiar la contraseña de acceso al router.  
5.  **Guardar cambios:** Haz clic en el botón "Aplicar" o "Guardar" para que los cambios se hagan efectivos.  
6.  **Modo experto (si es necesario):** Algunos routers pueden requerir que accedas al "modo experto" (generalmente un botón o enlace en la esquina superior derecha).  
7.  **Escalar por API:** Si tienes problemas para cambiar la contraseña, solicita una foto de la etiqueta del router al cliente y escala el problema a través de API, adjuntando la imagen de la etiqueta.  
`,
        "redes WiFi": `
1.  **Conexión:** Conéctate a la red del router, ya sea por cable Ethernet o de forma inalámbrica (Wi-Fi).  
2.  **Acceso:** Abre un navegador web y escribe la URL de acceso al router 192.168.0.1 en la barra de direcciones.  
3.  **Identificación:** Introduce los datos de acceso al router (usuario y contraseña).  
4.  **Cambio de contraseña Wi-Fi:** Una vez dentro de la configuración del router, busca la sección llamada "General" y luego la opción "Wi-Fi".   
5.  **Guardar cambios:** Haz clic en el botón "Aplicar" o "Guardar" para que los cambios se hagan efectivos.  
6.  **Escalar por API:** Si tienes problemas tras estas comprobaciones, solicita una foto de la etiqueta del router al cliente y escala el problema a través de API, adjuntando la imagen de la etiqueta.  
`
    },
    "Habilitar/Deshabilitar redes WiFi": {
        general: `
1.  **Compatibilidad de dispositivos:** Antes de habilitar la red 5G, asegúrate de que tus dispositivos (móviles, ordenadores, etc.) sean compatibles con esta tecnología, ya que no todos lo son.  
2.  **Detección de redes 5G:** Si tu dispositivo no reconoce las redes Wi-Fi, revisa si le aparecen redes vecinas que utilicen la frecuencia 5G. Esto puede indicar un problema de compatibilidad o configuración en tu dispositivo.  
3.  **Móviles de importación:** Si utilizas un móvil de importación, es posible que no detecte los canales 11 y 12 en la red de 2.4 GHz. Esto se debe a que estos canales pueden no estar homologados en algunos países.  
4.  **Conexión al router:** Conéctate a la red del router, ya sea utilizando un cable Ethernet o mediante Wi-Fi.  
5.  **Seguridad WPA/WPA2:** Asegúrate de que el nivel de seguridad configurado en el router sea WPA/WPA2. Este es el protocolo de seguridad recomendado para redes Wi-Fi.  
6.  **Acceso a la configuración:** Abre un navegador web y escribe la URL de acceso al router 192.168.0.1 en la barra de direcciones. Introduce el nombre de usuario y la contraseña para acceder a la configuración. Estos datos están en la etiqueta del router.  
7.  **Habilitar/deshabilitar redes:** Una vez dentro de la configuración, busca la sección "General" y luego "Wi-Fi". Aquí podrás habilitar o deshabilitar las redes Wi-Fi según tus necesidades.  
8.  **Escalado de incidencias:** Si no es posible habilitar o deshabilitar las redes, o si tienes problemas con la función Band Steering, escalar a través de API.  
`,
        bandSteering: `
1.  **Compatibilidad de dispositivos:** Antes de habilitar la red 5G, asegúrate de que tus dispositivos (móviles, ordenadores, etc.) sean compatibles con esta tecnología, ya que no todos lo son.  
2.  **Detección de redes 5G:** Si tu dispositivo no reconoce las redes Wi-Fi, revisa si le aparecen redes vecinas que utilicen la frecuencia 5G. Esto puede indicar un problema de compatibilidad o configuración en tu dispositivo.  
3.  **Móviles de importación:** Si utilizas un móvil de importación, es posible que no detecte los canales 11 y 12 en la red de 2.4 GHz. Esto se debe a que estos canales pueden no estar homologados en algunos países.  
4.  **Conexión al router:** Conéctate a la red del router, ya sea utilizando un cable Ethernet o mediante Wi-Fi.  
5.  **Seguridad WPA/WPA2:** Asegúrate de que el nivel de seguridad configurado en el router sea WPA/WPA2. Este es el protocolo de seguridad recomendado para redes Wi-Fi.  
6.  **Acceso a la configuración:** Abre un navegador web y escribe la URL de acceso al router 192.168.0.1 en la barra de direcciones. Introduce el nombre de usuario y la contraseña para acceder a la configuración. Estos datos están en la etiqueta del router.  
7.  **Disponibilidad:** Para lograr habilitar y deshabilitar las redes WiFi por separado en este modelo de router la función de Band Steering debe desactivarse.  
8.  **Escalado de incidencias:** Si no es posible habilitar o deshabilitar las redes, o si tienes problemas con la función Band Steering, escalar a través de API.  
`
},
    "Cable roto": {
        general: `
1.  **Estado de las luces del router:** Observa el estado de las luces del router para identificar si hay alguna indicación de un cable roto.  
2.  **Revisión del cableado:** Inspecciona visualmente el cableado para detectar posibles daños o conexiones sueltas.  
3.  **Identificación del cable roto:** Intenta determinar cuál cable específico está roto o dañado.  
4.  **Prueba en otros dispositivos:** Conecta otros dispositivos (ordenadores, móviles, etc.) al mismo cable para verificar si el problema persiste. Esto ayuda a descartar si el problema está en el dispositivo o en el cable.  
5.  **Escalado de la incidencia:** Si después de estas pruebas el problema continúa, escala la incidencia a través de API.  
`
},
    "Router roto": {
        general: `
1.  **Estado de las luces del router:** Observa el estado de las luces del router. Es posible que estén todas apagadas, solo la luz de "Power" encendida o que el router se reinicie continuamente.  
2.  **Revisión del cableado:** Inspecciona visualmente el cableado para detectar posibles daños o conexiones sueltas.  
3.  **Reinicio del router:** Intenta reiniciar el router desconectándolo de la corriente eléctrica durante unos segundos y volviéndolo a conectar.  
4.  **Prueba en distintos enchufes:** Prueba conectar el router a diferentes enchufes para descartar problemas con la fuente de alimentación.  
5.  **Escalado de la incidencia:** Si después de estas pruebas el problema continúa, escala la incidencia a través de API.  
`
},

    "Masiva": {
        general: `
## Procedimiento inicial
1.  **Registro:** Asigna el ticket a "Pendientes pruebas FI".  
2.  **Comunicación inicial:** Envía la plantilla predefinida "Avería masiva" al cliente para informarle que existe una avería masiva en su zona y que se está trabajando para solucionarla.  

## Seguimiento y resolución
3.  **Seguimiento de la etiqueta:** Revisa la etiqueta de "masiva" una o dos veces al día. Cuando aparezca como solucionada, sigue estos pasos:
   * Registra la solución en la nota histórica del ticket.
   * Contacta con el cliente para verificar que el servicio se haya restablecido.
4.  **Llamada de verificación:**  
   * **Si el cliente está ilocalizable:** Se envía la plantilla predefinida "Avería masiva resuelta" y se resuelve el ticket.
   * **Si el cliente confirma que la avería se ha solucionado:** Se envía la plantilla "Avería solucionada en llamada" y se resuelve el ticket.
   * Registrar la llamada de verificación como "PRUEBAS FI" y asociarla al ticket.

## Avería persistente
5.  Si el cliente indica que la avería continúa, gestiona la incidencia como una avería individual:
   * Utiliza la llamada para realizar pruebas adicionales con el cliente.
   * No abras un nuevo ticket: Continúa gestionando la avería en el mismo ticket de HubSpot, pero cambia el motivo de la avería.

## Averías masivas con antigüedad de 7 días
6.  **Seguimiento y comunicación (72 horas):** Contacta con el cliente a las 72 horas (3 días) de haber abierto el ticket para confirmar si persiste la falta de servicio. Si la avería continúa, informar que se sigue trabajando en ello.
7.  **Seguimiento y pruebas (96 horas):** Si a las 96 horas (4 días después de la llamada anterior) la avería masiva persiste, contacta nuevamente con el cliente y realiza pruebas de "sin servicio" y "ONT alarmada". Si no se recupera el servicio, se abre una avería por API.
8.  **Escalado a coordinación:** Si tras abrir la avería, el servicio central informa que el cliente está afectado por una avería masiva, escala el ticket a coordinación para que se realice el reclamo correspondiente. Pregunta el motivo de la avería masiva y la fecha de resolución aproximada.
9.  **Cliente ilocalizable:** Si el cliente no responde a las llamadas, aplica la política de reintentos y resuelve el ticket si no se logra contactarlo.
`
},
    "Desperfecto": {
        general: `
## 1. Requisitos para Reportar un Desperfecto
* Para gestionar un desperfecto, es imprescindible que el incidente haya ocurrido y se comunique en un plazo máximo de 30 días tras la visita del técnico, ya sea después de una instalación o de la resolución de una avería.
* Si se cumplen estos requisitos:
    * Se solicitará al cliente una fotografía del desperfecto.
    * Se abrirá un ticket API.
    * Se asegurará que la información correcta quede registrada en las notas internas.
    * Si desde Majorel solicitan la imagen del desperfecto proporcionada por el cliente, esta se adjuntará mediante Outlook y se dejará constancia en la nota interna.

## 2. Excepciones
* Si han transcurrido más de 30 días desde el desperfecto, solo se gestionará si este fue ocasionado por una causa externa y en el exterior del domicilio. Ejemplos incluyen daños provocados por un camión, actos vandálicos o factores medioambientales que, a pesar del desperfecto, no afectan el funcionamiento del servicio.
    * **Ejemplo:** Si un camión ha soltado cables al pasar, pero el cliente sigue contando con servicio, se procederá a la apertura del caso mediante Excel.
* Si el desperfecto no cumple estos requisitos, no procederá su gestión. En este caso, se enviará la respuesta predefinida Fibra – Desperfecto no procede y se cerrará el ticket.
`,
        "no cliente" : `
Al igual que en los casos de desperfectos de clientes, es fundamental que el incidente haya ocurrido y se comunique dentro de los 30 días posteriores a la visita del técnico.

Si el desperfecto afecta a un **no cliente**, se procederá de la siguiente manera, según quién realice el contacto:

* **Cliente:** Si el técnico ha causado un desperfecto a un **no cliente**, se abrirá un ticket API, ya que se disponen de los datos del cliente para su gestión.
* **No cliente:** Si no se cuenta con los datos necesarios para abrir un ticket API, el desperfecto deberá ser escalado a Coordinación Fibra, recopilando la siguiente información:
    * Causa de la reclamación.
    * Fotografías de apoyo.
    * Dirección de la incidencia.
    * Contacto de la persona afectada.
`,
        TESA: `
Si se identifica un desperfecto de TESA, se escalará a Coordinación para que puedan gestionarlo con la central. No se abrirá un ticket API.

Se deberá registrar en el Excel "Averías Fibra" > pestaña "Desperfectos TESA", con la siguiente información:
* ID
* Número de ticket
* Breve descripción
* Fecha de apertura
* Fecha de solución (cuando se resuelva, se debe registrar para seguimiento adecuado)        
`
},
    "Reubicación": {
        general: `
Para solicitar una reubicación, el incidente debe haberse comunicado en un plazo máximo de 30 días tras la visita del técnico para la instalación.

**Casos en los que procede gestionar la reubicación:**

* **Errores en la instalación:** Si el técnico no respetó la solicitud del cliente y este requiere la reubicación dentro de los 30 días siguientes a la instalación.
    * Ejemplo: El cliente solicitó instalar el router en un lugar específico y el técnico lo ubicó en otro.
* **Instalación realizada en un sitio inadecuado:** como el patio, balcón, cocina o baño.
* **Ausencia del cliente:** Si el cliente no estuvo presente el día de la instalación y solicita una reubicación dentro del plazo de 30 días.

En estos casos, la gestión se realizará a través de Excel, sin abrir un ticket API.

**Excepción:**

* **Reformas:** Si el cliente ha realizado una reforma en su domicilio, la reubicación podrá gestionarse sin límite de tiempo.

**Casos en los que no procede la reubicación:**

* **Más de 30 días:** Si han pasado más de 30 días (excepto en caso de reformas), se enviará la respuesta predefinida Fibra – Reubicación no procede.
* **Problemas de señal:** Si el cliente solicita la reubicación debido a problemas de señal del router, se enviará la respuesta predefinida Fibra – Reubicación - Cobertura WiFi y se realizarán pruebas de cobertura si es necesario.
`,
        TESA: `
Si cumple con los requisitos, se escalará a Coordinación Fibra para que se reporte a VDF con la siguiente información:
* Fotografía de la ubicación actual del router y PTRo.
* Breve descripción del motivo de la nueva ubicación.
`

        }
}


export default Procedimientos;