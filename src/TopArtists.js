import React, { useState, useEffect } from "react";
import './MainPage.css'

const API_TOKEN = "ecdb1da592dbfd10291117b8ac97afce";
const ROOT_URL = "http://ws.audioscrobbler.com";
const TOP_ARTISTS = ROOT_URL + "/2.0/?method=chart.gettopartists&api_key=" + API_TOKEN + "&format=json";

/** запрос и дисплей респонса исполнителей в виде таблицы */

export default function TopArtists() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch(TOP_ARTISTS)
            .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
            })
            .then(data => {
                setArtists(data.artists.artist);
            })
            .catch((error) => console.error("FETCH ERROR:", error))
    }, [])

    return (
        <>
        <div>
            <h1>Топ исполнителей</h1>
        </div>
        <table className="artist-table">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Прослушивания</th>
                    <th scope="col">Слушатели</th>
                </tr>
            </thead>
            <tbody>
                {artists.map(artist => 
                    <tr key={artist.name}>
                        <td><a href={artist.url}>{artist.name}</a></td>
                        <td>{artist.playcount}</td>
                        <td>{artist.listeners}</td>
                    </tr>)}
            </tbody>
        </table>
        </>
    )
}      

