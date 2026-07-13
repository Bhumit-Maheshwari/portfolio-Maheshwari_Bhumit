import About from "../components/About";
import Skills from "../components/Skills";

function Home({ skillList, college }) {
  return (
    <>
      <About college={college} />
      <Skills skillList={skillList} />
    </>
  );
}

export default Home;
