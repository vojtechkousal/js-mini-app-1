// Vancouver Quiz (10 questions)
// Score: 10 points per correct answer
// Ranking by correct count: 0-5 Beginner | 6-8 Intermediate | 9-10 Knows everything

const questions = [
  // ======================
  // BEGINNER (1–10)
  // ======================

  {
    text: "What is Vancouver consistently ranked as?",
    options: [
      "One of the coldest cities in Canada",
      "One of the most livable cities in the world",
      "The largest city in Canada",
      "The oldest city in North America"
    ],
    correctIndex: 1,
    image: "images/van1.webp"
  },
  {
    text: "Which ocean is Vancouver located next to?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctIndex: 2,
    image: "images/van2.webp"
  },
  {
    text: "What is Stanley Park famous for?",
    options: [
      "Being a desert park",
      "Having the world’s longest seawall in an urban park",
      "Being a theme park",
      "Having the tallest buildings in Vancouver"
    ],
    correctIndex: 1,
    image: "images/van3.webp"
  },
  {
    text: "Why is Vancouver often called “Hollywood North”?",
    options: [
      "It has many movie stars living there",
      "It has the largest movie theater in Canada",
      "Many movies and TV shows are filmed there",
      "It was founded by Hollywood producers"
    ],
    correctIndex: 2,
    image: "images/van4.webp"
  },
  {
    text: "Which mountain range can be seen from Vancouver?",
    options: ["Andes", "Alps", "Rocky Mountains", "Coast Mountains"],
    correctIndex: 3,
    image: "images/van5.webp"
  },
  {
    text: "What makes Vancouver’s climate unusual compared to most Canadian cities?",
    options: [
      "It has extremely hot summers",
      "It has very little snowfall and mild winters",
      "It never rains",
      "It has desert weather"
    ],
    correctIndex: 1,
    image: "images/van6.webp"
  },
  {
    text: "What popular outdoor activity is easy to do in Vancouver year-round?",
    options: ["Sandboarding", "Ice fishing", "Hiking", "Camel riding"],
    correctIndex: 2,
    image: "images/van7.webp"
  },
  {
    text: "What is Granville Island best known for?",
    options: [
      "Luxury hotels",
      "A public market and local artisans",
      "Government buildings",
      "Ski resorts"
    ],
    correctIndex: 1,
    image: "images/van8.webp"
  },
  {
    text: "Which animal is commonly seen in and around Vancouver?",
    options: ["Polar bears", "Kangaroos", "Raccoons", "Camels"],
    correctIndex: 2,
    image: "images/van9.webp"
  },
  {
    text: "What makes Vancouver unique geographically?",
    options: [
      "It is surrounded only by deserts",
      "It is built entirely on islands",
      "It is located between mountains and the ocean",
      "It is below sea level"
    ],
    correctIndex: 2,
    image: "images/van10.webp"
  },

  // ======================
  // INTERMEDIATE (11–20) — PLACEHOLDERS
  // ======================

  {
    text: `What are some of the main industries that contribute to Vancouver’s economy?`,
    options: [
      "Agriculture and mining only",
      "Film production, technology, and tourism",
      "Automotive manufacturing",
      "Space exploration"
    ],
    correctIndex: 0,
    image: "images/van11.webp"
  })),

    correctIndex: 1,
    image: "images/vancouver-placeholder.jpg"
  },
  {
    text: `Why is Vancouver considered one of the most multicultural cities in Canada?`,
    options: [
      "Because it has very few immigrants",
      "Because people from many different countries live there",
      "Because only Canadians are allowed to live there",
      "Because it has only one cultural group"
    ],
    correctIndex: 1,
    image: "images/vancouver-placeholder.jpg"
  },
  {
    text: `How does Vancouver’s geographical location influence its climate?`,
    options: [
      "It has extremely cold winters like the Arctic",
      "It has a mild and rainy climate due to the Pacific Ocean",
      "It is very dry all year round",
      "It has desert-like weather"
    ],
    correctIndex: 1,
    image: "images/vancouver-placeholder.jpg"
  },
  {
    text: `What role does the Port of Vancouver play in Canada’s economy?`,
    options: [
      "It is used only for local fishing",
      "It is mainly a tourist attraction",
      "It is the largest port and supports international trade",
      "It is closed during winter"
    ],
    correctIndex: 2,
    image: "images/vancouver-placeholder.jpg"
  },
  {
    text: `How has tourism impacted Vancouver’s development?`,
    options: [
      "It has reduced job opportunities",
      "It has had no effect on the city",
      "It has helped create jobs and improve infrastructure",
      "It has stopped urban growth"
    ],
    correctIndex: 2,
    image: "images/vancouver-placeholder.jpg"
  },
  {
    text: `What are popular outdoor activities in Vancouver?`,
    options: [
      "Sandboarding and camel riding",
      "Skiing, hiking, and kayaking",
      "Only indoor sports",
      "Activities limited to summer"
    ],
    correctIndex: 1,
    image: "images/vancouver-placeholder.jpg"
  },
  {
    text: `How does public transportation in Vancouver help the environment?`,
    options: [
      "By increasing traffic congestion",
      "By encouraging people to use more cars",
      "By reducing car use and lowering emissions",
      "By making travel slower"
    ],
    correctIndex: 2,
    image: "images/vancouver-placeholder.jpg"
  },
  {
    text: `How has Vancouver promoted environmental sustainability?`,
    options: [
      "By ignoring environmental policies",
      "By increasing pollution",
      "By developing green buildings and bike lanes",
      "By banning public transportation"
    ],
    correctIndex: 2,
    image: "images/vancouver-placeholder.jpg"
  },
  {
    text: `Why is Vancouver a popular filming location?`,
    options: [
      "Because of its extreme weather",
      "Because it looks similar to many world cities and offers tax incentives",
      "Because there are no filming rules",
      "Because movies are cheaper in other cities"
    ],
    correctIndex: 1,
    image: "images/vancouver-placeholder.jpg"
  },
  {
    text: `What is one major challenge Vancouver faces today?`,
    options: [
      "Lack of natural scenery",
      "Too many historical buildings",
      "Housing affordability and high living costs",
      "Low population growth"
    ],
    correctIndex: 2,
    image: "images/vancouver-placeholder.jpg"
  },
  // ======================
  // EXPERT (21–30)
  // ======================

  {
    text: "Which Indigenous group’s name is most directly associated with the area now known as False Creek?",
    options: ["Musqueam", "Tsleil-Waututh", "Squamish", "Haida"],
    correctIndex: 2,
    image: "images/van1.webp"
  },
  {
    text: "Which event directly triggered the rapid rebuilding and incorporation of Vancouver in 1886?",
    options: [
      "Completion of the Canadian Pacific Railway terminus",
      "The Great Vancouver Fire",
      "Discovery of gold in the Fraser Canyon",
      "Establishment of Stanley Park"
    ],
    correctIndex: 1,
    image: "images/van2.webp"
  },
  {
    text: "Which geological feature most strongly influenced the steep elevation changes in North Vancouver?",
    options: [
      "Volcanic lava flows",
      "Alpine glaciation",
      "Tectonic rifting",
      "River sediment deposition"
    ],
    correctIndex: 1,
    image: "images/van3.webp"
  },
  {
    text: "Which of the following neighbourhoods is NOT located on the Burrard Peninsula?",
    options: ["Kitsilano", "Mount Pleasant", "Kerrisdale", "Hastings-Sunrise"],
    correctIndex: 2,
    image: "images/van2webp"
  },
  {
    text: "The Lions Gate Bridge was financed primarily by which family?",
    options: ["Bentall", "Guinness", "Rockefeller", "Douglas"],
    correctIndex: 1,
    image: "images/van3.webp"
  },
  {
    text: "Which Pacific salmon species is least likely to spawn in the rivers and streams of Metro Vancouver?",
    options: ["Chinook", "Coho", "Sockeye", "Pink"],
    correctIndex: 2,
    image: "images/van4.webp"
  },
  {
    text: "What is the deepest natural point within Vancouver city limits (excluding the ocean)?",
    options: [
      "Trout Lake",
      "Lost Lagoon",
      "Capilano River Canyon",
      "Renfrew Ravine"
    ],
    correctIndex: 3,
    image: "images/van5.webp"
  },
  {
    text: "Which zoning decision most significantly shaped Vancouver’s reputation for high-density residential towers without freeways?",
    options: [
      "The 1956 Urban Renewal Act",
      "The 1972 Freeway Rejection Plan",
      "The 1989 Expo Lands Rezoning",
      "The 2001 Livable Region Strategy"
    ],
    correctIndex: 1,
    image: "images/van6.webp"
  },
  {
    text: "Which climate classification best describes Vancouver’s long-term average climate under the Köppen system?",
    options: [
      "Csb – Warm-summer Mediterranean",
      "Cfb – Oceanic",
      "Dfb – Humid continental",
      "Cfa – Humid subtropical"
    ],
    correctIndex: 1,
    image: "images/vanc7.web"
  },
  {
    text: "Which mountain is NOT visible from Vancouver on a clear day despite common belief?",
    options: [
      "Mount Baker",
      "Mount Robson",
      "Mount Garibaldi",
      "Golden Ears"
    ],
    correctIndex: 1,
    image: "images/van8.jpg"
  }
];



