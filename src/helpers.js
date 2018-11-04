export function formatDate (date) {
    const dateArr = date.substring(0,10).split("-");
    const dict = {
      "01" : "January",
      "02" : "February",
      "03" : "March",
      "04" : "April",
      "05" : "May",
      "06" : "June",
      "07" : "July",
      "08" : "August",
      "09" : "September",
      "10" : "October",
      "11" : "November",
      "12" : "December"
    };
    const day = dateArr[2]; 
    const monthNum = dateArr[1];
    const year = dateArr[0];
    const assignMonth = monthNum => {
      let month = ""
      for (let i in dict) {
        month = i === monthNum ? dict[i] : i 
      }
      return month;
    }
    const month = assignMonth(monthNum);
    const formatedDate = `${day} ${month} ${year}`
    return formatedDate;
  }


export function capitalize (name) {
    return name.split(' ').map(word => (
        word[0].toUpperCase() + word.substr(1,word.length)
        .split('')
        .map(letter => letter.toLowerCase())
        .join('')))
        .join(' ');
} 
  