export default function SectionContainer({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <section id={id} className="container mx-auto px-4 lg:px-32 py-16 lg:py-32 flex flex-col gap-16">
      {children}
    </section>
  );
}
