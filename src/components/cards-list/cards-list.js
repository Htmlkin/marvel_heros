import React from 'react';
import './cards-list.css';

import CardsListItem from '../cards-list-item/';

// Cards Block

const CardsList = ({ cards, onDelete }) => {
    const elements = cards.map((item) => {
        const { name, ...itemProps } = item;
        // const clickHero = () => {
        //     console.log(item.name);
        //     this.props.history.push(item.name);
        // };

        const tagsArr = item.tags;
        const tagsArrShow = [];

        for (let i = 0; i < tagsArr.length; i++) {
            tagsArrShow[i] = tagsArr[i];
            tagsArrShow[i] = (
                <span className="tags" key={i}>
                    {tagsArrShow[i]}
                </span>
            );
        }

        const imageHero = {
            background: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        };

        return (
            <div
                className="heroCard"
                style={imageHero}
                key={item.name}
                // onClick={clickHero}
            >
                <CardsListItem
                    {...itemProps}
                    name={item.name}
                    description={item.description}
                    tags={tagsArrShow}
                    image={item.image}
                    // onDelete={() => onDelete(name)}
                />
            </div>
        );
    });

    return <div className="cardsWrap">{elements}</div>;
};

export default CardsList;
