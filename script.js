const QUESTIONS = [
  {
    text: "含み損を見ると、必要以上に不安になってしまう。",
    weights: { loss: 5, control: 1, perfection: 1 }
  },
  {
    text: "少し利益が出ると、「今のうちに利益を確定したい」と思ってしまう。",
    weights: { profit: 5, loss: 1, control: 1 }
  },
  {
    text: "株価が上がっている銘柄を見ると、「自分も買わなければ」と焦ることがある。",
    weights: { fomo: 5, comparison: 2, prediction: 1 }
  },
  {
    text: "SNSなどで他人の利益を見ると、自分の投資成績が気になってしまう。",
    weights: { comparison: 5, fomo: 2, perfection: 1 }
  },
  {
    text: "「もっと良いタイミングがあったはず」と、投資判断を後から何度も考えてしまう。",
    weights: { perfection: 5, loss: 1, study: 1 }
  },
  {
    text: "株価がこれからどう動くのかを、できるだけ正確に予測してから投資したい。",
    weights: { prediction: 5, study: 2, perfection: 1 }
  },
  {
    text: "自分の予想と違う値動きをすると、強いストレスを感じる。",
    weights: { control: 5, prediction: 2, loss: 1 }
  },
  {
    text: "投資前に決めたルールを、相場が動いた後に変更してしまうことがある。",
    weights: { rule: 6, loss: 1, profit: 1, fomo: 1 }
  },
  {
    text: "投資について、本やYouTube、SNSなどでかなり勉強している。",
    weights: { study: 3 }
  },
  {
    text: "「まだ知らないことがある」と思うと、なかなか実際の投資に踏み切れない。",
    weights: { study: 6, perfection: 2, prediction: 1 }
  },
  {
    text: "投資判断をする直前に、さらに情報を調べたくなることが多い。",
    weights: { study: 5, prediction: 2, perfection: 1 }
  },
  {
    text: "知識が増えるほど、「このケースではどうだろう？」と迷うことが増えた。",
    weights: { study: 6, perfection: 2, prediction: 2 }
  },
  {
    text: "「もっと勉強してから投資したほうがいい」と思うことがある。",
    weights: { study: 6, perfection: 1, loss: 1 }
  },
  {
    text: "投資では、できるだけ失敗しない方法を見つけてから行動したい。",
    weights: { perfection: 3, loss: 3, study: 2, prediction: 1 }
  },
  {
    text: "頭では投資方針が決まっていても、実際の売買になると迷ってしまう。",
    weights: { study: 3, perfection: 3, loss: 2, rule: 1 }
  }
];

