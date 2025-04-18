import { GalleryVerticalEnd } from "lucide-react"
import Image from "next/image"

const AuthLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 absolute inset-0 top-0 right-0 left-0 bottom-0 z-10">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex justify-center items-center w-full lg:max-w-xs">{children}</div>
        </div>
      </div>

      <div className="relative hidden bg-muted lg:block">
        <Image
          width={1200}
          height={1200}
          src="/authentication-placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default AuthLayout
