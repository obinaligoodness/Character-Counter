import React from "react"
const Card = ({textAnalysis}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 text-black">
            <div className="bg-[#d3a0f9] h-32 rounded-lg py-6 px-4 flex flex-col gap-2">
                <div className="text-5xl font-bold">{textAnalysis.totalCharacters}</div>
                <div className="text-xl font-normal">Total Characters</div>
            </div>
            <div className="bg-[#ff9f00] h-32 rounded-lg py-6 px-4 flex flex-col gap-2">
                <div className="text-5xl font-bold">{textAnalysis.totalWords}</div>
                <div className="text-xl font-normal">Word Count</div>
            </div>
            <div className="bg-[#ff8159] h-32 rounded-lg py-6 px-4 flex flex-col gap-2"><div className="text-5xl font-bold">{textAnalysis.totalSentences}</div>
                <div className="text-xl font-normal">Sentence Count</div></div>
        </div>
    )
}
export default Card


