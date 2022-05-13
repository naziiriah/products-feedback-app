import { Box,Text } from "@chakra-ui/react";
import AddFeature from "./snippets/AddFeatureButton";

const Emptypage = () => {
    return (  
        <Box width="100%"  textAlign={"center"} height="50rem" bgColor="#fff">
            <Box width="60%" height="30rem" margin={"auto"} py="20rem">
            <Text as="h1" fontSize={"28px"} >There is no feedback yet</Text>
            <Text as ="h3" color="#647196">Got a suggestion? Found a bug that needs to be squashed?</Text>
            <Text as ="h3" color="#647196">We love hearing about new ideas to improve our app.</Text>
            <AddFeature/>
            </Box>
        </Box>
    );
}
 
export default Emptypage;
