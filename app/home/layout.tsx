export default function LoginLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>Home</title>
      </head>
      <body>
        <div>
          <h1>Home</h1>
          {children}
        </div>
      </body>
    </html>
  )
}
