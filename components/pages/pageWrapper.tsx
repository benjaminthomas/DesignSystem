type PageWrapperProps = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <section className="flex-1 p-10 overflow-y-auto">
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
