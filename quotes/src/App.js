import React, { Component } from 'react';
import Quotes from './components/Quotes';
import AddQuotes from './components/AddQuotes';


class App extends Component {
  state = {
    quotes: [
      { title: 'Motivation', text: '"However difficult life may seem, there is always something you can do and succed at."', author: '- Stephen Hawking', id: 1 },
      { title: 'Love', text: '"If you can make a woman laugh, you can make her do anything."', author: '- Marilyn Monroe', id: 2 },
      { title: 'Friends', text: '"A real friend is one who walks in when the rest of the world walks out."', author: '- Walter Winchell', id: 3 },
      { title: 'Life', text: '"Pursue what catches your heart, not what catches your eyes."', author: '- Roy T. Bennett', id: 4 },
      { title: 'Food', text: '"First we eat, then we do everything else."', author: '- M.F.K. Fisher', id: 5 },
      { title: 'Death', text: '"The goal isn’t to live forever, the goal is to create something that will."', author: '- Chuck Palahniuk', id: 6 }
    ]
  }
  addQuote = (quote) => {
    quote.id = Math.random();
    let quotes = [...this.state.quotes, quote]
    this.setState({
      quotes: quotes
    })
  }
  deleteQuote = (id) => {
    let quotes = this.state.quotes.filter(quote => {
      // if not equal to id
      return quote.id !== id
    });

    this.setState({
      quotes
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Top 6 Famous Quotes</h1>
        <Quotes deleteQuote={this.deleteQuote} quotes={this.state.quotes} />
        <AddQuotes AddQuotes={this.addQuote} />



      </div>
    );
  }
}

export default App

