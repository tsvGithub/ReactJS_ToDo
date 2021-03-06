import React from "react";
import classNames from "classnames";

import removeSvg from "../../assets/img/remove.svg";

import Badge from "../Badge";

import "./List.scss";

const List = ({ items, isRemovable, onClick, onRemove }) => {
  const removeList = (item) => {
    if (window.confirm("Do you really want to delete the List?")) {
      onRemove(item);
    }
  };
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        //className zapuskaet funkciju ClassNames iz biblioteki 'classnames' i ona
        //soedinjaet(concat) classy v odin: item.className u nas eto 'list__add-button'
        //i object {active: item.active} proverjaet, esli item v sostojamii active,
        //to dobavljaet class Active
        <li key={index} className={classNames(item.className, { active: item.active })}>
          {/*esli estj icon, ispoljzuj eje, esli net - vyzovi Badge (kruzhok) 
          i peredaj cvet kruzhka */}
          <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img className="list__remove-icon" src={removeSvg} alt="Remove icon" onClick={() => removeList(item)} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
