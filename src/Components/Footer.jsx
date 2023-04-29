import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend}from "react-icons/ai"


const Footer = () => {
  return( 
  <Box minH={'40'} color={'white'} bgColor={'blackAlpha.900'} p={'16'}>
    <Stack direction={["column","row"]}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['centre','left']}>
                Subscribe to get new updates
            </Heading>
            <HStack borderBottom={'2px solid white'}
            py={'2'}>
                <Input 
                placeholder='Enter your email here....'
               
                />
                <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                    <AiOutlineSend size={'20'}/>
                </Button>
            </HStack>
        </VStack>
        <VStack  w={'full'}
        borderLeft={["none","1px solid white"]}
        borderRight={["none","1px solid white"]}>
            <Heading textTransform={'uppercase'} textItems={'center'}>
                Video hub

            </Heading>
            <Text > All rights recieved</Text>

        </VStack>
        <VStack  w={'full'}
        >
            <Heading size={'md'} textTransform={'uppercase'}>
                social media

            </Heading>
            <Button variant={'link'} colorScheme='white'>
                <a  target='blank' href="https://youtube.com/@sultankhan7639"> Youtube</a>
               
              

            </Button>
            <Button variant={'link'} colorScheme='white'>
            <a target='blank' href="https://instagram.com/pr.ince6878"> Instagram</a>
               
              

            </Button>
            <Button variant={'link'} colorScheme='white'>
                <a target='blank' href="https://github.com"> Github</a>
               
              

            </Button>

        </VStack>

    </Stack>

  </Box>
  )
}

export default Footer