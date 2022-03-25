$(function () {
  //----------------------------------------------------------------------------------------
  //Блок JavaScript 
  //----------------------------------------------------------------------------------------

  //______________________________________________________________________________________
  //Глобальные функции 

  // устанавливает класс 'hidden', то есть скрывает элемент
  function hiddenContent(elem) {
    elem.forEach(function (item) {
      item.classList.add('hidden');
    });
  };

  // удаляет класс 'hidden' для нужного элемента
  function deleteHiddenOnElem(elem, i) {
    elem[i - 1].classList.remove('hidden');
  }

  // добавляем модификатор 'active' для класса
  function addModActive(elem, i, preclass) {
    elem[i - 1].classList.add(`${preclass}--active`);
  }

  // удаляем модификатор 'active' для класса со всех блоков
  function removeModActive(elem, preclass) {
    elem.forEach(function (item) {
      item.classList.remove(`${preclass}--active`);
    });
  };


  //______________________________________________________________________________________

  //При нажатии на город в меню, будет открываться модальное окно со списком городов
  const city = document.querySelector('.header__city'),
    cityItem = document.querySelector('.header__city-item'),
    cityModal = document.querySelector('.modal-cityes'),
    closeBlock = document.querySelector('.close-block'),
    cityes = document.querySelectorAll('.modal-cityes__link');


  closeBlock.addEventListener('click', function () {
    closeBlock.parentElement.classList.add('hidden');
  });

  city.addEventListener('click', function () {
    if (cityModal.classList.contains('hidden')) {
      showCityModal();
    } else {
      closeCityModal();
    }
  });

  function showCityModal() {
    cityModal.classList.remove('hidden');
  };

  function closeCityModal() {
    cityModal.classList.add('hidden');
  };

  //при нажатии на город из списка, будет меняться город в меню
  cityes.forEach(function (item, i) {
    item.addEventListener('click', function () {
      cityItem.textContent = cityes[i].textContent;
      closeCityModal();
    });
  });



  // При нажатии на бургер меню будет выезжать основная часть меню
  const menuBtn = document.querySelector('.header__button'),
    menuList = document.querySelector('.menu'),
    headerContent = document.querySelector('.header__content');

  menuBtn.addEventListener('click', function () {

    if (window.innerWidth >= 690) {
      menuList.classList.toggle('menu--active');
    } else if (window.innerWidth < 690) {
      headerContent.classList.toggle('header__content--active');
    }
  });



  // Блок кода для модалок-табов
  const tabBtns = document.querySelectorAll('.modules__choice-item'),
    tabContents = document.querySelectorAll('.modules__tabs-items');

  function tabsModal(buttons, contents, dataAttr) {
    addModActive(buttons, 1, 'modules__choice-item'); // добавляем активный класс для первой кнопки
    hiddenContent(contents); // скрываем весь контентный блок
    deleteHiddenOnElem(contents, 1); // показываем первый контентный блок
    buttons.forEach(function (item) {
      item.addEventListener('click', function (event) {
        const itemId = event.currentTarget.id;
        removeModActive(buttons, 'modules__choice-item');
        event.currentTarget.classList.add('modules__choice-item--active');
        contents.forEach(function (item) {
          if (!(item.classList.contains('hidden'))) {
            item.classList.add('hidden');
          }
        });
        document.querySelector(`[${dataAttr}="${itemId}"]`).classList.remove('hidden');
      });
    });
  }

  tabsModal(tabBtns, tabContents, 'data-tab');

  // addModActive(tabBtns, 1, 'modules__choice-item');
  // hiddenContent(tabContents);
  // deleteHiddenOnElem(tabContents, 1);

  // tabBtns.forEach(function (item) {
  //   item.addEventListener('click', function (event) {
  //     const itemId = event.currentTarget.id;
  //     removeModActive(tabBtns, 'modules__choice-item');
  //     event.currentTarget.classList.add('modules__choice-item--active');
  //     tabContents.forEach(function (item) {
  //       if (!(item.classList.contains('hidden'))) {
  //         item.classList.add('hidden');
  //       }
  //     });
  //     document.querySelector(`[data-tab="${itemId}"]`).classList.remove('hidden');
  //   });
  // });



  // Скролл горизонтальный блока

  const scrollWrap = document.querySelector('.reviews__scroll-wrap');
  let scrollItem = scrollWrap.querySelector('.reviews__scroll-item');

  console.log(scrollWrap);
  console.log(scrollItem);
















  //----------------------------------------------------------------------------------------
  //Блок JQuery
  //----------------------------------------------------------------------------------------



});