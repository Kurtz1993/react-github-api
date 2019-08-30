import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import RepositoryCard from './RepositoryCard';
import { Repository } from '../../models/repository.interface';

const repo: Repository = {
  name: 'test',
  description: 'test test',
  html_url: 'fjdakfl',
  stargazers_count: 2,
  forks_count: 1,
  watchers_count: 3,
  open_issues: 90000,
  owner: {
    avatar_url: "It's me",
    login: 'jfdklafjdkalñf'
  }
};

describe("RepositoryCard Component", () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(<RepositoryCard repository={repo} />);
  });

  it("should render an image with the correct avatar", () => {
    const img = component.find('.card__thumb');
    expect(img.prop('src')).toBe(repo.owner.avatar_url);
  });

  it("should render the repo link with the correct name and URL", () => {
    const link = component.find('.card__title-link');

    expect(link.prop('href')).toBe(repo.html_url);
    expect(link.text()).toBe(repo.name);
  });

  it("should render the description correctly", () => {
    const desc = component.find('.card__description');

    expect(desc.text()).toBe(repo.description);
  });
});
