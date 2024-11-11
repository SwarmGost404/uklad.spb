import Link from "next/link";

import {Card} from "./Card";
import {LocalCard} from "./LocalCard";




export default function Home() {
  return (
    <div id="root">
      <header>
        <Link href="/"><input id="logo" type="button" value="Уклад" /></Link>
        <nav>
          <a href="#ivent"><input type="button" value="Мероприятия" /></a>
          <a href="#classes"><input type="button" value="Расписание" /></a>
          <a href="#contact"><input type="button" value="Контакты" /></a>
        </nav>
      </header>
      <main>
        <div id="cover">
          <h1>УКЛАД</h1>
          <p>Добро пожаловать в нашу дружную семью!</p>
        </div>
        <div id="ann">
          <article>
            <h2>Фольклорный семейный клуб «Уклад» приглашает вас на свои занятия!</h2>
            <p>У нас вы сможете познакомиться с русскими народными песнями, танцами и играми, научиться играть на народных музыкальных инструментах – балалайке, волынке, гуслях и гармошке. Сможете смастерить себе русский традиционный костюм – сарафан, рубашку или порты. Освоите разные виды традиционного рукоделия: народная кукла, лоскутное шитье, золотное шитье, украшения из бисера, познакомитесь с традиционной обрядовой кухней. Все занятия проходят в светлых и отлично оборудованных помещениях, некоторые из которых стилизованы под русский фольклор</p>
          </article>
        </div>
        <div id="ivent">
          <div className="backcard">
            <Card num={1} />
            <Card num={2} />
            <Card num={3} />
          </div>
        </div>
        <div id="classes">
          <div id="cardclass">
            <LocalCard date="Ветерочки" time="Каждый четверг" place="17:00-21:00" inf="От 14 лет до 35 лет" />
            <LocalCard date="Традиционное рукоделие" time="Каждую среду" place="16:00-17:30" inf="Группа для взрослых" />
            <LocalCard date="Традиционный костюм" time="Каждый четверг" place="16:00-20:00" inf="Группа для взрослых" />
            <LocalCard date="Ветерки" time="Каждую среду" place="17:30-19:30" inf="от 7 до 11 лет" />
          </div>
        </div>
        <div id="contact">
          <h2>Хотите записаться на занятия</h2>
          <p>Вы можете прийти в наш ПМК "Берёзка" по адресу ул. Шаумяна 31</p>
          <Link target="_blank" href="https://yandex.ru/maps/org/podrostkovo_molodyozhny_klub_beryozka/1112826246/?ll=30.415231%2C59.931094&utm_source=share&z=16">
            <input type="button" value="смотреть на карте" />
          </Link>
          <img src="/put.png" width={400} />
        </div>
      </main>
    </div>
  );
}
