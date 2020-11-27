import React from 'react';
import classes from './Toolbar.module.css'
import NavigationLinks from '../NavigationLinks/NavigationLinks'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
      <nav className={classes.DesktopOnly}>
        <NavigationLinks />
      </nav>
    </header>
)

export default Toolbar;