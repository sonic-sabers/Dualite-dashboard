import React from 'react'
import styles from "./style.module.css";
import { ImCross } from "react-icons/im";
// import { Link } from '@mui/icons-material';
import Link from 'next/link';

const SettingsHeader = () => {
  return (
    <section>
      <div className={styles["header-container"]}>
        <div>
          <h1>Account Settings</h1>
          <p>View and update your account details, profile and more.</p>
        </div>
        <div className={styles["button-container"]}>
          <Link href="./">
            <ImCross size={30} color={'#fff'} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SettingsHeader