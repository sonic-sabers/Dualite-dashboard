import {
  IoNotificationsOutline,
} from "react-icons/io5";
import DropdownMenu from "../DropdownMenu";
import UserIcon from "../UserIcon";
import styles from "./Header.module.css";
import Link from "next/link";
import { menuList } from "../../data";

const MenuList = ({ href = "", Icon = null, text = "" }) => {
  return (
    <li>
      <Link href={href} className={styles["link"]}>
        {Icon && <Icon />}
        <span>{text}</span>
      </Link>
    </li>
  );
};


const Header = ({ toggleSidebarMenu }) => {
  return (
    <section className={styles.container}>
      <div className={styles["right-items"]}>
        <ul className={styles["header-navigations"]}>
          <li>
            <div className={styles["upgrade-container"]}>
              <p>Upgrade</p>
            </div>
          </li>

          <div className={styles["notification-container"]}>
            <li>
              <IoNotificationsOutline size={30} />
            </li>
          </div>

          <li>
            <DropdownMenu
              label={"Dropdown 1"}
              CustomMenu={(props) => <UserIcon size="40" {...props} />}
              dropdownContainerStyle={
                {
                  // padding: '15px 0'
                }
              }
            >
              <ul className={styles["dropdown-menu"]}>
                {menuList.map((menu, index) => (
                  <MenuList
                    key={index}
                    text={menu.text}
                    Icon={menu.Icon}
                    href={menu.href}
                  />
                ))}
              </ul>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
