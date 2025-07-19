import Title from "./Title";

const Project = ({ projects }) => {
  return (
    <div className="my-16 px-8 lg:px-0">
      <Title title="Projects" />
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div className="flex flex-col gap-4 w-full h-fit" key={index}>
            <img
              className="w-full h-[300px] rounded-2xl overflow-hidden object-center shadow-xl border border-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-500"
              src={project.image}
              alt="Forever"
            />
            <div className="flex gap-8 items-center justify-start">
              <p className="text-3xl font-semibold">{project.title}</p>
              <a
                target="_blank"
                href={project.link}
                className="text-3xl font-medium text-primary-color hover:scale-110 transition-all duration-300"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a
                target="_blank"
                href={project.github}
                className="text-3xl font-medium text-primary-color hover:scale-110 transition-all duration-300"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
