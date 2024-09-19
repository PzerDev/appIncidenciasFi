import React, { useState } from 'react';

function DatosAdicionales({area}) {

    const [idExternal, setExternalId] = useState('');
    const [acometida, setAcometida] = useState('');
    const [horaInicio, setHoraInicio] = useState('');

    switch (area) {
        case 'fibra':
            return (
                <div>
                    <input type="text" value={idExternal} onChange={(e) => setExternalId(e.target.value)} placeholder="External ID" />
                    <input type="text" value={acometida} onChange={(e) => setAcometida(e.target.value)} placeholder="Acometida" />
                    <input type="text" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} placeholder="horaInicio" />
                </div>
            )
            break;
    
        default:
            break;
    }
}

export default DatosAdicionales;