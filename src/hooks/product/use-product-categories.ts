import { useQuery } from '@tanstack/react-query'

import { API_URLS, REACT_QUERY_KEYS } from '~constants'
import { axiosClient } from '~utils/axios-client'

export const useProductCategories = () => {
  return useQuery<string[], Error>(
    [REACT_QUERY_KEYS.productCategories],
    () =>
      axiosClient
        .get<string[]>(API_URLS.productCategories)
        .then(res => res.data)
        .catch(error => {
          throw new Error(
            error?.response?.data?.message || 'Something went wrong',
          )
        }),
    { initialData: [] },
  )
}
