import { useEffect, useMemo, useState } from 'react';
import Accordion from './components/Accordion';
import Map from './components/Map';
import api from '../../api';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import {
  AccordionConatiner,
  ContainerStyled,
  SectionStyled,
} from './FAQ.styled';
import { Helmet } from 'react-helmet';

interface IQuestion {
  title: string;
  content: string;
  category: ICategory;
}

type ICategory = string;

const questions: IQuestion[] = [
  {
    title: 'Що таке бібліотека іграшок?',
    category: 'Як це працює',
    content:
      'Бібліотека іграшок — це програма, що дозволяє брати іграшки в оренду та користуватись ними допоки цікаво, а потім обмінювати на інші.',
  },
  {
    title: 'Що потрібно зробити для того, щоб отримати іграшки?',
    category: 'Замовлення та повернення іграшок',
    content:
      'Заповнюйте анкету на сайті або безпосередньо у найближчій Дитячій Точці “Спільно” та приходьте обирати іграшки.',
  },
  {
    title: 'Які іграшки у вас є? ',
    category: 'Інформація щодо іграшок',
    content:
      'Ми пропонуємо іграшки для раннього розвитку для дітей віком від 0 до 7 років',
  },
  {
    title: 'Скільки іграшок я можу взяти за один раз?',
    category: 'Замовлення та повернення іграшок',
    content:
      'У вас є можливість взяти від 1 до 3 іграшок. Правила щодо кількості іграшок визначає адміністратор Дитячої точки “Спільно',
  },
  {
    title: 'На який період можна взяти іграшки?',
    category: 'Замовлення та повернення іграшок',
    content: 'Ви можете взяти іграшки додому на термін до 3 місяців.',
  },
  {
    title: 'Скільки це коштує?',
    category: 'Замовлення та повернення іграшок',
    content:
      'Послуги бібліотеки іграшок абсолютно безкоштовні. Якщо вас просять заплатити — повідомте нам за телефоном, що вказаний у розділі контакти.',
  },
  {
    title: 'Чи дезінфікуюються іграшки?',
    category: 'Інформація щодо іграшок',
    content:
      'Так, звісно. Іграшки проходять трикрокове очищення:\n1. Видалення механічних забруднень (частинок пилу та бруду) шляхом миття у мильному розчині.\n2. Кварцювання.\n3. Обробка дезінфікуючими засобами, що безпечні для дітей.',
  },
  {
    title: 'Що я маю робити, якщо іграшка зламалась або загубилась?',
    category: 'Замовлення та повернення іграшок',
    content:
      'Ви не несете жодних ризиків за втрачену або зламану іграшку. Проте є обмеження: якщо ви не повертаєте іграшку, то не можете взяти нову.',
  },
  {
    title: 'Чи можу я принести іграшки, якими не користується дитина?',
    category: 'Передача іграшок',
    content:
      'Так, звісно. Але попередньо, скажіть про це адміністратору Дитячої Точки “Спільно”.',
  },
  {
    title: 'Як мені дізнатись, чи доступна бібліотека іграшок у моєму місці?',
    category: 'Як це працює',
    content:
      'На інтерактивній карті внизу сторінки ви зможете знайти актуальний перелік точок та обрати найближчу. Також скідкуйте за анонсами у наших соціальних мережах :)',
  },
];

const FAQ = () => {
  const [selectedCategories, setSelectedCategories] = useState<ICategory>('');
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const fetchPoints = async () => {
      const { data } = await api.get('/management/points');
      setPoints(data);
    };
    fetchPoints();
  }, []);

  const isSelected = (category: ICategory) => {
    return selectedCategories.includes(category);
  };

  const handleCategoryClick = (category: ICategory) => {
    // SELECT A FEW CATEGORIES:

    // if (isSelected(category)) {
    //   setSelectedCategories(selectedCategories.filter((c) => c !== category));
    // } else {
    //   setSelectedCategories([...selectedCategories, category]);
    // }

    // SELECT A SINGLE CATEGORY:
    if (selectedCategories === category) {
      setSelectedCategories('');
      return;
    }
    setSelectedCategories(category);
  };

  const filteredQuestions = useMemo(
    () =>
      selectedCategories.length === 0
        ? questions
        : questions.filter(({ category }) =>
            selectedCategories.includes(category)
          ),
    [selectedCategories]
  );

  return (
    <>
      <Helmet>
        <title>Популярні запитання</title>
        <meta
          name="description"
          content="Бібліотека іграшок — це програма, що дозволяє брати іграшки в оренду та користуватись ними допоки цікаво, а потім обмінювати на інші."
        />
      </Helmet>
      <HeroSection />
      <SectionStyled>
        <ContainerStyled>
          <Categories
            isSelected={isSelected}
            handleCategoryClick={handleCategoryClick}
          />
          <AccordionConatiner>
            {filteredQuestions.map(({ title, content }, index) => (
              <Accordion key={index} title={title} content={content} />
            ))}
          </AccordionConatiner>
          {points.length > 0 ? (
            <Map points={points} />
          ) : (
            <p>Завантаження мапи...</p>
          )}
        </ContainerStyled>
      </SectionStyled>
    </>
  );
};

export default FAQ;
