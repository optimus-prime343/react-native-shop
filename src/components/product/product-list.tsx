import { Box, FlatList } from 'native-base'
import React from 'react'

import { Product } from '~types'

import { ProductItem } from './product-item'

export interface ProductListProps {
  products: Product[]
}
export const ProductList = ({ products }: ProductListProps) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item: product }) => <ProductItem product={product} />}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={() => <Box my="2" />}
    />
  )
}
