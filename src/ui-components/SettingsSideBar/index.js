import styles from "./SidebarNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import settingsRoute from "src/settingsRoute";

const SettingsSideBar = ({ }) => {
  const router = useRouter();

  return (
    <section className={`${styles.container}`}>
      <ul className={styles["sidebar-container"]}>
        {settingsRoute.map((page, index) => (
          <li key={index} className={`${styles["sidebar-menu-item"]} ${router.route === page.to ? styles['active'] : ''}`}>
            <Link href={page.to}>
              <page.Icon />
              <span>{page.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SettingsSideBar;
