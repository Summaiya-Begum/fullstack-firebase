import { Box, Button, Flex, Spacer, Heading, ButtonGroup, Text, color } from '@chakra-ui/react'
import React from 'react'
import { GoSearch } from "react-icons/go"
function Navbar({males,females}) {
  return (
    <Box bg={'rgb(0,28,123)'} textAlign={'center'} color={'#fff'} p={2} height={'55px'}>
      <Flex
        minWidth='max-content'
        alignItems='center'
      >
        <Box p='2' marginLeft={3}>
          <Text size='md'>SECQURAISE</Text>
        </Box>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Box p='1'>
          <GoSearch />
        </Box>
        <Spacer />
        <ButtonGroup gap='1' marginRight={3}>
          <Button
            bg='rgb(146,208,80)'
            color='black'
            p={'0rem 1.5rem'}
            _hover={{
              bg: "rgb(146,208,80)",
              color: '#ffff'
            }} h={8} borderRadius={0}
          >
            {males}
          </Button>
          <Button
            bg='rgb(255,0,0)'
            p={'0rem 1.5rem'}
            _hover={{
              bg: "rgb(255,0,0)",
              color: '#000'
            }}
            h={8}
            borderRadius={0}
          >
            {females}
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}

export default Navbar