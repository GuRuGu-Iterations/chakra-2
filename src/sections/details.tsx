import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';

const Details = () => {
  return (
    <VStack
      w='full'
      h='full'
      p={10}
      spacing={10}
      alignItems='flex-start'
      bg='gray.50'
    >
      <VStack spacing={3} alignItems='flex-start'>
        <Heading size='2xl'>Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder='John' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder='Doe' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder='Blvd. Broken Dreams 21' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder='San Francisco' />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value='usa'>United States of America</option>
              <option value='ukraine'>Ukraine</option>
              <option value='germany'>Germany</option>
              <option value='canada'>Canada</option>
              <option value='france'>France</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size='lg' w='full'>
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export { Details };
