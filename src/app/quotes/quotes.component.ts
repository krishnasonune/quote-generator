import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes?: string;

  constructor() { }

  get() {
    
    var list = [
      'At any given moment you have the power to say, this is not how the story is going to end.',
      'The purpose of our lives is to be happy.',
      'Get busy living or get busy dying',
      'You only live once, but if you do it right, once is enough',
      'If you want to live a happy life, tie it to a goal, not to people or things.',
      'Money and success don’t change people; they merely amplify what is already there',
      'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
      'If life were predictable it would cease to be life, and be without flavor.',
      'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.',
      'Curiosity about life in all of its aspects, I think, is still the secret of great creative people',
      'Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.',
      'Life is like riding a bicycle. To keep your balance, you must keep moving',
      'When we do the best we can, we never know what miracle is wrought in our life or the life of another.',
      'In three words I can sum up everything I’ve learned about life: It goes on',
      'I believe every human has a finite number of heartbeats. I don’t intend to waste any of mine',
      'If you can do what you do best and be happy, you’re further along in life than most people',
      'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve',
      'I may have hurt some people along the way, but I would like to be seen as somebody who has done his best to do the right thing for any situation and not compromised',
      'No amount of money ever bought a second of time',
      'Challenges are what make life interesting. Overcoming them is what makes life meaningful.',
      'more you know who you are, and what you want, the less you let things upset you.',
      'Happiness is within. It has nothing to do with how much applause you get or how many people praise you. Happiness comes when you believe that you have done something truly meaningful.',
      'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for'
    ];

    this.quotes = list[Math.floor(Math.random() * list.length)];

  }

  ngOnInit(): void {
  }

}
