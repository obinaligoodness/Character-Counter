import React from "react";

const ProgressBar = ({ obj }) => {
    return (
        <div  className="bg-gray-800 rounded-full h-4" style={{ width: '100%' }}>
          <div className="bg-purple-500 h-4 rounded-full flex text-center"
            style={{
              width: `${obj.percentage}%`,
              lineHeight: '30px',
              color: 'white',
            }}
          >
          </div>
        </div>
      );
};

export default ProgressBar;

