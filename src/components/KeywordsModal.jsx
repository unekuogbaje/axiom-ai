import { Fragment } from "react"
import { 
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
 } from "@chakra-ui/react"

const KeywordsModal = ({ 
  keywords, 
  loading, 
  isOpen, 
  closeModal }) => {
  return (
    <Fragment>
      <Modal 
      isOpen={ isOpen } 
      onClose={ closeModal }>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Summary
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody 
          display='flex' 
          alignItems='center' 
          justifyContent='center'>
            { loading ? (
              <CircularProgress 
              isIndeterminate 
              color='teal.300' />
            ) : (
              <Text>
                { keywords }
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button 
            colorScheme='teal' 
            mr={3} 
            onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default KeywordsModal
