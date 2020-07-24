import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Andrzej',
      image:
        'https://pikio.pl/static/media/images/1081/108148/Andrzej-Duda.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
