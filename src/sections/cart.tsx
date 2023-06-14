import React from 'react';
import Image from 'next/image';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  HStack,
  VStack,
  Heading,
  Text,
  Divider,
  SimpleGrid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import Skateboard from '@/src/assets/skateboard.png';

const Cart = () => {
  return (
    <VStack
      w='full'
      h='full'
      p={10}
      spacing={6}
      alignItems='flex-start'
      bg='gray.50'
    >
      <VStack spacing='3' alignItems='flex-start'>
        <Heading size='2xl'>Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{' '}
          <Button variant='link' colorScheme='black' fontWeight='bold'>
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <Flex gap={6} alignItems='center' w='full' justifyContent='space-between'>
        <HStack spacing={6} alignItems='center'>
          <Image src={Skateboard} width={96} height={96} alt='Skateboard' />
          <VStack spacing={1} alignItems='flex-start'>
            <Heading size='md'>Penny board</Heading>
            <Text>PNYCOMP27541</Text>
          </VStack>
        </HStack>
        <Heading size='sm' textAlign='end'>
          $119.00
        </Heading>
      </Flex>
      <VStack gap={3} w='full'>
        <Flex
          gap={6}
          w='full'
          alignItems='center'
          justifyContent='space-between'
        >
          <Text>Subtotal</Text>
          <Heading size='sm' textAlign='end'>
            $119.00
          </Heading>
        </Flex>
        <Flex
          gap={6}
          w='full'
          alignItems='center'
          justifyContent='space-between'
        >
          <Text>Shipping</Text>
          <Heading size='sm' textAlign='end'>
            $19.99
          </Heading>
        </Flex>
        <Flex
          gap={6}
          w='full'
          alignItems='center'
          justifyContent='space-between'
        >
          <Text>Taxes (estimated)</Text>
          <Heading size='sm' textAlign='end'>
            $23.80
          </Heading>
        </Flex>
      </VStack>
      <Divider borderColor='gray.200' />
      <Flex w='full' gap={6} alignItems='center' justifyContent='space-between'>
        <Text>Total</Text>
        <Heading size='lg' textAlign='end'>
          $162.79
        </Heading>
      </Flex>
    </VStack>
  );
};

export { Cart };
