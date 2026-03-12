import { 
  SiPython, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiTensorflow, 
  SiMysql, 
  SiStreamlit, 
  SiKeras, 
  SiJupyter 
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { FaAws, FaChartBar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";

const techStackRow1 = [
  { name: "Python", Icon: SiPython },
  { name: "SQL", Icon: DiDatabase },
  { name: "Pandas", Icon: SiPandas },
  { name: "NumPy", Icon: SiNumpy },
  { name: "Scikit-learn", Icon: SiScikitlearn },
  { name: "TensorFlow", Icon: SiTensorflow },
];

const techStackRow2 = [
  { name: "AWS", Icon: FaAws },
  { name: "MySQL", Icon: SiMysql },
  { name: "Streamlit", Icon: SiStreamlit },
  { name: "Keras", Icon: SiKeras },
  { name: "PowerBI", Icon: FaChartBar },
  { name: "Jupyter", Icon: SiJupyter }
];

const TechCard = ({ tech }: { tech: { name: string; Icon: any } }) => (
  <div className="tech-card">
    <tech.Icon className="tech-icon" />
    <span className="tech-name">{tech.name}</span>
  </div>
);

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <h2>My Techstack</h2>
      
      <div className="tech-marquee-container">
        <Marquee 
          gradient={true} 
          gradientColor="#050810" 
          gradientWidth={150} 
          speed={45} 
          pauseOnHover={true}
          autoFill={true}
        >
          {techStackRow1.map((tech, i) => (
            <TechCard key={`row1-${i}`} tech={tech} />
          ))}
        </Marquee>
        
        <Marquee 
          gradient={true} 
          gradientColor="#050810" 
          gradientWidth={150} 
          speed={35} 
          pauseOnHover={true} 
          direction="right"
          autoFill={true}
        >
          {techStackRow2.map((tech, i) => (
            <TechCard key={`row2-${i}`} tech={tech} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
