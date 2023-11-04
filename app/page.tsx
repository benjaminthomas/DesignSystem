import { PageTitle } from "@/components/pages/pageComponents";
import PageWrapper from "@/components/pages/pageWrapper";
import { TypeSet } from "@/components/typography/typography";

export default function Home() {
  return (
    <PageWrapper>
      <PageTitle
        title="Welcome developers!"
        description="Use this template to create all your future design systems and style guides!"
      />
      <TypeSet as="h2" intent="h2">
        How it works
      </TypeSet>
      <TypeSet className="mt-4">
        Welcome to a streamlined design experience, where the fusion of Next.js
        14 and Tailwind CSS brings to life a design system replete with reusable
        components. This platform is a treasure trove for developers and
        designers alike, offering a suite of elements that are the epitome of
        plug-and-play functionality. Each component within this system is a
        testament to modern design principles, crafted to promote accessibility,
        ensure responsiveness, and embody ease of use. The system caters to a
        variety of projects, from the smallest of personal websites to
        large-scale commercial applications. With standalone components that
        blend seamlessly into any project, this design system is the cornerstone
        of efficient development. The integration of Next.js 14 ensures that the
        system is built on a foundation of the latest web technologies,
        optimized for performance and scalability. Tailwind CSS adds to the mix
        with its utility-first approach, enabling rapid customization and
        styling that is as effortless as it is powerful. Customization is
        intuitive, ensuring that the integration into your project is smooth and
        hassle-free. With comprehensive documentation and a supportive
        community, any potential hurdles in the development process are easily
        overcome. Embark on a journey of creative construction with this design
        system. It&lsquo;s not just a toolkit; it&lsquo;s a gateway to bringing
        creative visions to life with the most advanced web technologies at your
        fingertips.
      </TypeSet>
    </PageWrapper>
  );
}
