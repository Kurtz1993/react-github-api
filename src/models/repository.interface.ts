export interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues: number;
  owner: {
    avatar_url: string;
    login: string;
  }
}