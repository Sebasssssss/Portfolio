import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      bg={useColorModeValue('#85586f', '#f8ede3')}
      _hover={{ bg: useColorModeValue('#774f63', '#dfd3c3') }}
      textColor={useColorModeValue('#f8ede3', 'black')}
      p={1}
      onClick={() => toggleColorMode()}
    >
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ToggleColorMode
