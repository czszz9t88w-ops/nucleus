import chapters from "@/data/curriculum";
import QAClient from "./QAClient";

export function generateStaticParams() {
  return chapters.map((c) => ({ id: c.id }));
}

export default function QAPage() {
  return <QAClient />;
}
