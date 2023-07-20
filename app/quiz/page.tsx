"use client";
import { useState } from "react";
import { quiz } from "@/src/data";
import QuestionTracker from "@/src/components/QuestionTracker";
import Buttons from "@/src/components/Buttons";
import ResultSection from "@/src/components/ResultSection";

const QuizPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    corretAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer: string, id: any) => {
    setChecked(true);
    setSelectedAnswerIndex(id);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            corretAnswers: prev.corretAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="flex flex-col">
      <div>
        <span className="text-4xl font-semibold">Quiz Page</span>
        {!showResult && (
          <QuestionTracker
            activeQuestion={activeQuestion}
            questionLength={questions.length}
          />
        )}
      </div>
      <div>
        {!showResult ? (
          <div className="bg-[#f8f8f8] p-4 mt-8 rounded">
            <div className="text-black">
              {questions[activeQuestion].question}
            </div>
            {answers.map((answer, id) => (
              <li
                key={id}
                onClick={() => onAnswerSelected(answer, id)}
                className={`text-black list-none cursor-pointer py-4 px-2 my-2 border border-stone-400 ${
                  selectedAnswerIndex === id
                    ? "!text-white bg-[#000925]"
                    : " hover:text-white hover:bg-[#d8d8d8]"
                }`}
              >
                <span>{answer}</span>
              </li>
            ))}
            <Buttons
              checked={checked}
              nextQuestion={nextQuestion}
              activeQuestion={activeQuestion}
              questionLength={question.length}
            />
          </div>
        ) : (
          <ResultSection
            resultScore={result.score}
            questionLength={questions.length}
            resultCorretAnswers={result.corretAnswers}
            resultWrongAnswers={result.wrongAnswers}
          />
        )}
      </div>
    </div>
  );
};

export default QuizPage;
