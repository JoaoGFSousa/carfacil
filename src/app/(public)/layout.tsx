import Header from "@/components/Header"
import Providers from "../provider"
import StyledComponentsRegistry from "../registry"
import { GlobalStyle } from "@chakra-ui/react"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyle />
            <Header />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}