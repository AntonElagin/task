/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Letter.css';

/**
 *  Email interface
 */
export interface Email {
  id: number;
  theme: string;
  sender: string;
  snippet: string;
  avatar: string;
  selected?: boolean;
}

/**
 * interface of funtion event onSelected
 */
interface Select {
  (checked: boolean): void;
}

/**
 * interface of funtion event onClick
 */
interface Click {
  (): void;
}

/**
 * Interface of Letter Component Props
 */
interface Props {
  letter: Email;
  onClick: Click;
  onSelect: Select;
}

/**
 *  Render Email Component
 * @param {Props} props - Props (include onClick, onSelect, letter)
 */
export default function Letter(props: Props): JSX.Element | null {
  const { letter, onSelect, onClick } = props;
  if (!letter) {
    return null;
  }

  const { selected } = letter;
  return (
    <a
      className={selected ? 'selected letter' : 'letter'}
      onClick={
        (event): void => {
          const { target } = event;
          if (!(target instanceof HTMLInputElement)) {
            event.preventDefault();
            onClick();
          }
        }
      }
    >
      <div className="letter__checkbox">
        <input
          type="checkbox"
          className="letter__checkbox_item"
          onChange={(event): void => {
            const { target } = event;
            onSelect(target.checked);
          }}
          checked={selected}
        />
      </div>
      <div className="letter__avatar letter__item">
        <img className="avatar" src={letter.avatar} alt="avatar" />
      </div>
      <div className="letter__container">
        <div className="letter__content">
          <div className="letter__content__author letter__item">
            <span>{letter.sender}</span>
          </div>
          <div className="letter__content__title">
            <span className="letter__content__title_theme ">{letter.theme}</span>
            <span className="letter__content__title_snippet letter__item">{letter.snippet}</span>
          </div>

        </div>
      </div>
    </a>
  );
}
