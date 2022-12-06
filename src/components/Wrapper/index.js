import Footer from "../Footer";
import Header from "../Header"
import React from 'react';
import { AuthProvider } from './../../context/Auth';
import ScrollToTop from "../ScrollToTop";

export function Wrapper (children) {
    return (
        <AuthProvider>
            <ScrollToTop>
                <Header />
                {children}
                <Footer />
            </ScrollToTop>
        </AuthProvider>)
} 