// Elements
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

const quizCard = document.getElementById("quizCard");
const resultsCard = document.getElementById("resultsCard");

const qNumber = document.getElementById("qNumber");
const questionText = document.getElementById("questionText");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const scoreValue = document.getElementById("scoreValue");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const questionImage = document.getElementById("questionImage");
const heroImage = document.getElementById("heroImage");

const finalScore = document.getElementById("finalScore");
const correctCountEl = document.getElementById("correctCount");
const rankBox = document.getElementById("rankBox");

const playAgainBtn = document.getElementById("playAgainBtn");
const reviewBtn = document.getElementById("reviewBtn");
const reviewArea = document.getElementById("reviewArea");
const reviewList = document.getElementById("reviewList");

const streakBadge = document.getElementById("streakBadge");
const correctBadge = document.getElementById("correctBadge");
const resultsImage = document.getElementById("resultsImage");

// State
let currentIndex = 0;
let selected = Array(questions.length).fill(null); // store selected option index
let score = 0;
let correctCount = 0;
let streak = 0;

// Inline SVG icons (no internet needed)
function trophySVG() {
  return `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 4h10v3a5 5 0 0 1-10 0V4Z" stroke="currentColor" stroke-width="1.6"/>
    <path d="M9 21h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M10 17h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M12 12v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M7 6H4c0 4 2 6 5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M17 6h3c0 4-2 6-5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}

function sadSVG() {
  return `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" stroke-width="1.6"/>
    <path d="M8.5 10.2h.01M15.5 10.2h.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M9 17c.9-1.2 2-1.8 3-1.8S14.1 15.8 15 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}

function mapleSVG() {
  return `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l1.2 4 3-2-.5 4 4 .7-3 2.2 2.2 2.1-3.7.4L15 18l-3 4-3-4-.4-3.6-3.7-.4L7.1 11 4 8.7 8 8l-.5-4 3 2L12 2Z"
      stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
  </svg>`;
}

// Helpers
function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

function setProgress() {
  const total = questions.length;
  const step = currentIndex + 1;
  const pct = (step / total) * 100;

  progressFill.style.width = `${pct}%`;
  progressText.textContent = `Question ${currentIndex} of ${total}`;
  // Note: before start, we'll override to "0 of 10"
}

function computeScore() {
  // recompute from selected array to avoid double-count
  let c = 0;
  for (let i = 0; i < questions.length; i++) {
    if (selected[i] === questions[i].correctIndex) c++;
  }
  correctCount = c;
  score = c * 10;

  scoreValue.textContent = String(score);
  correctBadge.textContent = `Correct: ${correctCount}`;
}

function computeStreak() {
  // streak: consecutive correct answers from start until first wrong/unanswered
  let s = 0;
  for (let i = 0; i < questions.length; i++) {
    if (selected[i] === null) break;
    if (selected[i] === questions[i].correctIndex) s++;
    else break;
  }
  streak = s;
  streakBadge.textContent = `Streak: ${streak}`;
}

function getRanking(correct) {
  if (correct <= 10) {
    return {
      title: "Beginner",
      subtitle: "You’re getting started — keep exploring Vancouver!",
      icon: sadSVG(),
      image: "images/vancouver-beginner.jpg"
    };
  }
  if (correct <= 20) {
    return {
      title: "Intermediate",
      subtitle: "Solid knowledge! You know Vancouver pretty well.",
      icon: mapleSVG(),
      image: "images/vancouver-intermediate.jpg"
    };
  }
  return {
    title: "Knows Everything",
    subtitle: "Okay, wow — you REALLY know Vancouver 🔥",
    icon: trophySVG(),
    image: "images/vancouver-pro.jpg"
  };
}

function clearFeedback() {
  feedbackEl.textContent = "";
}

function renderQuestion() {
  const q = questions[currentIndex];

  qNumber.textContent = `Question ${currentIndex + 1}`;
  questionText.textContent = q.text;

  questionImage.src = q.image;
  questionImage.alt = `Question ${currentIndex + 1} image`;

  // buttons state
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = selected[currentIndex] === null;

  // progress
  const total = questions.length;
  const step = currentIndex + 1;
  progressFill.style.width = `${(step / total) * 100}%`;
  progressText.textContent = `Question ${step} of ${total}`;

  // build choices
  choicesEl.innerHTML = "";
  clearFeedback();

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice";
    btn.textContent = opt;
    btn.setAttribute("aria-pressed", selected[currentIndex] === idx ? "true" : "false");

    btn.addEventListener("click", () => {
      // lock in selection for this question
      selected[currentIndex] = idx;

      // update UI pressed
      [...choicesEl.querySelectorAll(".choice")].forEach(b => {
        b.setAttribute("aria-pressed", "false");
        b.classList.remove("correct", "wrong");
      });
      btn.setAttribute("aria-pressed", "true");

      // show correctness
      const isCorrect = idx === q.correctIndex;
      if (isCorrect) {
        btn.classList.add("correct");
        feedbackEl.textContent = "✅ Correct! +10 points";
      } else {
        btn.classList.add("wrong");
        feedbackEl.textContent = `❌ Oops! Correct answer: "${q.options[q.correctIndex]}"`;
      }

      computeScore();
      computeStreak();

      nextBtn.disabled = false;
    });

    choicesEl.appendChild(btn);
  });

  // if already selected, visually mark it
  if (selected[currentIndex] !== null) {
    const chosenIndex = selected[currentIndex];
    const chosenBtn = choicesEl.querySelectorAll(".choice")[chosenIndex];
    const isCorrect = chosenIndex === q.correctIndex;

    chosenBtn.setAttribute("aria-pressed", "true");
    chosenBtn.classList.add(isCorrect ? "correct" : "wrong");
    feedbackEl.textContent = isCorrect
      ? "✅ Correct! +10 points"
      : `❌ Oops! Correct answer: "${q.options[q.correctIndex]}"`;

    nextBtn.disabled = false;
  }
}

