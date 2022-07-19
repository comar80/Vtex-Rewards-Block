import React from 'react';
import { useCssHandles } from 'vtex.css-handles'


interface RewardsProps {
  rewardPoints: string;
}

const CSS_HANDLES = ['rewards', 'rewardslink'] as const;

// const DEFAULT_REWARDS_POINTS = 0;

const Rewards: StorefrontFunctionComponent<RewardsProps> = ({rewardPoints}) => {

  // const [points, setPoints] = useState(0);

  //implementar função que altera os pontos de acordo com o valor da compra
  // const updatedPoints = () => {

  // }

  const handles = useCssHandles(CSS_HANDLES);

  return (
    <div className={`${handles.rewards} c-muted-1 db tc t-action bg-transparent b--transparent c-action-primary hover-b--transparent hover-bg-action-secondary`}>
      <h3 >
        <a className={`${handles.rewardslink}`} href="/account#/points">{rewardPoints} Pontos</a>
      </h3>
    </div>
  );
};

Rewards.schema = {
  title: 'editor.rewards.title',
  description: 'editor.rewards.description',
  type: 'object',
  properties: {
    rewardPoints: {
      title: "Pontos de fidelidade",
      description: "Quantidade de pontos de fidelidade",
      type: "string",
      default: "0",
    }
  },
}

export default Rewards