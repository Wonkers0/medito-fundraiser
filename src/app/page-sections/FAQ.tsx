import Divider from "../components/Divider"
import Question from "../components/Question"

export default function FAQ() {
  return (
    <div className="flex flex-col items-center gap-2.5 w-full">
      <Divider text="FAQ" />
      <Question
        question="What's the best thing about Switzerland?"
        answer="I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      />
      <Question
        question="How do you make holy water?"
        answer="You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      />
      <Question
        question="What do you call someone with no body and no nose?"
        answer="Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      />
      <Question
        question="Why do you never see elephants hiding in trees?"
        answer="Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      />
      <Question
        question="Why can't you hear a pterodactyl go to the bathroom?"
        answer="Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      />
      <Question
        question="Why did the invisible man turn down the job offer?"
        answer="He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
      />
    </div>
  )
}
