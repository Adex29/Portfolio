import '../css/customStyle.css';

function ProjectBuilder(props){
    return(
        <div className="flex flex-wrap justify-center m-auto w-full">
            {props.projects.map((project) => (
                <div className="card-custom w-96 shadow-xl m-5">
                    <figure>
                        <img src={project.img} alt="Project" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{project.name}</h2>
                        <p className="text-justify">{project.description}</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectBuilder