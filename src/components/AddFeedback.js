import { Box, Text, Input, Textarea, Button,Icon, Select,  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi"
import { FaChevronLeft } from "react-icons/fa"
import { useState } from "react";
import { addProductRequest } from "../features/feedback";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const AddQuery = () => {
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("Feature")
    const [description,  setDescription] = useState("")
    const feedback = useSelector((state) => state.feedback.value.productRequests)
    const length = feedback.length
    function resetValue() {
        setTitle("")
        setCategory("")
        setDescription("")
    }
    
    function AddFeature() {
        
        Dispatch(addProductRequest(
            {
                "id": length + 1,
                "title": `${title}`,
                "category": `${category}`,
                "upvotes": 1,
                "status": "suggestion",
                "description": `${description}`
              }
        ))
        
        resetValue()

    }

    return ( 
        <Box as= "main" width={["95%","90%","80%","48%"]} height="100rem" margin="auto">
            <Box as="aside" >
                <Text as="h3" height="5rem" py="4rem" fontWeight={"600"} fontSize={"18px"} textTransform={"capitalize"} onClick={() => Navigate("/")} _hover={{ cursor:"pointer"}}><Icon  as ={FaChevronLeft} fontWeight={"600"} pt=".2rem" color="black"/> go back</Text>
            </Box>
            <Box as="article" width="100%"  height="47rem" bgColor={"#fff"}>
                <Box className="add-image" bg borderRadius={"50%"} bgColor={"red"} width="3rem"pos={"relative"} top="-1.8rem" left="1rem" height={"3rem"}><Icon color="white" mx=".5rem" my=".6rem" fontSize="30px" as ={ BiPlus }></Icon> </Box>
               <Box width="90%" m ="auto" mtop="2rem"height="40rem">
               <Text as="h1" textTransform={"capitalize"} fontSize={"23px"} height={'4rem'} pt="1rem"  my="1rem" fontWeight={"700"}>create new feedback</Text>

                <Box as="section" mb="2rem">
                    <Text as="h3" fontSize={"18px"} fontWeight={"600"} textTransform={"capitalize"} lineHeight={"1rem"}>feedback title</Text>
                    <Text as ="p" color="#647196" fontSize="16px" lineHeight={"2rem"}> Add a short descriptive headline</Text>
                    <Input height="4rem" bgColor="#f2f4ff" color="#000" mt=".7rem" value = {title} onChange={(e) => setTitle(e.target.value)}></Input>
                </Box>

                <Box as="section" mb="2rem">
                    <Text as="h3" fontSize={"18px"} fontWeight={"600"} textTransform={"capitalize"} lineHeight={"1rem"}>category</Text>
                    <Text as ="p" color="#647196" fontSize="16px" lineHeight={"2rem"}> Choose a category for your feedback</Text>
                    <Select onChange={(e) => setCategory(e.target.value)} >
                        <option>Feature</option>
                        <option>Enhancement</option>
                        <option>UI</option>
                        <option>UX</option>
                        <option>Bug</option>
                    </Select>
                </Box>

                <Box as="section">
                    <Text as="h3" fontSize={"18px"} fontWeight={"600"} textTransform={"capitalize"} lineHeight={"1rem"}>feedback detail</Text>
                    <Text as ="p" color="#647196" fontSize="16px" lineHeight={"2rem"}> Include any specific comment on what should be improved, added, e.t.c</Text>
                    <Textarea height="7rem" bgColor="#f2f4ff" color="#000" mt=".7rem" value = {description} onChange={(e) => setDescription(e.target.value)} ></Textarea>
                </Box>

                <Box width="100%" height="4rem" display={"flex"} my="3rem" justifyContent={"end"}>
                    <Button textTransform={"capitalize"} color="#fff" bgColor={"rgb(55, 63, 104)"} fontWeight={"600"} fontSize={"18px"} mx="2rem" onClick ={() => resetValue()} >cancel</Button>
                    <Button textTransform={"capitalize"} color="#fff" bgColor="#4661E6" fontWeight={"600"} fontSize={"18px"} onClick={ () => {AddFeature()}}>add  feedback</Button>
                </Box>
               </Box>
            </Box>
        </Box>
     );
}
 
export default AddQuery;