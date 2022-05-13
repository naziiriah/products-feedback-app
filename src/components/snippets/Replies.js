import { Box, Text, Image} from "@chakra-ui/react";




const Reply = ({ id, comment }) => {
    const replySection  = comment.find(state => state.id === id )
    const replies = replySection.replies
    
    return (
        replies.map(state => 
            <Box width={["70%","70%","90%","90%"]} my="3rem" marginLeft={"10%"} height="14rem">
                <Box display={"flex"} justifyContent={"space-between"} >
                <Box width={["10rem", "10rem", "14rem","14rem"]}  display={"flex"} >
                    <Image src={state.user.image} alt={state.user.username} width="4rem" height="4rem" borderRadius="50%"/>
                    <Box marginLeft={"3rem"}>
                        <Text textTransform={"capitalize"} fontWeight={"600"} fontStyle={"20px"}>{state.user.name}</Text>
                        <Text color="#8C92B3">@{state.user.username}</Text>
                    </Box>
                    </Box>
                
            </Box>
            <Box width="90%" marginLeft={"7rem"}  height="5rem" >
                <Text color="#8C92B3"><Text as ="span" fontWeight="600" color={"#AD1FEA"} fontFamily={"bold"} >@{state.replyingTo}</Text > {state.content}</Text>
            </Box>
            </Box>
            )
      );
}
 
export default Reply;