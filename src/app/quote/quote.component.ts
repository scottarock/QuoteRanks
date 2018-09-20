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
  }

  addNewQuote(quote: Quote): void {
    this.quoteList.push(quote);
  }

}
