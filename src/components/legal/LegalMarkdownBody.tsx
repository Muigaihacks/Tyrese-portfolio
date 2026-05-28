import { readFileSync } from "node:fs";
import path from "node:path";
import { isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface LegalMarkdownBodyProps {
  /** Basename without extension under `src/content/legal/` */
  slug: "privacy" | "cookies" | "terms";
}

function textContent(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textContent).join("");
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return textContent(props.children);
  }
  return "";
}

function headingId(text: string): string {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return slug || "section";
}

export default function LegalMarkdownBody({ slug }: LegalMarkdownBodyProps) {
  const full = path.join(process.cwd(), "src/content/legal", `${slug}.md`);
  const source = readFileSync(full, "utf8");

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children, ...rest }) => {
          const id = headingId(textContent(children));
          return (
            <h2 id={id} {...rest}>
              {children}
            </h2>
          );
        },
        h3: ({ children, ...rest }) => <h3 {...rest}>{children}</h3>,
        ul: ({ children, ...rest }) => <ul {...rest}>{children}</ul>,
        ol: ({ children, ...rest }) => <ol {...rest}>{children}</ol>,
        li: ({ children, ...rest }) => <li {...rest}>{children}</li>,
      }}
    >
      {source}
    </ReactMarkdown>
  );
}
