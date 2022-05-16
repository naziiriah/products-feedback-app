import { Box, Text, Icon } from "@chakra-ui/react";
import "../../index.css"
import Suggestions from "./Suggestion";
import SuggestionButton from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { GrClose } from "react-icons/gr"
import Emptypage from "../emptyPage";



const Homepage = () => {

    const Navigate = useNavigate(),
    
    user = JSON.parse(localStorage.getItem('user')),   
    [value, setValue] = useState('All'),
    [modal, setModal] = useState(false);

    return ( 
    user
    ?    
    <Box 
        display="flex" 
        justifyContent={["normal","normal","","space-between"]} 
        width={["98%","95%","90%", "90%"]}  margin="auto"
        flexDirection={["column", "column", "column", "row"]} 
        height={["20%", "20%","100%","100%"]}>
            
            <Box 
            width={["100%","100%","100%","27%"]} 
            display="flex"
            flexDirection={["column", "row", "row", "column"]}
            justifyContent="space-between"
            height="39rem">
                <Box 
                as="header"
                width={["100%","100%","30%", "90%"]} 
                mt={["0rem", "0rem", "2rem", "0rem"]}
                height={["7rem", "7rem", "12rem", "12rem"]} 
                className="header"
                paddingTop={["2rem","0rem","6rem", "4rem"]}
                borderRadius={["0px", "10px","10px","10px"]}
                
                >
                    <Box 
                    width="90%" margin="auto"
                    display={["flex", "flex", "", ""]} justifyContent={"space-between"}>
                        <Box order={"1"}>
                            <Text as="h2" 
                            textTransform="capitalize" 
                            fontSize="23px"
                            color="#fff" 
                            fontWeight="600">frontend mentor</Text> 
                            <Text as="h3" 
                            textTransform="capitalize" 
                            color="#fff">feedback board</Text>
                        </Box>
                        <Box display={["block", "block","none", "none"]} order={"2"}>
                           {modal ?  <Icon mt="1rem" as={GrClose} fontSize={"23px"} onClick={() => setModal(!modal)} color="white"/> :  <Icon mt="1rem" as={FaHamburger} fontSize={"23px"} onClick={() => setModal(!modal)} color="#fff"/> }
                        </Box>   
                    </Box>
                </Box>
                 <Box 
                as="section"
                display={["none","none", "block","block"]}
                width={["30%","30%","30%", "90%"]} 
                bgColor="#fff" 
                mt="2rem" 
                height={[ "12rem","12rem", "12rem","21rem"]}
                borderRadius="10px">
                    <Box 
                    marginTop="1rem"
                    display="flex"
                    >
                        <SuggestionButton  setValue={setValue} name="All"/>
                        <SuggestionButton setValue={setValue}name="ui"/>
                        <SuggestionButton setValue={setValue}name="ux"/>
                    </Box>
                    <Box 
                    marginTop="1rem"
                    display="flex"
                    >
                        <SuggestionButton setValue={setValue} name="enhancement"/>
                        <SuggestionButton setValue={setValue} name="bug"/>
                    </Box>
                    <Box 
                    marginTop="1rem"
                    display="flex"
                    >
                        <SuggestionButton setValue={setValue} name="feature"/>
                        
                    </Box>
                </Box> : 

                <Box 
                as="section"
                width={["30%","30%","30%", "90%"]}  
                display={["none","none", "block","block"]}
                bgColor="#fff" 
                mt="2rem" 
                height={[ "12rem","12rem", "12rem","21rem"]}
                borderRadius="10px">
                    <Box
                    display="flex"
                    width="85%"
                    margin="auto"
                    mt="1.4rem"
                    justifyContent="space-between">
                        <Text 
                        as="h2"
                        textTransform="capitalize"
                        fontWeight="600">roadmap</Text> 
                        
                        <Text 
                        as="a"
                        textDecoration="underline"
                        color="#4661E6"
                        _hover={{cursor:"pointer"}}
                        onClick={() => Navigate("/Roadmap")}
                        >View</Text>
                    </Box>

                    <Box width="85%" margin="auto">
                        <Box width="100%" display="flex" mt="1rem" justifyContent="space-between">
                            <Box width="10%" marginTop=".35rem"  height=".8rem" borderRadius="50%" bgColor="orange"></Box>
                            <Text width="75%" fontWeight="600">Planned</Text>
                            <Box width="10%" justifyContent="end" fontWeight="bold">2</Box>
                        </Box>

                        <Box width="100%" display="flex" mt="1rem" justifyContent="space-between">
                            <Box width="10%" key="2" marginTop=".35rem"  height=".8rem" borderRadius="50%" bgColor="purple"></Box>
                            <Text width="75%" fontWeight="600">In-Progress</Text>
                            <Box width="10%" justifyContent="end" fontWeight="bold">3</Box>
                        </Box>

                        <Box width="100%" display="flex" mt="1rem" justifyContent="space-between">
                            <Box width="10%" key="1" marginTop=".35rem"  height=".8rem" borderRadius="50%" bgColor="#62BCFA"></Box>
                            <Text width="75%" fontWeight="600">Live</Text>
                            <Box width="10%" justifyContent="end" fontWeight="bold">1</Box>
                        </Box>

                    </Box>
                    
                </Box> : 
                
            </Box>    
            <Suggestions value={value}/>
         { modal &&  <Box display={["block", "block", "none", "none"]} position={"absolute"} top={"13rem"} left={["40%", "50%", "0.5", "0%"]} width={["58%", "48%", "0.5", "0%"]} bgColor={"#fff"} boxShadow={"dark-lg"} height="50rem">

<Box 
    as="section"
    
    width={["100%"]} 
    bgColor="#fff" 
    mt="2rem" 
    height={[ "12rem","12rem", "12rem","21rem"]}
    borderRadius="10px">
        <Box 
        marginTop="1rem"
        display="flex"
        >
            <SuggestionButton  setValue={setValue} name="All"/>
            <SuggestionButton setValue={setValue}name="ui"/>
            <SuggestionButton setValue={setValue}name="ux"/>
        </Box>
        <Box 
        marginTop="1rem"
        display="flex"
        >
            <SuggestionButton setValue={setValue} name="enhancement"/>
            <SuggestionButton setValue={setValue} name="bug"/>
        </Box>
        <Box 
        marginTop="1rem"
        display="flex"
        >
            <SuggestionButton setValue={setValue} name="feature"/>
            
        </Box>
    </Box>

    <Box 
    as="section"
    width={["100%"]}  
    
    bgColor="#fff" 
    mt="2rem" 
    height={[ "12rem","12rem", "12rem","21rem"]}
    borderRadius="10px">
        <Box
        display="flex"
        width="85%"
        margin="auto"
        mt="1.4rem"
        justifyContent="space-between">
            <Text 
            as="h2"
            textTransform="capitalize"
            fontWeight="600">roadmap</Text> 
            
            <Text 
            as="a"
            textDecoration="underline"
            color="#4661E6"
            cursor="pointer"
            onClick={() => Navigate("/Roadmap")}
            >View</Text>
        </Box>

        <Box width="85%" margin="auto">
            <Box width="100%" display="flex" mt="1rem" justifyContent="space-between">
                <Box width="10%" marginTop=".35rem"  height=".8rem" borderRadius="50%" bgColor="orange"></Box>
                <Text width="75%" fontWeight="600">Planned</Text>
                <Box width="10%" justifyContent="end" fontWeight="bold">2</Box>
            </Box>

            <Box width="100%" display="flex" mt="1rem" justifyContent="space-between">
                <Box width="10%" key="2" marginTop=".35rem" height=".8rem" borderRadius="50%" bgColor="purple"></Box>
                <Text width="75%" fontWeight="600">In-Progress</Text>
                <Box width="10%" justifyContent="end" fontWeight="bold">3</Box>
            </Box>

            <Box width="100%" display="flex" mt="1rem" justifyContent="space-between">
                <Box width="10%" key="1" marginTop=".35rem"  height=".8rem" borderRadius="50%" bgColor="#62BCFA"></Box>
                <Text width="75%" fontWeight="600">Live</Text>
                <Box width="10%" justifyContent="end" fontWeight="bold">1</Box>
            </Box>

        </Box>
        
    </Box>
</Box>

         }

            
        </Box>
    : 
    <Emptypage/>
     );
}
 
export default Homepage;