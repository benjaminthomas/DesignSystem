import { PageHeader } from "../layout/header/headers";
import { TypeSet } from "../typography/typography";

type PageWrapperProps = {
  title: string;
  description: string;
};

export function PageTitle({ title, description }: PageWrapperProps) {
  return (
    <PageHeader>
      <TypeSet
        as="h1"
        intent="h1"
        className="pt-[2.5rem] pb-[1.5rem] border-b border-neutral-400"
      >
        {title}
      </TypeSet>
      <TypeSet
        intent="body1_semibold"
        className="mt-4 pb-4 mb-8 border-b border-neutral-400"
      >
        {description}
      </TypeSet>
    </PageHeader>
  );
}
