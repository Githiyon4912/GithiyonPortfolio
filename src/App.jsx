import { Header,Hero,About,Skills,Projects,Contact,Footer} from "./components"

function App() {
  return <>
  <div className="w-full bg-gray-900">
    <Header/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
  </>
}

export default App