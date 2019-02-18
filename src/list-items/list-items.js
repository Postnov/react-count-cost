import React from 'react';
import Item from '../item';

import './list-items.css';

const ListItems = (props) => {

    let {items, onUpdateItem, onCountAll} = props;

    const elements = items.map((item) => {
        return (
            <li key={item.id}>
                <Item
                    {...item}
                    onUpdateItem={(state) => onUpdateItem(state)}
                    onCountAll={() => onCountAll()}
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