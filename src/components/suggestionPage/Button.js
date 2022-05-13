import { Button } from "@chakra-ui/react";

const SuggestionButton = ({name, setValue}) => {
    return (
        <Button
        bgColor="#f2F4ff"
        color="#4661E6"
        marginLeft="1.2rem"
        height="2.5rem"
        textTransform={"capitalize"}
        onClick={() => setValue(name)}
        >
            {name}
        </Button>
      );
}
 
export default SuggestionButton;