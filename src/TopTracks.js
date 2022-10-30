import React, { useState, useEffect } from "react";
import './MainPage.css'

const API_TOKEN = "ecdb1da592dbfd10291117b8ac97afce";
const ROOT_URL = "http://ws.audioscrobbler.com";
const TOP_TRACKS = ROOT_URL + "/2.0/?method=chart.gettoptracks&api_key=" + API_TOKEN + "&format=json";


/** запрос и дисплей респонса треков в виде таблицы */
export default function TopTracks() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetch(TOP_TRACKS)
            .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
            })
            .then(data => {
                setTracks(data.tracks.track);
            })
            .catch((error) => console.error("FETCH ERROR:", error))
    }, [])

    return (
        <>
        <div>
            <h1>Топ треков</h1>
        </div>
        <table className="track-table">
            <thead>
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Исполнитель</th>
                    <th scope="col">Слушатели</th>
                </tr>
            </thead>
            <tbody>
                {tracks.map(track => 
                    <tr key={track.name}>
                        <td><a href={track.url}>{track.name}</a></td>
                        <td>{track.artist.name}</td>
                        <td>{track.listeners}</td>
                    </tr>)}
            </tbody>
        </table>
        </>
    )
}      