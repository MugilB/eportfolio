import React from 'react'
import { EDUCATION } from '../constants'
import { FaChartBar, FaDownload } from 'react-icons/fa6'

const EducationSection = () => {
  return (
    <section className="py-8" id="education">
        <h2 className="mb-7 text-center text-3xl lg:text-4xl"> Education</h2>
        <div className="grid grid-cols-1 gap-10 mx-5 md:grid-cols-2 lg:grid-cols-3 ">

        {EDUCATION.map((edu, index) => (
            <div key={index} className="flex flex-col justify-between rounded-xl border border-stone-50/30 bg-white/10 p-4 transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:bg-white/20 hover:shadow-xl h-full">
                <h3 className="text-xl font-semibold mb-1">
                    {edu.degree}
                </h3>
                <p className="text-lg">{edu.institution}</p>
                <p className="text-sm text-stone-300 mb-6">[ {edu.duration} ]</p>
                <p className="mt-2">{edu.description}</p>

                <div className="mt-6 space-y-3">
                    <button className="relative w-full rounded-xl bg-white px-5 py-2 text-base font-semibold text-black shadow hover:bg-gray-200 transition-all duration-200">
                        <FaChartBar className="absolute left-4 top-1/2 -translate-y-1/2 text-lg" />
                        Percentage: {edu.percentage}
                    </button>

                    {/* <button className="w-full rounded-xl bg-green-500 px-5 py-2 text-base font-semibold text-white shadow-[0_0_10px_#22c55e] hover:bg-green-600 hover:shadow-[0_0_15px_#22c55e] transition-all duration-200">
                        Download Certificate
                    </button> */}

                    <a
                    href={edu.certificateFile}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full overflow-hidden rounded-xl border border-green-500 bg-transparent px-2 py-2 text-base font-semibold text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-[0_0_15px_#22c55e] inline-block text-center"
                    >
                        <span className="transition-all duration-100 group-hover:pr-6">
                            Download Certificate
                        </span>
                        <FaDownload className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-3" />
                    </a>

                </div>

            </div>
        ))}
        </div>

    </section>
  )
}

export default EducationSection
