import React, { useState, useEffect, useRef } from 'react'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const Vanta = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(CLOUDS({
                el: myRef.current,
                THREE: THREE
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);

    return <div ref={myRef} className='vanta'>
    </div>
};

export default Vanta