import chapters from "@/data/curriculum";
import SnippetsClient from "./SnippetsClient";

export function generateStaticParams() {
  return chapters.map((c) => ({ id: c.id }));
}

export default function SnippetsPage() {
  return <SnippetsClient />;
}
