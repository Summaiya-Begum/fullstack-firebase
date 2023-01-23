import React, { useRef } from 'react'
import {
    Button,
    Stack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Flex,
    Box,
    
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { TbLogout } from 'react-icons/tb'
function LeftNavbr() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = useRef()
    return (
        <Box height={'100%'} w={'100%'}>
            <Flex flexDirection={'column'} justifyContent={'space-between'} h={'100%'} bg={'rgb(0,184,241)'} alignItems={'center'}>
                <HamburgerIcon onClick={onOpen} fontSize={25} />
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    initialFocusRef={firstField}
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton left={2} p={5} />
                        <DrawerBody>
                            <Stack spacing='24px'>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth='1px'>
                            <Button >Submit</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                <Box marginBottom={5}>
                    <TbLogout onClick={onOpen} fontSize={25} />
                </Box>
            </Flex>
        </Box>
    )
}

export default LeftNavbr