import React from 'react';

const Quotes = ({ quotes, deleteQuote }) => {
    const quoteList = quotes.map(quote => {
        return (
            <div className="quote-container" key={quote.id}>
                <div className="quote">
                    <div className="title">{quote.title}</div>
                    <div>{quote.text}</div>
                    <div className="author">{quote.author}</div>
                    <button className="btn" onClick={() => { deleteQuote(quote.id) }}>Delete</button>

                </div>

            </div>
        )
    })



    return (
        <div className="quote-list">
            {quoteList}
        </div>
    )
}

export default Quotes
