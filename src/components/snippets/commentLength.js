import { useSelector } from "react-redux";


const Comments = ({id }) => {
    const feedback = useSelector((state) => state.feedback.value.productRequests)
    const ID = feedback.find( (state) => state.id === id)
    const Comment = ID.comments
    
    return !Comment ? 0 : Comment.length 
}
 
export default Comments;