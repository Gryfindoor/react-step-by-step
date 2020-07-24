import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Pałac Kultury',
    description: 'Śmierdząca wieza',
    imageUrl:
      'https://polskazachwyca.pl/wp-content/uploads/2017/08/shutterstock_190990370-1-e1516185680833.jpg',
    address: 'Gdzieś wwa',
    location: {
      lat: 52.2320388,
      lng: 21.0043789
    },
    creator: 'u1'
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
