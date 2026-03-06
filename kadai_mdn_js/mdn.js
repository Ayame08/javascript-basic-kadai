// 今日の年月日を取得
const today = new Date();
// 年、月、日をそれぞれ取得
const year = today.getFullYear();
const month = today.getMonth()+1;
const day = today.getDate();

// x年x月x日の形で表示
console.log(year+'年'+month+'月'+day+'日');

