import styles from "./input.module.css";

const Input = ({
    type = '',
    name = '',
    placeholder = '',
    label = '',
    onChange = () => { },
    inputContainerStyle = {},
    classStyle = {}
}) => {
    return (
        <div
            className={styles['input-container']}
            style={inputContainerStyle}
        >
            <div>
                <h2>{label}</h2>
                <input
                    className={styles['input-style']}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    // label={label}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
export default Input;