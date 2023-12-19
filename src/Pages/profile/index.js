
import styles from "./Profile.module.css";
import Input from "src/ui-components/Input";
import Button from "src/ui-components/Button";
import UserIcon from "src/ui-components/UserIcon";

const Profile = (props) => {
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
                <Input
                    inputContainerStyle={{ minWidth: 400, }}
                    type="text"
                    placeholder="Email"
                    onChange={(e) => console.log(e)}
                    name="email"
                    label={"Email"}
                    title='Email address'
                />
                <div className={styles.row}>
                    <Input
                        inputContainerStyle={{ marginRight: 20, width: 300 }}
                        type="password"
                        placeholder="Password"
                        onChange={(e) => console.log(e)}
                        name="Password"
                        label={"Password"}
                        title='Password'
                    />
                    <Button title='Update' />
                </div>
            </div>
            <button
                className={styles["delete-button-container"]}>
                <h3>
                    Delete Account
                </h3>
            </button>
        </section>
    );
}

export default Profile;