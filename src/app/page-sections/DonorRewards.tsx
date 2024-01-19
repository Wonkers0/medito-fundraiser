import Divider from "../components/Divider"
import RewardCard, { RewardCardProps } from "../components/RewardCard"

const rewards: RewardCardProps[] = [
  {
    title: "Supporter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cost: 15,
    benefits: ["Reward 1"],
  },
  {
    title: "Supporter+",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cost: 30,
    benefits: ["Reward 1", "Reward 2"],
    highlighted: true,
  },
  {
    title: "VIS",
    description: "(Very Important Supporter) Lorem ipsum dolor sit amet.",
    cost: 60,
    benefits: ["Reward 1", "Reward 2", "Reward 3"],
  },
  {
    title: "VIS+",
    description: "(Very Important Supporter) Lorem ipsum dolor sit amet.",
    cost: 90,
    benefits: ["Reward 1", "Reward 2", "Reward 3"],
  },
  {
    title: "MIS",
    description: "(Most Important Supporter) Lorem ipsum dolor sit amet.",
    cost: 120,
    benefits: ["Reward 1", "Reward 2", "Reward 3"],
  },
  {
    title: "MIS+",
    description: "(Most Important Supporter) Lorem ipsum dolor sit amet.",
    cost: 200,
    benefits: ["Reward 1", "Reward 2", "Reward 3"],
  },
]

export default function DonorRewards() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Divider text="Donor Rewards" />

      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rewards.map((props, i) => (
          <RewardCard key={i} {...props} />
        ))}
      </div>
    </div>
  )
}
