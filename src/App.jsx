import './index.css';
import React,{ useState }  from 'react';
import Header from './Header.jsx'
import TextArea from './TextArea.jsx';
import Card from './Card.jsx';
import LetterDensityScore from './LetterDensityScore.jsx';


const App = () => {

  const [textAnalysis, setTextAnalysis] = useState({
    totalCharacters: 0,
    totalWords: 0,
    totalSentences: 0,
    readingTime: "0 min",
    letterDensity:[]
});

  return (
    <div className="min-h-screen lg:px-24 text-black dark:text-[#f2f3f8]  bg-white dark:bg-[#13151b]">
      <Header />
      <div className='flex justify-center items-center  text-4xl md:text-5xl font-bold mt-4 text-center w-full mb-6'>
        Analyze your text in real-time
      </div>
      <TextArea onTextChange={setTextAnalysis} />
      <Card textAnalysis={textAnalysis} />
      <LetterDensityScore letterDensityArray={textAnalysis?.letterDensity}/>
    </div>

  );
};

export default App;
