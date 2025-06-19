import { useStyle } from "./style-provider";
import { Button } from "./ui/button";
import { Stack } from "./ui/stacks";

function StyleSelect() {
  const { style, setStyle } = useStyle();

  return (
    <Button
    onClick={() => setStyle(style === 'retro' ? 'modern' : 'retro')}
      className="shadow-[2px_3px_0px_0px_rgba(0,0,0,1)] active:border-b-2 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] transition-all duration-100 rounded-full border-2 bg-[var(--mode-switcher)] border-black"
    >
      <Stack className="p-1 rounded-full border-black">
        <p className="text-[var(--anti-text)]">{style === 'retro' ? 'Modern' : 'Retro'}</p>
      </Stack>
    </Button>
  );
}

export default StyleSelect;