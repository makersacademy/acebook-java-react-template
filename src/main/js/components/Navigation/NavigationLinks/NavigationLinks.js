import React from 'react';
import NavigationLink from './NavigationLink/NavigationLink';
import classes from './NavigationLinks.module.css';

const NavigationLinks = (props) => {
  return (
      <div className={classes.NavBar}>
        <ul className={classes.NavLinks}>
          <NavigationLink link="/" exact>Home</NavigationLink>
          <NavigationLink link="/posts" exact>Posts</NavigationLink>
        </ul>
      </div>
  )
}

export default NavigationLinks;