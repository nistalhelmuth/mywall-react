import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const forwardTo = (location) => {
  history.push(location);
}