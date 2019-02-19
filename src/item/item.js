import React, {Component} from 'react';

import './item.css';

export default class Item extends Component {

    state = {
        label: this.props.label,
        cost: this.props.cost,
        value: this.props.value,
        costPerClient: this.props.costPerClient,
        costTotal: this.props.costTotal,
        id: this.props.id
    }

    updateItem(e, label) {
        let {state} = this;
        let value = e.target.value

        this.setState((state) => {
            state[label] = value;
            return {state}
        });

        this.props.onUpdateItem(state);
    }

    render() {
        let {costTotal} = this.state;

        return (
            <div className="item">
                <input
                    type="text"
                    onKeyUp={(e) => this.updateItem(e, 'label')}
                    onChange={(e) => this.updateItem(e, 'label')}
                    placeholder="Наименование" />
                <input
                    type="number"
                    onKeyUp={(e) => this.updateItem(e, 'cost')}
                    onChange={(e) => this.updateItem(e, 'cost')}
                    placeholder="Стоимость" />
                <input
                    type="number"
                    onKeyUp={(e) => this.updateItem(e, 'value')}
                    onChange={(e) => this.updateItem(e, 'value')}
                    placeholder="Объем" />
                <input
                    type="number"
                    onKeyUp={(e) => this.updateItem(e, 'costPerClient')}
                    onChange={(e) => this.updateItem(e, 'costPerClient')}
                    placeholder="Трата на единицу" />

                <div className="price">
                    <span className="item__sum-one"> { costTotal }</span>
                    <span> руб.</span>
                </div>

                <div className="icons">
                    <svg className="cross" viewBox="0 0 24 24">
                        <path xmlns="http://www.w3.org/2000/svg" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"></path>
                    </svg>
                    <svg className="reset" viewBox="0 0 24 24">
                        <path d="M12 0c3.31 0 6.291 1.353 8.459 3.522l2.48-2.48 1.061 7.341-7.437-.966 2.489-2.489c-1.808-1.807-4.299-2.928-7.052-2.928-5.514 0-10 4.486-10 10s4.486 10 10 10c3.872 0 7.229-2.216 8.89-5.443l1.717 1.046c-2.012 3.803-6.005 6.397-10.607 6.397-6.627 0-12-5.373-12-12s5.373-12 12-12z"/>
                    </svg>
                </div>
            </div>
        )

    }


}
