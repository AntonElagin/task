import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import SetPanel from './SetPanel';

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

it('push all buttons on SetPanel', () => {
    const onSelect = jest.fn();
    const onDelete = jest.fn();

    act(() => {
        render(<SetPanel
            count={5}
            checkedAll={false}
            onSelect={onSelect}
            onDelete={onDelete}
        />, container);
    });

    const buttons = document.querySelectorAll('button.letters_settings__button');
    act(() => {
        buttons.forEach(button => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        })
    });
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledTimes(1);
});
