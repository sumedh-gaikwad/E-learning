import React from 'react'
import Navbar from './components/Navbar'
import NavbarBanner from './components/NavbarBanner'
import Hero from './components/Hero'
import NumberCounter from './components/NumberCounter'
import WhyChooseUs from './components/WhyChooseUs'
import Img1 from "./assets/banner1.png";
import Img2 from "./assets/banner2.png";
import Banner from './components/Banner'
import SubjectCard from './components/SubjectCard'
import Footer from './components/Footer'

const BannerData = {
  image:Img1,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Personalized Professional Online Tutor on Your Schedule",
  subtitle:
  "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link:"#",
};

const BannerData2 = {
  image:Img2,
  tag:"CUSTOMIZE WITH YOUR SCHEDULE",
  title:"Talented and Qualified Tutors to Serve You for Help",
  subtitle:
  "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link:"#",
};


const App = () => {
  return (
    <main className='overflow-hidden'>
        <Navbar/>
        <NavbarBanner/>
        <Hero/>
        <NumberCounter/>
        <WhyChooseUs/>
        <Banner { ... BannerData} />
        <Banner { ... BannerData2} reverse={true} />
        <SubjectCard/>
        <Footer/>
    </main>
  )
}

export default App