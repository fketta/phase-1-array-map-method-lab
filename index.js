const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

////////////////////////////////////////This is the way i intially did it, but the test wouldnt let me pass

// const titleCased = (sentence)=> {
//       let words = sentence.split(" ");
//       let titleSentence = words.map(function(word){
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       })
//       return titleSentence.join(" ");
//     }
// const newTutorials = tutorials.map(titleCased)
// console.log(newTutorials);

//////////////////////////////////////////////////////////

const titleCased = ()=> {
  return tutorials.map(function(sentence){
          let words = sentence.split(" ");
          let titleSentence = words.map(function(word){
          return word.charAt(0).toUpperCase() + word.slice(1);
      })
      return titleSentence.join(" ");
    })
  }

  console.log(titleCased())

