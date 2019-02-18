import React from 'react';

import './side-panel.css';

const SidePanel = ({addItem, costTotal}) => {

    return (
        <aside className="side-panel">
            <div className="side-panel__item ">
                <button className="add-item" onClick={addItem}>+</button>
            </div>
            <div className="side-panel__item">
                <span>1</span>пунктов
            </div>
            <div className="side-panel__item ">
                <span>{costTotal}</span> руб. на единицу
            </div>
        </aside>
    )
}

export default SidePanel;