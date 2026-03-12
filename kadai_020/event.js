// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click',() =>{

  // textというidを持つHTML要素を取得し、定数に代入する
  const text =document.getElementById('text');

  // textの文字を変更する
  text.textContent = 'ボタンをクリックしました'
  
  // 変更したtextを表示する
  document.appendChild(text);
} )