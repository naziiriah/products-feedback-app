import { Box, Image, Text, Button, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addReply } from "../../features/feedback";
import Reply from "./Replies";

const CommentContent = ({ state, id, comment }) => {
    const [reply, setReply] = useState(false)
    const [value, SetValue] = useState("")
    const Dispatch = useDispatch()
    const inputRef = useRef()

    function  handleReply() {
        value && Dispatch(addReply(
            {
                "ID": id,
                "commentID": state.id,
                "content" : value,
                "replyingTo": state.user.username
            })) 

    } 

    return (
        <Box as="section" key={state.id}  width="90%" m="auto" my="4rem"   borderBottomColor={"#fff"}  borderBottomWidth={"1px"} borderBottomStyle={"solid"}>
            <Box display={"flex"} justifyContent={"space-between"} >
                <Box width={"14rem"} display={"flex"} >
                    <Image src={state.user.image} alt={state.user.username} width="4rem" height="4rem" borderRadius="50%"/>
                    <Box marginLeft={"3rem"}>
                        <Text textTransform={"capitalize"} fontWeight={"600"} fontStyle={"20px"}>{state.user.name}</Text>
                        <Text color="#8C92B3">@{state.user.username}</Text>
                        
                    </Box>
                    </Box>
                <Text textTransform={"capitalize"} fontWeight={"600"} _hover={{cursor:"pointer", textDecoration:"underline"}} color={"#4661E6"} onClick={() => setReply(!reply)}>reply</Text>
            </Box>
            <Box width={["80%","80%","85%","90%"]} marginLeft={"7rem"}  height="5rem" >
                <Text color="#647196">{state.content}</Text>
            </Box>
            { state.replies && <Reply id ={state.id} comment = {comment}/> }
            {
                reply && <Box display={"flex"} my="2rem" justifyContent={"space-between"}>
                <Textarea marginLeft={"7rem"} width={["73%"]} ref={inputRef} value={value} onChange={(e) => SetValue(e.target.value)}/>
                <Button textTransform={"capitalize"} color="#fff" bgColor="#AD1FEA"_hover={{ bgColor:"#AD1FEA", opacity:"0.8"}} onClick={() => (setReply(!reply), handleReply())} >post reply</Button> 
            </Box>
            }
        </Box>
      );
}
 
export default CommentContent;