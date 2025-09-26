import { useStyle } from "./style-provider";
import { Button } from "./ui/button";
import { Stack } from "./ui/stacks";

function StyleSelect() {
  const { style, setStyle } = useStyle();

  return (
    <Button
    onClick={() => setStyle(style === 'retro' ? 'modern' : 'retro')}
    variant="themeselector"
    >
      <Stack className="p-1 rounded-full border-black">
        <p className="text-[var(--anti-text)]">{style === 'retro' ? 'Modern' : 'Retro'}</p>
      </Stack>
    </Button>
  );
}

export default StyleSelect;