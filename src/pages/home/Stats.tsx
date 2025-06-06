

function Stats() {
    return (
        <>
            <div className="w-full px-4 py-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-gray-500 ">
                    <li className="flex flex-col items-start gap-4 p-4">
                        <h1 className="text-gray-600 text-4xl">80%</h1>
                        <span className="font-bold text-sm w-full sm:w-3/4 line-clamp-2 text-gray-400">Frontend Development</span>
                    </li>

                    <li className="flex flex-col items-start gap-4 border-t border-gray-500 sm:border-t-0 sm:border-l p-4">
                        <h1 className="text-gray-600 text-4xl">85%</h1>
                        <span className="font-bold text-sm w-full sm:w-3/4 line-clamp-2  text-gray-400">Backend Development</span>
                    </li>

                    <li className="flex flex-col items-start gap-4 border-t md:border-t-0 border-gray-500  md:border-l p-4">
                        <h1 className="text-gray-600 text-4xl">80%</h1>
                        <span className="font-bold text-sm w-full sm:w-3/4 line-clamp-2 text-gray-400">Database Design & Management</span>
                    </li>

                    <li className="flex flex-col items-start gap-4 border-t md:border-t-0 p-4 border-gray-500 ">
                        <h1 className="text-gray-600 text-4xl">75%</h1>
                        <span className="font-bold text-sm w-full sm:w-3/4 line-clamp-2">API Design & Integration</span>
                    </li>

                    <li className="flex flex-col items-start gap-4 border-t sm:border-l p-4 border-gray-500 ">
                        <h1 className="text-gray-600 text-4xl">88%</h1>
                        <span className="font-bold text-sm w-full sm:w-3/4 line-clamp-2">Debugging & Problem Solving</span>
                    </li>

                    <li className="flex flex-col items-start gap-4 border-t sm:border-l p-4 border-gray-500 ">
                        <h1 className="text-gray-600 text-4xl">70%</h1>
                        <span className="font-bold text-sm w-full sm:w-3/4 line-clamp-2">Deployment & DevOps Basics</span>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Stats