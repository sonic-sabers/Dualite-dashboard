import styles from "./Home.module.css";

// import HeaderSection from "@dualite/components/HeaderSection";

import AllProjects from "../../components/AllProjects";
import HeaderSection from "src/ui-components/HeaderSection";
// import HeaderSection from "@dualite/components/HeaderSection";

export default function Dashboard() {

  return (
    <div className={styles.container}>
      <HeaderSection
        heading={"Team 1"}
      />
      <AllProjects />
    </div>
  );
}
