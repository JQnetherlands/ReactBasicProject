import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export function ColorModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = theme ?? resolvedTheme
  const isActive = (mode) => current === mode

  if (!mounted) return null;

  return (
    <ButtonGroup isAttached size="sm" aria-label="Theme toggle">
      <Button
        onClick={() => setTheme("light")}
        variant={isActive("light") ? "solid" : "ghost"}
        color={"primary"}
      >
        Light
      </Button>
      <Button
        onClick={() => setTheme("dark")}
        variant={isActive("dark") ? "solid" : "ghost"}
        color={"primary"}
      >
        Dark
      </Button>
      <Button onClick={() => setTheme("system")} variant={isActive("system") ? "solid": "ghost"} color={"primary"}>System</Button>
    </ButtonGroup>
  );
}
