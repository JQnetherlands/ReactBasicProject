import { Wrap, WrapItem, Tag } from "@chakra-ui/react";

export const TagGroup = ({ data, color, size = "md" }) => {
    return (
        <Wrap gap={4}>
            {data.map((label) => (
            <WrapItem key={label}>
                <Tag.Root size={size} colorPalette={color}>
                        <Tag.Label>{label}</Tag.Label>
                </Tag.Root>
            </WrapItem>
            ))}
        </Wrap>
    )
}