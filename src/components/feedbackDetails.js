import { Box, Text, Button, Icon } from "@chakra-ui/react";
import {useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaComment } from "react-icons/fa"
import { RiArrowUpSLine } from "react-icons/ri"
import { FaChevronLeft } from "react-icons/fa"
import { editVote } from "../features/feedback";
import { useState } from "react";
import Comments from "./snippets/commentLength";
import CommentArea from "./CommentSection";
import AddComment from "./snippets/AddComment";

const RequestDetail = () => {
    const Location = useLocation()
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    const feedback = useSelector((state) => state.feedback.value.productRequests)
    const [vote, setVote] = useState(false)
    function EditVote(id){
        setVote(!vote)
        Dispatch(editVote({ id , vote}))
    }
    
    return (
        <Box width={["98%","98%","90%","70%"]} key={Location.state} margin="auto" height="100rem" display={"flex"} flexDir={"column"}>
            <Box display="flex" justifyContent={"space-between"}>
                <Text as="h3" pt="4rem" fontWeight={"600"} textTransform={"capitalize"} onClick={() => Navigate("/")} _hover={{ cursor:"pointer"}}><Icon  as ={FaChevronLeft} fontWeight={"600"} pt=".2rem" color="black"/>go back</Text>
                <Button mt="3rem" textTransform={"capitalize"} fontWeight={"600"} bgColor="#AD1FEA" color="#fff" onClick={() => Navigate("/Edit-Feedback",{state : Location.state})}>edit feedback</Button>
            </Box>
            {
               Location.state && feedback.filter(request => request.id === Location.state)
                                         .map((request) => (
                                             
                                            <Box 
                                            width={"100%"} 
                                            height="11rem"
                                            mb ="4rem" 
                                            key = {Location.state}
                                            >
                                                <Box height="10rem" mt="1rem" mb="3rem" borderRadius="10px" bgColor={"#fff"} width="100%"  >
                                                    <Box width="95%" margin="auto" height="100%" display="flex" justifyContent="space-between">
                                                        <Box width="3rem" height={"45%"} borderRadius="10px" my="4%" bgColor="#f2f4ff" display={"flex"} flexDirection={"column"} justifyContent={"space-around"} onClick={() => EditVote(request.id)}>
                                                            <Icon as={ RiArrowUpSLine } color="#4661E6"  fontSize="23px"  margin="auto" _hover={{cursor: "pointer"}}/>
                                                            <Text as="h3" fontWeight={"600"} fontSize={"15px"} textAlign={"center"} mb=".5rem">{request.upvotes}</Text>
                                                        </Box>
                                                        <Box width="70%" height="100%" display={"flex"} flexDirection={"column"}>
                                                            <Text as="h1" fontSize={"21px"} fontWeight={"500"} marginTop="1.3rem"marginBottom={".6rem"}>{request.title}</Text>
                                                            <Text as="h3" color="#647196"> {request.description}</Text>
                                                            <Button bgColor="#f2F4ff" color="#4661E6" my=".5rem"  height="2.5rem" width="7rem" textTransform={"capitalize"}>
                                                                {request.category}
                                                            </Button>
                                                            </Box>
                                                            <Box my="3rem" fontSize={"17px"}  display={"flex"} >
                                                                <Icon as ={FaComment} color="#f2f4ff" fontSize={"28px"}  mx="1rem" />   
                                                                <Comments id ={request.id}/>                                     
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                            </Box>
                                         ))
            }
            <CommentArea id = {Location.state}/>
            <AddComment id ={Location.state}/> 
        </Box> 
    );
}
 
export default RequestDetail;