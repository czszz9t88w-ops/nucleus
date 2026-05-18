import chapters from "@/data/curriculum";
import MCQClient from "./MCQClient";

export function generateStaticParams() {
  return chapters.map((c) => ({ id: c.id }));
}

export default function MCQPage() {
  return <MCQClient />;
}
