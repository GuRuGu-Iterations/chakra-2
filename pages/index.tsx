import { Container, Flex } from '@chakra-ui/react';
import { Cart, Details } from '@/src/sections';

const IndexPage = () => (
  <Container maxW='container.xl' p='0'>
    <Flex
      direction={{ base: 'column-reverse', lg: 'row' }}
      h={{ base: 'auto', md: '100vh' }}
      py={[0, 10, 20]}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
