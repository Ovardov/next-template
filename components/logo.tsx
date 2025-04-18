import { ShirtIcon } from "lucide-react"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="#" prefetch={false}>
      <ShirtIcon className="h-6 w-6" />
      <span className="sr-only">ShadCN</span>
    </Link>
  )
}
