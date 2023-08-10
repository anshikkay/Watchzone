import React from 'react';
import {Text,Box,Stack,VStack,Heading,Button,HStack,Input} from '@chakra-ui/react';
import {AiOutlineSend} from "react-icons/ai";
const Footer = () => {
  return(
    <Box bgColor={"yellow"} minH={'40'} p="16" color={'white'}>
       <Stack direction={['column','row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size="md" textTransform={"uppercase"}>
                Subscribe to get updates
            </Heading>
        <HStack>
            <Input placeholder='Enter Email Here...'/>
            <Button p={'0'}
            colorScheme={"purple"}
            varient={'ghost'}
            borderRadius={"0 20px 20px 0"}>
            <AiOutlineSend size={20}/>
          </Button>
        </HStack>
        </VStack>
        <VStack w={'full'}
        borderLeft={["none","1px solid white"]}
        borderRight={['none','1px solid white']}>
          <Heading textTransform={'uppercase'} textAlign={'center'}>WATCHZONE</Heading>
          <Text>All Rights Received</Text>
        </VStack>
        <VStack w={"full"}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'whiteAlpha'}></Button>
          <a href="https://www.youtube.com/@ANSHIKAYADAV-zv2rk/featured">Youtube</a>
          <Button variant={'link'} colorScheme={'whiteAlpha'}></Button>
          
          <a href="https://github.com/anshikkay">GitHub</a>
        </VStack>
      </Stack>    
    </Box>
  );
  
};

export default Footer;