import type {
  AnalyzeCommitsContext,
  GenerateNotesContext,
  Options,
} from "semantic-release";

// eslint-disable-next-line @typescript-eslint/no-implied-eval
const dynamicImport = new Function("moduleId", `return import(moduleId);`) as (
  moduleId: string,
) => Promise<
  Record<
    string,
    (
      options: Options,
      context: AnalyzeCommitsContext | GenerateNotesContext,
    ) => Promise<unknown>
  >
>;

export = {
  dynamicImport,
};
