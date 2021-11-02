import dayjs from 'dayjs';
import { AuthorizationStatus, SortTypes } from '../const';
import { Offer } from '../types/offer';
import { BackOffer } from '../types/back-offer';

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

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const adaptOfferToClient = (data: BackOffer): Offer => {
  const adaptedData = Object.assign(
    {},
    data,
    {
      isFavorite: data.is_favorite,
      isPremium: data.is_premium,
      maxAdults: data.max_adults,
      previewImage: data.preview_image,
    },
    {
      host: {
        avatarUrl: data.host.avatar_url,
        isPro: data.host.is_pro,
      },
    },
  ) as Offer;

  delete adaptedData.is_favorite;
  delete adaptedData.is_premium;
  delete adaptedData.max_adults;
  delete adaptedData.preview_image;
  delete adaptedData.host.is_pro;
  delete adaptedData.host.avatar_url;

  return adaptedData;
};

export const adaptOffersToClient = (data: BackOffer[]): Offer[] => (
  data.map((item): Offer => (
    adaptOfferToClient(item)
  ))
);
