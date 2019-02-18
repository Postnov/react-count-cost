import React, {Component} from 'react';

import ListItems from '../list-items';
import SidePanel from '../side-panel';

import './app.css';


export default class App extends Component {

    maxId = 10;

    state = {
        items: [
            this.createItem(),
        ],
        costTotal: 0
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

    onUpdateItem = (item) => {
        const newItem = item;
        const newArray = this.state.items.map((el) => {
            if (newItem.id === el.id) return newItem;
            return el;
        });

        this.setState({items: newArray});
    }

    addItem = () => {
        const newItem = this.createItem();
        const newArray = [...this.state.items, newItem];

        this.setState({items: newArray});
    }

    onCountAll = () => {
        let {items, costTotal} = this.state;

        let total = costTotal;

        items.forEach((el) => {
            total += +el.costTotal;
        });

        this.setState({ costTotal: total });
    }

    render() {
        let {items, costTotal} = this.state;
        return (
            <div className="app">
                <ListItems
                    items={items}
                    onUpdateItem={this.onUpdateItem}
                    onCountAll={this.onCountAll}/>

                <SidePanel
                    addItem={this.addItem}
                    costTotal={costTotal}/>

                <footer className="footer">
                    <p className="footer__item">Расчет себестоимости (vue.js)</p>
                    <span className="footer__item"><a target="blank" href="https://vk.com/postnov_daniil">Постнов Даниил</a></span>
                </footer>
            </div>
        )
    }
}