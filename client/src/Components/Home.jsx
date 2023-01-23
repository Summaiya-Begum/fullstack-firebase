import { Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import About from './About'
import Events from './Events'
import LeftNavbr from './LeftNavbr'
import Profile from './Profile'

function Home({setMales,setFemales}) {
    const [user, setUser] = useState({})
    // console.log(user)


    return (
        <div style={{ display: "flex", height: 'calc(100vh - 55px)', width: "100%" }}>
            <div style={{ width: '3%' }} >
                <LeftNavbr />
            </div>
            <Flex w={'97%'} >
                <About user={user} />
                <Spacer />
                <Profile user={user}/>
                <Spacer />
                <Events setUser={setUser} setFemales={setFemales} setMales={setMales}/>
            </Flex>
        </div>
    )
}

export default Home