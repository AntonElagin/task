import React from 'react';
import './SetPanel.css';

/**
 * onDelete function interface
 */
interface Delete {
  (): void;
}

/**
 * onSelect function interface
 */
interface Select {
  (checkedAll: boolean): void;
}

/**
 * Interface of SetPanel Props
 */
interface Props {
  count: number;
  checkedAll: boolean;
  onDelete: Delete;
  onSelect: Select;
}

/**
 * Render Component SetPanel
 * @param {Props} param0 component props
 */
export default function SetPanel({
  checkedAll, count, onDelete, onSelect,
}: Props): JSX.Element {
  const countComponent = (
    <div className="letters_settings__selected">
      <span className="letters_settings__selected_count">
        {count}
      </span>
    </div>
  );

  const deleteButton = (
    <button
      type="button"
      className="letters_settings__button"
      onClick={(e): void => {
        e.preventDefault();
        onDelete();
      }}
    >
      Удалить
    </button>
  );
  return (
    <div className="letters_settings">
      <div className="letters_settings__item">

        <button
          type="button"
          className="letters_settings__button"
          onClick={(e): void => {
            e.preventDefault();
            onSelect(checkedAll);
          }}
        >

          {count > 0 ? countComponent : ''}

          <div className="letters_settings__label">
            <span>
              {checkedAll ? 'Снять выделение' : 'Выделить все'}
            </span>
          </div>

        </button>
      </div>

      <div className="letters_settings__item">
        {count > 0 ? deleteButton : ''}
      </div>

    </div>
  );
}
