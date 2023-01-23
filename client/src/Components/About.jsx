import {
  Box,

  Container,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const getUsers = (id='1qLLvjkjyYbfjt4xH5dd') => {
  return axios.get(`https://firebase-api.onrender.com/api/event/${id}`)

}
export default function About({ user }) {
  const [userdata, setUserdata] = useState([])

  useEffect(() => {
    getUsers(user.id)
      .then((response) => {
        let data = response.data
        const x = data.Date.split('-')
        const d = +x[0]
        const m = x[1]
        const y = x[2]
        let str = ''
        if (d % 10 == 1) {
          str = "st"
        } else if (d % 10 == 2) {
          str = 'nd'
        } else if (d % 10 == 3) {
          str = 'rd'
        } else {
          str = 'th'
        }

        let mnth = ''
        if (m == "Jan") {
          mnth = "January"
        }
        else if (m == "Feb") {
          mnth = "Febrauary"
        }
        else if (m == "Mar") {
          mnth = "March"
        }
        else if (m == "Apr") {
          mnth = "April"
        }
        else if (m == "May") {
          mnth = "May"
        }
        else if (m == "Jun") {
          mnth = "June"
        }
        else if (m == "Jul") {
          mnth = "July"
        }
        else if (m == "Aug") {
          mnth = "August"

        }
        else if (m == "Sep") {
          mnth = "September"

        }
        else if (m == "Oct") {
          mnth = "October"

        }
        else if (m == "Nov") {
          mnth = "November"

        }
        else if (m == "Dec") {
          mnth = "December"
        }

        let year = ''
        if (y >= 0 && y < 10) {
          year = '200' + y
        } else if (y >= 10 && y < 50) {
          year = '20' + y
        } else {
          year = '19' + y
        }

        setUserdata({ ...userdata, d, str, mnth, year })

      })
      .catch((error) => {
        console.log(error)
      })
  }, [user])


  return (
    <Container w={'30%'} height={'100%'}>
      <SimpleGrid
        columns={{ base: 1 }}
        py={{ base: 18, md: 24 }} w={'100%'}>
        <Stack spacing={{ base: 6, md: 10 }} w={'100%'}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: '2xl', sm: '1xl', lg: '2xl' }}>
              {user.ID ? user.ID : "ADSDJ252"}
            </Heading>
            <Text
              fontWeight={500}
              fontSize={'2xl'}>
              Person Detected
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            w={'100%'}
            divider={
              <StackDivider
              // borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <Box>
              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} >
                    Name:
                  </Text>{' '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user.Name ? user.Name : "ABC"}
                </ListItem>
                <ListItem>
                  <Text as={'span'} >
                    Location:
                  </Text>{' '}
                  &nbsp;&nbsp;{user.Location ? user.Location : "GOA"}
                </ListItem>
                <ListItem>
                  <Text as={'span'} >
                    Date:
                  </Text>{' '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.Date ? user.Date : "01-Jan-2000"}
                </ListItem>
                <ListItem>
                  <Text as={'span'} >
                    Time:
                  </Text>{' '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.Time ? user.Time : "03:00 AM"}{ }
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            w={'55%'}
            divider={
              <StackDivider
              // borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <Box>
              <Text >
                Description: &nbsp;
                {user.ID?
                  `${user.Name} detected at ${user.Location} on ${userdata.d}${userdata.str} ${userdata.mnth}, ${userdata.year}`
                  :
                  "Description: Female0 detected at Goa on 1st January, 2000"

                }
              </Text>{' '}

            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container >
  );
}