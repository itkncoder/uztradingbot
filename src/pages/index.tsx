import Footer from "@/components/footer/footer"
import MainAbout from "@/components/main-about/main_about"
import MainFeatures from "@/components/main-features/main_features"
import Main from "@/components/main/main"
import Navbar from "@/components/navbar/navbar"
import Pay from "@/components/pay/pay"
import Quetions from "@/components/quetions/quetions"
import VideoDemo from "@/components/video-demo/video_demo"
import Layout from "@/layout/layout"

const Index = () => {
    return (
        <Layout>
            <header>
                <Navbar/>
            </header>
            <main>
                <Main/>
                <MainAbout/>
                <MainFeatures/>
                <VideoDemo/>
                <Pay/>
                <Quetions/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </Layout>
    )
}

export default Index