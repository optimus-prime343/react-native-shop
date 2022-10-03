import { Box, Button, Flex, Image, Text } from 'native-base'
import React from 'react'

import { Product } from '~types'
import { formatCurrency } from '~utils/format-currency'

export interface ProductItemProps {
  product: Product
}
export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Box bg="gray.50" p="4" borderRadius="md">
      <Flex flexDirection="row" mb="6">
        <Image
          borderRadius="md"
          source={{ uri: product.image }}
          alt={product.title}
          size="xl"
          mr="4"
        />
        <Box>
          <Text maxWidth="200" mb="2">
            {product.title}
          </Text>
          <Text mb="4">{formatCurrency(product.price)}</Text>
          <Flex flexDirection="row" justifyContent="flex-end">
            <Button mr="2">Add to cart</Button>
            <Button variant="outline">View Detail</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
