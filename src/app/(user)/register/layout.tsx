import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                    padding: "40px"
                }}
            ><ToastContainer
                    position="top-center"
                    theme="colored"
                    autoClose={8000}
                    hideProgressBar
                />
                {children}
            </body>
        </html>
    );
}
