import type { Metadata } from "next"
import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}