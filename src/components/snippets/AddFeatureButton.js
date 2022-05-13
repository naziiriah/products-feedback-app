import { Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi"
const AddFeature = () => {

    const Navigate = useNavigate()
    return ( 
        <Button  bgColor="#AD1FEA" color="#fff"mt="1.5rem" onClick={() => Navigate("/Add-Feedbacks")}>
                            <Icon color="white"  my=".6rem" fontSize="20px" as ={ BiPlus }></Icon>Add Feedback
        </Button> 
     );
}
 
export default AddFeature;