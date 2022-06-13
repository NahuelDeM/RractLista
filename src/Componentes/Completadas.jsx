import React from "react";
import Checkbox from "./Checkbox";

const CompletadasList = (props) => {
  const { list2, setList2 } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    const updateList = list2.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList2(updateList);
  };

  const onClickRemoveItem = (e) => {
    const updateList = list2.filter((item) => !item.done);
    setList2(updateList);
  };

  const chk = list2.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {list2.length ? chk : "Sin Tareas completadas"}
      {list2.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Borrar Selecionadas
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default CompletadasList;
