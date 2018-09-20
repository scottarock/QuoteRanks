import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  addQuote(form: NgForm) {
    this.newQuoteEmitter.emit(this.newQuote);
    this.newQuote = new Quote();
    form.reset();
  }

}
