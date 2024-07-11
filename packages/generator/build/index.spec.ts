import ts from "typescript";
import { generateHandlers, generateIndexFile } from ".";

describe("generateHandlers", () => {
  it("generates handlers correctly", async () => {
    const file = "../teestack/pb/teestack.client.ts";
    const tsOpts: ts.CompilerOptions = {
      target: ts.ScriptTarget.ESNext,
    };
    const host = ts.createCompilerHost(tsOpts, true);
    const prog = ts.createProgram([file], tsOpts, host);

    const result = generateHandlers({
      filepath: file,
      outDirPath: "../teestack/src/mocks/gen",
      prog,
      baseUrl: "",
    });
    await expect(result).toMatchFileSnapshot(
      "./snapshots/generateHandlers.snapshot.ts",
    );
  });

  it("generates handlers correctly with a base url", async () => {
    const file = "../teestack/pb/teestack.client.ts";
    const tsOpts: ts.CompilerOptions = {
      target: ts.ScriptTarget.ESNext,
    };
    const host = ts.createCompilerHost(tsOpts, true);
    const prog = ts.createProgram([file], tsOpts, host);

    const result = generateHandlers({
      filepath: file,
      outDirPath: "../teestack/src/mocks/gen",
      prog,
      baseUrl: "https://teestack.com/api",
    });
    await expect(result).toMatchFileSnapshot(
      "./snapshots/generateHandlers-base-url.snapshot.ts",
    );
  });
});

describe("generateIndexFile", () => {
  it("generates index.ts correctly", async () => {
    const createdFiles = ["teestack", "randomness", "dockerfile"];
    const result = generateIndexFile(createdFiles);
    expect(result).toMatchFileSnapshot(
      "./snapshots/generateIndexFile.snapshot.ts",
    );
  });
});
