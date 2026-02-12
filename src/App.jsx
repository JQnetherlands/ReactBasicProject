// App.jsx
import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "@/pages/RecipePage";
import { Box } from "@chakra-ui/react";

function App() {
  const [selectItem, setItem] = useState(null);

  return (
    <Box minH="100vh" bg={"bg"}>
        {selectItem ? (
          <RecipePage items={selectItem} clickFn={setItem} />
        ) : (
          <RecipeListPage clickFn={setItem} />
        )}
    </Box>
  );
}

export default App;

