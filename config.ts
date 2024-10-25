import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://virtocommerce.com",
  match: ["https://virtocommerce.com/*", "https://virtocommerce.com/solutions/*", "https://virtocommerce.com/industry/*", "https://virtocommerce.com/case-studies/*"],
  exclude: ["https://virtocommerce.com/blog/*", "https://virtocommerce.com/become-a-partner", "https://virtocommerce.com/privacy", "https://virtocommerce.com/terms", "https://virtocommerce.com/cookies", "https://virtocommerce.com/download*"],
  maxPagesToCrawl: 300,
  outputFileName: "output.json",
  selector: ".page",
  maxTokens: 2000000,
};