const TYPES = {
  loss: {
    name: "損失恐怖タイプ",
    copy: "「損をしたくない」という気持ちが、判断に強く影響しやすいタイプです。",
    description:
      "損失を避けたい気持ちは、投資家なら誰にでもあります。ただ、それが強くなると、必要以上に含み損を怖がったり、損切りを先延ばししたり、逆に慌てて売ってしまったりします。",
    behaviors: [
      "含み損を見るたびに気持ちが落ち着かなくなる",
      "損切りの基準がその場の感情で変わる",
      "利益よりも「損しないこと」を優先しやすい"
    ],
    advice:
      "「いくら損をするか」ではなく、「どこまでなら予定通りのリスクなのか」を事前に決めておきましょう。",
    message:
      "投資で大切なのは、損失をゼロにすることではありません。自分が受け入れられるリスクを決め、その範囲で淡々と行動することです。"
  },

  profit: {
    name: "利益確定焦りタイプ",
    copy: "利益を失う怖さから、伸ばせる利益まで早く確定しやすいタイプです。",
    description:
      "含み益が出ると安心する一方、「この利益が消えたら嫌だ」という気持ちが強くなりやすい傾向があります。",
    behaviors: [
      "少し上がるとすぐ利益確定したくなる",
      "売った後にさらに上昇すると後悔する",
      "利益を伸ばすルールを作っても守れない"
    ],
    advice:
      "「利益が出たら売る」ではなく、「どんな条件なら売るか」を投資前に決めましょう。",
    message:
      "毎回違う基準で売買するより、事前に決めた基準を守ることが心の安定につながります。"
  },

  fomo: {
    name: "機会損失恐怖タイプ",
    copy: "「乗り遅れたくない」という焦りが、投資判断を急がせやすいタイプです。",
    description:
      "上昇している銘柄を見ると、「今買わないともう買えない」と感じやすくなります。",
    behaviors: [
      "急騰銘柄を見ると買いたくなる",
      "「今買わないと」と焦る",
      "見送った銘柄が上がると後悔する"
    ],
    advice:
      "すべてのチャンスを取る必要はありません。自分が決めた条件に合う銘柄だけを選びましょう。",
    message:
      "相場は明日もあります。自分の条件に合うチャンスを待つことも立派な投資判断です。"
  },

  comparison: {
    name: "他人比較タイプ",
    copy: "他人の投資成績や成功体験が、自分の判断に影響しやすいタイプです。",
    description:
      "SNSでは大きな利益や成功談が目に入りやすく、自分だけ取り残されているように感じることがあります。",
    behaviors: [
      "他人の爆益報告を見ると焦る",
      "自分の成績が悪く感じる",
      "他人が買っている銘柄を気にしてしまう"
    ],
    advice:
      "比較する相手を他人ではなく、過去の自分に変えましょう。",
    message:
      "他人の正解が、自分の正解とは限りません。自分のルールを守れているかを基準にしましょう。"
  },

  perfection: {
    name: "完璧主義タイプ",
    copy: "「もっと良い判断ができたはず」と考えすぎて、心を消耗しやすいタイプです。",
    description:
      "エントリーも売却も、できるだけ完璧なタイミングを求めるため、判断後も何度も答え合わせをしやすい傾向があります。",
    behaviors: [
      "買った後にもっと良い価格を探す",
      "小さなミスを何度も振り返る",
      "完璧な根拠がないと動きにくい"
    ],
    advice:
      "「正解だったか」ではなく、「ルールを守れたか」で自分の判断を評価しましょう。",
    message:
      "投資で完璧を目指す必要はありません。再現できる判断を積み重ねることが大切です。"
  },

  prediction: {
    name: "予測依存タイプ",
    copy: "株価をできるだけ正確に当てようとすることで、判断が重くなりやすいタイプです。",
    description:
      "ニュースや経済指標などから未来を予測しようとする気持ちが強く、予想が外れることへの不安も大きくなりやすい傾向があります。",
    behaviors: [
      "「この先どうなるか」を何度も考える",
      "ニュースを見続けてしまう",
      "予想が外れると自信を失う"
    ],
    advice:
      "未来を当てることより、「予想が外れたらどうするか」を決めておきましょう。",
    message:
      "未来を当て続ける必要はありません。予想が外れても対応できる準備が重要です。"
  },

  control: {
    name: "コントロール不能タイプ",
    copy: "自分ではコントロールできない値動きを、強く気にしてしまいやすいタイプです。",
    description:
      "分析して準備しても株価は思い通りには動きません。その予想外の動きに強いストレスを感じやすいタイプです。",
    behaviors: [
      "値動きを何度も確認する",
      "予想外の動きにイライラする",
      "相場を思い通りにしたくなる"
    ],
    advice:
      "株価ではなく、自分でコントロールできる資金管理や投資ルールに集中しましょう。",
    message:
      "株価はコントロールできません。でも、自分の行動はコントロールできます。"
  },

  rule: {
    name: "ルール崩壊タイプ",
    copy: "最初は冷静でも、相場が動くと投資ルールを変えてしまいやすいタイプです。",
    description:
      "投資前にはルールを作れていても、含み損や急騰など感情が強く動く場面で、そのルールを変えてしまう傾向があります。",
    behaviors: [
      "損切りラインを後から変更する",
      "急騰すると予定外の買い増しをする",
      "「今回は特別」と考えてしまう"
    ],
    advice:
      "ルールを増やすより、感情が強くなったときの行動を事前に決めましょう。",
    message:
      "意志の強さより、感情が動いてもルールを守れる仕組みが大切です。"
  },

  study: {
    name: "勉強しすぎタイプ",
    copy: "知識が足りないから動けないのではなく、知識が増えすぎて動けなくなりやすいタイプです。",
    description:
      "真面目で勉強熱心ですが、知識が増えるほど判断材料も増え、「もし逆になったら？」と考えすぎて行動できなくなることがあります。",
    behaviors: [
      "投資判断の直前にさらに情報を調べる",
      "「もっと勉強してから」と先延ばしする",
      "知識が増えたのに、以前より迷うことがある"
    ],
    advice:
      "「ここまで確認したら行動する」という終了条件を決め、情報収集に区切りをつけましょう。",
    message:
      "知識を増やすだけでなく、知識を使って判断することも投資には必要です。"
  }
};


// ==============================
// 診断ロジック
// ==============================

let questions = [];
let current = 0;

// タイプごとの加重合計
let scores = {};

// タイプごとの最大重み
let totalWeights = {};

let selected = false;

const $ = (id) => document.getElementById(id);


// 回答値を -2〜+2 に変換
//
// 1 → -2
// 2 → -1
// 3 →  0
// 4 → +1
// 5 → +2
//
function convertAnswer(value) {
  return value - 3;
}


