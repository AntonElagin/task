import React from 'react';
import SetPanel from './SetPanel';
import Letter, { Email } from './Letter';
import './LetterBox.css';

/**
 * Interface of function event onCLickLetter
 */
interface ClickLetter {
  (id: number): void;
}

/**
 * Interface of LettersBox Component Porops
 */
interface Props {
  letters: Array<Email>;
  onClickLetter: ClickLetter;

}

/**
 * Interface of LettersBox Component State
 */
interface State {
  letters: Array<Email>;
  selected: number;
}

/**
 *  LetterBox Component
 */
export default class LetterBox extends React.Component<Props, State> {
  /**
   *
   * @param {Props} props props of LetterBox (Include letters)
   * @constructor
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      letters: props.letters.map((val: Email) => {
        const newVal = val;
        newVal.selected = false;
        return newVal;
      }),
      selected: 0,
    };
  }

  /**
   * Function the handler to remove selected letters
   *
   * @private
   */
  private handleDelete = (): void => {
    this.setState((state) => {
      const letters = state.letters.filter((val: Email) => !val.selected);
      return {
        letters,
        selected: 0,
      };
    });
  }

  /**
   * Function the handler to select/unselect one letter
   * @param {number} index Letter index in array
   * @private
   */
  private handleSelectLetter = (index: number) => (checked: boolean): void => {
    this.setState((state) => {
      const { letters } = state;
      letters[index].selected = checked;
      const selected = state.selected + (checked ? 1 : -1);
      return {
        selected,
        letters,
      };
    });
  }

  /**
   * Function the handler to select/unselect all letters
   * @param {boolean} checkedAll is all letters checked
   * @private
   */
  private handleSelectAllLetter = (checkedAll: boolean): void => {
    this.setState((state) => {
      const letters = state.letters.map((val) => {
        const newVal = val;
        newVal.selected = !checkedAll;
        return newVal;
      });

      return {
        letters,
        selected: checkedAll ? 0 : letters.length,
      };
    });
  }

  /**
   * Render Component
   */
  render(): JSX.Element {
    const { letters, selected } = this.state;
    const { onClickLetter } = this.props;

    if (letters.length > 0) {
      return (
        <div className="container">
          <SetPanel
            count={selected}
            checkedAll={(selected === letters.length)}
            onSelect={this.handleSelectAllLetter}
            onDelete={this.handleDelete}
          />
          <div className="letters_box">
            {letters.map(
              (letter: Email, i: number) => (
                <Letter
                  key={letter.id}
                  letter={letter}
                  onClick={(): void => {
                    onClickLetter(letter.id);
                  }}
                  onSelect={this.handleSelectLetter(i)}
                />
              ),
            )}

          </div>
        </div>
      );
    }

    return (
      <div className="emptyBox">
        <div className="emptyBox__background" />
        <div className="emptyBox__text">
          <span> Тут писем нет!</span>
        </div>
      </div>
    );
  }
}
