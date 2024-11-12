import { ReactNode } from "react";
import { Page } from "./ui/Page";
import "./index.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>InsightGrid</title>
      </head>
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
