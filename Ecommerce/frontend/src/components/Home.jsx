import React, { useState } from 'react'
import HeroSection from './Header/HeroSection';
import SectionTwo from './Header/SectionTwo';
import SectionThree from './Header/SectionThree';
import Layout from './common/Layout';
import ChatLauncher from '../chatbot/ChatLauncher';
import ChatModal from '../chatbot/ChatModal';
function Home() {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <>
            <Layout>
                <HeroSection />
                {/* Floating Chat Icon */}
                <ChatLauncher onClick={() => setChatOpen(true)} />

                {/* Modal with AI Chat */}
                <ChatModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
                <SectionTwo />
                <SectionThree />
            </Layout>
        </>
    )
}
export default Home