export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <footer className="py-10 flex justify-center items-center">
        Test of layout and routing 2
      </footer>
      {children}
    </>
  );
}
