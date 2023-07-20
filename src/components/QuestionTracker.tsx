import React, { FC } from 'react'

interface IProps {
    activeQuestion: number;
    questionLength: number;
}

const QuestionTracker:FC<IProps> = ({activeQuestion,questionLength}) => {
  return (
    <div className="text-4xl">
            <span>Question: {activeQuestion + 1}</span>
            <span>/{questionLength}</span>
          </div>
  )
}

export default QuestionTracker