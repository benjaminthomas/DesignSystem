import { VariantProps, cva } from "class-variance-authority";
import { typographyStyles } from "@/styles";
import React, { useMemo } from "react";

const intents = [
  "h1",
  "h2",
  "h3",
  "h4",
  "subtitle1",
  "subtitle2",
  "body1_semibold",
  "body1_normal",
  "body2_semibold",
  "body2_normal",
] satisfies TypographyVariants["intent"][];

export default function TypographyShowcase() {
  const SampleText = "commodo sed egestas egestas fringilla";
  return (
    <div className="flex flex-col gap-4">
      {intents.map((intent) => {
        // Determine the tag to use based on the intent
        const ComponentTag = intent.startsWith("h") ? intent : "p";

        return (
          <React.Fragment key={intent}>
            <TypeSet
              intent="subtitle2"
              as="h2"
              className="text-primary-500 my-4"
            >
              Typeset: {intent}
            </TypeSet>
            <TypeSet
              as={ComponentTag as keyof JSX.IntrinsicElements}
              intent={intent}
              className="p-4 border-double border-4 border-neutral-400"
            >
              {SampleText}
            </TypeSet>
          </React.Fragment>
        );
      })}
    </div>
  );
}

// Variants using cva.
const typographyVariants = cva(typographyStyles.base, {
  variants: {
    intent: {
      h1: typographyStyles.h1,
      h2: typographyStyles.h2,
      h3: typographyStyles.h3,
      h4: typographyStyles.h4,
      subtitle1: typographyStyles.subtitle1,
      subtitle2: typographyStyles.subtitle2,
      body1_semibold: typographyStyles.body1_semibold,
      body1_normal: typographyStyles.body1_normal,
      body2_semibold: typographyStyles.body2_semibold,
      body2_normal: typographyStyles.body2_normal,
    },
  },
  defaultVariants: {
    intent: "body1_normal",
  },
});

// Defining the typography variants to mathc the CVA variants
type TypographyVariants = VariantProps<typeof typographyVariants>;

// Props for the Typography component including the variant props.
export type TypographyProps = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}> &
  TypographyVariants;

// Exporting the TypeSet component.
export const TypeSet: React.FC<TypographyProps> = ({
  children,
  as: Component = "p",
  intent = "body1_normal",
  className: additionalClassName,
  ...variantProps
}) => {
  // Using the cva function to get the className string.
  const className = useMemo(() => {
    return `${typographyVariants({ intent, ...variantProps })} ${
      additionalClassName || ""
    }`.trim();
  }, [intent, variantProps, additionalClassName]);

  // Render the component with the computed className and the correct tag.
  return <Component className={className}>{children}</Component>;
};
