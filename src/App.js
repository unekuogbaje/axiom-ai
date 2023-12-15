import { useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import Footer from './components/Footer';
import KeywordsModal from './components/KeywordsModal';

const App = () => {
  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract the keywords from this text. Make the first letter of each word uppercase and seperate the keywords using commas\n\n' + text + '',
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      })
    }

    const response = await fetch(process.env.REACT_APP_OPENAI_API_URL, options);

    const json = await response.json();

    const data = json.choices[0].text.trim();

    console.log(data);

    setKeywords(data);

    setLoading(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Box 
    bg='teal.600' 
    color='white' 
    height='100vh' 
    paddingTop={130}>
      <Container 
      maxW='3xl' 
      centerContent>
        <Header />
        <TextInput 
        extractKeywords={extractKeywords} 
        />
        <Footer />
      </Container>
      <KeywordsModal 
      keywords={keywords} 
      loading={loading} 
      isOpen={isOpen} 
      closeModal={closeModal} 
      />
    </Box>
  );
};

export default App;