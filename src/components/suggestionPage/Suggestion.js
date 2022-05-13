import { Box, Icon, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { GiDeadEye } from "react-icons/gi"
import { FaComment } from "react-icons/fa"
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri"
import { useSelector } from "react-redux";
import AddFeature from "../snippets/AddFeatureButton";
import { useNavigate } from "react-router-dom";
import { editVote } from "../../features/feedback";
import { useDispatch } from "react-redux";
import Comments from "../snippets/commentLength";
import Emptypage from "../emptyPage";



const Suggestions = ({value}) => {
    const feedback = useSelector((state ) => state.feedback.value.productRequests)
    const suggestionNumber = feedback.filter(states => states.status === "suggestion")
    const Dispatch = useDispatch()
    
    const navigate = useNavigate()
    const [Sort, setSort] = useState(false)
    const [sortValue, setSortValue] = useState("Most upvotes")
    const [ vote, setVote ] = useState(false)

    function EditVote(id){
        setVote(!vote)
        Dispatch(editVote({ id , vote}))
    }
    
    return ( 
        <Box width={["100%","100%","100%","70%"]}  height="100rem" as="main">
            <Box width="100%">
                <Box as="header" bgColor="rgb(55, 63, 104)" width="100%" height="6rem" borderRadius={["0px", "10px","10px","10px"]}>
                        <Box width="95%" height="5rem" display={"flex"}  justifyContent={["space-between", "space-between", "", ""]} margin="auto" >
                            <Box width="10%" height="100%" display={["none","none", "block","block"]}>
                                <Icon as={ GiDeadEye} mt="1.9rem"fontSize="30px" color="white"  />
                            </Box>
                            <Text width="30%" as ="h2" mt="1.9rem" fontWeight="600" fontSize="17px" textTransform={"capitalize"} color="white" display={["none","none", "block","block"]}> {suggestionNumber.length} suggestions</Text>
                            <Box mt="1.7em" width={["80%","80%" , "40%", "40%"]} fontWeight="600" fontSize="17px" textTransform={"capitalize"} color="white"> 
                                <Text onClick={() => setSort(!Sort)}>Sort by: {sortValue} { Sort ? <Icon as = {RiArrowDownSLine} onClick={() => setSort(!Sort)}/> : <Icon as = {RiArrowUpSLine} onClick={() => setSort(!Sort)}/> }
                                    {
                                        Sort && <Box height="5rem" left="-1rem" position="relative" top="3rem" boxShadow={"lg"} bgColor={"white"} width="12rem" >
                                        <Box height="2.5rem" width="100%"  fontWeight="400" fontSize ="16px" paddingLeft="1rem" paddingTop={".4rem"} color="#000" textTransform={"capitalize"} _hover={{color:"#AD1FEA",cursor:"pointer"}} onClick={() =>  {
                                         setSort(!Sort) && setSortValue("Most upvotes")
                                        }}>most upvotes</Box>
                                        <hr />
                                        <Box height="2.5rem" width="100%" color="#000" fontWeight="400" fontSize ="16px" paddingLeft="1rem" paddingTop={".4rem"}  _hover={{color:"#AD1FEA",cursor:"pointer"}} onClick={() =>  {setSort(!Sort)&& setSortValue("least upvotes")}} >least upvotes</Box>
                                        
                                    </Box>
                                    }
                                </Text>
                            </Box>  
                            <AddFeature/>
                        </Box>
                </Box>
            </Box>
            { suggestionNumber.length === 0 ? <Emptypage/> :
            suggestionNumber.filter((state) => value ==="All"  ? state.category : state.category === value )
                        .sort((a, b) => sortValue ==="Most upvotes" ? " " : a.upvotes - b.upvotes )
                        .map(state =>   
                            (

                            
                            <Box as ="section" key={state.id} height="10rem" my="2rem" borderRadius="10px" bgColor={"#fff"} width="100%"  _hover={{cursor: "pointer"}} >
                                <Box width="95%" margin="auto" height="100%" display="flex" justifyContent="space-between">
                                    <Box width="3rem" height={"45%"} borderRadius="10px" my="4%" bgColor="#f2f4ff" display={"flex"} flexDirection={"column"}  _hover={{cursor:"pointer", bgColor:"#4661E6", color:"#fff"}} onClick={() => EditVote( state.id)}  justifyContent={"space-around"}>
                                        <Icon as={ RiArrowUpSLine } color="#4661E6"  fontSize="23px"  margin="auto" _hover={{cursor: "pointer", color:"#FFF"}}/>
                                        <Text as="h3" fontWeight={"600"} fontSize={"15px"} textAlign={"center"} mb=".5rem" _active={{cursor:"pointer"}} >{state.upvotes}</Text>
                                    </Box>
                                    <Box width="70%" height="100%" display={"flex"} flexDirection={"column"} onClick={() => navigate("/Product-Request", {state : state.id})} >
                                        <Text as="h1" fontSize={"21px"} fontWeight={"500"} marginTop="1.3rem"marginBottom={".6rem"} _hover={{cursor: "pointer", color:"#4661E6"}}>{state.title}</Text>
                                        <Text as="h3" color="#647196"> {state.description}</Text>
                                        <Button bgColor="#f2F4ff" color="#4661E6" my=".5rem"  height="2.5rem" width="7rem" textTransform={"capitalize"}
>
                                        {state.category}
                                        </Button>
                                    </Box>
                                    <Box my="3rem" fontSize={"17px"} display={"flex"} flexDirection={"row"} fontWeight={"700"} >
                                        <Icon as ={FaComment} fontSize={"28px"} color="#CDD2EE" mx="1rem" />
                                        <Comments id ={state.id}/>
                                    </Box>
                                </Box>
                            </Box>
                        ))
            }
        </Box>
     );
}
 
export default Suggestions;