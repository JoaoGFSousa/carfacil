export const metadata = {
    title: "Login",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    background:
                        "linear-gradient(90deg, rgba(98,113,150,1) 0%, rgba(137,145,165,1) 49%)",
                }}
            >
                {children}
            </body>
        </html>
    );
}
