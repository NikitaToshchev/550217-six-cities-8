import dayjs from 'dayjs';
import { SortTypes } from '../const';
import { Offer } from '../types/offer';

export const getFormatDate = (date: string, format: string): string => dayjs(date).format(format);
export const getRating = (rating: number): string => `${(Math.round(rating) / 5) * 100}%`;

export const getSortedOffers = (SortType: string, offers: Offer[]): Offer[] => {
  switch (SortType) {
    case SortTypes.PRICE_UP: {
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    }
    case SortTypes.PRICE_DOWN: {
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    }
    case SortTypes.RATING_DOWN: {
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
    default: {
      return offers;
    }
  }
};

