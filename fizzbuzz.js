import handler from './handler';

export const main = handler(async (event, context) => {
  let output = [];
  const data = JSON.parse(event.body);
  for(const value of data) {
    if(isNaN(value) || value === null){
      output.push('Invalid Item');
      continue;
    }
    if(value % 5 === 0 && value % 3 === 0) {
      output.push('FizzBuzz');
      continue;
    };
    if(value % 3 === 0){
      output.push('Fizz');
      continue;
    }
    if(value % 5 === 0){
      output.push('Buzz');
      continue;
    }
    output.push(`Divided ${value} by 3`);
    output.push(`Divided ${value} by 5`);
  }
  return output;
});
