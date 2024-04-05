export const createPost = (arr, Classes, maxpost, a, b, c) => {
    if (arr.length === maxpost) {
      return console.log(`Danh sách đầy`);
    }
    let obj = new Classes(a, b, c);
    JSON.parse(JSON.stringify(arr.push([obj])));
  };
  
 export  const includeByTitle = (arr1) => {
    arr1.includes((title) => {
      return arr1.title === title;
    });
  };
  
  