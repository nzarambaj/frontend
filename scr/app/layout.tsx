import DashboardLayout from "@/layouts/DashboardLayout";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}