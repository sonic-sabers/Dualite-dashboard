import React from 'react'
import styles from "./Components.module.css";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Button from "src/ui-components/Button";

const HtmlUrl = 'https://qph.cf2.quoracdn.net/main-qimg-1a68d0e30e4cd360db765e1e9718b5c1'
const ReactUrl = 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png'

const AllProjects = () => {
  return (
    <section>
      <div className={styles.headerContainer}>
        <div className={styles.row}>
          <button className={styles["all-projects-button"]}>
            <p>All Projects</p>
          </button>
          <button className={styles.settings}>
            <p>Settings</p>
          </button>
          <button className={styles["search-button"]}>
            <CiSearch size={'25'} color='#000' />
          </button>
        </div>
        <button className={styles["last-updated"]}>
          <p>Last Updated</p>
          <IoMdArrowDropdown size={'30'} color='#000' />
        </button>
      </div>
      <div className={styles.listContainer}>
        <h1>Let’s get started!
        </h1>
        <div className="row top-4 bottom-4">
          <img src={HtmlUrl} alt="Nature" height={40} width={40}></img>
          <img src={ReactUrl} alt="Nature" height={40} width={40}></img>
        </div>
        <h2>Get full flows code in HTML/React</h2>
        <p>Best for websites, landing pages, prototypes and full application. </p>
        <Button title='New Project' />

      </div>
    </section>
  )
}

export default AllProjects