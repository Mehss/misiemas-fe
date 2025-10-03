import { createSlice } from '@reduxjs/toolkit'

import * as LS from '~/utils/localStorage'

export const initialState = {
  isLoading: false,
  project: null,
  projectUrl: null,
  subCategory: null,
  page: null,
  url: '',
  chart: null,
  expiredToken: false,
  filters: {
    archive: 'active',
    order: 'desc',
    filter: '',
    projectCategory: '',
  },
}

const slice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setProject(state, { payload }) {
      LS.set('CURRENT_SELECTED_PROJECT', payload)
      state.project = payload
    },
    setProjectUrl(state, { payload }) {
      state.projectUrl = payload
    },
    setSubCategory(state, { payload }) {
      state.subCategory = payload
    },
    setPage(state, { payload }) {
      state.page = payload
    },
    setUrl(state, { payload }) {
      state.url = payload.url
      state.chart = payload.chart
    },
    setFilters(state, { payload }) {
      state.filters = { ...state.filters, ...payload.filters }
      state.isLoading = payload.isLoading
    },
    setLoading(state, { payload }) {
      state.isLoading = payload.isLoading
    },
    setExpiredToken(state, { payload }) {
      state.expiredToken = payload.expiredToken
    },
  },
})

export const { actions, reducer } = slice
