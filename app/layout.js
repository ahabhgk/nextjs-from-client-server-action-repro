import { getServerState } from './_serverState';

export default function RootLayout({ children }) {
  const serverState = getServerState();
  console.log("In RootLayout:", serverState)
  return (
    <html lang="en">
      <body>
        <div>{serverState}</div>
        {children}
      </body>
    </html>
  );
}
