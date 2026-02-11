// TextInput.jsx 
import { Input } from "@chakra-ui/react"

export const TextInput = ({changeFn, ...props}) => {
    return (
      <>
        <Input variant={"solid"} onChange={changeFn} {...props}></Input>
      </>
    );
};