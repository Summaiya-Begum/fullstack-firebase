import React, { useState } from 'react'
import {
    Card,
    Box,
    Stack,
    VStack,
    Text,
    Flex,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Select,
    MenuGroup,
    MenuDivider,
    Input,
} from '@chakra-ui/react'
import style from "../css/event.module.css"
import { IoOptionsOutline } from "react-icons/io5"
import axios from "axios"
import { useEffect } from 'react'

const getUsers = () => {
    return axios.get(`https://firebase-api.onrender.com/api/events`)

}

function Events({ setUser, setMales, setFemales }) {
    const [filter, setFilter] = useState([])
    const [data, setData] = useState([])
    const [bool, setBool] = useState(false)
    const handleSigleUser = (el) => {
        // console.log(el)
        setUser(el)
    }


    const handleGender = (e) => {
        let val = e.target.value
        const gen = data.filter((el, i) => {
            return el.Gender === val
        })
        // console.log(gen, 'gen')
        setFilter(gen)
        setBool(false)
    }
    const handleLocation = (e) => {
        let val = e.target.value
        const Location = data.filter((el, i) => {
            return el.Location === val
        })
        // console.log(Location, 'Location')
        setFilter(Location)
        setBool(false)
    }

    // "5-Jan-23"
    const handleDate = (e) => {
        let val = e.target.value
        const d = new Date(val);
        const [day, mnth, date, year] = d.toDateString().split(' ')
        const str = +date + '-' + mnth + '-' + (+year % 100)
        // console.log(str)
        const calender = data.filter((el, i) => {
            return el.Date === str
        })
        // console.log(calender, 'calendar');
        setFilter(calender)
        setBool(false)
    }

    useEffect(() => {
        getUsers()
            .then((response) => {
                setData(response.data)
                let fcount = 0
                let mcount = 0
                for (let el of response.data) {
                    if (el.Gender === "Female") {
                        fcount++
                    } else {
                        mcount++
                    }
                }
                // console.log(fcount, mcount)
                setMales(mcount)
                setFemales(fcount)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [filter.length])

    // console.log(data)
    return (
        <Box height={'100%'} w={'30%'} border={'5px solid #D9D9D9'} borderRadius={0}>
            <Card maxW='sm' boxShadow={'none'} height={'100%'}>
                <Box p={2} height={'auto'}>
                    <Flex>
                        <Box fontWeight={'bold'}>
                            <Text size={20}>EVENTS</Text>
                        </Box>
                        <Spacer />
                        {/* <Box > */}

                        <Menu>
                            <MenuButton onClick={() => setBool(true)}
                                transition='all 0.2s'
                                borderRadius='md'
                                _hover={{ bg: 'gray.400' }}
                                _expanded={{ bg: 'blue.400' }}
                                _focus={{ boxShadow: 'outline' }}
                            >
                                <IoOptionsOutline fontSize={25} color={'black'} />
                            </MenuButton>
                            {bool && <MenuList>
                                <Select onChange={handleLocation}   >
                                    <option value=''>Filter By Place</option>
                                    <option value='Bangalore' >Bangalore</option>
                                    <option value='Hyderabad'>Hyderabad</option>
                                    <option value='Chennai'>Chennai</option>
                                </Select>

                                <MenuDivider />
                                <Select onChange={handleGender}>
                                    <option value=''>Filter By Gender</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                </Select>
                                <MenuDivider />
                                <MenuGroup title='Filter By Date'>
                                    <Input type='date' onChange={handleDate} />
                                </MenuGroup>

                            </MenuList>}
                        </Menu>

                        {/* </Box> */}
                    </Flex>
                </Box>
                <Stack p={2} height={'93%'} minW={'100%'}>
                    <VStack
                        spacing={2}
                        align='stretch'
                        height={'100%'}
                        className={style.scrollBox}>

                        {
                            !filter.length ? (data?.map((el, i) => {
                                return (
                                    <Box bg={'#D9D9D9'} p={2} cursor={'pointer'} className={style.content}
                                        onClick={() => handleSigleUser(el)}
                                        key={i}
                                    >
                                        <Flex >
                                            <Text size='xs'>
                                                {el.ID} : {el.Location}
                                            </Text>
                                            <Spacer />
                                            <Text>{el.Date} {el.Time}</Text>
                                        </Flex>
                                        <Text pt='2' fontSize='sm'>
                                            Person: detected
                                        </Text>
                                    </Box>
                                )
                            }))
                                :
                                filter?.map((el, i) => {
                                    return (
                                        <Box bg={'#D9D9D9'} p={2} cursor={'pointer'} className={style.content}
                                            onClick={() => handleSigleUser(el)}
                                            key={i}
                                        >
                                            <Flex >
                                                <Text size='xs'>
                                                    {el.ID} : {el.Location}
                                                </Text>
                                                <Spacer />
                                                <Text>{el.Date} {el.Time}</Text>
                                            </Flex>
                                            <Text pt='2' fontSize='sm'>
                                                Person: detected
                                            </Text>
                                        </Box>
                                    )
                                })

                        }
                    </VStack>
                </Stack>
            </Card>
        </Box >
    )
}


export default Events

