import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import ItemList from '../Components/ItemList';
import CarouselSlider from '../Components/CarouselSlider';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <div>
        <NavigationBar/>
        <CarouselSlider/>
        <ItemList/>
        <Footer/>
    </div>
  )
}

export default Home