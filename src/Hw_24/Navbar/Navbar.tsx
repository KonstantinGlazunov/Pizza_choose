import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"
export default function Navbar(): JSX.Element {
  return (
    <nav>
        <NavLink className={styles.link} to="/simplePizza">Simple pizza</NavLink>
        <NavLink className={styles.link} to="/cheese">Pizza with cheese</NavLink>
        <NavLink className={styles.link} to="tomato">Pizza with tomato</NavLink>
        <NavLink className={styles.link} to="sausage">Pizza with sausage</NavLink>
    </nav>
  )
}
