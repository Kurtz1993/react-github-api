import React, { SFC } from 'react';
import { Repository } from '../../models/repository.interface';

import Counter from './Counter';
import './RepositoryCard.css';
import { RepositoryCounter } from '../../models/repository-counter.enum';

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard: SFC<RepositoryCardProps> = ({ repository }) => (
  <div className="card">
    <div className="card__icons">
      <Counter type={RepositoryCounter.Stars} count={repository.stargazers_count} />
      <Counter type={RepositoryCounter.Forks} count={repository.forks_count} />
      <Counter type={RepositoryCounter.Watchers} count={repository.watchers_count} />
      <Counter type={RepositoryCounter.Issues} count={repository.open_issues} />
    </div>

    <div className="card__header">
      <img
        src={repository.owner.avatar_url}
        alt="Author image"
        className="card__thumb thumbnail thumbnail--round"
      />
      <h1 className="card__title">
        <a href={repository.html_url} className="card__title-link" rel="noopener noreferrer">
          {repository.name}
        </a>
      </h1>
    </div>

    <div className="card__content">
      <p className="card__description">{repository.description}</p>
    </div>
  </div>
);

export default RepositoryCard;
