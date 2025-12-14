export const metadata = {
  title: "年学语研究院",
  description: "年学语研究院官网",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
