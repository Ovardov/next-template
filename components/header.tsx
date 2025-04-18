import { MenuIcon, ShirtIcon } from "lucide-react"
import Link from "next/link"
import { SignedOut, SignInButton } from "@clerk/nextjs"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"

export const Header = () => {
  const pages = [
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#testimonials", label: "Testimonials" },
  ]

  return (
    <header className="container mx-auto py-4 px-4 md:px-6 lg:px-8">
      {/* Desktop Menu */}
      <section className="hidden lg:flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6">
        <Logo />

        <NavigationMenu className="my-auto">
          <NavigationMenuList>
            {pages.map((page) => (
              <NavigationMenuLink asChild key={page.href}>
                <Link
                  href={page.href}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                >
                  {page.label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-2">
          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="hover:cursor-pointer">
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </section>

      {/* Mobile Menu */}
      <section className="flex items-center justify-between w-full lg:hidden">
        <Logo />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent className="overflow-y-auto w-full" side="right">
            <SheetHeader className="pt-4">
              <SheetTitle>
                <Link href="#" prefetch={false}>
                  <ShirtIcon className="h-6 w-6" />
                  <span className="sr-only">ShadCN</span>
                </Link>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-6 p-4">
              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex w-full items-center text-lg font-semibold"
                  prefetch={false}
                >
                  {page.label}
                </Link>
              ))}

              <div className="flex flex-col gap-3">
                <SignedOut>
                  <SignInButton>
                    <Button variant="outline">Sign in</Button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </header>
  )
}
