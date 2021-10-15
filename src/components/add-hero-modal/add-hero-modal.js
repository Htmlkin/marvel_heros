import React, { Component } from 'react';
import './add-hero-modal.css';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

export default class AddHeroModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // днные HERO для нового массива героев
            name: null,
            description: null,
            tags: null,
            image: null,
            show: null,
        };

        this.onChangeName = this.onChangeName.bind(this); // биндим функцию для получения контекста this
        this.onChangeDescription = this.onChangeDescription.bind(this); // биндим функцию для получения контекста this
        this.onChangeTags = this.onChangeTags.bind(this); // биндим функцию для получения контекста this
        this.onChangeImage = this.onChangeImage.bind(this); // биндим функцию для получения контекста this
    }

    onChangeName(e) {
        // функция получения данных поля ввода имени и записи в name

        this.setState({ name: e.target.value });
    }
    onChangeDescription(e) {
        // функция получения данных поля ввода описаниия и записи в description

        this.setState({ description: e.target.value });
    }
    onChangeTags(e) {
        // функция получения данных поля ввода тегов записи в tags

        this.setState({ tags: e.target.value.split(', ') });
    }
    onChangeImage(e) {
        // функция получения данных поля ввода ссылки картинки и записи в image

        this.setState({ image: e.target.value });
    }

    onSubmit = (e) => {
        // функция SUBMITE для формы
        const pushLocalArr = []; // массив для сбора данных локального хранилища и новых данных из формы
        let getLocalArr = []; // массив для получения данных из локального хранилища
        e.preventDefault(); // отключаем обычный функционал кнопки submite

        if (localStorage.hasOwnProperty('newHero')) {
            // проверяем, есть в локальном хранилище массив newHero
            getLocalArr = JSON.parse(localStorage.getItem('newHero')); // получаем этот массив в массив getLocalArr

            for (let i = 0; i < getLocalArr.length; i++) {
                // перебираем каждый объект в массиве и добавляем его в массив pushLocalArr. Можно было юзать forEache
                pushLocalArr.push(getLocalArr[i]);
            }
        } else {
            // если данных нет, то читаем сообщение в console
            console.log(
                'No previous data was found. The data is entered into the array.'
            );
        }

        pushLocalArr.push(this.state); // добавляем новые данные из формы в pushLocalArr
        if (
            this.state.name !== null &&
            this.state.description !== null &&
            this.state.tags !== null &&
            this.state.image !== null
        ) {
            localStorage.setItem('newHero', JSON.stringify(pushLocalArr)); // вставляем весь сформированный массив объектов в локальное хранилище
            window.location.reload();
        } else {
            alert('Please Fill in All Fields');
        }
    };

    render() {
        return (
            <div className={this.props.className}>
                <form onSubmit={this.onSubmit} name="addForm">
                    <div className="form-floating mb-3 newHero">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Hero Name"
                            name="name"
                            onChange={this.onChangeName}
                        ></input>
                        <label htmlFor="floatingInput">Enter Hero Name</label>
                    </div>
                    <div className="form-floating mb-3 newHero">
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            placeholder="Enter Description"
                            name="description"
                            onChange={this.onChangeDescription}
                        ></input>
                        <label htmlFor="floatingInput">Enter Description</label>
                    </div>
                    <div className="form-floating mb-3 newHero">
                        <input
                            type="text"
                            className="form-control"
                            id="tags"
                            placeholder="Enter Tags"
                            name="tags"
                            onChange={this.onChangeTags}
                        ></input>
                        <label htmlFor="floatingInput">Enter Tags</label>
                    </div>
                    <div className="form-floating mb-3 newHero">
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            placeholder="Paste Image Link"
                            name="image"
                            onChange={this.onChangeImage}
                        ></input>
                        <label htmlFor="floatingInput">Paste Image Link</label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add Hero
                    </button>
                </form>
            </div>
        );
    }
}
