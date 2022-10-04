import React from 'react'
import {Stack, Box, Text, useColorModeValue} from '@chakra-ui/react'
import {barChartVals} from '../configs/hero-data';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function GraphSet() {
  return (
        <Stack direction={[ 'column', 'row']} mt={10} alignItems={"center"} justifyContent={"center"} spacing={10}>
            <Box 
                p={5}
                borderRadius={10}
                border={'1px'}
                _hover={{
                    cursor: "pointer"
                  }}
            >
                <Text color={useColorModeValue('gray.600','gray.100' )}>Budget Tracker</Text>
                <ApexCharts
                  options={barChartVals?.options}
                  series={barChartVals?.series}
                  type="area"
                  width="200"
                />
            </Box>
            <Box 
                p={5}
                borderRadius={10}
                border={'1px'}
                _hover={{
                    cursor: "pointer"
                  }}
            >
                <Text color={useColorModeValue('gray.600','gray.100' )}>Increase savings</Text>
                <ApexCharts
                  options={barChartVals?.options}
                  series={barChartVals?.series}
                  type="bar"
                  width="200"
                />
            </Box>
            <Box 
                p={5}
                borderRadius={10}
                border={'1px'}
                _hover={{
                    cursor: "pointer"
                  }}
            >
                <Text color={useColorModeValue('gray.600','gray.100' )}>Plan for a better future</Text>
                <ApexCharts
                  options={barChartVals?.options}
                  series={barChartVals?.series}
                  type="line"
                  width="200"
                />
            </Box>
        </Stack>
  )
}
