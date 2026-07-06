import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineering studio operated by Tyrese Muigai in Nairobi, building production-grade systems across Africa.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
