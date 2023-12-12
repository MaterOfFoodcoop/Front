import Provider from "ui/components/Provider";
import StyledComponentsRegistry from "admin/lib/registry";
import type { Metadata } from "next";
import { theme } from "ui/styles";

export const metadata = {
  title: "와라매점 어드민",
  description: "와라매점 어드민 페이지",
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
