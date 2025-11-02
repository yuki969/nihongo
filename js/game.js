let スコア = 0;

// ランダムなひらがなを取得
function ランダムひらがな() {
  const インデックス = Math.floor(Math.random() * ひらがなリスト.length);
  return ひらがなリスト[インデックス];
}

// 問題を表示
function もんだいをだす() {
  const いまの = ランダムひらがな();
  document.getElementById('もんだい').innerText = いまの.ひらがな;

  const しんきのこたえ = こたえをさくせい(いまの.ローマ字);
  const コンテナ = document.getElementById('こたえ');
  コンテナ.innerHTML = '';

  しんきのこたえ.forEach(こたえ => {
    const ボタン = document.createElement('button');
    ボタン.innerText = こたえ;
    ボタン.onclick = () => こたえをあわせる(こたえ, いまの.ローマ字);
    コンテナ.appendChild(ボタン);
  });
}

// 選択肢を作る
function こたえをさくせい(せいかい) {
  const ちがうやつ = ひらがなリスト
    .filter(item => item.ローマ字 !== せいかい)
    .map(item => item.ローマ字)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  return [せいかい, ...ちがうやつ].sort(() => Math.random() - 0.5);
}

// 答えをチェック
function こたえをあわせる(えらんだ, せいかい) {
  if (えらんだ === せいかい) {
    スコア += 10;
    alert('せいかい！');
  } else {
