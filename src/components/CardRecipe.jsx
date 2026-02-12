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

export const CardRecipe = ({ food, clickFn }) => {
  const item = food[0].recipe;
  const getLabels = (array, key) => array.map((element) => element.recipe[key]);

  const flattenAndFilter = (arrays) =>
    arrays.filter((e) => e.length > 0).flat();

  const flatDietLabel = flattenAndFilter(getLabels(food, "dietLabels"));
  const flatCautions = flattenAndFilter(getLabels(food, "cautions"));
  const flatMealType = flattenAndFilter(getLabels(food, "mealType"));
  const flatDishTypeRaw = flattenAndFilter(getLabels(food, "dishType"));
  const flatHealthLabels = flattenAndFilter(getLabels(food, "healthLabels"));

  const healthLabelTag = flatHealthLabels.filter(
    (e) => e === "Vegan" || e === "Vegetarian",
  );

  const renderTags = (data, color, prefix) =>
    data.map((label) => (
      <WrapItem key={`${prefix}-${label}`}>
        <Tag.Root size={{ base: "sm", md: "md", lg: "lg" }} colorPalette={color}>
          <Tag.Label>{label}</Tag.Label>
        </Tag.Root>
      </WrapItem>
    ));

  const LabelWrap = ({ title, data, color, prefix }) => (
    <>
      <Heading size="sm" mb={2}>
        {title}
      </Heading>
      <Wrap justify={"center"} gap={2}>{renderTags(data, color, prefix)}</Wrap>
    </>
  );

  return (
    <Card.Root
      width="100%"
      boxShadow="xl"
      borderRadius="xl"
      overflow="hidden"
      cursor={"pointer"}
      onClick={() => clickFn(food)}
    >
      <Card.Body padding={{ base: 4, md: 6}}>
        <VStack gap={4} align={"center"}>
          <AspectRatio ratio={16 / 9} width={"100%"}>
            <Image
              src={item.image}
              alt={item.label}
              objectFit="cover"
            />
          </AspectRatio>

          <Heading size={{ base: "md", md: "lg"}} textAlign="center">{item.label}</Heading>

          {flatDishTypeRaw.length > 0 && (
            <Wrap justify={"center"} gap={2}>
              {renderTags(flatDishTypeRaw, "white", "dishType")}
            </Wrap>
          )}

          {flatDietLabel.length > 0 && (
            <LabelWrap
              title="Diet:"
              data={flatDietLabel}
              color="cyan"
              prefix="diet"
            />
          )}
          {flatCautions.length > 0 && (
            <LabelWrap
              title="Cautions:"
              data={flatCautions}
              color="red"
              prefix="cautions"
            />
          )}
          {flatMealType.length > 0 && (
            <LabelWrap
              title="Meal Type:"
              data={flatMealType}
              color="purple"
              prefix="mealType"
            />
          )}
          {healthLabelTag.length > 0 && (
            <LabelWrap
              title="Health:"
              data={healthLabelTag}
              color="green"
              prefix="health"
            />
          )}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
