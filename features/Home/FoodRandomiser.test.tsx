import React from 'react';
import { FoodRandomiser } from './FoodRandomiser';
import { render, fireEvent } from '@testing-library/react-native';
import foodList from './food.json'

describe('TestComponent', () => {
  it('should render "FEED ME" button', () => {
    const { getByText } = render(<FoodRandomiser />);
    expect(getByText('FEED ME')).toBeDefined();
  });

  it('should update food state after button press', () => {
    const { getByText, queryAllByLabelText } = render(<FoodRandomiser />);
    const feedMeButton = getByText('FEED ME');
    fireEvent.press(feedMeButton);
    const foodFace = queryAllByLabelText('Show me my food face');
    expect(foodFace[0]).not.toBe('onPress');
  });

  it('should show a random food face after second button press', () => {
    const { getByText, queryAllByLabelText } = render(<FoodRandomiser />);
    const feedMeButton = getByText('FEED ME');
    fireEvent.press(feedMeButton);
    fireEvent.press(feedMeButton);
    const foodFace = queryAllByLabelText('Show me my food face');
    expect(foodList).toContain(foodFace[0]);
  });
});
