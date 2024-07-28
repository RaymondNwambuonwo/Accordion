// single selection
// multiple selection
import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  //type your state
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedRow, setSelectedRow] = useState<any>();

  //type your function prop
  const singleSelect = (getRowID: string) => {
    setSelectedRow(getRowID === selectedRow ? null : getRowID);
  };

  return (
    <div className='container'>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map(item => (
            <div className='item'>
              <div onClick={() => singleSelect(item.id)} className='title'>
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selectedRow === item.id ? (
                <div className='content'>{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>Nothing found here sorry ;(</div>
        )}
      </div>
    </div>
  );
}
