import React, { useState } from "react";
import s from "./styles.module.css";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const CarCard = ({ title, cost, selected, onClick, img }) => (
  <li className={`${s.item} ${selected ? s.selected : null}`} onClick={onClick}>
    <div className={s.title}>{title}</div>
    <div className={s.costTitle}>Стоимость</div>
    <div className={s.cost}>{cost} ₽</div>
    <div className={s.spacer} />
    <img src={img} alt="car" />
  </li>
);

const cardsInfo = [
  {
    title: "Стандарт",
    cost: 150,
    img:
      "https://dreamy-lumiere-90ff6f.netlify.app/static/media/standart.4f77edda.jpg",
  },
  {
    title: "Бизнес",
    cost: 150,
    img:
      "https://dreamy-lumiere-90ff6f.netlify.app/static/media/biznes.3d4d1c49.jpg",
  },
  {
    title: "Премиум",
    cost: 150,
    img:
      "https://dreamy-lumiere-90ff6f.netlify.app/static/media/premium.db10d13e.png",
  },
];

const CarSelect = ({ className }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className={`${s.card} ${className || ""}`}>
      <ul className={s.list}>
        {cardsInfo.map((item) => (
          <CarCard
            {...item}
            selected={selected === item.title}
            onClick={() => setSelected(item.title)}
            key={item.title}
          />
        ))}
      </ul>
      <Button
        className={s.button}
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Заказать
      </Button>
    </div>
  );
};

CarCard.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.number,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  img: PropTypes.string,
};

CarSelect.propTypes = {
  className: PropTypes.string,
};

export default CarSelect;
