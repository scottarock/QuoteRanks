import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  @Input() quotes: Array<Quote>;
  @Output() addVoteEmitter = new EventEmitter();
  @Output() subtractVoteEmitter = new EventEmitter();
  @Output() deleteQuoteEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voteUp(quote: Quote): void {
    this.addVoteEmitter.emit(quote);
  }

  voteDown(quote: Quote): void {
    this.subtractVoteEmitter.emit(quote);
  }

  remove(quote: Quote): void {
    this.deleteQuoteEmitter.emit(quote);
  }

}
