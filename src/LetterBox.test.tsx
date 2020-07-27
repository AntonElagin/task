import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import LetterBox from './LetterBox';

const obj = [
  {
    id: 9,
    avatar: 'http://i.pravatar.cc/300?u=9',
    sender: 'Лиллонген',
    theme: 'Detroit Red Wings',
    snippet: 'Я сплю? Я спал? Тайлер приснился мне? Или я снюсь Тайлеру?',
  },
  {
    id: 10,
    avatar: 'http://i.pravatar.cc/300?u=10',
    sender: 'Мюскмальва',
    theme: 'Tampa Bay Lightning',
    snippet: 'Меня повсюду преследовало ощущение дежавю. Куда бы я не приходил, мне казалось, что я там уже бывал. Это было похоже на погоню за невидимкой.',
  },
];

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
  act(() => {
    render(<LetterBox
      letters={obj}
      onClickLetter={onClick}
    />, container);
  });

  const letter = document.querySelector('a.letter');
  act(() => {
    letter.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(onClick).toHaveBeenCalledTimes(1);

  const letters = document.querySelectorAll('a.letter');
  act(() => {
    letters.forEach((letter) => {
      letter.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
  });
  expect(onClick).toHaveBeenCalledTimes(letters.length + 1);
});
