
const Button = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <button
            className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
            style={{ animationDuration }}>
            {text}
        </button>
    );
};

export default Button;
