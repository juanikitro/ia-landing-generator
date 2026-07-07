import { cp, stat } from "node:fs/promises";
import path from "node:path";
import type { AgentFrontendSpec } from "../site-specs/schema.js";

export type CopiedAgentFrontend = {
  mode: "agent-static" | "agent-framework";
  sourceDir: string;
};

function isInsideRoot(root: string, target: string): boolean {
  const relative = path.relative(root, target);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

async function assertDirectory(dir: string, label: string): Promise<void> {
  try {
    const metadata = await stat(dir);
    if (!metadata.isDirectory()) {
      throw new Error(`${label} is not a directory: ${dir}`);
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes("not a directory")) {
      throw error;
    }
    throw new Error(`${label} does not exist: ${dir}`);
  }
}

async function assertFile(filePath: string, label: string): Promise<void> {
  try {
    const metadata = await stat(filePath);
    if (!metadata.isFile()) {
      throw new Error(`${label} is not a file: ${filePath}`);
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes("not a file")) {
      throw error;
    }
    throw new Error(`${label} does not exist: ${filePath}`);
  }
}

function resolveAgentFrontendSource(frontend: AgentFrontendSpec, projectRoot: string): string {
  if (frontend.mode === "framework-build" && !frontend.output_dir) {
    throw new Error("framework-build agent_frontend requires output_dir. Run the framework build explicitly before generation.");
  }

  const source = frontend.mode === "framework-build" ? frontend.output_dir ?? frontend.source_dir : frontend.source_dir;
  const sourceDir = path.resolve(projectRoot, source);

  if (!isInsideRoot(projectRoot, sourceDir)) {
    throw new Error(`agent_frontend source must stay inside the repo: ${source}`);
  }

  return sourceDir;
}

export async function copyAgentFrontend(frontend: AgentFrontendSpec, siteDir: string, projectRoot = process.cwd()): Promise<CopiedAgentFrontend> {
  const sourceDir = resolveAgentFrontendSource(frontend, projectRoot);
  await assertDirectory(sourceDir, "agent_frontend source");
  await cp(sourceDir, siteDir, { recursive: true, force: true });
  await assertFile(path.join(siteDir, "index.html"), "agent_frontend index.html");

  return {
    mode: frontend.mode === "framework-build" ? "agent-framework" : "agent-static",
    sourceDir: path.relative(projectRoot, sourceDir),
  };
}
