import {
  ChakraProvider,
  Button,
  useDisclosure,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // 자바스크립트,숫자 {}
    // css ""
    <ChakraProvider>
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Button onClick={onOpen}>Open</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>What's up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>안녕하세요 어쩔티비저쩔티비</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>닫기</Button>20230406
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
