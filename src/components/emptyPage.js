import { Box,Text, Icon } from "@chakra-ui/react";
import AddFeature from "./snippets/AddFeatureButton";
import { GiDeadEye } from "react-icons/gi"
import { Login } from "../utils/Login";
import { Signup } from "../utils/SignUp";

const Emptypage = () => {
    return (
        <>
        <Box as="header" bgColor="rgb(55, 63, 104)" width="100%" height="6rem" borderRadius={["0px", "10px","10px","10px"]}>
            <Box width="95%" height="5rem" display={"flex"}  justifyContent={["space-between", "space-between", "", ""]} margin="auto" >
                            <Box width="10%" height="100%" display={["none","none", "block","block"]}>
                                <Icon as={ GiDeadEye} mt="1rem"fontSize="60px" color="white"  />
                            </Box>
                            <Box as="text" color={"#fff"} lineHeight="2rem" fontSize={"1.1rem"} >
                                Login to view your previews
                            </Box>
                        </Box>
        </Box>
        <Box width="100%"  textAlign={"center"} height="0rem" bgColor="#fff">
            <Box width="60%" height="30rem" margin={"auto"} py="10rem">
            <Text as="h1" fontSize={"28px"} >There is no feedback yet</Text>
            <Text as ="h3" color="#647196">Got a suggestion? Found a bug that needs to be squashed?</Text>
            <Text as ="h3" color="#647196">We love hearing about new ideas to improve our app.</Text>
            <br/>
            <Text as ="h3" color="#647196">Login and contribute to the community.</Text>
            
            
            <Text as ="text" color="#647196">
                If you don't have an account with us.
                You can create one.
            </Text>
            <Box margin={'auto'}
             mt={'3rem'} display={'flex'} justifyContent={"space-between"}>
                <Login/>
                <Signup/>
            </Box>
            
            </Box>
        </Box>
        </>  
       
    );
}
 
export default Emptypage;
