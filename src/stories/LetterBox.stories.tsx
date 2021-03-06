import React from 'react';
import { action } from '@storybook/addon-actions';
import LetterBox from '../LetterBox';
import SettingPanel from '../SetPanel';
import Letter from '../Letter';
import '../index.css';

export default {
  title: 'Letter Box',
  component: LetterBox,
};

const obj = {
  emails: [
    {
      id: 1,
      avatar: 'http://i.pravatar.cc/300?u=1',
      sender: 'Бединге',
      theme: 'Carolina Hurricanes',
      snippet: 'Люди всё время меня спрашивают: знаю ли я Тайлера Дёрдена?',
    },
    {
      id: 2,
      avatar: 'http://i.pravatar.cc/300?u=2',
      sender: 'Лиаторп',
      theme: 'Columbus Blue Jackets',
      snippet: 'Шесть месяцев я не мог спать. Когда у тебя бессонница — всё нереально; всё очень далеко от тебя, всё это — копия, снятая с копии, которая в свою очередь снята с копии.',
    },
    {
      id: 3,
      avatar: 'http://i.pravatar.cc/300?u=3',
      sender: 'Хемнэс',
      theme: 'New Jersey Devils',
      snippet: 'Когда-то мы зачитывались порнографией — теперь каталогами IKEA.',
    },
    {
      id: 4,
      avatar: 'http://i.pravatar.cc/300?u=4',
      sender: 'Стольмен',
      theme: 'New York Islanders',
      snippet: 'Я обрёл свободу. Свобода есть утрата всяческих надежд.',
    },
    {
      id: 5,
      avatar: 'http://i.pravatar.cc/300?u=5',
      sender: 'Вемб',
      theme: 'Philadelphia Flyers',
      snippet: 'Каждый вечер я умирал и каждый вечер я рождался заново. Воскресал.',
    },
    {
      id: 6,
      avatar: 'http://i.pravatar.cc/300?u=6',
      sender: 'Бьюрста',
      theme: 'Pittsburgh Penguins',
      snippet: 'После боя шумовой фон жизни становится приглушённым. Тебе всё по силам.',
    },
    {
      id: 7,
      avatar: 'http://i.pravatar.cc/300?u=7',
      sender: 'Сальми',
      theme: 'Washington Capitals',
      snippet: 'Суть бойцовского клуба не в победах и поражениях. Слова тут пустой звук. Истеричные выкрики на неведомых языках, как в церкви пятидесятников. После боя проблем меньше не становилось, но тебе на них было начхать. Каждый чувствовал, что возродился.',
    },
    {
      id: 8,
      avatar: 'http://i.pravatar.cc/300?u=8',
      sender: 'Гру​ндталь',
      theme: 'Boston Bruins',
      snippet: 'Преодолеть страх. Отсечь лишнее. Отвергнуть всё, что не имеет подлинной ценности. И скользить.',
    },
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
  ],
};

export const letterBox = (): JSX.Element => <LetterBox letters={obj.emails} onClickLetter={action('click letter')} />;

export const settingPanel = (): JSX.Element => (
  <div style={{ width: '70%' }}>
    <SettingPanel
      count={10}
      checkedAll={false}
      onDelete={action('delete Button clicked')}
      onSelect={action('selected all or nothing')}
    />
  </div>
);

export const letter = (): JSX.Element => (
  <Letter
    letter={obj.emails[0]}
    onClick={action('clicked')}
    onSelect={action('selected ot unselected')}
  />
);
