import { VStack } from "@chakra-ui/react";

export const Section = ({ children, ...props }) => {
    return (
        <VStack align={"stretch"} gap={4} {...props}>
            {children}
        </VStack>
    );
};