function showQuiz() {
  quizCard.classList.remove("hidden");
  resultsCard.classList.add("hidden");
  resetBtn.disabled = false;
  renderQuestion();
}

function showResults() {
  quizCard.classList.add("hidden");
  resultsCard.classList.remove("hidden");

  computeScore();
  computeStreak();

  finalScore.textContent = String(score);
  correctCountEl.textContent = String(correctCount);

  const rank = getRanking(correctCount);
  resultsImage.src = rank.image;

  rankBox.innerHTML = `
    <div class="rank-left">
      <div class="icon" aria-hidden="true">${rank.icon}</div>
      <div>
        <div class="rank-title">${rank.title}</div>
        <div class="rank-sub">${rank.subtitle}</div>
      </div>
    </div>
    <div class="mini-badge">
      ${correctCount} / ${questions.length} correct • ${score} pts
    </div>

  `;
}

function resetAll() {
  currentIndex = 0;
  selected = Array(questions.length).fill(null);
  score = 0;
  correctCount = 0;
  streak = 0;

  scoreValue.textContent = "0";
  streakBadge.textContent = "Streak: 0";
  correctBadge.textContent = "Correct: 0";

  progressFill.style.width = "0%";
  progressText.textContent = `Question 0 of ${questions.length}`;

  reviewArea.classList.add("hidden");
  reviewList.innerHTML = "";

  resultsCard.classList.add("hidden");
  quizCard.classList.add("hidden");

  resetBtn.disabled = true;
}

