export default function LoginLayout({ children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>Login</title>
      </head>
      <body>
        <div>
          <h1>Login</h1>
          {children}
        </div>
      </body>
    </html>
  )
}
