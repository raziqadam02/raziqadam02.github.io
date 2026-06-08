import type { NextConfig } from "next";

function getBasePath(): string | undefined {
  if (process.env.GITHUB_PAGES !== "true") {
    return undefined;
  }

  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository) {
    return undefined;
  }

  const [owner, repo] = repository.split("/");
  if (repo === `${owner}.github.io`) {
    return undefined;
  }

  return `/${repo}`;
}

const basePath = getBasePath();

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
