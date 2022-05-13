import { Box,  Button, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../features/feedback";



const AddComment = ({ id }) => {
    const Dispatch = useDispatch()
    const [value, setValue] = useState("")
    function handleClick (){
       value !=="" && Dispatch(addComment(
            {
                id,
                "content": value
            }
        )) 
    }
    return ( 
        <Box as ="aside"  width="100%" bgColor={"#fff"} my="4rem" borderRadius={"10px"} py="1rem" px="4rem">
            <Text as="h2" marginBottom={"3rem"} textTransform={"capitalize"} fontWeight={"600"} fontSize={"22px"}>add comment</Text>
            <Textarea  value = {value} onChange={(e) => setValue(e.target.value)}></Textarea>
            <Box display={"flex"} justifyContent={"end"} my="1rem">
                <Button textTransform={"capitalize"} fontWeight={"600"} color="#fff" bgColor="#C75AF6" onClick={() => handleClick()}>post comment</Button>
            </Box>
        </Box> );
}
 
export default AddComment;