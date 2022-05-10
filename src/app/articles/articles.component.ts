import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article.interface';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  currentSelection!: string;
  articles: Article[] = [
    {
      id: 1,
      title: 'For a More Creative Brain',
      text: 'Nearly all great ideas follow a similar creative process and this article explains how this process works. Understanding this is important because creative thinking is one of the most useful skills you can possess. Nearly every problem you face in work and in life can benefit from innovative solutions, lateral thinking, and creative ideas.',
      color: 'blue',
    },
    {
      id: 2,
      title: 'The Ultimate Productivity Hack is Saying No',
      text: 'The ultimate productivity hack is saying no. Not doing something will always be faster than doing it. This statement reminds me of the old computer programming saying, “Remember that there is no code faster than no code".',
      color: 'black',
    },
    {
      id: 3,
      title: 'What I Do When I Feel Like Giving Up',
      text: 'I am struggling today. If you’ve ever struggled to be consistent with something you care about, maybe my struggle will resonate with you too. It has been 939 days since November 12, 2012. That’s the date when I first published an article on JamesClear.com and it’s almost 2 years and 7 months ago. During these 939 mostly glorious, sometimes frustrating days, I have written a new post every Monday and Thursday. Week after week. Month after month. Year after year.',
      color: 'red',
    },
    {
      id: 4,
      title: '7 Ways to Retain More of Every Book You Read',
      text: "There are many benefits to reading more books, but perhaps my favorite is this: A good book can give you a new way to interpret your past experiences. Whenever you learn a new mental model or idea, it's like the “software” in your brain gets updated. Suddenly, you can run all of your old data points through a new program. You can learn new lessons from old moments. As Patrick O'Shaughnessy says, “Reading changes the past.”",
      color: 'green',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleButtonClicked(articleColor: string) {
    this.currentSelection = articleColor;
  }
}
