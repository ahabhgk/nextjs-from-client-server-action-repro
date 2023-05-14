import { getServerState } from './_serverState';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{getServerState()}</div>
        {children}
      </body>
    </html>
  );
}
