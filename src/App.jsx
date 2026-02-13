// App.jsx
import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "@/pages/RecipePage";
import { Box } from "@chakra-ui/react";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Box minH="100vh" bg={"bg"}>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
        ) : (
          <RecipeListPage clickFn={setSelectedRecipe} />
        )}
    </Box>
  );
}

export default App;

