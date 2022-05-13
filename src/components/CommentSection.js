import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CommentContent from "./snippets/comment";


const CommentArea = ({ id }) => {
    const feedback = useSelector((state) => state.feedback.value.productRequests)
    const ID = feedback.find( (state) => state.id === id)
    const Comment = ID.comments
    return ( 
        <Box key={id} as = "article" width="100%"   bgColor={"white"} pt="3rem" borderRadius={"10px"} borderBottomColor={"#fff"}  borderBottomWidth={"1px"} borderBottomStyle={"solid"} >
            { !Comment  ? 
            "" :
            Comment.map(state => (
            <CommentContent state = {state} id={id} comment={Comment}/>
            ))
            }
        </Box>
     );
}
 
export default CommentArea;