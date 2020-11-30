import React from 'react';
import NavigationLink from './NavigationLink/NavigationLink';

const NavigationLinks = (props) => {
  return (
      <div className="NavBar">
        <ul className="NavLinks">
          <NavigationLink link="/" exact>Home</NavigationLink>
          <NavigationLink link="/posts" exact>Posts</NavigationLink>
          <NavigationLink link="/users" exact>Users</NavigationLink>
        </ul>
      </div>
  )
}

export default NavigationLinks;