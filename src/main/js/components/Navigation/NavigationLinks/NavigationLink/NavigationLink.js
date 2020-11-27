import React from 'react';
import classes from './NavigationLink.module.css'
import { NavLink } from 'react-router-dom';

const NavigationLink = (props) => (
    <li className={classes.NavigationLink}>
      <NavLink
          to={props.link}
          activeClassName={classes.active}
          exact={props.exact}>{props.children}</NavLink>
    </li>
)

export default NavigationLink;