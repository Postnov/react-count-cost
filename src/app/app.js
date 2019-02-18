import React, {Component} from 'react';

import ListItems from '../list-items';
import SidePanel from '../side-panel';

import './app.css';


export default class App extends Component {

    maxId = 10;

    state = {
        items: [
            this.createItem(),
        ]
    }

    createItem() {
        return {
            label: '',
            cost: '',
            value: '',
            costPerClient: '',
            costTotal: 0,
            id: this.maxId++
        }
    }

    onItemCount() {

    }

    onUpdateItem = (item) => {
        const newItem = item;
        const newArray = this.state.items.map((el) => {
            if (newItem.id === el.id) return newItem;
            return el;
        });

        this.setState({items: newArray});
    }

    render() {
        let {items} = this.state;
        return (
            <div className="app">
                <ListItems
                    items={items}
                    onUpdateItem={this.onUpdateItem}/>
                <SidePanel />

                <footer className="footer">
                    <p className="footer__item">Расчет себестоимости (vue.js)</p>
                    <span className="footer__item"><a target="blank" href="https://vk.com/postnov_daniil">Постнов Даниил</a></span>
                </footer>
            </div>
        )
    }
}