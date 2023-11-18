// Layout.tsx
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    pageProp?: string; // Standard prop for all pages
}

const Layout = ({ children, pageProp }: LayoutProps) => (
    <Box p={8}>
        {children}
        {/* Use pageProp somewhere in this component */}
    </Box>
);

export default Layout;