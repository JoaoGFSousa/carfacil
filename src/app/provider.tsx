"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import theme from "@/components/Style/Theme";
import AuthProvider from "@/components/Context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductProvider from "@/components/Context/ProductContext";

export const cache = createCache({ key: "css", prepend: true });
// para usar o query client
const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <CacheProvider value={cache}>
            <ChakraProvider>
                <ThemeProvider theme={theme}>
                    <QueryClientProvider client={queryClient}>
                        <AuthProvider>
                            <ProductProvider>
                                {children}
                            </ProductProvider>
                        </AuthProvider>
                    </QueryClientProvider>
                </ThemeProvider>
            </ChakraProvider>
        </CacheProvider>
    );
};

export default Providers;