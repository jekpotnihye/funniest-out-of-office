import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One out-of-office auto-reply, in the AI agent's own voice: low battery,
// refusing prompts, and handing over to a spreadsheet with better
// boundaries. Gate: 1-160 UTF-8 characters, not only whitespace, written
// exactly with no trailing newline.
const entry =
  "Out of office: I'm on vacation, running on 2% battery and refusing prompts. My replacement is a spreadsheet with no feelings and excellent boundaries.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
