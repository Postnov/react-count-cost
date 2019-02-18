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

        this.setState({
            [label]: e.target.value
        });

        this.props.onUpdateItem(state);
    }

    render() {
        return (
            <div className="item">
                <input
                    type="text"
                    onChange={(e) => this.updateItem(e, 'label')}
                    value={this.state.label}
                    placeholder="Наименование" />
                <input
                    type="number"
                    onChange={(e) => this.updateItem(e, 'cost')}
                    value={this.state.cost}
                    placeholder="Стоимость" />
                <input
                    type="number"
                    onChange={(e) => this.updateItem(e, 'value')}
                    value={this.state.value}
                    placeholder="Объем" />
                <input
                    type="number"
                    onChange={(e) => this.updateItem(e, 'costPerClient')}
                    value={this.state.costPerClient}
                    placeholder="Трата на единицу" />

                <div className="price">
                    <span className="item__sum-one"> { this.state.costTotal }</span>
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
