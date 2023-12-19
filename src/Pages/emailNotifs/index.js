
import styles from "./Profile.module.css";
// import UserIcon from "@dualite/components/UserIcon";
import Switch from '@mui/material/Switch';
import UserIcon from "src/ui-components/UserIcon";

const EmailNotifs = () => {
  return (
    <section className={styles.container}>
      <div className={styles["form-header"]}>
        <UserIcon size="90" />
        <div>
          <h1>Bill John</h1>
          <p>billjohn@gmail.com</p>
        </div>
      </div>
      <div className={styles["form"]}>
        <div className={styles["notifTitle"]}>
          <div className={styles["row"]}>
            <h1>Activity updates</h1>
            <Switch defaultChecked />
          </div>
          <p>New project syncs and updates.</p>
        </div>
        <div className={styles["notifTitle"]}>
          <div className={styles["row"]}>
            <h1>Required communication</h1>
          </div>
          <p>Emails regarding your account like billing, security, and support.
          </p>
        </div>
      </div>

    </section>
  )
}

export default EmailNotifs