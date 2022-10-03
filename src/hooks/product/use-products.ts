import { useQuery } from '@tanstack/react-query'

import { API_URLS, REACT_QUERY_KEYS } from '~constants'
import { Product } from '~types'
import { axiosClient } from '~utils/axios-client'

export const useProducts = () => {
  return useQuery<Product[], Error>(
    [REACT_QUERY_KEYS.products],
    () =>
      axiosClient
        .get<Product[]>(API_URLS.products)
        .then(res => res.data)
        .catch(error => {
          throw new Error(
            error?.response?.data?.message || 'Something went wrong',
          )
        }),
    { initialData: [] },
  )
}
