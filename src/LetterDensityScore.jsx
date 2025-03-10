import React from "react";
import ProgressBar from "./ProgressiveBar";
import { useState } from "react";

const LetterDensityScore = ({ letterDensityArray }) => {
    const [showAll, setShowAll] = useState(false);
    const displayedLetters = showAll ? letterDensityArray : letterDensityArray.slice(0, 5);
    return (
        <div className="px-2 mt-4">
            <div className="text-2xl font-medium mb-2">Letter Density</div>
            {letterDensityArray.length === 0 ? (
                <div className="mb-4">No character found. Start typing to see letter density</div>
            ) : (
                <div>
                    {displayedLetters.map((obj, index) => (
                        <div key={index} className="mb-2">
                            <div className="flex items-center space-x-2">
                                <div className="text-lg font-medium w-6">{obj.letter.toUpperCase()}</div>
                                <ProgressBar obj={obj} />
                                <div className="text-sm w-12 text-right">{obj.percentage}%</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {letterDensityArray.length > 5 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className=" text-xl mt-4 mb-4 cursor-pointer focus:outline-none"
                >
                    {showAll ? "See Less" : "See More"}
                </button>
            )}
        </div>
    );
};

export default LetterDensityScore;
