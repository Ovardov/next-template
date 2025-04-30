export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="container mx-auto px-4 md:px-6 lg:px-8 pt-9 md:pt-12 lg:pt-16">{children}</main>
    </>
  )
}
