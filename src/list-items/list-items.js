import React from 'react';
import Item from '../item';

import './list-items.css';

const ListItems = (props) => {

    let {items, onUpdateItem, removeItem} = props;

    const elements = items.map((item) => {
        return (
            <li key={item.id}>
                <Item
                    {...item}
                    onUpdateItem={onUpdateItem}
                    removeItem={removeItem}
                />
            </li>
        )
    });

    return (
        <ul className="list-items">
            {elements}
        </ul>
    )
}


export default ListItems;