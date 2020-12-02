import React from 'react';

const User = (props) => {
  return (
      <div>
        <p>Name: { props.user.firstName + " " + props.user.lastName }</p>
        <p>Email: { props.user.email }</p>
      </div>
  )
}

export default User;