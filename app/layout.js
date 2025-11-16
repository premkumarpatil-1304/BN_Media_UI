import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Layout({ children }) {
    return (
        <html>
            <body>
                {children}
                <WhatsAppFloat />
            </body>
        </html>
    );
}
