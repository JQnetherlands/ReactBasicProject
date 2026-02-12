// RecipePage.jsx
import {
  Tag,
  Card,
  Image,
  Button,
  Wrap,
  Text,
  Heading,
  WrapItem,
  Grid,
  GridItem,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";

import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/layout/SectionTitle";
import { TagGroup } from "@/components/layout/TagGroup";

export const RecipePage = ({ items, clickFn }) => {
  const getLabels = (array, key) => array.map((el) => el.recipe[key]);

  const totalNutrients = [
    "ENERC_KCAL",
    "CHOCDF",
    "CHOLE",
    "FAT",
    "NA",
    "PROCNT",
  ];

  const getTotalNutrientsLabels = (array) => {
    const totalNutrientsObject = array.map((el) => el.recipe.totalNutrients);
    return totalNutrients.map((key) => totalNutrientsObject[0][key]);
  };

  const dietLabelsRaw = getLabels(items, "dietLabels");
  const cautionsRaw = getLabels(items, "cautions");
  const mealTypeRaw = getLabels(items, "mealType");
  const dishTypeRaw = getLabels(items, "dishType");
  const healthLabelsRaw = getLabels(items, "healthLabels");
  const totalNutrientsRaw = getTotalNutrientsLabels(items);

  const dietLabelsClean = dietLabelsRaw.filter((e) => e.length > 0);
  const cautionsClean = cautionsRaw.filter((e) => e.length > 0);

  const flatter = (array) => array.reduce((acc, curr) => acc.concat(curr), []);

  const flatDishType = flatter(dishTypeRaw);
  const flatDiet = flatter(dietLabelsClean);
  const flatCautions = flatter(cautionsClean);
  const flatMealType = flatter(mealTypeRaw);
  const flatHealth = flatter(healthLabelsRaw);

  const renderTags = (data, color, prefix) =>
    data.map((label) => (
      <WrapItem key={`${prefix}-${label}`}>
        <Tag.Root size="lg" colorPalette={color}>
          <Tag.Label>{label}</Tag.Label>
        </Tag.Root>
      </WrapItem>
    ));

  const renderTotalNutrients = (data) => (
    <Grid templateColumns={{ base: "1fr", sm: "120px 1fr" }} gap={2}>
      {data.map((e, i) => (
        <div key={`nutrient-${i}`}>
          <GridItem key={`qty-${i}`}>
            {e.quantity.toFixed(0)} {e.unit}
          </GridItem>
          <GridItem key={`label-${i}`}>{e.label}</GridItem>
        </div>
      ))}
    </Grid>
  );

  const item = items[0].recipe;

  return (
    <VStack
      maxW={"container.md"}
      mx={"auto"}
      px={{ base: 2, md: 0 }}
      gap={{ base: 6, md: 8 }}
    >
      <Button
        onClick={() => clickFn()}
        size="sm"
        variant="ghost"
        alignSelf={"flex-start"}
        bg="whiteAlpha.700"
        _hover={{ bg: "whiteAlpha.500" }}
      >
        ← Back
      </Button>
      <Card.Root
        w="100%"
        boxShadow="xl"
        borderRadius="xl"
        overflow="hidden"
        // p={{ base: 4, md: 6 }}
        // position="relative"
      >
        <Card.Body display="flex" flexDirection="column" gap={6}>
          <AspectRatio ratio={16 / 9}>
            <Image src={item.image} alt={item.label} objectFit="cover" />
          </AspectRatio>
          <Card.Title textAlign="center" fontSize="2xl">
            {item.label}
          </Card.Title>

          {flatDishType.length > 0 && (
            <>
              <Heading size="md">Dish Type</Heading>
              <Wrap gap={4}>
                {renderTags(flatDishType, "yellow", "dishType")}
              </Wrap>
            </>
          )}

          {item.totalTime > 0 ? (
            <Text>Total cooking Time: {item.totalTime} minutes</Text>
          ) : null}
          <Text>Servings: {item.yield}</Text>

          <Heading size="md">Ingredients</Heading>
          <Text whiteSpace="pre-wrap">{item.ingredientLines.join("\n")}</Text>

          {flatDiet.length > 0 && (
            <Section>
              <SectionTitle>Diet</SectionTitle>
              <TagGroup data={flatDiet} color={"cyan"} size={"lg"} />
            </Section>
          )}

          {flatCautions.length > 0 && (
            <>
              <Heading size="md">Cautions</Heading>
              <Wrap gap={4}>{renderTags(flatCautions, "red", "cautions")}</Wrap>
            </>
          )}

          {flatMealType.length > 0 && (
            <>
              <Heading size="md">Meal Type</Heading>
              <Wrap gap={4}>
                {renderTags(flatMealType, "purple", "mealType")}
              </Wrap>
            </>
          )}

          {flatHealth.length > 0 && (
            <>
              <Heading size="md">Health</Heading>
              <Wrap gap={4}>{renderTags(flatHealth, "green", "health")}</Wrap>
            </>
          )}

          {totalNutrientsRaw.length > 0 && (
            <>
              <Heading size="md">Total Nutrients</Heading>
              {renderTotalNutrients(totalNutrientsRaw)}
            </>
          )}
        </Card.Body>
      </Card.Root>
    </VStack>
  );
};
