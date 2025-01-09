
import Navbar from "./component/NavBar/navbar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
