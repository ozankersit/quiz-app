import React, { FC } from 'react'

interface IProps {
    checked: boolean;
    nextQuestion:  () => void;
    activeQuestion: number;
    questionLength: number
}

const Buttons:FC<IProps> = ({checked, nextQuestion, activeQuestion, questionLength}) => {
  return (
    <div>
        {checked ? (
                <button
                  onClick={nextQuestion}
                  className="w-full flex justify-center items-center mt-5 py-4 px-2 my-2 border border-stone-400"
                >
                  <span className="text-black">
                    {activeQuestion === questionLength - 1 ? "Finish" : "Next"}
                  </span>
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="w-full flex justify-center items-center mt-5 py-4 px-2 my-2 border border-stone-400"
                  disabled
                >
                  <span className="text-stone-400">
                    {activeQuestion === questionLength - 1 ? "Finish" : "Next"}
                  </span>
                </button>
              )}
    </div>
  )
}

export default Buttons