import React, { Component } from 'react';
import AddHeroModal from '../add-hero-modal/';

import './add-hero-block.css';

export default class AddHeroBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'add__form',
        };
    }

    render() {
        const { className } = this.state;

        const showAdd = () => {
            if (className.includes('show')) {
                this.setState({ className: 'add__form' });
            } else {
                this.setState({ className: 'add__form show' });
            }
        };

        return (
            <>
                <div className="addBtn">
                    <div className="btn__wrap" onClick={showAdd}>
                        <div className="add_btn_img"></div>
                        <span className="add-hero">Add Hero</span>
                    </div>
                </div>

                <AddHeroModal className={className} />
            </>
        );
    }
}
