import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteList: Array<Quote> = [];

  constructor() { }

  ngOnInit() {
    // test data
    this.quoteList.push(new Quote('Whoops', 'me'));
    this.quoteList.push(new Quote('Wherever you go, there you are', 'Buckaroo Bonzai', 327));
    this.quoteList.push(new Quote('covfefe', 'Trump', -1000000));
  }

  // event handlers from the child components - new and list

  // quote new component add quote event
  addNewQuote(quote: Quote): void {
    this.quoteList.push(quote);
  }

  // quote list component add vote event
  voteUp(quote: Quote): void {
    quote.voteUp();
  }

  // quote list component subtract vote event
  voteDown(quote: Quote): void {
    quote.voteDown();
  }

  // quote list component delete quote event
  deleteQuote(quote: Quote): void {
    this.quoteList.splice(this.quoteList.indexOf(quote), 1)
  }

}
