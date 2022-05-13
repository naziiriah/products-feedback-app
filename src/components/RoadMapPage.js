import { Box, Text, Icon } from "@chakra-ui/react";
import { FaChevronLeft  } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import AddFeature from "./snippets/AddFeatureButton";
import { useSelector } from "react-redux";
import {  RiArrowUpSLine } from "react-icons/ri"



const RoadMap = () => {
        const Navigate = useNavigate()
        const feedback = useSelector((state) => state.feedback.value.productRequests)
        const planned = feedback.filter(plan => plan.status === "planned")
        const InProgress = feedback.filter(state => state.status ==="in-progress")
        const Live = feedback.filter(live => live.status === "live")

    return ( 
        <Box width={["100%","100%","100%","89%"]} m="auto">
            <Box as="header" 
            bgColor="rgb(55, 63, 104)" 
            width="100%" height="8rem"borderRadius="10px">
                    <Text as="h3" height="2rem" color="#fff"  width ="95%" m="auto" pt="2rem" fontWeight={"600"} fontSize={"16px"} textTransform={"capitalize"} onClick={() => Navigate("/")} _hover={{ cursor:"pointer"}}><Icon  as ={FaChevronLeft} fontWeight={"600"} pt=".2rem" color="#fff"/> go back</Text>
                    <Box width ="95%" m="auto" height="3rem" mt="2rem" display={"flex"} justifyContent={"space-between"}>
                        <Text textTransform={"capitalize"} fontSize={"23px"} fontWeight={"600"} color="#fff">roadmap</Text>
                        <Box mt="-2rem">
                            <AddFeature/>
                        </Box>
                    </Box>
            </Box> 

            <Box as="main" display={"flex"}flexDirection={["column","column", "row", "row"]} width="95%" m="auto" height="70rem" justifyContent={"space-between"}>
                <Box as ="article" display={"flex"} mt="2rem" flexDir={"column"}>
                    <Text as="h3" fontSize={"20px"} textTransform={"capitalize"} lineHeight={"2rem"}  fontWeight={"700"}>planned ({planned.length})</Text>
                    <Text as ="p" color="#647196" mb="1rem" lineHeight={"2rem"} fontSize={"17px"}>Ideas priotorized for research</Text>
                {
                    planned.map(plans => (
                        <Box as="section" width={[ "100%","100%", "17rem","22rem"]} key={plans.id}  height="14rem" my="1rem" bgColor="#fff" borderTopRadius="10px" borderTopColor={"#F49F85"} borderTopStyle={"solid"} borderTopWidth={"10px"}>
                            <Box width="90%" display="flex" m="auto" mt="1rem" >
                            <Box  key="1" marginTop=".35rem" width=".8rem" height=".8rem" borderRadius="50%" bgColor="#F49F85"></Box>
                            <Text mx="1rem" textTransform={"capitalize"} >{plans.status}</Text>
                            </Box>

                            <Box width="90%" key={plans.id} m="auto" mt="1rem">
                                <Text as="h3" fontWeight={"600"} lineHeight={"2rem"} fontSize={"18px"}>{plans.title}</Text>
                                <Text as="p" lineHeight={"1.4rem"} color={"#647196"}>{plans.description}</Text>
                                <Box width="100%" display={"flex"} justifyContent={"space-between"}>
                                    <Box as="h3" height="2.3rem" my="1rem" fontWeight={"600"} pt="0.4rem" borderRadius={"8px"} width="8rem" bgColor="#F2F4FF" textAlign={"center"} textTransform={"capitalize"}>{plans.category}</Box>

                                    <Box width="5rem" height={"2.3rem"} borderRadius="10px"  bgColor="#f2f4ff" display={"flex"} pt="0.3rem" flexDirection={"row"} justifyContent={"space-around"} mt="1rem">
                                        <Icon as={ RiArrowUpSLine } color="#4661E6"  fontSize="23px"  />
                                        <Text as="h3" fontWeight={"600"} fontSize={"15px"} textAlign={"center"} >{plans.upvotes}</Text>
                                    </Box>
                                </Box>
                            </Box>

                            
                        </Box>
                    ))
                }
                </Box>

                <Box as ="article" display={"flex"} mt="2rem" flexDir={"column"}>
                    <Text as="h3" fontSize={"20px"} textTransform={"capitalize"} fontWeight={"700"} lineHeight={"2rem"} >in-progress ({InProgress.length})</Text>
                    <Text as ="p" mb="1rem" color="#647196" lineHeight={"2rem"} fontSize={"17px"}>Currently being developed</Text>
                {
                    InProgress.map(progress => (
                        <Box as="section" key={progress.id} width={[ "100%","100%", "17rem","22rem"]}  height={["18rem","17rem","15rem","14rem"]} my="1rem" bgColor="#fff" borderTopRadius="10px" borderTopColor={"#AD1FEA"} borderTopStyle={"solid"} borderTopWidth={"10px"}>
                                <Box width="90%" display="flex" m="auto" mt="1rem" >
                            <Box  key="1" marginTop=".35rem" width=".8rem" height=".8rem" borderRadius="50%" bgColor="#AD1FEA"></Box>
                            <Text mx="1rem" textTransform={"capitalize"} >{progress.status}</Text>
                            
                        </Box>

                        <Box width="90%"key={progress.id}  m="auto" mt="1rem">
                                <Text as="h3" fontWeight={"600"} lineHeight={"2rem"} fontSize={"18px"}>{progress.title}</Text>
                                <Text as="p" lineHeight={"1.4rem"} color={"#647196"}>{progress.description}</Text>
                                <Box width="100%" display={"flex"} justifyContent={"space-between"}>
                                    <Box as="h3" height="2.3rem" my="1rem" fontWeight={"600"} pt="0.4rem" borderRadius={"8px"} width="8rem" bgColor="#F2F4FF" textAlign={"center"} textTransform={"capitalize"}>{progress.category}</Box>

                                    <Box width="5rem" height={"2.3rem"} borderRadius="10px"  bgColor="#f2f4ff" display={"flex"} pt="0.3rem" flexDirection={"row"} justifyContent={"space-around"} mt="1rem">
                                        <Icon as={ RiArrowUpSLine } color="#4661E6"  fontSize="23px"  />
                                        <Text as="h3" fontWeight={"600"} fontSize={"15px"} textAlign={"center"} >{progress.upvotes}</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
                </Box>

                <Box as ="article" display={"flex"} mt="2rem" flexDir={"column"}>
                    <Text as="h3" fontSize={"20px"} textTransform={"capitalize"} fontWeight={"700"} lineHeight={"2rem"} >live ({Live.length})</Text>
                    <Text as ="p" lineHeight={"2rem"} color="#647196" fontSize={"17px"} mb="1rem">Released feature</Text>
                {
                    Live.map(live => (
                        <Box as="section" key={live.id} width={[ "100%","100%", "17rem","22rem"]}  height="14rem" my="1rem" bgColor="#fff" borderTopRadius="10px" borderTopColor={"#62BCFA"} borderTopStyle={"solid"} borderTopWidth={"10px"}>
                             <Box width="90%" display="flex" m="auto" mt="1rem" >
                            <Box  marginTop=".35rem" width=".8rem" height=".8rem" borderRadius="50%" bgColor="#62BCFA"></Box>
                            <Text  textTransform={"capitalize"} mx="1rem">{live.status}</Text>
                            
                        </Box>

                        <Box width="90%" key={live.id}  m="auto" mt="1rem">
                                <Text as="h3" fontWeight={"600"} lineHeight={"2rem"} fontSize={"18px"}>{live.title}</Text>
                                <Text as="p" lineHeight={"1.4rem"} color={"#647196"}>{live.description}</Text>
                                <Box width="100%" display={"flex"} justifyContent={"space-between"}>
                                    <Box as="h3" height="2.3rem" my="1rem" fontWeight={"600"} pt="0.4rem" borderRadius={"8px"} width="8rem" bgColor="#F2F4FF" textAlign={"center"} textTransform={"capitalize"}>{live.category}</Box>

                                    <Box width="5rem" height={"2.3rem"} borderRadius="10px"  bgColor="#f2f4ff" display={"flex"} pt="0.3rem" flexDirection={"row"} justifyContent={"space-around"} mt="1rem">
                                        <Icon as={ RiArrowUpSLine } color="#4661E6"  fontSize="23px"  />
                                        <Text as="h3" fontWeight={"600"} fontSize={"15px"} textAlign={"center"} >{live.upvotes}</Text>
                                    </Box>
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
 
export default RoadMap;