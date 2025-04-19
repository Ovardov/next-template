import Link from "next/link"
import { Logo } from "@/components/logo"

export const Footer = () => {
  const links = [
    {
      label: "LINKS",
      items: [
        { href: "#pricing", label: "Pricing" },
        { href: "#faq", label: "FAQ" },
        { href: "#testimonials", label: "Testimonials" },
      ],
    },
    {
      label: "LEGAL",
      items: [
        { href: "/policy/privacy", label: "Privacy Policy" },
        { href: "/policy/terms", label: "Terms of Service" },
      ],
    },
  ]

  return (
    <footer className="border-t mt-auto">
      <section className="container mx-auto py-4 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row items-stretch justify-between gap-12">
          <div>
            <Logo />

            <p className="mt-4 text-sm text-muted-foreground">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>

          {links.map((group) => (
            <nav className="flex flex-col gap-2 items-start" key={group.label}>
              <h3 className="font-semibold mb-2">{group.label}</h3>

              {group.items.map((item) => (
                <Link href={item.href} prefetch={false} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </section>
    </footer>
  )
}
