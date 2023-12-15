import { Fragment, useState } from 'react';
import { Textarea, Button, useToast } from '@chakra-ui/react';

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState('');

  const toast = useToast();

  const submitText = () => {
    if (text === '') {
      toast({
        title: 'Sorry 😐, text field is empty',
        description: 'Please enter some text for me to work with',
        status: 'error',
        duration: 5000,
        isClosable: false
      });
    } else {
      extractKeywords(text)
    }
  };

  return (
    <Fragment>
      <Textarea 
        bg='teal.300'
        color='white'
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={ (e) => setText(e.target.value) }
      />

      <Button
        bg='teal.500'
        color='white'
        marginTop={4}
        width='100%'
        _hover={{ bg: 'teal.700' }}
        onClick={submitText}
      >Extract Keywords</Button>
    </Fragment>
  );
};

export default TextInput;
