import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";


function App() {

  const sectionData=[
    {
        title: "Skills",
        des: "A versatile and seasoned Full Stack Developer with over 5 years of comprehensive experience in software development. Proficient in MERN MongoDB, Express. js, React js, Node js) Stack and equipped with knowledge of Python Django and Ruby on Rails. Demonstrates robust understanding of data structures, underpinning a firm foundation in problem-solving. Additionally skilled in artificial intelligence and machine learning, reflecting a broad understanding of current and emerging technologies. Known for writing clean, maintainable code and ability to design, develop, and deploy complex web applications. Excels in dynamic, high-pressure environments, leveraging a solution-oriented mindset and team collaboration. Strives to create user-centric solutions that drive efficiency and improve the overall user experience.",
    },

    {
        title: "Qualification",
        des: "A versatile and seasoned Full Stack Developer with over 5 years of comprehensive experience in software development. Proficient in MERN MongoDB, Express. js, React js, Node js) Stack and equipped with knowledge of Python Django and Ruby on Rails. Demonstrates robust understanding of data structures, underpinning a firm foundation in problem-solving. Additionally skilled in artificial intelligence and machine learning, reflecting a broad understanding of current and emerging technologies. Known for writing clean, maintainable code and ability to design, develop, and deploy complex web applications. Excels in dynamic, high-pressure environments, leveraging a solution-oriented mindset and team collaboration. Strives to create user-centric solutions that drive efficiency and improve the overall user experience."
    },

    {
        title:"Projects",
        des:"A versatile and seasoned Full Stack Developer with over 5 years of comprehensive experience in software development. Proficient in MERN MongoDB, Express. js, React js, Node js) Stack and equipped with knowledge of Python Django and Ruby on Rails. Demonstrates robust understanding of data structures, underpinning a firm foundation in problem-solving. Additionally skilled in artificial intelligence and machine learning, reflecting a broad understanding of current and emerging technologies. Known for writing clean, maintainable code and ability to design, develop, and deploy complex web applications. Excels in dynamic, high-pressure environments, leveraging a solution-oriented mindset and team collaboration. Strives to create user-centric solutions that drive efficiency and improve the overall user experience."
    },
]

  return (
    <div className="App">
      <Navbar/>
      <About/>
      {
        sectionData.map((item)=>(
          <Section title= {item.title} des= {item.des} ></Section>
        ))
      }
    </div>
  );
}

export default App;
