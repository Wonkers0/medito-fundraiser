import type { Metadata } from "next"
import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

export const metadata: Metadata = {
  title: "Medito Fundraiser",
  description:
    "Medito Foundation is a nonprofit dedicated to improving mental wellbeing and helping people cope better with depression, stress, anxiety, and any other negative states of mind.",
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
