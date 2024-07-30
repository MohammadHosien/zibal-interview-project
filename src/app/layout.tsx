import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import AntdStyledComponentsRegistry from "@/components/Providers/AntdStyledComponentsRegistry";
import { ConfigProvider } from "antd";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zibal interview project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ToastContainer position="bottom-right" />
        <AntdStyledComponentsRegistry>
          <ConfigProvider
          direction="rtl"
            theme={{
              token: {
                colorPrimary: "#3A3ADB",
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdStyledComponentsRegistry>
      </body>
    </html>
  );
}
