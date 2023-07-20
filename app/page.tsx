import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="w-screen flex justify-center items-center flex-col gap-36">
        <div className="text-5xl">Quiz App</div>
        <Link href={"/quiz"}>
        <button><span className="text-2xl">Start Quiz</span></button>
        </Link>
      </div>
    </div>
  )
}
