import { Box, Text, Image, useTab } from '@chakra-ui/react'
import React from 'react'

function Profile({ user }) {

  return (
    <Box w={'30%'} height={'100%'} p={2}>
      <Box height={'100%'} >
        <Text fontSize={20} fontWeight={500} mt={2} mb={2}>{user.ID ? user.Gender : "FEMALE"}</Text>
        {user.ID ? <Image
          height={'90%'}
          src={`  https://firebasestorage.googleapis.com/v0/b/neural-cable-351910.appspot.com/o/${user.Name}.jpg?alt=media&token=17ef0fab-a926-4e62-a62c-88691c5d4bd2`}
          alt={user.Name}
        />
          :
          <Image
            height={'90%'}
            src={`https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000`}
            alt='Caffe Latte'
          />

        }
      </Box>
    </Box>
  )
}

export default Profile