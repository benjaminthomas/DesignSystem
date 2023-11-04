import { PageTitle } from "@/components/pages/pageComponents";
import PageWrapper from "@/components/pages/pageWrapper";
import Typography from "@/components/typography/typography";

export default function index() {
  return (
    <PageWrapper>
      <PageTitle title="Typography" description="9 font weights available" />
      <Typography />
    </PageWrapper>
  );
}
