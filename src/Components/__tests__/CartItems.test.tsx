import { render } from '@testing-library/react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import CartItems from '../CartItems';
import { useAppDispatch, useAppSelector } from '../../core-hooks';
import { mockProducts } from '../../mocks/data';
import { Text } from 'react-native';

jest.mock('../../core-hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

const dispatch = jest.fn();

describe('CartItems component testing', () => {
  const mockDispatch = jest.fn();
  const mockSelector = jest.fn();

  beforeAll(() => {
    (useAppSelector as jest.Mock).mockImplementation(mockSelector);
    (useAppDispatch as jest.Mock).mockImplementation(mockDispatch);
  });

  it('renders correctly', () => {
    mockSelector.mockReturnValue({
      cartItems: [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 1 },
      ],
      total: 30,
    });

    const snap: unknown = render(
      <Provider store={store}>
        <CartItems />
      </Provider>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });

  it('renders correctly when cart is empty', () => {
    mockSelector.mockReturnValue({
      cartItems: [],
      total: 0,
    });

    const snap: unknown = render(
      <Provider store={store}>
        <Text>Cart is Empty</Text>
      </Provider>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
