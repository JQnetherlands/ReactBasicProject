// RecipeListPage.jsx
import { CardRecipe } from "@/components/CardRecipe";
import { data } from "../utils/data";
import { ButtonGroup, Center, Heading, SimpleGrid, Text, VStack, Button } from "@chakra-ui/react";
import { TextInput } from "@/components/TextInput";
import { useState } from "react";

export const RecipeListPage = ({clickFn}) => {
  const [searchField, setSearchfield] = useState("");
  const [filter, setFilter] = useState("All");
  const food = data.hits;
  console.log(food)
  // const matchFood = food.filter((e) => {
  //   return (
  //     e.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
  //     e.recipe.healthLabels.some(label => label.toLowerCase().includes(searchField.toLowerCase()))
  //   )
  // });

  const matchFood = food.filter((e) => {
    const labelMatch = e.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
    
    const healthMatch = e.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchField.toLowerCase())
    );

    const matchesSearch = labelMatch || healthMatch;

    const matchesFilter =
      filter === "All" || e.recipe.healthLabels.includes(filter);
    
    return matchesSearch && matchesFilter;
  });


  const arrayCards = [];
  matchFood.forEach((e) => {
    const key = e.recipe.label;
    arrayCards.push(
      <CardRecipe key={key} food={[e]} clickFn={clickFn} /> // [e] is necessary to render, 
    );
  });

  const handleChange = (event) => {
    setSearchfield(event.target.value);
  };
  return (
    <>
      <Center>
        <Heading mb={8} size={{ base: "md", md: "2xl"}}>Your Recipe App</Heading>
      </Center>
      <Center>
        <VStack gap={4} mb={8}>
          <TextInput changeFn={handleChange} border={"2px solid blue"} />
          <ButtonGroup size={{ base: "sm", md: "md"}} variant={"outline"}>
            {["All", "Vegan", "Vegetarian", "Pescatarian"].map((type) => (
              <Button
                key={type}
                variant={filter === type ? "solid" : "outline"}
                color={filter === type ? "blue.500" : "whiteAlpha.800"}
                onClick={() => setFilter(type)}
              >
                {type}
              </Button>
            ))}
          </ButtonGroup>
        </VStack>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={20}>
        {arrayCards.length === 0 ? <Text>No recipes found</Text> : arrayCards}
      </SimpleGrid>
    </>
  );
};


