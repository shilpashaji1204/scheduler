import React from "react";
import 'components/DayListItem.scss';
import classNames from "classnames";

const formatSpots = spots => {

    if (!spots) {
      return 'no spots remaining';
    } else if (spots === 1) {
      return '1 spot remaining';
    } else {
      return `${spots} spots remaining`;
    }
  }

export default function DayListItem(props) {

    const spots = formatSpots(props.spots);

    const dayClass= classNames('day-list__item', {
        'day-list__item--selected': props.selected,
        'day-list__item--full': props.spots === 0,
      });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected} data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spots}</h3>
    </li>
  );
}

