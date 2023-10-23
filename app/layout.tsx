
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>Hello</title>
      </head>
      <body><>I am in global layout</><br></br>{children}</body>
    </html>
  )
}
