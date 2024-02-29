import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["src/**/*.tsx"], // consider files in all of the src subfolders that end with .tsx
  generates: {
    "./src/__generate__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql", // set the preferred name for this function
      },
    },
  },
};

export default config;
