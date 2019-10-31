import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import {Spring} from 'react-spring/renderprops';

const DirectionBlokovi = () => {

    const props = useSpring({ x: 100, from: { x: 0 } })

    return (

        <Spring
            native
            reset
            delay={0}
            from={{ x: 100, opacity: 0 }}
            to={{ x: 0, opacity: 1 }}
            config={config.molasses}
            >
            {({ x, opacity }) => (
                <animated.svg
                className={"blokovi"}
                style={{ opacity }}
                viewBox="0 0 1043 766"
                strokeDashoffset={props.x}
                >
                    {/* <path class="st0 map animate" d="M-610,781.7c0,0,173.6,35.1,214,0c46-40-40-748,0-752c206-20.6,828,0,828,0c4,86,0.6,353.4-10,379.2c-11,26.9-482-3.2-482-3.2"/> */}
                    {/* <path class="st0 map animate" d="M104,810c0,0,91.2,18.4,112.4,0c24.2-21-21-392.9,0-395c108.2-10.8,434.9,0,434.9,0
	c2.1,45.2,0.3,185.6-5.3,199.2c-5.8,14.1-253.2-1.7-253.2-1.7"/> */}

{/* <path class="st0 map animate" d="M198,1542"/> */}
<polyline class="st0 map animate" points="599.8,4307.8 1162.1,4307.8 1162.1,2222.4 3433.1,2222.4 3433.1,3265.1 1915.5,3265.1 "/>

                </animated.svg>
            )}
        </Spring>
    )
}

export default DirectionBlokovi;