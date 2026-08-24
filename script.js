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
    description: "損失を避けたい気持ちは、投資家なら誰にでもあります。ただ、それが強くなると、必要以上に含み損を怖がったり、損切りを先延ばししたり、逆に慌てて売ってしまったりします。",
    behaviors: ["含み損を見るたびに気持ちが落ち着かなくなる", "損切りの基準がその場の感情で変わる", "利益よりも「損しないこと」を優先しやすい"],
    advice: "「いくら損をするか」ではなく、「どこまでなら予定通りのリスクなのか」を事前に決めておきましょう。投資額と撤退基準を小さく明確にすることが、心のゆとりにつながります。",
    message: "投資で大切なのは、損失をゼロにすることではありません。自分が受け入れられるリスクを決め、その範囲で淡々と行動できる状態を作ることです。"
  },
  profit: {
    name: "利益確定焦りタイプ",
    copy: "利益を失う怖さから、伸ばせる利益まで早く確定しやすいタイプです。",
    description: "含み益が出ると安心する一方、「この利益が消えたら嫌だ」という気持ちが強くなりやすい傾向があります。そのため、本来の売買ルールより感情を優先してしまうことがあります。",
    behaviors: ["少し上がるとすぐ利益確定したくなる", "売った後にさらに上がると後悔する", "利益を伸ばすルールを作っても守れない"],
    advice: "「利益が出たら売る」ではなく、「どんな条件なら売る」という条件ベースのルールを作りましょう。利益の大きさではなく、事前に決めたシナリオを基準にします。",
    message: "利益を伸ばせなかったことより、毎回違う基準で売買してしまうことのほうが、長期的にはメンタルを消耗させます。"
  },
  fomo: {
    name: "機会損失恐怖タイプ",
    copy: "「乗り遅れたくない」という焦りが、投資判断を急がせやすいタイプです。",
    description: "上昇している銘柄を見ると、「今買わないともう買えない」と感じやすくなります。焦って飛び乗ると、買った直後の下落でさらに不安が強くなることがあります。",
    behaviors: ["急騰銘柄を見ると買いたくなる", "「今買わないと」と焦る", "見送った銘柄が上がると後悔する"],
    advice: "「買わないこと」も投資判断の一つです。監視銘柄を決め、入る条件を事前に設定しておくと、相場の勢いに感情を持っていかれにくくなります。",
    message: "相場は明日もあります。すべてのチャンスを取る必要はありません。自分の条件に合うチャンスだけを取るほうが、心のゆとりを保ちやすくなります。"
  },
  comparison: {
    name: "他人比較タイプ",
    copy: "他人の投資成績や成功体験が、自分の判断に影響しやすいタイプです。",
    description: "SNSでは大きな利益や成功談が目に入りやすく、自分だけ取り残されているように感じることがあります。しかし、他人と自分では資金量・経験・リスク許容度が違います。",
    behaviors: ["他人の爆益報告を見ると焦る", "自分の成績が悪く感じる", "他人の銘柄をそのまま買いたくなる"],
    advice: "比較対象を「他人」から「自分のルール」に戻しましょう。毎月、ルールを守れたか・感情的な売買を減らせたかを記録するだけでも基準が変わります。",
    message: "投資の勝ち負けを他人と競う必要はありません。昨日の自分より、少しだけ冷静に判断できれば十分です。"
  },
  perfection: {
    name: "完璧主義タイプ",
    copy: "「もっと良い判断ができたはず」と考えすぎて、心を消耗しやすいタイプです。",
    description: "エントリーも売却も、できるだけ完璧なタイミングを求めます。その結果、判断が遅れたり、取引後に何度も答え合わせをしたりしやすくなります。",
    behaviors: ["買った後にもっと良い価格を探す", "小さなミスを何度も振り返る", "完璧な根拠がないと動きにくい"],
    advice: "「正解だったか」ではなく、「事前に決めたルールを守れたか」で評価しましょう。投資は一回の正解を当てるゲームではなく、再現可能な意思決定を積み重ねる活動です。",
    message: "完璧な投資家になる必要はありません。60〜70点の判断を、感情に振り回されず繰り返せることのほうが大切です。"
  },
  prediction: {
    name: "予測依存タイプ",
    copy: "株価をできるだけ正確に当てようとすることで、判断が重くなりやすいタイプです。",
    description: "経済指標、決算、チャート、ニュースなどから未来を予測しようとします。分析自体は悪くありませんが、予測精度を上げることに意識が偏ると、相場の不確実性を受け入れにくくなります。",
    behaviors: ["「この先どうなるか」を何度も考える", "ニュースを見続けてしまう", "予想が外れると自信を失う"],
    advice: "予測だけでなく「予測が外れた場合」を最初から考えましょう。シナリオを複数用意し、それぞれの行動を決めておくと、未来を当てる必要が減ります。",
    message: "投資で重要なのは、未来を当て続ける能力ではありません。予想が外れたときにも、冷静に対応できる仕組みです。"
  },
  control: {
    name: "コントロール不能タイプ",
    copy: "自分ではコントロールできない値動きを、強く気にしてしまいやすいタイプです。",
    description: "分析して準備しても、株価は思い通りには動きません。その事実を頭では理解していても、実際に逆行すると強いストレスを感じやすい傾向があります。",
    behaviors: ["値動きを何度も確認する", "予想外の動きにイライラする", "相場を自分の思い通りにしたくなる"],
    advice: "コントロールできるものとできないものを分けましょう。資金管理、ポジションサイズ、損切り基準、見る頻度など、自分で決められる部分に集中します。",
    message: "株価はコントロールできません。でも、自分の行動はコントロールできます。心のゆとりは、その境界線を明確にするところから始まります。"
  },
  rule: {
    name: "ルール崩壊タイプ",
    copy: "最初は冷静でも、相場が動くと投資ルールを変えてしまいやすいタイプです。",
    description: "投資前には明確なルールを作れていても、含み損や急騰などの局面になると、そのルールを例外扱いしてしまいます。問題は意思の弱さというより、感情が強くなる場面への準備不足です。",
    behaviors: ["損切りラインを後から変更する", "急騰すると予定外の買い増しをする", "「今回は特別」と考えてしまう"],
    advice: "ルールを増やすより、「感情が強くなったときに何をするか」を決めましょう。注文前にチェックリストを使う、一定時間チャートを見ないなど、行動を仕組み化します。",
    message: "強い意志で感情に勝とうとするより、感情が強くなってもルールから外れにくい仕組みを作るほうが再現性があります。"
  },
  study: {
    name: "勉強しすぎタイプ",
    copy: "知識が足りないから動けないのではなく、知識が増えすぎて動けなくなりやすいタイプです。",
    description: "真面目で勉強熱心。投資本、YouTube、SNS、決算、テクニカル、ファンダメンタルなどを幅広く学んでいます。ただ、知識が増えるほど「このケースでは？」「もし逆になったら？」と考える材料も増え、いざというときに判断できなくなることがあります。",
    behaviors: ["投資判断の直前にさらに情報を調べる", "「もっと勉強してから」と先延ばしする", "知識が増えたのに、以前より迷うことがある"],
    advice: "必要なのは、さらに知識を増やすことではなく「ここまで確認したら行動する」という基準です。投資前の確認項目を絞り、情報収集に終了条件を設定しましょう。",
    message: "知識は武器です。ただし、武器を増やし続けて一歩も動けなくなったら本末転倒です。「知る」から「使う」へ。行動できる知識量を自分で決めてください。"
  }
};

