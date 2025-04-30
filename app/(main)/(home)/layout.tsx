import { Header } from "@/app/(main)/(home)/header"
import { Footer } from "@/app/(main)/(home)/footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4 md:px-6 lg:px-8 pt-9 md:pt-12 lg:pt-16">{children}</main>

      <Footer />
    </>
  )
}
