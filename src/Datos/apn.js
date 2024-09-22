let apn = {
    "Xiaomi": `Adjuntamos configuración móvil solicitada para dispositivos Xiaomi (General).

Desactivar WiFi y activar datos móviles

Seguir los siguientes pasos: 
Ingresar en Ajustes > Tarjetas SIM y redes móviles > TarjetaSIM de FinetWork > Nombres de Puntos de Acceso

1. Pulsar el botón de ""Reiniciar"" o ""Restablecer""
2. Pulsar en Nuevo APN +
3. Introducir los siguientes parámetros para la configuración:
   - Nombre: FI
   - APN: fi.omv.es
   - Tipo de APN: default,supl,dun
   - Tipo de OMV: Seleccionar > IMSI
   - Valor de OMV: 2140606
   - MCC: 214
   - MNC: 06
4. Pulsar en el botón (más) y guardar la configuración.
5. Seleccionar la APN configurada.

En caso de Roaming, reiniciar el terminal luego de la configuración.

Para más información:
https://www.finetwork.com/ayuda/movil/como-configuro-los-datos-de-mi-telefono-para-navegar`,
    "Samsung": `Adjuntamos configuración móvil solicitada para dispositivos Samsung (General).

Desactivar WiFi y activar datos móviles

Seguir los siguientes pasos: 
Ajustes > Conexiones > Redes Móviles > Nombres de los puntos de acceso

1. Pulsar el botón de los tres puntos ubicado en la parte superior derecha
2. Pulsar en Restablecer valores > Restablecer
3. Pulsar en Añadir
4. Introducir los siguientes parámetros para la configuración:
   - Nombre: FI
   - APN: fi.omv.es
   - Tipo de APN: default,supl,dun
   - Tipo de Operador Móvil Virtual: Seleccionar > IMSI
   - Valor de Operador Móvil Virtual: 2140606
   - MCC: 214
   - MNC: 06
5. Pulsar en el botón de los tres puntos ubicado en la parte superior derecha y guardar la configuración.
6. Seleccionar la APN configurada (Pulsando el punto).

En caso de Roaming, reiniciar el terminal luego de la configuración.

Para más información:
https://www.finetwork.com/ayuda/movil/como-configuro-los-datos-de-mi-telefono-para-navegar`,
    "iPhone": `Adjuntamos configuración móvil solicitada para dispositivos iPhone (General).

Desactivar WiFi y activar datos móviles

Seguir los siguientes pasos: 
Ajustes > Datos móviles > Red de datos móviles

1. Pulsar en Restablecer ajustes > Restablecer
2. Introducir los siguientes parámetros para la configuración:

Campo DATOS MÓVILES
  - Punto de acceso: fi.omv.es
  - Nombre: 
  - Contraseña: 
Campo MMS:
  - Punto de acceso: fi.omv.es
  - Nombre: 
  - Contraseña: 
Campo LTE opcional:
  - Punto de acceso: fi.omv.es
  - Nombre: 
  - Contraseña: 
Campo PUNTO DE ACCESO PERSONAL:
  - Punto de acceso: fi.omv.es
  - Nombre: 

En caso de Roaming, reiniciar el terminal luego de la configuración.

Para más información:
https://www.finetwork.com/ayuda/movil/como-configuro-los-datos-de-mi-telefono-para-navegar`
}

export default apn;