import { Box, Text, Icon, Input, Textarea, Button, Select } from "@chakra-ui/react";
import { FaPenNib, FaChevronLeft  } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProductRequest, editProductRequest } from "../features/feedback";


const EditQuery = () => {
    const Navigate =  useNavigate()
    const Location = useLocation()
    const feedback = useSelector((state) => state.feedback.value.productRequests)
    const Dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("Feature")
    const [status, setStatus] = useState("suggestion")
    const [description,  setDescription] = useState("")
    

    function DeleteFeedback(id) {
        Dispatch(deleteProductRequest({
            "id": Location.state,
        }))
        Navigate("/")
    }

    function HandleEdit() {
        Dispatch(editProductRequest( {
            "id": Location.state,
            "title" : `${title}`,
            "category" : `${category}`,
            "status" : `${status}`,
            "description" : `${description}`
        }))
        
    }

    return ( 
        <Box as= "main" width={["95%","90%","80%","48%"]} height="100rem" margin="auto">
            <Box as="aside" >
                <Text as="h3" height="5rem" py="4rem" fontWeight={"600"} fontSize={"18px"} textTransform={"capitalize"} onClick={() => Navigate("/" )} _hover={{ cursor:"pointer"}}><Icon  as ={FaChevronLeft} fontWeight={"600"} pt=".2rem" color="black"/> go back</Text>
            </Box>

            <Box as="article" width="100%"  height="60rem" bgColor={"#fff"}>
                <Box className="add-image" bg borderRadius={"50%"} bgColor={"red"} width="4rem"pos={"relative"} top="-1.8rem" left="1rem" height={"4rem"}><Icon color="white" mx="1rem" my="1rem" fontSize="30px" as ={ FaPenNib }></Icon> </Box>
               <Box width="90%" m ="auto" mtop="2rem"height="40rem">
                {
                    feedback.filter(request => request.id === Location.state)
                            .map(req => (
                                <Box width="100%"key={req.id} >
                                    <Text as="h1"  fontSize={"23px"} height={'4rem'}   my="1rem" fontWeight={"700"}>Editing '{req.title}'</Text>
                                    
                                    <Box as="section" mb="2rem">
                                        <Text as="h3" fontSize={"18px"} fontWeight={"600"} textTransform={"capitalize"} lineHeight={"1rem"}>feedback title</Text>
                                        <Text as ="p" color="#647196" fontSize="16px" lineHeight={"2rem"}> Add a short descriptive headline</Text>
                                        <Input height="4rem" bgColor="#f2f4ff" color="#000" mt=".7rem" placeholder={ req.title} value = {title} onChange={(e) => setTitle(e.target.value)}></Input>
                                    </Box>

                                    <Box as="section" mb="2rem">
                                        <Text as="h3" fontSize={"18px"} fontWeight={"600"} textTransform={"capitalize"} lineHeight={"1rem"}>category</Text>
                                        <Text as ="p" color="#647196" fontSize="16px" lineHeight={"2rem"}> Choose a category for your feedback</Text>
                                        <Select  onChange={(e) => setCategory(e.target.value)}>
                                            <option>Feature</option>
                                            <option>Enhancement</option>
                                            <option>UI</option>
                                            <option>UX</option>
                                            <option>Bug</option>
                                        </Select>
                                    </Box>

                                    <Box as="section" mb="2rem">
                                        <Text as="h3" fontSize={"18px"} fontWeight={"600"} textTransform={"capitalize"} lineHeight={"1rem"}>update status</Text>
                                        <Text as ="p" color="#647196" fontSize="16px" lineHeight={"2rem"}> Change feedback state</Text>
                                        <Select textTransform={"capitalize"}  onChange={(e) => setStatus(e.target.value)}>
                                            <option>suggestion</option>
                                            <option>live</option>
                                            <option>in-progress</option>
                                            <option>planned</option>
                                        </Select>
                                    </Box>

                                    <Box as="section">
                                        <Text as="h3" fontSize={"18px"} fontWeight={"600"} textTransform={"capitalize"} lineHeight={"1rem"}>feedback detail</Text>
                                        <Text as ="p" color="#647196" fontSize="16px" lineHeight={"2rem"}> Include any specific comment on what should be improved, added, e.t.c</Text>
                                        <Textarea height="7rem" bgColor="#f2f4ff" color="#3A4374" mt=".7rem" value = {description}  onChange={(e) => setDescription(e.target.value)}></Textarea>
                                    </Box>
                                    
                                    <Box display={"flex"}  width ="100%" height ="10rem" justifyContent={"space-between"}>
                                        <Box width="50%" height="4rem"  my="3rem">
                                            <Button textTransform={"capitalize"} color="#fff" bgColor="red" fontWeight={"600"} fontSize={"18px"} onClick={()=> {DeleteFeedback()}}>delete</Button>
                                        </Box>
                                        <Box width="50%" height="4rem" display={"flex"} my="3rem" justifyContent={"end"}>
                                            <Button textTransform={"capitalize"} color="#fff" bgColor={"rgb(55, 63, 104)"} fontWeight={"600"} fontSize={"18px"} mx="2rem">cancel</Button>
                                            <Button textTransform={"capitalize"} color="#fff" bgColor="#4661E6" fontWeight={"600"} fontSize={"18px"}onClick={() =>  HandleEdit()}>add  feedback</Button>
                                        </Box>
                                    </Box>
                                </Box>   
                            ))
                }
            </Box>
            </Box>
        </Box>
     );
}
 
export default EditQuery;