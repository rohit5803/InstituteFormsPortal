export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>Dashboard</title>
      </head>
      <body>
        <h1>Login</h1>
        <br></br>
        {children}
        </body>
    </html>
  )
}
