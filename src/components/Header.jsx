import { Fragment } from "react";
import { 
  Heading, 
  Image, 
  Text 
} from "@chakra-ui/react";
import logo from '../assets/light-bulb.svg';

const Header = () => {
  return (
    <Fragment>
      <Image 
      src={logo} 
      alt="logo" 
      width={100} 
      marginBottom='1rem' 
      />
      <Heading 
      color='white' 
      marginBottom='1rem'>
        Hi there! 👋 I'm Axiom 🤓
      </Heading>
      <Text 
      fontSize={25} 
      textAlign='center'>
        Paste in your text or link below and I'll summarize it for you.
      </Text>
    </Fragment>
  );
};

export default Header;