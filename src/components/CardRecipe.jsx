// CardRecipe.jsx
import {
  Card,
  Image,
  Tag,
  VStack,
  Wrap,
  WrapItem,
  AspectRatio,
  Heading,
} from "@chakra-ui/react";

export const CardRecipe = ({ recipe, clickFn }) => {
  const {
    label,
    image,
    dietLabels = [],
    cautions = [],
    mealType = [],
    dishType = [],
    healthLabels = [],
  } = recipe;

  const renderTags = (data, color, prefix) =>
    data.map((item) => (
      <WrapItem key={`${prefix}-${item}`}>
        <Tag.Root
          size={{ base: "sm", md: "md", lg: "lg" }}
          colorPalette={color}
        >
          <Tag.Label>{item}</Tag.Label>
        </Tag.Root>
      </WrapItem>
    ));

  const LabelWrap = ({ title, data, color, prefix }) => (
    <VStack gap={2}>
      <Heading size="sm" textTransform={"uppercase"} opacity={0.7} mb={2}>
        {title}
      </Heading>
      <Wrap justify={"center"} gap={2}>
        {renderTags(data, color, prefix)}
      </Wrap>
    </VStack>
  );

  const isPlantBased =
    healthLabels.includes("Vegan") || healthLabels.includes("Vegetarian");

  const healthLabelTags = healthLabels.filter(
    (h) => h === "Vegan" || h === "Vegetarian",
  );

  return (
    <Card.Root
      width="100%"
      boxShadow="xl"
      borderRadius="xl"
      overflow="hidden"
      cursor={"pointer"}
      onClick={() => clickFn(recipe)}
    >
      <Card.Body padding={{ base: 4, md: 6 }}>
        <VStack gap={5} align={"center"}>
          <AspectRatio ratio={16 / 9} width={"100%"}>
            <Image src={image} alt={label} objectFit="cover" />
          </AspectRatio>

          <Heading size={{ base: "md", md: "lg" }} textAlign="center">
            {label}
          </Heading>

          <LabelWrap
            title={"Dish Type"}
            data={dishType}
            color={"gray"}
            prefix={"dish"}
          />

          <LabelWrap
            title={"Diet"}
            data={dietLabels}
            color={"cyan"}
            prefix={"diet"}
          />

          <LabelWrap
            title={"Cautions"}
            data={cautions}
            color={"red"}
            prefix={"caution"}
          />

          <LabelWrap
            title={"Meal Type"}
            data={mealType}
            color={"purple"}
            prefix={"meal"}
          />

          {isPlantBased && (
            <LabelWrap
              title={"Plant-Based"}
              data={healthLabelTags}
              color={"green"}
              prefix={"health"}
            />
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
