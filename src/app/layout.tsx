import "./globals.css"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import ThemeProvider from "../components/themeProvider/ThemeProvider"

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--font-fira-code",
})

export const metadata: Metadata = {
  title: "Business Management App",
  description: "Discover the best business management app",
  creator: "Nelson Rosales",
  keywords: ["business", "management", "app", "nextjs"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <ThemeProvider>
          <main className="font-normal">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
