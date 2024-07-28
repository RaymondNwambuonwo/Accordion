/* eslint-disable @typescript-eslint/no-explicit-any */
// single selection
// multiple selection
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  //type your state
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedRow, setSelectedRow] = useState<any>();
  const [enableMultiSelection, setEnableMultiSelection] =
    useState<boolean>(false);
  const [multiple, setMultiple] = useState<Array<any>>([]);

  //type your function prop
  const singleSelect = (getRowID: string) => {
    setSelectedRow(getRowID === selectedRow ? null : getRowID);
  };

  const multiSelect = (getRowID: string | number | undefined) => {
    const cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getRowID);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getRowID);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  };

  return (
    <div className='container'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map(item => (
            <div className='item'>
              <div
                onClick={
                  enableMultiSelection
                    ? () => multiSelect(item.id)
                    : () => singleSelect(item.id)
                }
                className='title'>
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className='acc-content '>{item.answer}</div>
                  )
                : selectedRow === item.id && (
                    <div className='acc-content '>{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>Nothing found here sorry ;(</div>
        )}
      </div>
    </div>
  );
}
