import React from 'react'
import { Col, Row } from 'antd'
import "antd/dist/antd.min.css"
import TopArtists from './TopArtists'
import './MainPage.css'
import TopTracks from './TopTracks'


export default function MainPage() {
  return (
    <>
      <div className='page-content'>
        <div className='welcome-box'>
          <h1>
            Добро пожаловать на клон last.fm
          </h1>
          <p>
            На этой странице вы можете просмотреть топ 50 популярных исполнителей и самых прослушиваемых треков на данный момент
          </p>
        </div>
        <br />
        <hr />
        <Row
        gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}>
          <Col className="gutter-row" xxl={4} xl={2} lg={0}></Col>
          <Col className="gutter-row" xxl={8} xl={10} lg={12}><TopArtists /></Col>
          <Col className="gutter-row" xxl={8} xl={10} lg={12} ><TopTracks /></Col>
          <Col className="gutter-row" xxl={4} xl={2} lg={0}></Col>
        </Row>
      </div>
    </>
  )
}

