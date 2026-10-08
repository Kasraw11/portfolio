import { ViewTransition } from "react";
import { PageContent } from "@/components/layout/page-content";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition default="none" enter="page-enter" exit="page-exit">
      <PageContent>{children}</PageContent>
    </ViewTransition>
  );
}
