// RecipeListPage.jsx
import { CardRecipe } from "@/components/CardRecipe";
import { data } from "../utils/data";
import {
  Stack,
  ButtonGroup,
  Heading,
  SimpleGrid,
  Text,
  Button,
} from "@chakra-ui/react";
import { TextInput } from "@/components/TextInput";
import { useState } from "react";
import { Page } from "@/components/layout/Page";
import { normalizeRecipe } from "@/utils/normalizeRecipe";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchfield] = useState("");
  const [filter, setFilter] = useState("All");
  const food = data.hits;

  const handleChange = (event) => {
    setSearchfield(event.target.value);
  };

  const matchFood = food.filter((e) => {
    const labelMatch = e.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());

    const healthMatch = e.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchField.toLowerCase()),
    );

    const matchesSearch = labelMatch || healthMatch;
    const matchesFilter =
      filter === "All" || e.recipe.healthLabels.includes(filter);

    return matchesSearch && matchesFilter;
  });

  const cards = matchFood.map((e) => {
    const key = e.recipe.label;
    return (
      <CardRecipe key={key} food={[e]} clickFn={clickFn} /> // [e] is necessary to render,
    );
  });

  return (
    <Page>
      {/* Header Section */}
      <Stack gap={4} align={"center"}>
        <Heading textAlign={"center"} size={{ base: "lg", md: "xl", lg: "2xl" }}>
          Your Recipe App
        </Heading>
      </Stack>

      {/* Filter Section */}
      <Stack direction={{ base: "column", md: "row" }} gap={4} align={"center"} justify={"center"} flexWrap={"wrap"}>
        <TextInput
          changeFn={handleChange}
          borderWidth={"2px"}
          borderColor={"primary"}
          width={{ base: "100%", md: "400px" }}
        />
        <ButtonGroup size={{ base: "sm", md: "md" }} variant={"outline"}>
          {["All", "Vegan", "Vegetarian", "Pescatarian"].map((type) => (
            <Button
              key={type}
              variant={filter === type ? "solid" : "outline"}
              color={filter === type ? "primary" : "fg"}
              onClick={() => setFilter(type)}
            >
              {type}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>

      {/* Grid Section */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
        {cards.length === 0 ? <Text>No recipes found</Text> : cards}
      </SimpleGrid>
    </Page>
  );
};
