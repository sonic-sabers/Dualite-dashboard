import Image from "next/image";
import styles from "./UserIcon.module.css";


const UserIcon = ({
    onClick = () => { },
    size,
}) => {
    return (
        <div onClick={onClick} className={`${styles.container}`}>
            <Image
                src={`/Profile.png`}
                width={size ? size : '40'}
                height={size ? size : '40'}
            />
        </div>
    );
}

export default UserIcon;