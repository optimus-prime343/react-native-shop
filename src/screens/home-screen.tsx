import { Box, Input } from 'native-base'
import React, { useMemo, useState } from 'react'

import { ProductList } from '~components/product'
import { useProducts } from '~hooks/product'

export const HomeScreen = () => {
  const [search, setSearch] = useState('')

  const { data: products } = useProducts()

  const filteredProducts = useMemo(
    () =>
      search
        ? [...products].filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase()),
          )
        : products,
    [products, search],
  )
  return (
    <Box p="2">
      <Input
        mb="4"
        value={search}
        onChangeText={setSearch}
        placeholder="Search for a product"
      />
      <ProductList products={filteredProducts} />
    </Box>
  )
}
