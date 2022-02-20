import React from 'react'
import { Container } from 'react-bootstrap'

export const Quotes = () => {
    const available_quotes = [
        'book',
        'movie',
        'people',
        'tv',
        'random',
        'video-game'
    ]
  return (
    <div>
    <Container>
        <h1>Favorite Quotes</h1>
        <p>
        The Facebook quotes section has inspired these pages. More of a reminder of what I've seen and what I was moved by when I first heard them. 
        </p>
        <p>
            {available_quotes.map((quote, index) => 
            <li key={index}><a href ={`quotes/${quote}`}>{quote}</a> </li>)
            }
        </p>
    </Container>
    </div>
  )
}
