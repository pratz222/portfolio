// @flow strict

import { skillsData } from "@/utils/data/skills";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white px-4 py-1.5 text-base rounded-md">
            Skills
          </span>
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Static skills grid */}
      <div className="w-full my-12 px-4">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {skillsData.map((skill, id) => (
            <div
              key={id}
              className="flex items-center justify-center rounded-md border border-[#1f223c] bg-[#11152c] px-3 py-2 text-center transition-all duration-300 hover:border-violet-500"
            >
              <p className="text-xs sm:text-sm text-gray-200 whitespace-nowrap">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
