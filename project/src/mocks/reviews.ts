import { nanoid } from '@reduxjs/toolkit';
import { Reviews } from '../types/reviews';

export const mockReviews: Reviews = [
  {
    comment: 'Nice place',
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: nanoid(),
      isPro: true,
      name: 'Max',
    },
  }, {
    comment: 'Good place',
    date: '2019-07-08T14:13:56.569Z',
    id: nanoid(),
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: nanoid(),
      isPro: false,
      name: 'Angelina',
    },
  },
];
