'use strict';

/* =====================================================
   НАСТРОЙКИ
   ===================================================== */

const CARDS_PER_PAGE = 5;

/* =====================================================
   МОКДАННЫЕ
   Используются, если API недоступен.
   Замените на реальный запрос к API при необходимости.
   ===================================================== */

const mockVideos = [
  {
    id: '1',
    city: 'лондон',
    time_of_day: ['day', 'evening'],
    title: 'Вид из окна. Лондон. Вестминстер.',
    description:
      'На набережной Темзы у Вестминстерского дворца всегда многолюдно. Туристы, местные жители и политики снуют мимо каждый день.',
    thumbnail: 'https://picsum.photos/seed/london1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  {
    id: '2',
    city: 'токио',
    time_of_day: ['day'],
    title: 'Вид из окна. Токио. Синдзюку.',
    description:
      'На этой улице района Синдзюку находится более 200 баров и ресторанов. Вечером всё сверкает неоновыми огнями.',
    thumbnail: 'https://picsum.photos/seed/tokyo1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: '3',
    city: 'нью-йорк',
    time_of_day: ['morning', 'day'],
    title: 'Вид из окна. Нью-Йорк. Таймс-сквер.',
    description:
      'Таймс-сквер не спит никогда. Огни рекламы и поток людей не прекращаются ни днём ни ночью.',
    thumbnail: 'https://picsum.photos/seed/nyc1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: '4',
    city: 'париж',
    time_of_day: ['evening', 'night'],
    title: 'Вид из окна. Париж. Монмартр.',
    description:
      'Холм Монмартр — один из самых романтичных уголков Парижа. Отсюда открывается вид на весь город, а ночью огни Эйфелевой башни видны издалека.',
    thumbnail: 'https://picsum.photos/seed/paris1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  },
  {
    id: '5',
    city: 'берлин',
    time_of_day: ['morning', 'day'],
    title: 'Вид из окна. Берлин. Митте.',
    description:
      'Исторический центр Берлина. Рядом Бранденбургские ворота и Рейхстаг. Утром здесь особенно тихо.',
    thumbnail: 'https://picsum.photos/seed/berlin1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  },
  {
    id: '6',
    city: 'москва',
    time_of_day: ['day', 'evening'],
    title: 'Вид из окна. Москва. Арбат.',
    description:
      'Старый Арбат — пешеходная улица в самом центре Москвы. Здесь всегда найдётся место уличным музыкантам и художникам.',
    thumbnail: 'https://picsum.photos/seed/moscow1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
  },
  {
    id: '7',
    city: 'амстердам',
    time_of_day: ['morning', 'day'],
    title: 'Вид из окна. Амстердам. Каналы.',
    description:
      'Утренний туман над каналами Амстердама. Узкие домики отражаются в воде, а велосипедисты спешат на работу.',
    thumbnail: 'https://picsum.photos/seed/amsterdam1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  },
  {
    id: '8',
    city: 'барселона',
    time_of_day: ['day'],
    title: 'Вид из окна. Барселона. Готический квартал.',
    description:
      'Готический квартал — сердце Барселоны. Узкие улицы, средневековые здания и всегда живая атмосфера.',
    thumbnail: 'https://picsum.photos/seed/barcelona1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
  },
  {
    id: '9',
    city: 'дубай',
    time_of_day: ['night'],
    title: 'Вид из окна. Дубай. Бурдж-Халифа.',
    description:
      'Ночной Дубай с высоты Бурдж-Халифы. Город огней растянулся до самого горизонта, освещая пустыню вокруг.',
    thumbnail: 'https://picsum.photos/seed/dubai1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
  {
    id: '10',
    city: 'сидней',
    time_of_day: ['morning'],
    title: 'Вид из окна. Сидней. Оперный театр.',
    description:
      'Раннее утро у Сиднейского оперного театра. Рассвет окрашивает паруса крыши в нежно-розовый цвет.',
    thumbnail: 'https://picsum.photos/seed/sydney1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: '11',
    city: 'рим',
    time_of_day: ['evening'],
    title: 'Вид из окна. Рим. Трастевере.',
    description:
      'Трастевере — один из старейших и самых атмосферных районов Рима. Вечером тут оживают таверны и пьяцца.',
    thumbnail: 'https://picsum.photos/seed/rome1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    id: '12',
    city: 'стамбул',
    time_of_day: ['morning', 'day'],
    title: 'Вид из окна. Стамбул. Босфор.',
    description:
      'Вид на пролив Босфор, где встречаются Европа и Азия. Паромы снуют туда-сюда круглосуточно.',
    thumbnail: 'https://picsum.photos/seed/istanbul1/640/360',
    videoLink:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  },
];

/* =====================================================
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
   ===================================================== */

/**
 * Получить DOM-элемент по селектору (с проверкой)
 */
function getElement(selector) {
  const el = document.querySelector(selector);
  if (!el) {
    throw new Error(`Элемент "${selector}" не найден`);
  }
  return el;
}

/**
 * Создать экземпляр из шаблона
 */
function createFromTemplate(templateSelector) {
  const template = document.querySelector(templateSelector);
  return template.content.cloneNode(true);
}

/**
 * Показать прелоадер в контейнере
 */
function showPreloader(container) {
  const preloaderFragment = createFromTemplate('.preloader-template');
  container.appendChild(preloaderFragment);
}

/**
 * Убрать все прелоадеры из контейнера
 */
function hidePreloader(container) {
  const preloaders = container.querySelectorAll('.preloader');
  preloaders.forEach((el) => el.remove());
}

/* =====================================================
   РАБОТА С ДАННЫМИ
   ===================================================== */

let allData = []; // все данные из источника
let currentOffset = 0; // сколько карточек уже показано

/**
 * Фильтрация данных по параметрам формы
 */
function filterData(data, city, timesOfDay) {
  return data.filter((item) => {
    const cityMatch =
      !city || item.city.toLowerCase().includes(city.toLowerCase());
    const timeMatch =
      timesOfDay.length === 0 ||
      timesOfDay.some((t) => item.time_of_day.includes(t));
    return cityMatch && timeMatch;
  });
}

/**
 * Загрузка данных (с API или мок)
 */
async function fetchData() {
  // Пробуем реальный API. Если не удаётся — используем мок.
  try {
    const response = await fetch('https://api.nomoreparties.co/windows-view', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('API недоступен');
    }
    return await response.json();
  } catch {
    // Возвращаем мок-данные как запасной вариант
    return mockVideos;
  }
}

/* =====================================================
   ОТРИСОВКА
   ===================================================== */

/**
 * Создать одну карточку из шаблона
 */
function createCard(data) {
  const fragment = createFromTemplate('.card-template');
  const link = fragment.querySelector('.content__card-link');
  const thumbnail = fragment.querySelector('.content__video-card-thumbnail');
  const title = fragment.querySelector('.content__video-card-title');
  const description = fragment.querySelector('.content__video-card-description');

  link.dataset.videoLink = data.videoLink;
  thumbnail.src = data.thumbnail;
  thumbnail.alt = data.title;
  title.textContent = data.title;
  description.textContent = data.description;

  return fragment;
}

/**
 * Добавить карточки в список
 */
function renderCards(data, cardList, isFirst = false) {
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    fragment.appendChild(createCard(item));
  });
  cardList.appendChild(fragment);

  // Делаем первую карточку активной
  if (isFirst) {
    const firstLink = cardList.querySelector('.content__card-link');
    if (firstLink) {
      firstLink.classList.add('content__card-link_current');
    }
  }
}

/**
 * Показать кнопку «Показать ещё»
 */
function showMoreButton(container, onClick) {
  removeMoreButton(container);
  const fragment = createFromTemplate('.more-button-template');
  const button = fragment.querySelector('.more-button');
  button.addEventListener('click', onClick);
  container.appendChild(button);
}

/**
 * Убрать кнопку «Показать ещё»
 */
function removeMoreButton(container) {
  const existing = container.querySelector('.more-button');
  if (existing) existing.remove();
}

/**
 * Показать ошибку вместо видео
 */
function showError(videoContainer, message) {
  const fragment = createFromTemplate('.error-template');
  const errorText = fragment.querySelector('.result__error-text');
  errorText.textContent = message;
  videoContainer.innerHTML = '';
  videoContainer.appendChild(fragment);
}

/* =====================================================
   ИНИЦИАЛИЗАЦИЯ
   ===================================================== */

async function init() {
  const videoElement = getElement('#result-video');
  const videoContainer = getElement('#video-container');
  const cardList = getElement('#card-list');
  const listContainer = getElement('#list-container');
  const searchForm = getElement('#search-form');

  // Показываем прелоадеры
  showPreloader(videoContainer);
  showPreloader(listContainer);

  try {
    allData = await fetchData();
  } catch (err) {
    hidePreloader(videoContainer);
    hidePreloader(listContainer);
    showError(videoContainer, 'Не удалось загрузить данные. Попробуйте позже.');
    return;
  }

  hidePreloader(videoContainer);
  hidePreloader(listContainer);

  if (!allData || allData.length === 0) {
    showError(videoContainer, 'Ничего не найдено. Попробуйте изменить параметры поиска.');
    return;
  }

  // Подставляем первое видео
  videoElement.src = allData[0].videoLink;

  // Показываем первые N карточек
  currentOffset = 0;
  const firstBatch = allData.slice(currentOffset, currentOffset + CARDS_PER_PAGE);
  renderCards(firstBatch, cardList, true);
  currentOffset += firstBatch.length;

  // Если есть ещё — добавляем кнопку
  if (currentOffset < allData.length) {
    showMoreButton(listContainer, handleMoreButtonClick);
  }

  /* =====================================================
     ОБРАБОТЧИКИ СОБЫТИЙ
     ===================================================== */

  /**
   * Клик по карточке — меняем видео
   */
  cardList.addEventListener('click', (evt) => {
    const link = evt.target.closest('.content__card-link');
    if (!link) return;
    evt.preventDefault();

    // Снимаем активный класс со всех карточек
    cardList.querySelectorAll('.content__card-link_current').forEach((el) => {
      el.classList.remove('content__card-link_current');
    });

    // Добавляем активный класс кликнутой карточке
    link.classList.add('content__card-link_current');

    // Меняем видео
    const newSrc = link.dataset.videoLink;
    if (newSrc) {
      videoElement.src = newSrc;
      videoElement.play();
    }
  });

  /**
   * Клик «Показать ещё»
   */
  function handleMoreButtonClick() {
    const nextBatch = allData.slice(currentOffset, currentOffset + CARDS_PER_PAGE);
    renderCards(nextBatch, cardList, false);
    currentOffset += nextBatch.length;

    if (currentOffset >= allData.length) {
      removeMoreButton(listContainer);
    }
  }

  /**
   * Отправка формы поиска
   */
  searchForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const cityValue = searchForm.city.value.trim();
    const checkedTimes = Array.from(
      searchForm.querySelectorAll('.search-form__checkbox:checked')
    ).map((cb) => cb.value);

    // Прелоадеры
    cardList.innerHTML = '';
    removeMoreButton(listContainer);
    showPreloader(listContainer);

    const videoOldSrc = videoElement.src;
    showPreloader(videoContainer);

    // Имитируем задержку запроса для UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    hidePreloader(listContainer);
    hidePreloader(videoContainer);

    const filtered = filterData(allData, cityValue, checkedTimes);

    if (filtered.length === 0) {
      showError(
        videoContainer,
        'По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.'
      );
      return;
    }

    // Восстанавливаем/меняем видео
    videoElement.src = filtered[0].videoLink;

    currentOffset = 0;
    const firstBatch = filtered.slice(currentOffset, currentOffset + CARDS_PER_PAGE);
    renderCards(firstBatch, cardList, true);
    currentOffset += firstBatch.length;

    if (currentOffset < filtered.length) {
      // Переопределяем обработчик кнопки под новый filtered
      showMoreButton(listContainer, () => {
        const nextBatch = filtered.slice(currentOffset, currentOffset + CARDS_PER_PAGE);
        renderCards(nextBatch, cardList, false);
        currentOffset += nextBatch.length;
        if (currentOffset >= filtered.length) {
          removeMoreButton(listContainer);
        }
      });
    }
  });
}

// Запускаем приложение
init();
