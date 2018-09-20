import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {

  @Output() newQuoteEmitter = new EventEmitter();
  newQuote: Quote = new Quote();

  constructor() { }

  ngOnInit() {
  }

  addQuote() {
    console.log(this.newQuote);
    this.newQuoteEmitter.emit(this.newQuote);
    this.newQuote = new Quote();
  }

}
