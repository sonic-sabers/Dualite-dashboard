import Logo from "../Logo";
import styles from "./SidebarNavigation.module.css";
import Link from "next/link";
import routes from "../../routes";
import { useRouter } from "next/router";
import { FaPlus } from "react-icons/fa";

const SidebarNavigation = ({
  sidebarMenuActive}) => {
  const router = useRouter();

  return (
    <section className={`${styles.container} ${sidebarMenuActive ? styles['active'] : ''}`}>
      <div className={styles['logo-container']}>
        <Logo />
      </div>
      <div className={styles["button-container"]}>
        <span>Teams</span>
        <FaPlus color='#ffffff90' size={20} />
      </div>
      <ul className={styles["sidebar-container"]}>
        {routes.map((page, index) => (
          <li key={index} className={`${styles["sidebar-menu-item"]} ${router.route === page.to ? styles['active'] : ''}`}>
            <Link href={page.to}>
              <span>{page.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={`flex ${styles["sidebar-footer"]}`}>
        <span>Help Center</span>
      </div>
    </section>
  );
};

export default SidebarNavigation;
