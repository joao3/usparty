import Footer from "../Footer";
import Header from "../Header"
import React from 'react';
import { AuthProvider } from './../../context/Auth';

export function Wrapper (children) {
    return (
        <AuthProvider>
            <Header />
            {children}
            <Footer />
        </AuthProvider>)
} 