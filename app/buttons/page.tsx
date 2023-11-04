import { PageTitle } from "@/components/pages/pageComponents";
import PageWrapper from "@/components/pages/pageWrapper";
import Buttons from "@/components/ui/buttons/button";

type Props = {};

export default function index({}: Props) {
  return (
    <PageWrapper>
      <PageTitle
        title="Buttons"
        description="They come in three levels — Primary, Secondary and links"
      />
      <Buttons />
    </PageWrapper>
  );
}
