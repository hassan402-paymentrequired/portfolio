import React from 'react';

type Props = {
    title: string;
    position?: string;
}


const Button = ({ title, position }: Props) => {
    return (
        <button type="button" className={`button ${position}`}>
            <div className="button-top">{title}</div>
            <div className="button-bottom"></div>
            <div className="button-base"></div>
        </button>
    );
}

export default Button;
