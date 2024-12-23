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
                    Apagada: 'No llega corriente. Apretar cables, probar en otra toma de corriente.'
                },
                Alarm: {
                    Apagada: '',
                    Encendida: 'ONT Alarmada. No llega suficiente señal óptica.'
                },
                PON: {
                    Encendida: 'Conexión óptica correcta.',
                    Intermitente: 'Conexión correcta, se encuentra enviando datos.',
                    "Apagada o roja": 'ONT Apagada y no recibe corriente.'
                },
                LAN: {
                    Encendida: 'Cable de red conectado sin tráfico de datos.',
                    Intermitente: 'Cable de red conectado con tráfico de datos.',
                    Apagada: 'En caso de que tenga algún cable conectado, verificar la conexión de este y probar en otro puerto.'
                }
            },
            router: {
                POWER: {
                    Encendida: '',
                    Apagada: 'No llega corriente. Encender equipo, apretar cables, probar en otra toma de corriente.'
                },
                INTERNET: {
                    "Encendida (Verde)": '',
                    "Encendida (Roja)": 'No hay conexión a internet',
                    Apagada: 'No hay conexión a internet'
                },
                WIFI: {
                    Encendida: 'WIFI activado',
                    Intermitente: 'Sincronización WPS',
                    Apagada: 'No hay WIFI'
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
                    "Encendida (blanca)": 'Equipo encendido.',
                    Intermitente: 'Durante el reinicio del equipo.',
                    "Encendida (roja)": 'Fallo en dispositivo. Abrir avería.',
                    Apagada: 'No llega corriente. Encender equipo, apretar cables, probar en otra toma de corriente.'
                },
                INTERNET: {
                    "Intermitente (roja)": 'ONT Alarmada o error de sincronización. Abrir avería.   ',
                    "Encendida (blanca)": 'Conectado a la red.',
                    "Intermitente (blanca)": 'Dura 1 minuto cuando se está estableciendo conexión.',
                    Apagada: 'No hay enlace con GPON. Abrir avería.'
                },
                WIFI: {
                    "Encendida (blanca)": 'Una o más redes WIFI activas.',
                    "Intermitente rápido": 'Sincronización WPS.',
                    "Intermitente (roja)": 'Una de las redes WIFI está abierta o con cifrado WEP.',
                    Apagada: 'Redes WIFI apagadas.'
                },
                WPS: {
                    "Intermitente (blanca)": 'WPS activo y buscando dispositivos (2min aprox). Al activar esta opción WIFI estará intermitente.',
                    "Intermitente (roja)": 'Error en el emparejamiento de dispositivos.',
                    Apagada: 'WPS apagado.'
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
                    Encendida: 'Equipo encendido.',
                    Intermitente: 'Arranque del dispositivo/ estableciendo conéxion.',
                    Apagada: 'No llega corriente. Encender equipo, apretar cables, probar en otra toma de corriente. Abrir avería.'
                },
                Sincronizar: {
                    Encendida: 'Configuración finalizada',
                    Intermitente: '+2 minutos, significa que no configura o error en la autentificación.',
                    Apagada: 'No hay enlace con GPON. Abrir avería.'
                },
                Alarma: {
                    "Encendida (roja)": 'Fibra desconectada o transceptor desactivado.',
                    Apagada: 'Conectado, transceptor activado.'
                },
                "@": {
                    Encendida: 'Dirección IP recibida, conexión establecida.',
                    Apagada: 'Sin conexión.'
                },
                Ethernet: {
                    Encendida: 'Enlace por ethernet activo. La transferencia de datos se puede visualizar en el puerto ETH si está intermitente.',
                    Apagada: 'Sin conexión.'
                },
                "2G": {
                    Encendida: 'Red WIFI en la banda de 2.4Ghz encendida.',
                    Apagada: 'Red WIFI 2.4Ghz apagada.'
                },
                "5G": {
                    Encendida: 'Red WIFI en la banda de 5Ghz encendida.',
                    Apagada: 'Red WIFI 5Ghz apagada.'
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
                    Encendida: 'Equipo encendido.',
                    Apagada: 'No llega corriente. Encender equipo, apretar cables, probar en otra toma de corriente. Abrir avería.'
                },
                Online: {
                    Encendida: 'Sincronización completada, navegación correcta.',
                    Intermitente: '1:30 min durante el tiempo de sincrotización. Pasado el tiempo debería cambiar a fija.',
                    Apagada: 'Problemas para sincronizar.'
                },
                WiFi: {
                    Encendida: 'WIFI activo.',
                    Intermitente: 'Hay tráfico de datos por WIFI.',
                    Apagada: 'Red WIFI apagada.'
                },
                Eth: {
                    Encendida: 'Dispositivos conectados por cable.',
                    Intermitente: 'Tráfico ethernet detectado.',
                    Apagada: 'No detecta dispositivos conectados por cable.'
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
                    Encendida: 'Equipo encendido.',
                    Apagada: 'No llega corriente. Encender equipo, apretar cables, probar en otra toma de corriente. Abrir avería.'
                },
                S: {
                    Encendida: 'Sincronización correcta.',
                    Intermitente: '1:30 min durante el tiempo de sincrotización. Pasado el tiempo debería cambiar a fija.',
                    Apagada: 'Problemas para establecer conexión con central.'
                },
                "@": {
                    Encendida: 'Acceso a internet correcto.',
                    Intermitente: 'Si hay transferencia de datos.',
                    Apagada: 'Problemas de acceso a internet.'
                },
                ETH: {
                    Encendida: 'Enlace por ethernet activo. La transferencia de datos se puede visualizar en el puerto ETH si está intermitente.',
                    Apagada: 'No detecta dispositivos conectados por cable.'
                },
                WiFi: {
                    Encendida: 'WIFI activo.',
                    Intermitente: 'Hay tráfico de datos por WIFI.',
                    Apagada: 'Red WIFI apagada.'
                },
                WPS: {
                    Encendida: 'Por 5 segundos y luego se apaga: no se ha emparejado el router con el dispositivo.',
                    Intermitente: 'Hay tráfico de datos por WIFI.',
                    Apagada: 'Cuando se ha emparejado correctamente y luego se apaga / WPS apagado.'
                }
            }
        },
        src: ""
    },
    {
        acometida: "Vodafone / Tesa",
        tecnologia: "Router HFC",
        router: "Technicolor CGA6444",
        luces: `&nbsp;- PHONE - INTERNET - WPS - WIFI - POWER`,
        src: ""
    },

]



export default Routers;