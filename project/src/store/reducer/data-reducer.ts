import { createReducer } from '@reduxjs/toolkit';
import { DataReducerState } from '../../types/state';
import {
  loadNearOffersFailure,
  loadNearOffersRequest,
  loadNearOffersSuccess,
  loadOfferByIdFailure,
  loadOfferByIdRequest,
  loadOfferByIdSuccess,
  loadOfferCommentsFailure,
  loadOfferCommentsRequest,
  loadOfferCommentsSuccess,
  loadOffersFailure,
  loadOffersRequest,
  loadOffersSucces,
  postCommentFailure,
  postCommentRequest,
  postCommentSuccess
} from '../actions/action';

const initialState: DataReducerState = {
  offers: [],
  offerById: null,
  nearOffers: [],
  reviews: [],
  error: null,
  loadOffersLoading: false,
  loadNearOffersLoading: false,
  loadOfferByIdLoading: false,
  loadOfferCommentsLoading: false,
  postCommentLoading: false,
  postCommentSuccess: false,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersRequest, (state: DataReducerState) => {
      state.loadOffersLoading = true;
    })
    .addCase(loadOffersSucces, (state: DataReducerState, action) => {
      const { offers } = action.payload;
      state.offers = offers;
    })
    .addCase(loadOffersFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(loadNearOffersRequest, (state: DataReducerState) => {
      state.loadNearOffersLoading = true;
    })
    .addCase(loadNearOffersSuccess, (state: DataReducerState, action) => {
      const { nearOffers } = action.payload;
      state.nearOffers = nearOffers;
    })
    .addCase(loadNearOffersFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(loadOfferByIdRequest, (state: DataReducerState) => {
      state.loadOfferByIdLoading = true;
    })
    .addCase(loadOfferByIdSuccess, (state: DataReducerState, action) => {
      const { offerById } = action.payload;
      state.offerById = offerById;
    })
    .addCase(loadOfferByIdFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(loadOfferCommentsRequest, (state: DataReducerState) => {
      state.loadOfferCommentsLoading = true;
    })
    .addCase(loadOfferCommentsSuccess, (state: DataReducerState, action) => {
      const { reviews } = action.payload;
      state.reviews = reviews;
    })
    .addCase(loadOfferCommentsFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    })
    .addCase(postCommentRequest, (state: DataReducerState) => {
      state.postCommentLoading = true;
    })
    .addCase(postCommentSuccess, (state: DataReducerState) => {
      state.postCommentSuccess = true;
    })
    .addCase(postCommentFailure, (state: DataReducerState, action) => {
      state.error = action.payload;
    });
});

export { dataReducer };
