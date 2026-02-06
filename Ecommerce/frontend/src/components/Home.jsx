import React from 'react'
import HeroSection from './Header/HeroSection';
import SectionTwo from './Header/SectionTwo';
import SectionThree from './Header/SectionThree';
import Layout from './common/Layout';
function Home() {
    return (
        <>
            <Layout>
                <HeroSection />
                <SectionTwo />
                <SectionThree />
            </Layout>
        </>
    )
}
export default Home