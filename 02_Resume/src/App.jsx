//  import { fontStyle } from "html2canvas/dist/types/css/property-descriptors/font-style"

import React, {useRef} from "react"
import jsPDF  from "jspdf"  
import html2canvas from "html2canvas"
// import { textAlign } from "html2canvas/dist/types/css/property-descriptors/text-align"


function App() {
  const resumeRef = useRef()

  const downLoadPDF =  async () => {
    const input = resumeRef.current

    // html2canvas(input).then( async (canvas) => {
      const canvas = await html2canvas(input, {scale: 2, useCORS: true})
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")
      const imgWidth = 210
      const pageHeight = 297
      const imgHeight = (canvas.height*imgWidth)/ canvas.width
      let heightLeft = imgHeight
      let position = 0

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      heightLeft -= pageHeight

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
           heightLeft -= pageHeight;
        }

      pdf.save("resume.pdf")

    // })
  }

  return (
    <div className="container" style={{width: "794px", minHeight: "1123px", padding: "60px ", margin: "20px auto", background: "white", boxShadow: "0 0 10px #ccc"}}>
      <div className="resume" ref={resumeRef}>
        <h1 style={{textAlign: "center", color: "darkblue", fontSize: "40px"}}>Hemali Kalsariya</h1>
        <p style={{textAlign:"center", fontSize:"20px", borderBottom: "5px solid darkblue", paddingBottom: "5px"}}>
          +91 9274916821 ||     hemukalsariya7705@gmail.com
        </p>
        <br />
        <h2 style={{color: "darkblue", fontSize: "30px", marginBottom: "10px", borderBottom: "3px solid darkblue", paddingBottom: "5px"}} >
          Career Objective
        </h2>
        <p style={{fontSize: "18px", marginBottom: "20px"}}> 
          I am a highly motivated and skilled individual seeking a challenging position in the field of software development. With a strong foundation in programming languages and a passion for problem-solving, I aim to contribute my skills and knowledge to create innovative solutions that drive business success. I am eager to learn and grow in a dynamic work environment, where I can collaborate with talented professionals and make a meaningful impact on projects.
        </p>
        <br />
        <h2 style={{color: "darkblue", fontSize: "30px", marginBottom: "10px", borderBottom: "3px solid darkblue", paddingBottom: "5px"}} >
          Skills
        </h2>
        <ul style={{fontSize: "18px", marginBottom: "20px"}}>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CCC</li>
          <li>BCC</li>
        </ul>
        <br />
        <h2 style={{color: "darkblue", fontSize: "30px", marginBottom: "10px", borderBottom: "3px solid darkblue", paddingBottom: "5px"}} >
          Education
        </h2>
        <p style={{fontSize: "18px", marginBottom: "20px"}}>
         <span style={{fontStyle:"bold", fontWeight: "bold"}}>Bachelor of Commerce (B.Com) - 2025 </span> |   Saurabh arts and commerce college, Visanvel, Gadu, Junagdh.
        </p>
      <br />

        <h2 style={{color: "darkblue", fontSize: "30px", marginBottom: "10px", borderBottom: "3px solid darkblue", paddingBottom: "5px"}} >
          Experience
        </h2>
        <p style={{fontSize: "18px", marginBottom: "20px"}}>
         I am a fresher with no professional experience yet, but I am eager to apply my skills and knowledge in a real-world setting. I am a quick learner and a dedicated team player, ready to contribute to projects and gain valuable experience in the field of software development.
        </p>
        <br />

        <h2 style={{color: "darkblue", fontSize: "30px", marginBottom: "10px", borderBottom: "3px solid darkblue", paddingBottom: "5px"}} >
          Projects
        </h2>
        <p style={{fontSize: "18px", marginBottom: "20px"}}>
         I have worked on several projects during my academic journey, including a personal portfolio website built using HTML and JavaScript. Additionally, I have completed a React-based to-do list application that allows users to manage their tasks efficiently. 
        </p>
        <br />
        <p style={{fontSize: "18px", marginBottom: "20px"}}>
          I am also currently working on a Node.js project that involves creating a simple RESTful API for a blog application. These projects have helped me develop my coding skills and gain practical experience in software development.
        </p>
        
          <h3 style={{fontSize:"20px", marginBottom:"25px"}}>Resume Builder App</h3>
          <p style={{fontSize: "18px", marginBottom: "20px"}}> 
            <b>Technology:</b> React, JavaScript, HTML
         </p> 
          <p style={{fontSize: "18px", marginBottom: "20px"}}>  
            <b>Description:</b> Developed a resume builder application with PDF download feature.
          </p>

        <br />

        <h2 style={{color: "darkblue", fontSize: "30px", marginBottom: "10px", borderBottom: "2px solid darkblue", paddingBottom: "5px"}} >
          Personal Attributes & Professional Philosophy
        </h2>
        <p style={{fontSize: "18px", marginBottom: "20px"}}>
            <b>Key Attributes:</b> Strong problem-solving skills, attention to detail, adaptability, and a commitment to excellence.
        </p>
        <p style={{fontSize: "18px", marginBottom: "20px"}}>
            <b>Professional Philosophy:</b>  Foster innovation-first mindset, Encourage calculated risk-taking, Champion continuous learning
            and experimentation

        </p>
        <p style={{fontSize: "18px", marginBottom: "20px"}}>
          <b>Languages:</b>
        </p>
        <ul style={{fontSize: "18px", marginBottom: "20px"}}>
          <li>English (Intermediate)</li>
          <li>Hindi (Fluent)</li>
          <li>Gujarati (Native)</li>
        </ul>

        {/* <button onClick={downLoadPDF} className="btn" style={{padding: "10px 20px", marginTop: "20px", fontSize: "16px", backgroundColor: "darkblue", color: "white", border: "none", borderRadius: "10px", cursor: "pointer"}}>
          Download PDF
        </button> */}

      </div>
      </div>
  )
}


export default App




