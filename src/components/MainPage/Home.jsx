import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"

class Home extends React.Component  {

render() {
  return (
    <>
      <section className='home'>
        
        <div className='container d_flex'>
        <Categories />
        <SliderHome />
      </div>
        
        
      </section>
    </>
  );
}
}
  


export default Home