import { Heading } from "@chakra-ui/react";

export const SectionTitle = ({ children, ...props }) => {
    return (
        <Heading size={"md"} {...props}>
            {children}
        </Heading>
    );
}