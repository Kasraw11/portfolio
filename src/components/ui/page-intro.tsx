import { PageTitle } from "./page-title";
import type { ReactNode } from "react";

export function PageIntro({
  title,
  meta,
}: {
  title: string;
  meta?: ReactNode;
}) {
  return (
    <header className="page-intro">
      <PageTitle title={title} />
      {meta}
    </header>
  );
}
