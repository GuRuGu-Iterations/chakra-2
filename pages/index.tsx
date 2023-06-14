import { Container, Flex } from '@chakra-ui/react';
import { Cart, Details } from '@/src/sections';

const IndexPage = () => (
  <Container maxW='container.xl' p='0'>
    <Flex
      direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']}
      h='100vh'
      py='20'
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
