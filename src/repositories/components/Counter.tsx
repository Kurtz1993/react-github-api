import React, { SFC } from "react";
import { RepositoryCounter } from "../../models/repository-counter.enum";

import "./Counter.css";

interface CounterProps {
  type?: RepositoryCounter;
  count: number;
}

const Counter: SFC<CounterProps> = ({ type, count }) => {
  let icon: string;
  switch (type) {
    case RepositoryCounter.Stars:
      icon = "fa-star";
      break;
    case RepositoryCounter.Forks:
      icon = "fa-code-fork";
      break;
    case RepositoryCounter.Watchers:
      icon = "fa-eye";
      break;
    default:
      icon = "fa-exclamation-circle";
      break;
  }

  return (
    <div className="counter">
      <i className={`counter__icon fa ${icon}`} />
      <span className="counter__count">{count}</span>
    </div>
  );
};

export default Counter;
