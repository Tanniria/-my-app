import React, { useState } from "react";

const About = () => {
  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div>
      <div className="bg-sections"></div>
      <div className="bg-sections bg2-sections"></div>
      <div className="bg-sections bg3-sections"></div>
      <div className="main__text">
        <p className="main__subtitle">Виртуальная выставка</p>
        <h1 className="main__title">
          90 лет Челябинской области.
          <br /> Опорный край державы
        </h1>
      </div>
      <div className="about-container">
        <h2 className="title-sections">Становление Челябинской области</h2>
        <ul className="tab-list">
          <li
            className={`tabs ${getActiveClass(1, "active-tabs")}`}
            onClick={() => toggleTab(1)}
          >
            История
          </li>
          <li
            className={`tabs ${getActiveClass(2, "active-tabs")}`}
            onClick={() => toggleTab(2)}
          >
            Герб
          </li>
          <li
            className={`tabs ${getActiveClass(3, "active-tabs")}`}
            onClick={() => toggleTab(3)}
          >
            Флаг
          </li>
          <li
            className={`tabs ${getActiveClass(4, "active-tabs")}`}
            onClick={() => toggleTab(4)}
          >
            Гимн
          </li>
        </ul>
        <div className="content-container">
          <div
            className={`content-sections ${getActiveClass(
              1,
              "active-content"
            )}`}
          >
            <p className="text-sections">
              17 января 1934 года Постановлением ВЦИК Уральская область
              разделена на три административных образования: Свердловскую
              область с центром в г. Свердловске, Челябинскую область с центром
              в г. Челябинске и Обско-Иртышскую область с центром в г. Тюмени.
              Границей между Свердловской и Челябинской областями определены
              районы: Нязепетровский, Уфалейский, Каменский, Камышловский,
              Талицкий, Троицкий, Тугулымский, Ялутороский, Омутинский,
              Аромашевский, Викуловский, со включением их в состав Челябинской
              области. К Челябинской области отнесены, кроме того, все остальные
              южные районы бывшей Уральской области (всего 57 районов и 4 города
              областного подчинения: Челябинск, Златоуст, Карабаш, Кыштым), а
              также Аргаяшский кантон Башкирской АССР, с преобразованием его в
              национальный округ Челябинской области. В мае 1934 года в
              Челябинскую область из Свердловской был передан Багарякский район,
              при этом из Челябинской в Свердловскую был передан Сухоложский
              район.
            </p>
            <p className="text-sections">
              В дальнейшем территория области неоднократно уменьшалась. Так,
              были переданы 11 восточных районов во вновь образованную в декабре
              1934 года Омскую область. В 1938 году Буткинский, Камышловский,
              Пышминский, Талицкий, Тугулымский, в 1942 году Каменский,
              Покровский районы были переданы из Челябинской области в состав
              Свердловской области. После передачи 6 февраля 1943 года ещё 32
              районов в состав вновь образованной Курганской области границы
              Челябинской области практически не менялись. Но происходили
              неоднократные изменения внутреннего административного деления, в
              частности, разукрупнения, объединения, ликвидации, переименования
              некоторых районов, изменения статусов ряда населённых пунктов
              области.
            </p>
            <div className="gallery">
              <div className="row">
                <p className="img-text">
                  Постановление ВЦИК о разделении Уральской области. ОГАЧО. Ф.
                  Р-627. Оп. 1. Д. 73.
                </p>
                <div className="row-container">
                  <img src="./img/1his.jpg" className="img-sections" />
                  <img src="./img/2his.jpg" className="img-sections" />
                  <img src="./img/3his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Административная карта Уральской области 1933 года. ОГАЧО. Ф.
                  Р-406. Оп. 1. Д. 8А.
                </p>
                <div className="row-container">
                  <img src="./img/2.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Административная карта Челябинской области 1935 года. ОГАЧО.
                  Ф. К-288. Оп. 4. Д. 3.
                </p>
                <div className="row-container">
                  <img src="./img/5.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Административная карта Челябинской области 1938 года. ОГАЧО.
                  Ф. Р-1036. Оп. 1. Д. 42.
                </p>
                <div className="row-container">
                  <img src="./img/1.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Указ Президиума Верховного Совета СССР об образовании
                  Курганской области в составе РСФСР. ОГАЧО. Ф. Р-274. Оп. 10.
                  Д. 1. Л. 101.
                </p>
                <div className="row-container">
                  <img src="./img/7his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Постановление оргкомитета Челябинской области и горсовета от
                  29 января 1934 года о размещении в городе Челябинске областных
                  организаций. ОГАЧО. Р-274. Оп. 3. Д. 291. Л. 1а, 2, 3.
                </p>
                <div className="row-container">
                  <img src="./img/8his.jpg" className="img-sections" />
                  <img src="./img/8.1his.jpg" className="img-sections" />
                  <img src="./img/8.2his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Постановление оргкомитета Челябинской области от 15 февраля
                  1934 года о штате постоянного представительства облисполкома в
                  Москве. ОГАЧО. Ф. Р-274. Оп. 3. Д. 291. Л. 39.
                </p>
                <div className="row-container">
                  <img src="./img/9his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Здание Челябинского обкома ВКП(б) на углу улиц Спартака и
                  Кирова, бывшее здание Госбанка после надстройки и расширения,
                  1936 год. ОГАЧО. Ф. Р-1061. Оп. 2. Д. 1. Л. 77.
                </p>
                <div className="row-container">
                  <img src="./img/10his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Главпочтамт на ул. Кирова в Челябинске, 1935 год. ОГАЧО. Ф.
                  Р-1061. Оп. 2. Д. 1. Л. 61.
                </p>
                <div className="row-container">
                  <img src="./img/11his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Строительство жилого дома облисполкома на площади Революции в
                  Челябинске, 1936 год. ОГАЧО. Ф. Р-1061. Оп. 2. Д. 1. Л. 86.
                </p>
                <div className="row-container">
                  <img src="./img/12his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Жилой дом треста «Станкострой» по ул. Цвиллинга, 28 в
                  Челябинске, 1935 год. ОГАЧО. Ф. Р-1061. Оп. 2. Д. 1. Л. 60.
                </p>
                <div className="row-container">
                  <img src="./img/13his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Новый трамвайный парк в Челябинске, 1936 год. ОГАЧО. Ф.
                  Р-1061. Оп. 2. Д. 1. Л. 66.
                </p>
                <div className="row-container">
                  <img src="./img/14his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Павильон трамвайной остановки в Магнитогорске, 1936 год.
                  ОГАЧО. Ф. Р-1061. Оп. 2. Д. 1. Л. 26.
                </p>
                <div className="row-container">
                  <img src="./img/15his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Школа по ул. Ленина, 30 в Златоусте, 1936 год. ОГАЧО. Ф.
                  Р-1061. Оп. 2. Д. 1. Л. 44.
                </p>
                <div className="row-container">
                  <img src="./img/16his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Картограмма коммунальных предприятий Челябинской области по
                  состоянию на 1 января 1936 года. ОГАЧО. Ф. Р-1061. Оп. 2. Д.
                  1. Л. 131.
                </p>
                <div className="row-container">
                  <img src="./img/17his.jpg" className="img-sections" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`content-sections ${getActiveClass(
              2,
              "active-content"
            )}`}
          >
            <p className="text-sections">
              27 декабря 2001 года Законодательным Собранием Челябинской области
              принят Закон о Гербе Челябинской области. Герб Челябинской области
              является официальным символом Челябинской области как субъекта
              Российской Федерации. Внесен в Государственный геральдический
              регистр Российской Федерации.
            </p>
            <div className="gallery">
              <div className="row">
                <p className="img-text">
                  Постановление Законодательного Собрания Челябинской области от
                  21 декабря 2001 года о принятии Закона о Гербе Челябинской
                  области. ОГАЧО. Ф. Р-710. Оп. 1. Д. 479. Л. 45.
                </p>
                <div className="row-container">
                  <img src="./img/18his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Закон Челябинской области от 27 декабря 2001 года о Гербе
                  Челябинской области. ОГАЧО. Ф. Р-710. Оп. 1. Д. 479. Л. 46,
                  47, 48, 49, 50, 51, 52, 53, 53 об.
                </p>
                <div className="row-container">
                  <img src="./img/19his.jpg" className="img-sections" />
                  <img src="./img/19.1his.jpg" className="img-sections" />
                  <img src="./img/19.2his.jpg" className="img-sections" />
                  <img src="./img/19.3his.jpg" className="img-sections" />
                  <img src="./img/19.4his.jpg" className="img-sections" />
                  <img src="./img/19.5his.jpg" className="img-sections" />
                  <img src="./img/19.6his.jpg" className="img-sections" />
                  <img src="./img/19.7his.jpg" className="img-sections" />
                  <img src="./img/19.8his.jpg" className="img-sections" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`content-sections ${getActiveClass(
              3,
              "active-content"
            )}`}
          >
            <p className="text-sections">
              Флаг Челябинской области является официальным символом Челябинской
              области как субъекта Российской Федерации. Флаг утверждён 27
              декабря 2001 года и внесён в Государственный геральдический
              регистр Российской Федерации под номером 898.
            </p>
            <p className="text-sections">
              23 января 2004 года Постановлением губернатора Челябинской области
              № 22, Красному знамени, присвоенному Челябинской области
              Центральным комитетом КПСС, Советом Министров СССР, ВЦСПС и
              Центральным комитетом ВЛКСМ Постановлением № 72 от 26 января 1974
              года, был присвоен статус — «Историческое знамя Челябинской
              области». Этим же Постановлением, флагу Челябинской области № 001
              был присвоен статус — «Флаг Челябинской области» (эталонный
              экземпляр).
            </p>
            <p className="text-sections">
              Флаг Челябинской области представляет собой прямоугольное
              полотнище с соотношением сторон 2:3 красного цвета, разделённое по
              горизонтали на три разновеликие полосы — красную (2/3 полотнища),
              жёлтую (1/6 полотнища) и красную (1/6 полотнища), и несущее
              посреди полотнища изображение навьюченного белого верблюда с
              жёлтой поклажей, составляющего 1/2 ширины полотнища».
            </p>
            <div className="gallery">
              <div className="row">
                <p className="img-text">
                  Постановление Законодательного Собрания Челябинской области от
                  27 декабря 2001 года о принятии Закона о Флаге Челябинской
                  области. ОГАЧО. Ф. Р-710. Оп. 1. Д. 479. Л. 82.
                </p>
                <div className="row-container">
                  <img src="./img/20his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Закон Челябинской области от 27 декабря 2001 года о Флаге
                  Челябинской области. ОГАЧО. Ф. Р-710. Оп. 1. Д. 479. Л. 73,
                  74, 75, 76, 77, 78, 79, 80.
                </p>
                <div className="row-container">
                  <img src="./img/21his.jpg" className="img-sections" />
                  <img src="./img/21.1his.jpg" className="img-sections" />
                  <img src="./img/21.2his.jpg" className="img-sections" />
                  <img src="./img/21.3his.jpg" className="img-sections" />
                  <img src="./img/21.4his.jpg" className="img-sections" />
                  <img src="./img/21.5his.jpg" className="img-sections" />
                  <img src="./img/21.6his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Постановление Губернатора Челябинской области от 23 января
                  2004 года о красном флаге как историческом знамени Челябинской
                  области. ОГАЧО. Ф. Р-825. Оп. 1. Д. 438. Л. 88.
                </p>
                <div className="row-container">
                  <img src="./img/22his.jpg" className="img-sections" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`content-sections ${getActiveClass(
              4,
              "active-content"
            )}`}
          >
            <p className="text-sections">
              Гимн Челябинской области принят законом Челябинской области «О
              гимне Челябинской области» от 1 октября 1997 г. № 23-ЗО. Музыка
              гимна написана композитором, заслуженным деятелем искусств
              Российской Федерации, профессором М. Д. Смирновым. Слова к гимну
              приняты путём внесения изменений законом Челябинской области от 8
              января 2002 г. № 66-ЗО. Слова написаны В. С. Алюшкиным.
            </p>
            <p className="text-sections">
              Гимн Челябинской области
              <br />
              Наш край величавый,
              <br />С петровских времён
              <br />
              Ты светом великих побед озарён,
              <br />
              Священным металлом,
              <br />
              Рукой трудовой,
              <br />
              Веками ты служишь России родной.
            </p>
            <p className="text-sections">
              Озёр твоих синих, лесов и полей
              <br />
              Нет в мире прекрасней, нет сердцу милей.
              <br />
              Надежда России, её часовой,
              <br />
              Хранишь ты любимой Отчизны покой.
              <br />
              Тобой мы гордимся, тебе мы верны,
              <br />
              Наш Южный Урал – честь и слава страны.
            </p>
            <div className="gallery">
              <div className="row">
                <p className="img-text">
                  Постановление Законодательного Собрания Челябинской области от
                  27 декабря 2001 года о принятии Закона о Гимне Челябинской
                  области. ОГАЧО. Ф. Р-710. Оп. 1. Д. 479. Л. 40.
                </p>
                <div className="row-container">
                  <img src="./img/23his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Закон Челябинской области от 27 декабря 2001 года о Гимне
                  Челябинской области. ОГАЧО. Ф. Р-710. Оп. 1. Д. 479. Л. 32,
                  33, 34, 35, 36, 37, 38, 39.
                </p>
                <div className="row-container">
                  <img src="./img/24his.jpg" className="img-sections" />
                  <img src="./img/24.1his.jpg" className="img-sections" />
                  <img src="./img/24.2his.jpg" className="img-sections" />
                  <img src="./img/24.3his.jpg" className="img-sections" />
                  <img src="./img/24.4his.jpg" className="img-sections" />
                  <img src="./img/24.5his.jpg" className="img-sections" />
                  <img src="./img/24.6his.jpg" className="img-sections" />
                </div>
              </div>
              <div className="row">
                <p className="img-text">
                  Постановление Законодательного Собрания Челябинской области от
                  27 декабря 2001 года о принятии Закона о Гимне Челябинской
                  области. ОГАЧО. Ф. Р-710. Оп. 1. Д. 479. Л. 40.
                </p>
                <div className="row-container">
                  <video width="200" heigh="200" controls>
                    <source src="./video/25.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
