import MainMint from './MainMint';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/react'
import BgImage from './assets/background/parallax-bg.gif'


export default function Home() {

  return (
    <Box className="overlay">
      <Box className="App">
        <Navbar />
        <MainMint />
      </Box>

      <Box
        className="moving-background"
        backgroundImage={BgImage}
      >

      </Box>
    </Box>
  );
}
