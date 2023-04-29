import { Button, Container, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'


const Upload = () => {
  return (
  <Container maxW={'container.xl'} p={'16'} h={'100vh'} >
  <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
      <AiOutlineCloudUpload size={'10vmax'}/>
    <form>
        <input type="file" css={{
             '&::file-selector-button': {
                border: 'none',
                width: 'calc(100% + 36px)',
                height: '100%',
                marginLeft: '-18px',
                color: 'purple',
                backgroundColor: 'white',
                cursor: 'pointer',
             },
        }} />
        <Button colorScheme='purple' type='submit'>Upload</Button>
    </form>
  </VStack>
</Container>
  )
}

export default Upload