import React from 'react';

const Top = ({weather}) => {
    return (
        <div className='weather__top'>
            <h2>{weather.name}</h2>
            <h2>{weather.sys.country}</h2>
        </div>
    );
};

export default Top;