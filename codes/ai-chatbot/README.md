## Youtube Video
> Link:

# Don't forget to change next.config.ts file
type `pwd` in the terminal and paste the result   

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: "route-to-the-project-directory",
  },
};

export default nextConfig;

```