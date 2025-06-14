import "../css/customStyle.css";
import AnimatedContent from "../reacbits/AnimatedContent/AnimatedContent";

function ProjectBuilder(props) {
  return (
    <div className="flex flex-wrap justify-center m-auto w-full px-3 gap-10">
      {props.projects.map((project, index) => (
        <AnimatedContent
          key={index}
          distance={100}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="card-custom w-96 shadow-xl flex flex-col h-full">
            <figure className="flex-shrink-0">
              <img src={project.img} alt="Project" className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body flex-grow flex flex-col">
              <h2 className="card-title flex-shrink-0">{project.name}</h2>
              <p className="text-justify flex-grow">{project.description}</p>
              <div className="card-actions justify-end flex-shrink-0 mt-4"></div>
            </div>
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
}

export default ProjectBuilder;