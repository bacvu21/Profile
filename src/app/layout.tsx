export const metadata = {
  title: 'My Resume',
  description: 'A personal portfolio showcasing my work and skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
