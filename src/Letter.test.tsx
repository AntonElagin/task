import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Letter from './Letter';

const obj = {
  id: 9,
  avatar: 'http://i.pravatar.cc/300?u=9',
  sender: 'Лиллонген',
  theme: 'Detroit Red Wings',
  snippet: 'Я сплю? Я спал? Тайлер приснился мне? Или я снюсь Тайлеру?',
};

let container: Element;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
});

it('click Letter', () => {
  const onClick = jest.fn();
  const onSelect = jest.fn();

  act(() => {
    render(<Letter
      letter={obj}
      onClick={onClick}
      onSelect={onSelect}
    />, container);
  });

  const letter = document.querySelector('a.letter');
  act(() => {
    letter.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(onClick).toHaveBeenCalledTimes(1);

  const input = document.querySelector('input[type=checkbox]');
  act(() => {
    input.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(onSelect).toHaveBeenCalledTimes(1);
});
