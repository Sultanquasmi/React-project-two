import React from 'react';
import { Box, Container, Heading, Image, Stack ,Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';

const HeadingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={'10'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} textAlign={'center'} p={["4","16"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            doloremque, voluptatum aut quo ab, rem vero repellendus doloribus
            reiciendis a cum. Molestias, itaque earum! Dolorum, quam
            repellendus. Maxime optio ullam sint labore dolore quia, repudiandae
            inventore ad corrupti! Consectetur, architecto quas dolores
            consequuntur, temporibus voluptas facilis nobis, unde aut enim
            necessitatibus cumque eius minus harum reprehenderit porro ea ipsam
            quia soluta ex ab. Iste odit itaque tenetur beatae tempora. Sunt,
            quibusdam rem veritatis laboriosam distinctio explicabo magni
            recusandae, debitis sed excepturi provident omnis exercitationem
            alias quisquam voluptate vel commodi deleniti? Reiciendis rem sunt
            sapiente temporibus laboriosam harum magni assumenda optio?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}>
        Watch the future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...HeadingOptions}>
        Future is bright
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
        Gaming on console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
