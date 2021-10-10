import { Offer } from '../types/offer';
import { nanoid } from '@reduxjs/toolkit';

export const mockOffers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: nanoid(),
      isPro: true,
      name: 'Angelina',
    },
    id: nanoid(),
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-02.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 6,
    city: {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    goods: ['Heating', 'Kitchen', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: nanoid(),
      isPro: true,
      name: 'Pavel',
    },
    id: nanoid(),
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 48.8647161234136,
      longitude: 2.349014124531,
      zoom: 8,
    },
    maxAdults: 14,
    previewImage: 'img/apartment-01.jpg',
    price: 140,
    rating: 3.8,
    title: 'Everything is absolutely wonderful, in nature',
    type: 'room',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Hamburg.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: nanoid(),
      isPro: true,
      name: 'Nikita',
    },
    id: nanoid(),
    images: ['img/apartment-01.jpg', 'img/studio-01.jpg', 'img/room.jpg', 'img/apartment-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 100,
    rating: 3.8,
    title: 'The process of getting used to each other, everything is great.',
    type: 'house',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 50.935173,
        longitude: 6.953101,
        zoom: 10,
      },
      name: 'Cologne',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
    goods: ['Heating', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'avatar-max.png',
      id: nanoid(),
      isPro: true,
      name: 'Max',
    },
    id: nanoid(),
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 8,
    },
    maxAdults: 14,
    previewImage: 'img/apartment-01.jpg',
    price: 180,
    rating: 4.9,
    title: 'Young people lose their strength.',
    type: 'hotel',
  },
];
