import { PageTitle } from "@/components/pages/pageComponents";
import PageWrapper from "@/components/pages/pageWrapper";
import { TypeSet } from "@/components/typography/typography";
import { colorTheme } from "@/lib/data";
export default function Colors() {
  return (
    <PageWrapper>
      <PageTitle
        title="Colors"
        description="Different colors used in the design system"
      />
      <div className="flex flex-col gap-4">
        {colorTheme.map((colorGroup) => (
          <div key={colorGroup.name}>
            <TypeSet intent="subtitle2" as="h2" className="my-4">
              {colorGroup.name}
            </TypeSet>
            <div className="flex flex-wrap gap-4 p-4 border-double border-4 border-neutral-400">
              {colorGroup.colors.map((color) => (
                <div
                  key={color.name}
                  className="flex flex-col gap-1 items-center"
                >
                  <div
                    className="w-[50px] h-[50px] rounded-md"
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  ></div>
                  <div className="text-[14px] text-primary-600 flex flex-col items-center mt-2">
                    <span>{color.value}</span>
                    <span style={{ color: color.value }} className="font-bold">
                      {color.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
