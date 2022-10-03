import { Box, FlatList, Flex, Skeleton } from 'native-base'
import React from 'react'

export interface ProductSkeletonProps {
  count?: number
}
export const ProductSkeletons = ({ count = 5 }: ProductSkeletonProps) => {
  const data = Array.from({ length: count }).map((_, index) => index)
  return (
    <FlatList
      data={data}
      renderItem={() => (
        <Box bg="gray.50" p="4" borderRadius="md">
          <Flex flexDirection="row" mr="4">
            <Skeleton h="60" w={100} />
            <Box>
              <Skeleton.Text w="100%" />
              <Skeleton.Text w={100} />
            </Box>
          </Flex>
        </Box>
      )}
    />
  )
}
