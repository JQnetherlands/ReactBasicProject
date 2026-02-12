import { VStack } from "@chakra-ui/react";

export const Page = ({ children, ...props }) => {
    return (
        <VStack maxW={"container.lg"} mx="auto" px={{ base: 4, md: 6 }} py={{ base: 4, md: 10 }} gap={{ base: 8, md: 12 }} align={"stretch"} {...props}>
            {children}
        </VStack>
    );
}