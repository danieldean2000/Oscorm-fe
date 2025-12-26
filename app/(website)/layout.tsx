'use client';

import Header from "@/components/header";
import MeetingModal from "@/components/fix-meeting-form";

export default function WebsiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />

            <main className="flex flex-col">
                {children}
                <MeetingModal />

            </main>

            {/* Footer will go here */}
        </div>
    );
}
