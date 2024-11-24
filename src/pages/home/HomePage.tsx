import Introduction from "./Introduction";
import Projects from "./Projects";
// import Technologies from "./Technologies";





function HomePage() {
    return (
      <div className='sectionsContainers'>
        <Introduction/>
        <Projects/>
        {/* <Technologies/> */}
      </div>
    )
}


export default HomePage;