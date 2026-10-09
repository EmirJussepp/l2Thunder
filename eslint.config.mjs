import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Proyecto Node aparte que corre en el VPS del gameserver, no en Vercel.
    "gameserver-bridge/**",
    // Skills de agentes (Impeccable, Prisma): scripts de terceros, no son código
    // del sitio. Están en .gitignore; sin esto el lint los analiza igual.
    ".claude/**",
    ".agents/**",
  ]),
]);

export default eslintConfig;
