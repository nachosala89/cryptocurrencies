import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CryptoDetails from '../components/CryptoDetails';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 'growing',
  }),
  useRouteMatch: () => ({ url: '/growing' }),
}));

test('Renders header text', () => {
  render(<Provider store={store}><CryptoDetails /></Provider>);
  
  const headerText = screen.queryByText('Growing Assets');

  expect(headerText).toBeInTheDocument();
});