function goNext() {
  if (selected[currentIndex] === null) return;

  if (currentIndex === questions.length - 1) {
    showResults();
    return;
  }
  currentIndex++;
  renderQuestion();
}

function goPrev() {
  currentIndex = clamp(currentIndex - 1, 0, questions.length - 1);
  renderQuestion();
}

function buildReview() {
  reviewList.innerHTML = "";

  questions.forEach((q, i) => {
    const userPick = selected[i];
    const correct = q.correctIndex;

    const div = document.createElement("div");
    div.className = "review-item";

    const userText = userPick === null ? "No answer" : q.options[userPick];
    const correctText = q.options[correct];
    const ok = userPick === correct;

    div.innerHTML = `
      <strong>Q${i + 1}:</strong> ${q.text}
      <p><strong>Your answer:</strong> ${userText}</p>
      <p><strong>Correct answer:</strong> ${correctText}</p>
      <p>${ok ? "✅ You got it right!" : "❌ Not this time."}</p>
    `;

    reviewList.appendChild(div);
  });
}

// Events
startBtn.addEventListener("click", () => {
  // Keep hero visible; just open quiz card
  showQuiz();
});

resetBtn.addEventListener("click", () => {
  resetAll();
});

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

playAgainBtn.addEventListener("click", () => {
  resetAll();
  showQuiz();
});

reviewBtn.addEventListener("click", () => {
  if (reviewArea.classList.contains("hidden")) {
    buildReview();
    reviewArea.classList.remove("hidden");
    reviewBtn.textContent = "Hide Review";
  } else {
    reviewArea.classList.add("hidden");
    reviewBtn.textContent = "Review Answers";
  }
});

// Initial UI state
resetAll();

// Optional: if you want a fallback hero image if file missing (won't detect missing reliably)
// heroImage.src = "images/vancouver-hero.jpg";
