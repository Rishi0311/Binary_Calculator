import React from 'react';
import './Style/button.css';
//import styled from 'styled-components';

export const Button = React.memo((props) => {
    //console.log('clicked:', props.lable);


    return (
        <div>
            {props.lable.map(i => (
                <button id='btn' value={i} onClick={(e) => props.changeText(e, 'value')}>{i}</button>
            ))}

        </div>
    );
});

