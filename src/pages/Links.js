import React from 'react'
import { Container, Row, Column, Col } from 'react-bootstrap'

const Links = () => {
    const items = {
        facebook: 'https://facebook.com/hxrsmurf',
        twitter: 'https://twitter.com/hxrsmurf',
        steam: 'https://steamcommunity.com/id/hxrsmurf/',
        linkedin: 'https://www.linkedin.com/pub/kevin-murphy/5a/57b/213/',
        youtube: 'https://youtube.com/pngassassin1993',
        twitch:'https://twitch.tv/hxrsmurf',
        github:'https://github.com/hxrsmurf'

    }
  return (
    <div>
    <head><base href="/"/></head>
    <Container>
        <h1>Links</h1>
        <Row>
            {
            Object.entries(items).map(
                ([key, value]) =>
                <Col>
                <a href={`${value}`} key={key} target="_blank"><img src={'/links/' + `${key}` + '.jpg'}  width="112" height="113" /></a>
                </Col>
            )}
        </Row>

    </Container>
    </div>
  )
}

export default Links