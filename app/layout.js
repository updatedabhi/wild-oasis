import Navigation from "./components/Navigation";

export const metadata = {
  title: "The wild oasis"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by The wild Oasis</footer>
      </body>
    </html>
  );
}
