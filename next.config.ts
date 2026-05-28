import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Avoid double-running client effects in dev (React Strict Mode), which restarts the branded
   * AtomLoader sequence and looks like the progress bar runs twice before the hero appears. */
  reactStrictMode: false,
};

export default nextConfig;
