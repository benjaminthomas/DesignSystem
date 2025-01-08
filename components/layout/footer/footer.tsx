import { TypeSet } from "@/components/typography/typography";

type Props = {};

export function FooterPrimary({}: Props) {
    return (
        <footer className="flex flex-col items-center py-4 bg-primary-900">
            <TypeSet as="span" intent="body2_normal" className="text-white">
                &copy; {new Date().getFullYear()}
                {""} Benjamin. All have no rights reserved.
            </TypeSet>
        </footer>
    );
}
