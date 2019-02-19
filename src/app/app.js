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

    addItem = () => {
        const newItem = this.createItem();
        const newArray = [...this.state.items, newItem];

        this.setState({items: newArray});
    }

    removeItem = (id) => {

        const newArray = this.state.items.filter((el) => {
            return el.id !== id;
        })

        this.setState({items: newArray});
    }


    onUpdateItem = (item) => {
        let newItem = item;

        newItem.costTotal = this.costTotal(newItem);

        let newArray = this.state.items.map((el) => {
            if (newItem.id === el.id) return newItem;
            return el;
        });

        this.setState({items: newArray}, () => {
            this.onCountAll();
        });
    }

    costTotal(item) {
        let {cost, value, costPerClient} = item;
        let total;

        if (+cost !== 0 && +value !== 0 && +costPerClient !== 0) {
            total = (+cost / +value) * +costPerClient;
            total = total.toFixed(2);

            return total;
        }

    }

    onCountAll = () => {
        let {items} = this.state;

        let total = 0;

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
                    onCountAll={this.onCountAll}
                    removeItem={this.removeItem}/>

                <SidePanel
                    addItem={this.addItem}
                    costTotal={costTotal || 0}/>

                <footer className="footer">
                    <p className="footer__item">Расчет себестоимости (react.js)</p>
                    <span className="footer__item"><a target="blank" href="https://vk.com/postnov_daniil">Постнов Даниил</a></span>
                </footer>
            </div>
        )
    }
}