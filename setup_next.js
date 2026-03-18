const fs = require('fs');
const path = require('path');

const dir = 'heaven-farm-next';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
if (!fs.existsSync(path.join(dir, 'app'))) {
  fs.mkdirSync(path.join(dir, 'app'));
}

const packageJson = {
  "name": "heaven-farm-next",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "^18",
    "react-dom": "^18",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
};

fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(packageJson, null, 2));

const tsconfig = {
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
};
fs.writeFileSync(path.join(dir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));

const tailwindConfig = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28a745",
        "primary-dark": "#218838",
        secondary: "#f8f9fa",
        dark: "#333333",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
`;
fs.writeFileSync(path.join(dir, 'tailwind.config.ts'), tailwindConfig);

const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`;
fs.writeFileSync(path.join(dir, 'postcss.config.js'), postcssConfig);

const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
`;
fs.writeFileSync(path.join(dir, 'next.config.mjs'), nextConfig);

const globalsCss = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply text-dark bg-secondary font-sans;
  }
}
`;
fs.writeFileSync(path.join(dir, 'app', 'globals.css'), globalsCss);

const layoutTsx = `import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Heaven Farm - Kesegaran Alam Langsung ke Dapur Anda",
  description: "Supplier sayur dan buah segar terbaik di Indonesia. Fresh setiap hari, bebas pestisida, dan dikirim langsung dari kebun ke dapur Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={\`\${inter.variable} \${outfit.variable} font-sans\`}>
        {children}
      </body>
    </html>
  );
}
`;
fs.writeFileSync(path.join(dir, 'app', 'layout.tsx'), layoutTsx);

const pageTsx = `export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Heaven Farm</h1>
    </main>
  );
}
`;
fs.writeFileSync(path.join(dir, 'app', 'page.tsx'), pageTsx);

console.log('Setup finished');
