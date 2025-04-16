let Routers = [
    {
        acometida: "Vodafone / Tesa",
        tecnologia: "Router FTTH",
        router: "ONT Nokia G010G-P y Router Sercomm W1-H500s",
        luces: `Router  
&nbsp;- POWER - INTERNET - WIFI  
ONT Nokia  
&nbsp;- Power - Alarm - PON - LAN`,
        estadoLuces: {
            ont: {
                Power: {
                    Encendida: '',
                    Apagada: 'Encender equipo. Apretar cables, probar en otra toma de corriente'
                },
                Alarm: {
                    Apagada: '',
                    Encendida: 'ONT Alarmada. No llega suficiente señal óptica'
                },
                PON: {
                    Encendida: 'Conexión óptica correcta',
                    Intermitente: 'Conexión correcta, se encuentra enviando datos',
                    "Apagada o roja": 'ONT Apagada y no recibe corriente'
                },
                LAN: {
                    Encendida: 'Cable de red conectado sin tráfico de datos',
                    Intermitente: 'Cable de red conectado con tráfico de datos',
                    Apagada: 'En caso de cables conectados, verificar conexión y probar en otro puerto'
                }
            },
            router: {
                POWER: {
                    Encendida: '',
                    Apagada: 'Encender equipo, apretar cables, probar en otra toma de corriente'
                },
                INTERNET: {
                    "Encendida (Verde)": 'Conectado a internet',
                    "Encendida (Roja)": 'No hay conexión a internet',
                    "Intermitente (Verde)": 'Estableciendo conexión',
                    Apagada: 'No hay conexión a internet'
                },
                WIFI: {
                    Encendida: 'WIFI activado',
                    "Intermitente (lento)": 'WiFi desactivado por programación',
                    "Intermitente (rápido)": 'Sincronización WPS',
                    Apagada: 'No hay conexión WIFI'
                }
            }
        },
        src: ""
    },
    {
        acometida: "Vodafone / Tesa",
        tecnologia: "Router FTTH",
        router: "Sercomm Vox 3.0 fiber",
        luces: `&nbsp;- POWER - PHONE - INTERNET - WPS - WiFi`,
        estadoLuces: {
            configuracion: {
                POWER: {
                    "Encendida (blanca)": 'Equipo encendido',
                    Intermitente: 'Durante el reinicio del equipo',
                    "Encendida (roja)": 'Fallo en dispositivo',
                    Apagada: 'Encender equipo, apretar cables, probar en otra toma de corriente'
                },
                INTERNET: {
                    "Intermitente (roja)": 'ONT Alarmada o error de sincronización',
                    "Encendida (blanca)": 'Conectado a la red',
                    "Intermitente (blanca)": 'Dura 1 minuto cuando se está estableciendo conexión',
                    Apagada: 'No hay enlace con GPON'
                },
                WIFI: {
                    "Encendida (blanca)": 'Una o más redes WIFI activas',
                    "Intermitente rápido": 'Sincronización WPS',
                    "Intermitente (roja)": 'Una de las redes WIFI está abierta o con cifrado WEP',
                    Apagada: 'Redes WIFI apagadas'
                },
                WPS: {
                    "Intermitente (blanca)": 'Buscando dispositivos (2min aprox). Al activar esta opción WIFI estará intermitente',
                    "Intermitente (roja)": 'Error en el emparejamiento de dispositivos',
                    Apagada: 'WPS apagado'
                }
            }
        },
        src: ""
    },
    {
        acometida: "Vodafone / Tesa",
        tecnologia: "Router FTTH",
        router: "Sercomm ONT L3 FG824CD",
        luces: `&nbsp;- Power - Sincronizar - Alarma - @ - Ethernet - USB - Teléfono - 2G - 5G - WPS`,
        estadoLuces: {
            configuracion: {
                Power: {
                    Encendida: 'Equipo encendido',
                    Intermitente: 'Arranque del dispositivo/ estableciendo conéxion',
                    Apagada: 'Encender equipo, apretar cables, probar en otra toma de corriente'
                },
                Sincronizar: {
                    Encendida: 'Configuración finalizada',
                    Intermitente: '+2 minutos, significa que no configura o error en la autentificación',
                    Apagada: 'No hay enlace con GPON'
                },
                "!": {
                    "Encendida (roja)": 'Fibra desconectada o transceptor desactivado',
                    Apagada: 'Conectado, transceptor activado'
                },
                "@": {
                    Encendida: 'Dirección IP recibida, conexión establecida',
                    Apagada: 'Sin conexión'
                },
                Ethernet: {
                    Encendida: 'Conexión ETH. En caso de transferencia de datos, el puerto ethernet estará intermitente',
                    Apagada: 'Sin enlace de Ethernet'
                },
                "2G": {
                    Encendida: 'Red WIFI en la banda de 2.4GHz encendida',
                    Apagada: 'Red WIFI 2.4GHz apagada'
                },
                "5G": {
                    Encendida: 'Red WIFI en la banda de 5GHz encendida',
                    Apagada: 'Red WIFI 5GHz apagada'
                }
            }
        },
        src: ""
    },
    {
        acometida: "Adamo",
        tecnologia: "Router FTTH",
        router: "ZTE ZXHN F6600P",
        luces: `&nbsp;- Power - PON - LOS - Internet - Phone - LAN1 - LAN2 - LAN3 - LAN4 - 2.4G - 5G - WPS - USB`,
        src: ""
    },
    {
        acometida: "Onivia",
        tecnologia: "Router FTTH",
        router: "Huawei EG8145V5",
        luces: `&nbsp;- Power - PON - LOS - LAN1 - LAN2 - LAN3 - LAN4 - TEL - USB - WLAN - WPS`,
        src: ""
    },
    {
        acometida: "Onivia",
        tecnologia: "Router FTTH",
        router: "ZTE ZXHN F6600P",
        luces: `&nbsp;- Power - PON - LOS - Internet - Phone - LAN1 - LAN2 - LAN3 - LAN4 - 2.4G - 5G - WPS - USB`,
        src: ""
    },
    {
        acometida: "Finetwork",
        tecnologia: "Router FTTH",
        router: "Huawei EG8145V5",
        luces: `&nbsp;- Power - PON - LOS - LAN1 - LAN2 - LAN3 - LAN4 - TEL - USB - WLAN - WPS`,
        src: ""
    },
    {
        acometida: "Vodafone / Tesa",
        tecnologia: "Router HFC",
        router: "Technicolor TC7230",
        luces: `&nbsp;- Eth - Phone - WiFi - Online - Power`,
        estadoLuces: {
            configuracion: {
                Power: {
                    Encendida: 'Equipo encendido',
                    Intermitente: 'Puesta en marcha',
                    Apagada: 'Encender equipo, apretar cables, probar en otra toma de corriente'
                },
                Online: {
                    Encendida: 'Sincronización completada, navegación correcta',
                    Intermitente: '1:30 min durante la sincrotización. Pasado el tiempo tiene que cambiar a fija',
                    Apagada: 'Problemas para sincronizar'
                },
                WiFi: {
                    Encendida: 'WIFI activo',
                    Intermitente: 'Hay tráfico de datos por WIFI',
                    Apagada: 'Red WIFI apagada'
                },
                Eth: {
                    Encendida: 'Dispositivos conectados por cable',
                    Intermitente: 'Tráfico ethernet detectado',
                    Apagada: 'No detecta dispositivos conectados por cable'
                }
            }
        },
        src: ""
    },
    {
        acometida: "Vodafone / Tesa",
        tecnologia: "Router HFC",
        router: "Sagemcom F@st3686",
        luces: `&nbsp;- WPS - WiFi - PhoneMsg - Phone2 - Phone1 - ETH - @ - S - Power`,
        estadoLuces: {
            configuracion: {
                Power: {
                    Encendida: 'Equipo encendido',
                    Apagada: 'Encender equipo, apretar cables, probar en otra toma de corriente'
                },
                S: {
                    Encendida: 'Sincronización correcta',
                    Intermitente: '1:30 min durante la sincrotización. Pasado el tiempo tiene que cambiar a fija',
                    Apagada: 'Problemas para establecer conexión con central'
                },
                "@": {
                    Encendida: 'Acceso a internet correcto',
                    Intermitente: 'Se está configurando o conectando a la red',
                    Apagada: 'Problemas de acceso a internet'
                },
                ETH: {
                    Encendida: 'Conexión ETH. En caso de transferencia de datos, el puerto ethernet estará intermitente',
                    Apagada: 'No detecta dispositivos conectados por cable'
                },
                WiFi: {
                    Encendida: 'WIFI activo',
                    Intermitente: 'Hay tráfico de datos por WIFI',
                    Apagada: 'Red WIFI apagada'
                },
                WPS: {
                    Encendida: 'Por 5 segundos y se apaga: no se ha emparejado con el dispositivo',
                    Intermitente: 'Hay tráfico de datos por WIFI',
                    Apagada: 'Cuando empareja correctamente y se apaga / WPS apagado'
                }
            }
        },
        src: ""
    },
    {
        acometida: "Vodafone / Tesa",
        tecnologia: "Router HFC",
        router: "Technicolor CGA6444VFES",
        luces: `&nbsp;- PHONE - INTERNET - WPS - WIFI - POWER`,
        estadoLuces: {
            configuracion: {
                POWER: {
                    Encendida: 'Equipo encendido',
                    Intermitente: 'El equipo se está iniciando',
                    Apagada: 'Encender equipo, apretar cables, probar en otra toma de corriente'
                },
                WiFi: {
                    Encendida: 'WIFI activo sin tráfico',
                    "Intermitente (rápido)": 'WIFI activo con tráfico',
                    "Intermitente (lento)": 'WIFI deshabilitado por la función de programa',
                    Apagada: 'WiFi inactivo. Pulsar el botón de WiFi hasta que el LED se encienda'
                },
                WPS: {
                    Encendida: 'Estás conectado correctamente mediante WPS',
                    Intermitente: 'WPS en uso',
                    Apagada: 'WPS no iniciada. Para inicar WPS hay que presionar el botón por 4 segundos'
                },
                INTERNET: {
                    Encendida: 'Conectado a Internet',
                    Intermitente: 'Estableciendo conexión a internet',
                    "Encendida (Roja)": 'No se ha podido conectar a Internet',
                    "Intermitente (Roja)": 'Sincronizando la señal de cable'
                }
            }
        },
        src: ""
    },

]



export default Routers;