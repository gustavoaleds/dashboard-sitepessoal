import React from "react";
import Footer from "./Footer/Footer";
import { Sidebar } from "./Sidebar";
interface LayoutProps {
children: React.ReactNode;}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <div>
            <Sidebar/>
            {children}
        </div>
    );
};

export default Layout;