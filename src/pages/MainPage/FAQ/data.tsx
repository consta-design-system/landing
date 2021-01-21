import React from 'react';
import { Text } from '@consta/uikit/Text';

export const questions = [
  {
    title: 'Для каких задач подходит дизайн-система?',
    answer: (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Для разработки пользовательских интерфейсов цифровых продуктов.
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это может быть интранет, личный кабинет, инструмент для мониторинга какой-то системы,
          управления оборудованием, совместной работы или что-то ещё.
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это может быть продукт, который открывают на ноутбуке, офисном компьютере или видеостене.
          Версии для мобильных приложений пока нет.
        </Text>
        <Text as="p" size="xl">
          Дизайн-система разрабатывается для продуктов «Газпром нефти», но на самом деле она
          универсальная: использовать может кто угодно.
        </Text>
      </>
    ),
  },
  {
    title: 'Это только для новых продуктов?',
    answer: (
      <Text as="p" size="xl">
        Не обязательно. Если ваш продукт уже работает, можно постепенно перевести его на
        дизайн-систему. Сначала потребуются дополнительные усилия, но потом будет проще поддерживать
        и соблюдать консистентность.
      </Text>
    ),
  },
  {
    title: 'Как использовать дизайн-систему?',
    answer: (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это зависит от ваших задач и технологий. Есть несколько вариантов.
        </Text>
        <Text as="p" size="xl" weight="bold">
          Посмотреть и сделать так же
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Eсли по каким-то причинам наши наработки вы использовать не можете. Например,
          разрабатываете мобильное приложение. В этом случае дизайн-систему можно использовать как
          гайдлайн.
        </Text>
        <Text as="p" size="xl" weight="bold">
          Использовать все возможности
        </Text>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Если вы запускаете веб-проект и готовы вести разработку на React, разработчики могут{' '}
          <Text as="a" view="link" href="https://github.com/gazprom-neft/consta-uikit" size="xl">
            подключить нашу библиотеку
          </Text>{' '}
          с элементами интерфейса. Если нет, дизайнеры могут собрать макет интерфейса на основе{' '}
          <Text as="a" view="link" href="https://www.figma.com/@Consta" size="xl">
            шаблонов в Figma
          </Text>
          .
        </Text>
        <Text as="p" size="xl" weight="bold">
          Дополнять и дорабатывать
        </Text>
        <Text as="p" size="xl">
          Всё в открытом доступе. Вы можете посмотреть{' '}
          <Text as="a" view="link" href="https://github.com/gazprom-neft/consta-uikit" size="xl">
            исходный код нашей библиотеки на GitHub
          </Text>{' '}
          и предложить изменения.
        </Text>
      </>
    ),
  },
  {
    title: 'А если мы работаем с подрядчиками?',
    answer: (
      <Text as="p" size="xl">
        Отлично, отправьте им ссылку на 
        <Text
          as="a"
          view="link"
          href="https://consta-uikit.vercel.app/?path=/story/common-about--page"
          size="xl"
        >
          описание дизайн-системы
        </Text>
        . Все ресурсы публичные, можно использовать и «внутри» компании, и «снаружи».
      </Text>
    ),
  },
  {
    title: 'На каких условиях можно использовать дизайн-систему?',
    answer: (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Дизайн-система распространяется ПАО «Газпром нефть» бесплатно, на условиях открытой
          лицензии MIT. Это значит, что вы можете свободно использовать код и отдельные элементы
          дизайн-системы, если сохраните копирайт Gazprom Neft PJSC.
        </Text>
        <Text
          as="a"
          view="link"
          href="http://consta.gazprom-neft.ru/content/licence_mit.pdf"
          size="xl"
          display="block"
        >
          Посмотреть все условия
        </Text>
      </>
    ),
  },
  {
    title: 'На каких условиях можно использовать дизайн-систему?',
    answer: (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Очень просто: дизайн-система в публичном репозитории на GitHub, вы можете прислать заявку
          на изменения или даже сделать доработку.
        </Text>
        <Text
          as="a"
          view="link"
          href="https://consta-uikit.vercel.app/?path=/docs/common-develop-contributors--page"
          size="xl"
          display="block"
        >
          Как это сделать
        </Text>
      </>
    ),
  },
  {
    title: 'В какой момент её лучше подключать?',
    answer: (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          — Когда понятно, что примерно будет в вашем продукте, но еще не ясно, как именно вы будете
          его делать
          <br />— Когда будете выбирать, какие технологии использовать для разработки интерфейса{' '}
          <br />— Когда решите сделать прототип или MVP Покажите эту страницу дизайнерам и
          разработчикам, чтобы оценить, какие возможности системы вам подходят и прикинуть время на
          создание макета и верстку.
        </Text>
      </>
    ),
  },
  {
    title: 'Как проходит разработка интерфейса с дизайн-системой?',
    answer: (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Это зависит от вашего процесса разработки. Вот один из вариантов:
        </Text>
        <Text as="ol" size="xl" className="decorator decorator_indent-b_m">
          <li>Менеджер или заказчик ставит задачу на создание продукта</li>
          <li>
            Дизайнеры создают макет — из компонентов дизайн-системы, на основе наших шаблонов в
            Figma.
          </li>
          <li>
            Разработчики собирают интерфейс на основе макета — берут код компонентов дизайн-системы{' '}
            <Text
              as="a"
              view="link"
              href="https://consta-uikit.vercel.app/?path=/docs/common-develop-contributors--page"
              size="xl"
            >
              в нашем проекте на GitHub
            </Text>
            , встраивают в свой проект, оживляют с помощью скриптов и подключают к бэкенду
            (например, к базе данных).
          </li>
          <li>
            Тестировщики проверяют, что всё работает (поведение кнопок, списков и других элементов
            из дизайн-системы проверять не нужно).
          </li>
        </Text>
        <Text as="p" size="xl">
          Готово, можно показывать продукт пользователям.
        </Text>
      </>
    ),
  },
  {
    title: 'Кто её разрабатывает и поддерживает?',
    answer: (
      <>
        <Text as="p" size="xl" className="decorator decorator_indent-b_m">
          Центр дизайна и развития продуктов «Газпром нефти». Мы создаём дизайн-систему внутри
          компании, поэтому можем общаться с менеджерами продуктов и разработчиками, получать фидбек
          о работе системы в реальных условиях и дорабатывать по результатам.
        </Text>
        <Text as="p" size="xl">
          Если есть вопросы, пишите нам:{' '}
          <Text
            as="a"
            view="link"
            href="https://consta-uikit.vercel.app/?path=/docs/common-develop-contributors--page"
            size="xl"
          >
            design@gazprom-neft.ru
          </Text>
        </Text>
      </>
    ),
  },
];
