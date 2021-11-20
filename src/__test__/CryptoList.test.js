import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import CryptoList from '../components/CryptoList';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

test('Last 24 Hours Changes list is created', () => {
  const { container } = render(<Provider store={store}><Router><CryptoList /></Router></Provider>);
  const list = container.querySelector('.changes-list');
  expect(list).toBeInTheDocument();
});

test('Renders header text', () => {
  render(<Provider store={store}><Router><CryptoList /></Router></Provider>);

  const headerText = screen.queryByText('CRYPTO CURRENCIES');

  expect(headerText).toBeInTheDocument();
});