let questions = [];
let current = 0;
let scores = {};
let selected = false;

const $ = (id) => document.getElementById(id);

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function resetScores() {
  scores = {};
  Object.keys(TYPES).forEach(key => scores[key] = 0);
}

function startQuiz() {
  questions = shuffle(QUESTIONS);
  current = 0;
  resetScores();
  selected = false;
  showScreen("quiz-screen");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  $(id).classList.add("active");
}

function renderQuestion() {
  const q = questions[current];
  $("question-number").textContent = `${current + 1} / ${questions.length}`;
  $("question-index").textContent = String(current + 1).padStart(2, "0");
  $("question-text").textContent = q.text;
  $("progress-bar").style.width = `${((current + 1) / questions.length) * 100}%`;

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("selected");
  });

  selected = false;
}

function chooseAnswer(value) {
  if (selected) return;
  selected = true;

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.disabled = true;
    if (Number(btn.dataset.value) === value) btn.classList.add("selected");
  });

  const weights = questions[current].weights;
  Object.entries(weights).forEach(([type, weight]) => {
    scores[type] += value * weight;
  });

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      showResult();
    }
  }, 220);
}

function getWinner() {
  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = entries[0][1];
  const tied = entries.filter(([_, score]) => score === topScore).map(([type]) => type);

  if (tied.length === 1) return tied[0];

  // Tie-break priority favors the most behaviorally specific type.
  const priority = ["study", "rule", "loss", "perfection", "fomo", "comparison", "prediction", "control", "profit"];
  return priority.find(type => tied.includes(type)) || entries[0][0];
}

function showResult() {
  const winner = getWinner();
  const data = TYPES[winner];

  $("result-type").textContent = data.name;
  $("result-copy").textContent = data.copy;
  $("result-description").textContent = data.description;
  $("result-advice").textContent = data.advice;
  $("result-message").textContent = data.message;

  const list = $("result-behaviors");
  list.innerHTML = "";
  data.behaviors.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  showScreen("result-screen");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("start-btn").addEventListener("click", startQuiz);

$("answers").addEventListener("click", (event) => {
  const btn = event.target.closest(".answer-btn");
  if (!btn) return;
  chooseAnswer(Number(btn.dataset.value));
});

$("retry-btn").addEventListener("click", () => {
  startQuiz();
});
