import { PrimaryNavigation } from "../../navigations/navigation";

type PageHeaderProps = {
  children: React.ReactNode;
  styles?: string;
};

export function PageHeader({ children, styles }: PageHeaderProps) {
  return (
    <header className={`flex flex-col gap-2 ${styles || ""}`}>
      {children}
    </header>
  );
}

type HeaderPrimaryProps = {};

export function HeaderPrimary({}: HeaderPrimaryProps) {
  return (
    <header className="flex justify-between items-center px-14 bg-white border-b border-gray-200">
      <PrimaryNavigation />
    </header>
  );
}
