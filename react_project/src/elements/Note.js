import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';


const Note = () => {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');


    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, [noteURL]);

    let getNote = (event) => {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    let searchNote = () => {
        window.location.href = env.url;
    }

    return (
        <div className="container">
            <div className="text text-center">
                <div className={lineClass}>
                    <h4>Note:</h4>
                    <div className="text-light border bg-body-tertiary">{noteText}</div>
                    <p>Скопируйте и сохраните текст заметки или сделайте скриншот экрана! Заметка будет автоматически удалена через 15 минут или после закрытия окна браузера</p>
                    <div><button onClick={searchNote} className="btn btn-primary text-light">Смотреть ещё одну заметку</button></div>
                </div>
                <div className={errorClass}>
                    <p>Произошла ошибка. Такой Note не найден!!</p>
                    <div><button onClick={searchNote} className="btn btn-primary text-light">Смотреть ещё одну заметку</button></div>
                </div>
                <div className={formClass}>
                    <div className="form-group p-5">
                        <form action="" onSubmit={getNote} className="d-flex flex-column">
                            <label htmlFor="url" className="text-center">Введите hash заметки</label>
                            <input type="text" name="url" id="url" className="form-control" />
                            <button type="submit" className="btn btn-primary text-light">Искать</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Note;