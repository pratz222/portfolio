// @flow strict
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ project }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-65 lg:h-65 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          height={1820}
          width={1920}
          alt={project.title}
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <Link target='_blank' href={project.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {project.title}
          </p>
        </Link>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
