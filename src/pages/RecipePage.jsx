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

export const RecipePage = ({ recipe, clickFn }) => {
    const {
      label,
      image,
      totalTime,
      yield: servings,
      ingredientLines = [],
      dietLabels = [],
      cautions = [],
      mealType = [],
      dishType = [],
      healthLabels = [],
      totalNutrients = {},
    } = recipe;


  const nutrientKeys = ["ENERC_KCAL", "CHOCDF", "CHOLE", "FAT", "NA", "PROCNT"];

  const nutrientData = nutrientKeys
    .map((key) => totalNutrients[key])
    .filter(Boolean);
  
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

  return (
    <VStack
      maxW={"container.md"}
      mx={"auto"}
      px={{ base: 2, md: 0 }}
      py={{ base: 6, md: 8 }}
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
      >
        <Card.Body display="flex" flexDirection="column" gap={6}>
          <AspectRatio ratio={16 / 9}>
            <Image src={image} alt={label} objectFit="cover" />
          </AspectRatio>

          <Heading textAlign="center" fontSize="2xl">
            {label}
          </Heading>

          {dishType.length > 0 && (
            <>
              <Heading size="md">Dish Type</Heading>
              <Wrap gap={4}>
                {renderTags(dishType, "yellow", "dishType")}
              </Wrap>
            </>
          )}

          {totalTime > 0 ? (
            <Text>Total cooking Time: {totalTime} minutes</Text>
          ) : null}

          <Text>Servings: {servings}</Text>

          <Heading size="md">Ingredients</Heading>
          <Text whiteSpace="pre-wrap">{ingredientLines.join("\n")}</Text>

          {dietLabels.length > 0 && (
            <Section>
              <SectionTitle>Diet</SectionTitle>
              <TagGroup data={dietLabels} color={"cyan"} size={"lg"} />
            </Section>
          )}

          {cautions.length > 0 && (
            <>
              <Heading size="md">Cautions</Heading>
              <Wrap gap={4}>{renderTags(cautions, "red", "cautions")}</Wrap>
            </>
          )}

          {mealType.length > 0 && (
            <>
              <Heading size="md">Meal Type</Heading>
              <Wrap gap={4}>
                {renderTags(mealType, "purple", "mealType")}
              </Wrap>
            </>
          )}

          {healthLabels.length > 0 && (
            <>
              <Heading size="md">Health</Heading>
              <Wrap gap={4}>{renderTags(healthLabels, "green", "health")}</Wrap>
            </>
          )}

          {nutrientData.length > 0 && (
            <>
              <Heading size="md">Total Nutrients</Heading>
              {renderTotalNutrients(nutrientData)}
            </>
          )}
        </Card.Body>
      </Card.Root>
    </VStack>
  );
};
