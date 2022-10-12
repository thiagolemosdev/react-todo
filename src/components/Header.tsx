import React from 'react'
import logo from '../assets/img/logo.svg'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Logo do todo' />
    </header>
  )
}
