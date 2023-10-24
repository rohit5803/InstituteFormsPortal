
export default function DashboardLayout({
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
        <h1>Dashboard</h1>
        <br></br>
        {children}
      </body>
    </html>
  )
}
