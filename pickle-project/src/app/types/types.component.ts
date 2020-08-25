import { Component, OnInit } from '@angular/core';
import { types } from 'util';
import { link } from 'fs';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

type = [
  {
    name: "Bread and Butter - AKA: Sweet and Sour",
    from: "United States - Illinois during The Great Depresstion",
    taste: "Sweet and Tangy",
    made: "fully fermented.",
    link: "https://www.simplyrecipes.com/recipes/bread_and_butter_pickles/",
  },
  {
    name: "Dill",
    from: "",
    taste: "Sour",
    made: "made with dill and garlic that is left to fully ferment.",
    link: "https://www.thekitchn.com/how-to-make-dill-pickles-cooking-lessons-from-the-kitchn-193350",
  },
  {
    name: "Half Sour",
    from: "United States - New York",
    made: "left to ferment half as long as any full flavor pickle.",
    taste: "taste like a dill pickle just less sour.",
    link: "https://bakeatmidnite.com/half-sour-pickles/",
  },
  {
    name: "Savanyú Uborka - AKA: Summer Pickles",
    from: "Hungry",
    taste: "Sweet and Sour and Salty",
    made: "these pickles are made with out the use of vinger like most, it does use dill and garlic and uses bread ad a lid so the bread yeast will help with the fermentation.",
    link: "https://www.thespruceeats.com/hungarian-summer-dill-pickles-recipe-1136694",

  },
  {
    name: "Kosher Dill",
    from: "Ukraine, Poland, Lithuania and Russia",
    taste: "Sour, Garlic, Vinagar",
    made: "made with garlic and dill then left to fully ferment.",
    link: "https://www.bonappetit.com/recipes/article/the-ultimate-straight-up-regular-kosher-dill-pickle-recipe",
  },
  {
    name: "Toursi/Tουρσί",
    from: "Greece",
    taste: "Fennel",
    made: "boilled and left to fully ferment",
    link: "https://www.thegreekfood.com/special/pickle-recipe-toursi-how-to-make-your-own-traditional-pickles/",
  },
  {
    name: "German/Polish AKA: Salzgurken/Ogórek Kiszony/kwaszony",
    from: "Germany and Poland",
    taste: "Sour, Mustard, Horseradish, Garlic",
    made: "these pickles, like Half Sour, are fermented for half the the time of other pickles, they are also made with less salt then other pickles.",
    link: "https://polishhousewife.com/ogorki-kiszone-polish-pickles/",
  },
  {
    name: "Mango Pickles",
    from: "India",
    taste: "Sour and Spicy ",
    made: "these are usually relished, made with strong spices and young bright green cucumbers.",
    link: "https://www.indianhealthyrecipes.com/mango-pickle-recipe/",
  }
  
]

  constructor() { }

  ngOnInit(): void {
  }
  
}