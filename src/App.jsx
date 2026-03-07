// App.jsx
import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "@/pages/RecipePage";
import { VStack, Box, Flex } from "@chakra-ui/react";
import { ColorModeToggle } from "./components/ColorModeToggle";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Box minH="100vh" bg={"bg"} color={"fg"}>
      {/* Top Bar */}
      <Flex justify={"flex-end"} p={4} maxW={"container.lg"} mx={"auto"}>
        <ColorModeToggle />
      </Flex>
      {/* Main Content */}
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
        ) : (
          <RecipeListPage clickFn={setSelectedRecipe} />
        )}
    </Box>
  );
}

export default App;

