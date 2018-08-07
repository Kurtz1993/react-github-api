import React, { Component, Fragment } from 'react';
import { Repository } from '../../models/repository.interface';

import RepositoryCard from '../components/RepositoryCard';
import './RepositoriesList.css';

const url = 'https://api.github.com';

class RepositoriesList extends Component<any, any> {
  state = {
    repositories: [] as Repository[],
  };

  async componentWillMount() {
    const username = sessionStorage.getItem('username');
    const token = sessionStorage.getItem('token');

    const repositories = await fetch(`${url}/users/${username}/repos`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }).then(res => res.json());

    this.setState({ repositories });
  }

  render() {
    const { repositories } = this.state;

    return (
      <Fragment>
        <button className="btn btn--danger" onClick={this.props.logout}>
          Logout
        </button>
        <section className="repositories">
          {repositories.map(repository => (
            <RepositoryCard repository={repository} key={repository.html_url} />
          ))}
        </section>
      </Fragment>
    );
  }
}

export default RepositoriesList;
