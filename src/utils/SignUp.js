import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    useDisclosure, 
    ModalBody,
    Button,
    InputRightElement,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputGroup
  } from "@chakra-ui/react"
import { useState } from "react"
  

export const Signup = () => {

    return(
        <SignUpSetup/>
    )
}

const SignUpSetup = () => {
   const [input, setInput] = useState(''),

   handleInputChange = (e) => setInput(e.target.value),
 
   isError = input === '',

   [show, setShow] = useState(false),
  
   handleClick = () => setShow(!show),


  {isOpen, onOpen, onClose } = useDisclosure(),

  

  handleLogin = () => {
      onClose();
      localStorage.setItem('user', "2")
      window.location.reload()
  };

    return(
        <>
            <Button onClick={onOpen} width="45%" height="3rem" textTransform="uppercase" bgColor="rgb(55, 63, 104)"  color="#fff" className="final-modal">Sign up</Button>
            
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
          
                <ModalBody  >
                    <FormControl isInvalid={isError}>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input
                            id='email'
                            type='email'
                            value={input}
                            onChange={handleInputChange}
                        />
                        {!isError ? (
                            <FormHelperText>
                                Enter the Email you created an account with.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                        <FormLabel htmlFor='password' marginTop={'1rem'}>Password</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                            />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </ModalBody>           
  
            <ModalFooter>
              <Button className="to-home" width="100%" height="3rem" textTransform="uppercase" bgColor="rgb(55, 63, 104)" color="#fff"
              onClick={handleLogin}>
                  Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )

}


