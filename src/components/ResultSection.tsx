import Link from 'next/link';
import React, { FC } from 'react'

interface IProps {
    resultScore: number;
    questionLength:number;
    resultCorretAnswers:number;
    resultWrongAnswers:number;
}

const ResultSection:FC<IProps> = ({resultScore, questionLength, resultCorretAnswers, resultWrongAnswers}) => {
  return (
    <>
            <div className="bg-[#f8f8f8] p-4 mt-8 rounded text-black text-2xl font-normal">
              <div>Results</div>
              <div>Overall {(resultScore / 25) * 100}%</div>
              <p>
                Total Questions: <span>{questionLength}</span>{" "}
              </p>
              <p>
                Total Score: <span>{resultScore}</span>{" "}
              </p>
              <p>
                Correct Answers: <span>{resultCorretAnswers}</span>{" "}
              </p>
              <p>
                Wrong Answers: <span>{resultWrongAnswers}</span>{" "}
              </p>
            </div>
            <button className="w-full flex justify-center items-center mt-5 py-4 px-2 my-2 border border-stone-400">
              <Link href="/">Back to Home</Link>
            </button>
          </>
  )
}

export default ResultSection