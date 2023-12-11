import Provider from "ui/components/Provider";
import StyledComponentsRegistry from "client/lib/registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "와라! 매점",
  description: "와라! 매점",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Provider>{children}</Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
