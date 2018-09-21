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
    this.quoteList.push(new Quote('Whoops', 'me'));
    this.quoteList.push(new Quote('Wherever you go, there you are', 'Buckaroo Bonzai', 327));
    this.quoteList.push(new Quote('covfefe', 'Trump', -1000000));
  }

  addNewQuote(quote: Quote): void {
    this.quoteList.push(quote);
  }

  voteUp(quote: Quote): void {
    quote.voteUp();
  }

  voteDown(quote: Quote): void {
    quote.voteDown();
  }

  deleteQuote(quote: Quote): void {
    this.quoteList.splice(this.quoteList.indexOf(quote), 1)
  }

}