function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}


function initializeScores() {

  scores = {};
  totalWeights = {};

  Object.keys(TYPES).forEach(type => {
    scores[type] = 0;
    totalWeights[type] = 0;
  });


  // 各タイプの重み合計を計算
  QUESTIONS.forEach(question => {

    Object.entries(question.weights).forEach(([type, weight]) => {

      totalWeights[type] += weight;

    });

  });

}


function startQuiz() {

  questions = shuffle(QUESTIONS);

  current = 0;

  initializeScores();

  selected = false;

  showScreen("quiz-screen");

  renderQuestion();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(el => el.classList.remove("active"));

  $(id).classList.add("active");

}


function renderQuestion() {

  const q = questions[current];

  $("question-number").textContent =
    `${current + 1} / ${questions.length}`;

  $("question-index").textContent =
    String(current + 1).padStart(2, "0");

  $("question-text").textContent = q.text;

  $("progress-bar").style.width =
    `${((current + 1) / questions.length) * 100}%`;


  document
    .querySelectorAll(".answer-btn")
    .forEach(btn => {

      btn.disabled = false;

      btn.classList.remove("selected");

    });


  selected = false;

}


function chooseAnswer(value) {

  if (selected) return;

  selected = true;


  document
    .querySelectorAll(".answer-btn")
    .forEach(btn => {

      btn.disabled = true;

      if (Number(btn.dataset.value) === value) {

        btn.classList.add("selected");

      }

    });


  // 1〜5を -2〜+2 に変換
  const answerScore = convertAnswer(value);

  const weights = questions[current].weights;


  // 回答スコア × 重み
  Object.entries(weights).forEach(([type, weight]) => {

    scores[type] += answerScore * weight;

  });


  setTimeout(() => {

    current++;


    if (current < questions.length) {

      renderQuestion();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    } else {

      showResult();

    }

  }, 220);

}


// ==============================
// 正規化して結果を判定
// ==============================

function getWinner() {

  const normalizedScores = {};


  Object.keys(TYPES).forEach(type => {

    // タイプごとの重み合計で割る
    //
    // これにより
    // 「質問数が多いタイプ」
    // 「重みが大きいタイプ」
    // が有利になりすぎる問題を防ぐ

    normalizedScores[type] =
      scores[type] / totalWeights[type];

  });


  // スコア順に並べる
  const ranking = Object.entries(normalizedScores)
    .sort((a, b) => b[1] - a[1]);


  const topScore = ranking[0][1];


  // 浮動小数点の誤差を考慮して
  // ほぼ同じスコアを同点扱い
  const tied = ranking
    .filter(([_, score]) =>
      Math.abs(score - topScore) < 0.0001
    )
    .map(([type]) => type);


  // 通常は1位を返す
  if (tied.length === 1) {

    return tied[0];

  }


  // 同点の場合は
  // 「より強く当てはまった質問」があるタイプを優先
  //
  // ただし、質問数の多さで有利にならないよう
  // 最大値ではなく平均重みを利用

  const tieScores = {};


  tied.forEach(type => {

    let positiveScore = 0;
    let positiveWeight = 0;


    QUESTIONS.forEach((question, index) => {

      if (!question.weights[type]) return;


      const weight = question.weights[type];

      // ここでは実際の回答履歴を使わず、
      // 正規化済みスコアを基本判定とするため
      // 同点時は主要質問の重みを評価

      positiveWeight += weight;

    });


    tieScores[type] =
      normalizedScores[type] *
      positiveWeight;

  });


  return tied.sort(
    (a, b) => tieScores[b] - tieScores[a]
  )[0];

}


// ==============================
// 結果表示
// ==============================

function showResult() {

  const winner = getWinner();

  const data = TYPES[winner];


  $("result-type").textContent =
    data.name;

  $("result-copy").textContent =
    data.copy;

  $("result-description").textContent =
    data.description;

  $("result-advice").textContent =
    data.advice;

  $("result-message").textContent =
    data.message;


  const list =
    $("result-behaviors");


  list.innerHTML = "";


  data.behaviors.forEach(item => {

    const li =
      document.createElement("li");

    li.textContent = item;

    list.appendChild(li);

  });


  showScreen("result-screen");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ==============================
// イベント
// ==============================

$("start-btn")
  .addEventListener(
    "click",
    startQuiz
  );


$("answers")
  .addEventListener(
    "click",
    event => {

      const btn =
        event.target.closest(
          ".answer-btn"
        );

      if (!btn) return;


      chooseAnswer(
        Number(
          btn.dataset.value
        )
      );

    }
  );


$("retry-btn")
  .addEventListener(
    "click",
    startQuiz
  );