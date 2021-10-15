import React, { Component } from 'react';

import CardsList from '../cards-list/';

import Footer from '../footer';
import HeaderBlock from '../header-block/';
import SearchBlock from '../search-block/';
import AddHeroBlock from '../add-hero-block/';
import { Route, Switch } from 'react-router-dom';
import HeroPage from '../hero-page/hero-page';
// import AddHeroModal from '../add-hero-modal/';
// Full Application
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [
                {
                    name: 'Spider Man',
                    image: 'https://www.rabstol.net/uploads/gallery/main/206/rabstol_net_amazing_spiderman_08.jpg',
                    description:
                        'Spider-Man is a superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books. He appears in American comic',
                    tags: ['spider', 'web', 'mutant'],
                },
                {
                    name: 'Iron Man',
                    image: 'https://i.pinimg.com/originals/33/a0/61/33a0618b0b705252cbbc831617ccd8a6.jpg',
                    description:
                        'Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. ',
                    tags: ['technology', 'tech armor'],
                },
                {
                    name: 'Black widow',
                    image: 'https://cdn.wallpapersafari.com/55/43/pwJFqZ.jpg',
                    description:
                        'Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 24th film in the Marvel Cinematic Universe (MCU).',
                    tags: ['hypnotist', 'spy'],
                },
                {
                    name: 'Venom',
                    image: 'https://images3.alphacoders.com/932/932825.jpg',
                    description:
                        'Venom is a 2018 American superhero film featuring the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel[5] and Tencent Pictures. Distributed by Sony Pictures Releasing... ',
                    tags: ['mutant', 'symbiot'],
                },
                {
                    name: 'Wolverine',
                    image: 'https://cdn.wallpapersafari.com/61/10/jAcaOz.jpg',
                    description:
                        'Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. ',
                    tags: ['mutant', 'regeneration'],
                },
                {
                    name: 'Thor',
                    image: 'https://n1s1.hsmedia.ru/d0/b8/9e/d0b89ea24b3020f86a7e44e601c0d7fa/900x900_0xac120002_5576645011540484414.jpg',
                    description:
                        'Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 24th film in the Marvel Cinematic Universe (MCU).',
                    tags: ['magic', 'Mjolnir', 'thunder'],
                },
            ],
            term: '',
        };
    }

    //method Search Hero//
    searchHero = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            let all =
                item.tags.toString().toLowerCase() +
                item.name.toString().toLowerCase();

            return all.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    // deleteItem = (name) => {
    //     this.setState(({ heroes }) => {
    //         const index = heroes.findIndex((e) => e.name === name);
    //         console.log(index);

    //         const newArr = [
    //             ...heroes.slice(0, index),
    //             ...heroes.slice(index + 1),
    //         ];

    //         return {
    //             heroes: newArr,
    //         };
    //     });
    // };

    render() {
        const addHeroes = JSON.parse(localStorage.getItem('newHero'));
        const { heroes, term } = this.state;
        let allHeroes = [];

        if (localStorage.hasOwnProperty('newHero')) {
            allHeroes = [...heroes, ...addHeroes];
        } else {
            allHeroes = [...heroes];
        }

        const visibleCards = this.searchHero(allHeroes, term);

        return (
            <div className="app">
                <HeaderBlock />

                <Route path="/" exact>
                    <SearchBlock onUpdateSearch={this.onUpdateSearch} />
                    <AddHeroBlock />
                    <CardsList
                        cards={visibleCards}
                        onDelete={this.deleteItem}
                    />
                </Route>
                <Route path="/:name" exact component={HeroPage} name="name" />

                <Footer />
            </div>
        );
    }
}
