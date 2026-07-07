const filters = Array.from(document.querySelectorAll(".filter"));
const cards = Array.from(document.querySelectorAll(".project-card"));
const detailButtons = Array.from(document.querySelectorAll("[data-detail]"));
const detailRoot = document.querySelector("#project-detail");
const detailPanel = document.querySelector(".detail-panel");
const detailMeta = document.querySelector("#detail-meta");
const detailTitle = document.querySelector("#detail-title");
const detailLead = document.querySelector("#detail-lead");
const detailImage = document.querySelector("#detail-image");
const detailLinks = document.querySelector("#detail-links");
const detailCards = document.querySelector("#detail-cards");
const detailFeatures = document.querySelector("#detail-features");
const detailTech = document.querySelector("#detail-tech");
const detailStrength = document.querySelector("#detail-strength");

const projectDetails = {
  ssuai: {
    title: "숭실대 캠퍼스 AI 어시스턴트",
    image: "./assets/ssuai-live-home.png",
    alt: "ssuAI 최신 홈 화면",
    tags: ["AI Agent", "MCP", "Live", "Security"],
    lead:
      "범용 AI가 접근하지 못하는 학교 개인 데이터와 캠퍼스 업무를 MCP 도구, 인증 세션, 웹 챗봇으로 연결한 멀티서비스 플랫폼입니다. 사용자는 오늘 학식이나 공지 검색을 넘어, 로그인 후 시간표·성적·장학·졸업요건·LMS 과제·도서관 좌석까지 자연어로 다룰 수 있습니다.",
    cards: [
      {
        label: "사용자 서비스",
        title: "학교 생활을 자연어 업무로 전환",
        body:
          "오늘 학식, 주간 식단, 기숙사 식단, 도서관 좌석, 도서 검색, 공지, 학사일정, 캠퍼스 시설을 질문형 UX로 제공합니다. 로그인하면 u-SAINT·LMS·도서관 개인 데이터를 연결해 시간표, 성적, 장학금, 졸업요건, 과제, 대출 현황까지 조회합니다.",
      },
      {
        label: "AI 제품성",
        title: "Claude·ChatGPT가 못 하는 학교 개인 데이터 연결",
        body:
          "외부 AI는 사용자의 학교 계정과 내부 서비스에 직접 접근할 수 없습니다. ssuMCP가 인증 플로우와 도구 스키마를 맡고, ssuAI/ssuAgent가 이를 안전하게 호출해 AI가 실제 캠퍼스 업무를 수행하게 합니다.",
      },
      {
        label: "기술력",
        title: "52개 MCP 도구와 운영 가능한 배포",
        body:
          "Spring Boot 4 MCP 서버, LangGraph supervisor, SSE 스트리밍, HITL 승인, H2/Postgres/Flyway, Redis, k3s, ArgoCD, Helm, GitHub Actions, Grafana 기반 운영 구성을 직접 구현했습니다.",
      },
    ],
    features: [
      "공개 기능: 학식, 기숙사 식단, 도서관 좌석, 도서 검색, 캠퍼스 시설, 학사일정, 공식 학칙·졸업·장학 근거, 공지사항 검색.",
      "인증 기능: 시간표, 성적, GPA 시뮬레이션, 채플, 졸업 요건, 장학금, LMS 과제, 도서관 대출·좌석 예약 계열 기능.",
      "웹 챗봇은 동일 오리진 프록시를 통해 백엔드와 agent를 호출하고, SSE로 도구 호출·핸드오프·승인 대기 상태를 보여줍니다.",
      "Claude Desktop, Cursor 같은 MCP 클라이언트에서도 학교 도구를 재사용할 수 있도록 표준 도구 표면을 제공합니다.",
    ],
    tech: [
      "REST API와 MCP tool이 같은 서비스 레이어를 공유하도록 설계해 제품 UI와 외부 AI 클라이언트의 기능 일관성을 유지했습니다.",
      "LangGraph 멀티에이전트가 학사·도서관·LMS 도메인을 라우팅하고, 예약·취소 같은 write action은 prepare/confirm HITL로 분리했습니다.",
      "CSRF Origin Guard, per-IP rate limit, thread ownership binding, credential encryption, fail-closed API key gate를 구현했습니다.",
      "k3s 클러스터, ArgoCD Image Updater, Helm chart, GitHub Actions, DuckDNS/TLS, Prometheus/Grafana 관측성을 연결했습니다.",
    ],
    strength:
      "해커톤에서 중요한 점은 AI를 붙이는 것보다 AI가 실제 문제를 끝까지 해결하게 만드는 것입니다. 이 프로젝트는 도구 설계, 인증, 보안, 운영, UI까지 모두 직접 다뤘기 때문에 AI 스타트업 MVP를 빠르게 수직 완성할 수 있다는 증거가 됩니다.",
    links: [
      { label: "Live ssuAI", href: "https://ssuai.vercel.app" },
      { label: "ssuMCP", href: "https://github.com/ghdtjdwn/ssuMCP" },
      { label: "ssuAI Web", href: "https://github.com/ghdtjdwn/ssuAI" },
      { label: "ssuAgent", href: "https://github.com/ghdtjdwn/ssuAgent" },
      { label: "ssu-ai-service", href: "https://github.com/ghdtjdwn/ssu-ai-service" },
    ],
  },
  geuneul: {
    title: "그늘 - 여름 생존 지도",
    image: "./assets/geuneul-prototype.png",
    alt: "그늘 모바일 지도 프로토타입 화면",
    tags: ["Location MVP", "PostGIS", "Live"],
    lead:
      "폭염·장마 상황에서 사용자가 지금 당장 갈 수 있는 그늘, 냉방, 공중화장실, 콘센트, 비 피할 장소를 현재 위치 기준으로 찾는 모바일 PWA입니다. 공공데이터와 사용자 제보를 합쳐 생활 문제를 지도 위에서 바로 해결합니다.",
    cards: [
      {
        label: "사용자 서비스",
        title: "지금 갈 수 있는 장소를 거리 기준으로 추천",
        body:
          "현재 위치를 기준으로 가까운 생활 대피 장소를 보여주고, 카테고리·반경·지도 bounds에 따라 장소 목록을 즉시 갱신합니다. 더운 날 쉬기 좋은 곳, 비를 피할 곳, 화장실, 콘센트가 필요한 상황을 하나의 지도에서 해결합니다.",
      },
      {
        label: "데이터 제품성",
        title: "공공데이터를 앱에서 쓸 수 있는 형태로 정제",
        body:
          "공중화장실 59,768행 데이터를 파싱하고, 46,897건 이상을 좌표화해 PostGIS 검색 대상으로 만들었습니다. 사용자는 복잡한 행정 데이터를 보지 않고 지도와 리스트로 바로 소비합니다.",
      },
      {
        label: "기술력",
        title: "공간 검색과 배포까지 연결",
        body:
          "PostGIS geography, GiST 인덱스, nearest/bounds 조회, Redis 캐시, Next.js BFF, AWS ECS Fargate, RDS, Terraform, OIDC 배포 파이프라인까지 구현했습니다.",
      },
    ],
    features: [
      "내 위치 주변 장소를 거리순으로 조회하고, 지도 이동 시 bounds 안의 장소만 다시 가져옵니다.",
      "장소 카테고리, 주소, 좌표, 제보 신호를 결합해 사용자가 실제로 갈 곳을 빠르게 판단하게 합니다.",
      "사용자 제보 API를 통해 현장성이 강한 정보를 추가하고, BFF 프록시로 클라이언트 IP/비밀값 처리를 분리했습니다.",
      "모바일 우선 PWA 구조로, 해커톤 데모에서 설치형 앱처럼 보여줄 수 있습니다.",
    ],
    tech: [
      "PostGIS 반경 검색, kNN, bounds 조회, Flyway migration, sample seed 데이터를 구성했습니다.",
      "대량 공공데이터 파싱과 지오코딩 실패 케이스를 다뤄 데이터 품질과 서비스 품질 사이의 균형을 맞췄습니다.",
      "프론트는 same-origin API route를 통해 백엔드와 통신해 배포 환경의 URL/secret 노출을 줄였습니다.",
      "AWS ECS/RDS, Terraform, GitHub OIDC 기반으로 개인 프로젝트 수준을 넘어 운영 가능한 구조를 만들었습니다.",
    ],
    strength:
      "단순 지도 앱이 아니라 데이터 수집, 위치 검색, 사용자 제보, 모바일 UX, 클라우드 배포를 한 번에 보여주는 생활형 MVP입니다. 짧은 해커톤에서도 문제-데이터-서비스를 빠르게 연결할 수 있다는 강한 근거가 됩니다.",
    links: [
      { label: "Live App", href: "https://geuneul.vercel.app" },
      { label: "GitHub", href: "https://github.com/ghdtjdwn/geuneul" },
    ],
  },
  ddsc: {
    title: "두근두근 자료구조",
    image: "./assets/ddsc-game.png",
    alt: "두근두근 자료구조 게임 플레이 화면",
    tags: ["AI Learning", "Game", "Contest"],
    lead:
      "자료구조 학습을 미연시 인터랙션으로 바꾼 AX 교육 콘텐츠입니다. AI가 모든 대사를 생성하지 않고, 자유서술 답안 채점에만 제한적으로 쓰이도록 설계해 학습 안정성과 재미를 함께 확보했습니다.",
    cards: [
      {
        label: "사용자 서비스",
        title: "자료구조를 이야기와 선택지로 학습",
        body:
          "사용자는 캐릭터와 대화하며 스택, 큐, 트리, 그래프 같은 개념을 배우고, 선택지와 자유서술 문제를 통해 이해도를 확인합니다. 진행 결과에 따라 호감도와 엔딩이 달라집니다.",
      },
      {
        label: "AI 제품성",
        title: "AI를 채점자로만 제한한 안전한 학습 UX",
        body:
          "교육 서비스에서 LLM이 틀린 설명을 생성하면 위험합니다. 그래서 대사와 정답 기준은 사람이 소유하고, AI는 rubric 기반 자유서술 채점만 담당하도록 범위를 잘랐습니다.",
      },
      {
        label: "기술력",
        title: "결정론 엔진과 LLM을 분리",
        body:
          "게임 상태, 호감도, 문제 순서, 엔딩 분기는 결정론 엔진이 담당하고, LLM 채점 실패가 게임 진행을 망치지 않도록 폴백과 테스트를 구성했습니다.",
      },
    ],
    features: [
      "학습 주제별 시나리오, 캐릭터 대화, 문제 풀이, 호감도 변화, 엔딩을 하나의 흐름으로 제공합니다.",
      "AI 자유서술 채점은 정답 키워드와 채점 기준을 기준으로 학습자의 설명을 평가합니다.",
      "LLM이 생성하지 않아야 할 핵심 교육 콘텐츠는 코드와 데이터로 고정해 오교육 가능성을 줄였습니다.",
      "미연시 UI와 학습 퀴즈를 결합해 지루한 CS 개념을 반복 학습 가능한 경험으로 바꿨습니다.",
    ],
    tech: [
      "LLM 호출 지점을 최소화하고, deterministic state machine이 게임 로직을 소유하게 했습니다.",
      "엔진 불변식, 실제 시나리오 완주, E2E 테스트로 AI 결합 서비스의 회귀 위험을 줄였습니다.",
      "OpenAI 호환 provider를 추상화해 모델 변경 가능성을 확보했습니다.",
      "기획, UI, 게임 루프, AI 채점, 테스트 범위를 하나의 데모로 완성했습니다.",
    ],
    strength:
      "AI를 무조건 많이 쓰는 대신, 제품 위험이 낮고 사용자 가치가 큰 지점에만 배치했습니다. 이 판단은 해커톤에서도 매우 중요합니다. 심사위원이 볼 때 AI의 역할과 제어 범위가 명확합니다.",
    links: [{ label: "Private repository", href: "" }],
  },
  chamdomi: {
    title: "참 도미 - 기숙사·룸메이트 매칭 앱",
    image: "./assets/condorm-dorm-search.png",
    alt: "참 도미 기숙사 검색 모바일 화면",
    tags: ["Team 참 도미", "Mobile UI", "Matching"],
    lead:
      "학생의 개인 조건을 바탕으로 지원 가능한 기숙사를 찾고, 생활 습관이 맞는 룸메이트까지 연결하는 학생 생활 서비스입니다. 팀 이름은 참 도미이며, 저는 프론트엔드 전체와 룸메이트 매칭 백엔드 도메인을 담당했습니다.",
    cards: [
      {
        label: "사용자 서비스",
        title: "내 조건으로 지원 가능한 기숙사 확인",
        body:
          "학교, 학년, 지역, 소득분위, 성적, 사회적 배려사항, 희망 조건을 입력하면 지원 가능한 기숙사 목록을 보여줍니다. 월 비용, 보증금, 식사 제공 여부, 거리, 모집기간, 선발 조건을 비교할 수 있습니다.",
      },
      {
        label: "매칭 서비스",
        title: "생활 습관 기반 룸메이트 추천",
        body:
          "수면 시간, 청결도, 소음 민감도, 흡연 여부, 실내 온도, 공유 성향, 성격 태그를 바탕으로 궁합 점수를 계산하고, 게시글·프로필·채팅 흐름으로 매칭을 이어갑니다.",
      },
      {
        label: "기술력",
        title: "모바일 앱과 매칭 알고리즘 구현",
        body:
          "Next.js 모바일 UI, mock/real API 전환 레이어, Spring Boot 도메인, 가중치 점수, Irving Stable Roommates 자동 배정, FE/BE 점수 일치 테스트를 구현했습니다.",
      },
    ],
    features: [
      "개인 정보를 입력하면 지원 가능한 기숙사와 추천 기숙사를 카드 형태로 제공합니다.",
      "기숙사 상세에서 비용, 식사, 방 유형, 거리, 시설, 모집 URL, 지원 자격을 비교합니다.",
      "룸메이트 프로필을 만들고 생활 패턴 태그를 입력하면 궁합 점수와 추천 상대를 보여줍니다.",
      "룸메이트 게시글, 내 게시글, 채팅방, 메시지 읽음 처리까지 실제 앱 흐름에 필요한 화면을 구성했습니다.",
    ],
    tech: [
      "프론트엔드는 Next.js 기반 모바일 화면 9개 이상과 공통 API client, mock store, real API 전환 구조를 만들었습니다.",
      "백엔드는 룸메이트 profile/post/chat/matching 도메인과 안정 매칭 알고리즘을 구현했습니다.",
      "FE와 BE가 같은 궁합 점수를 계산하는지 검증하는 parity test와 매칭 알고리즘 단위 테스트를 구성했습니다.",
      "팀 API 계약서와 도메인 경계를 문서화해 짧은 팀 프로젝트에서도 병렬 개발이 가능하게 했습니다.",
    ],
    strength:
      "참 도미는 단순 기숙사 목록 앱이 아니라 개인 조건 기반 추천, 룸메이트 매칭, 채팅까지 이어지는 생활 서비스입니다. 사용자의 실제 의사결정 흐름을 모바일 UX와 백엔드 도메인으로 끝까지 연결했다는 점이 강점입니다.",
    links: [{ label: "Organization private repositories", href: "" }],
  },
};

function createListItems(items, target) {
  target.replaceChildren();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function openDetail(key) {
  const detail = projectDetails[key];
  if (!detail || !detailRoot) return;

  detailMeta.replaceChildren(
    ...detail.tags.map((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      return span;
    }),
  );

  detailTitle.textContent = detail.title;
  detailLead.textContent = detail.lead;
  detailImage.src = detail.image;
  detailImage.alt = detail.alt;

  detailLinks.replaceChildren();
  detail.links.forEach((link) => {
    if (!link.href) {
      const span = document.createElement("span");
      span.className = "private-note";
      span.textContent = link.label;
      detailLinks.appendChild(span);
      return;
    }
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.textContent = link.label;
    detailLinks.appendChild(anchor);
  });

  detailCards.replaceChildren(
    ...detail.cards.map((card) => {
      const article = document.createElement("article");
      article.className = "detail-card";

      const label = document.createElement("span");
      label.textContent = card.label;
      const title = document.createElement("h3");
      title.textContent = card.title;
      const body = document.createElement("p");
      body.textContent = card.body;

      article.append(label, title, body);
      return article;
    }),
  );

  createListItems(detail.features, detailFeatures);
  createListItems(detail.tech, detailTech);
  detailStrength.textContent = detail.strength;

  detailRoot.classList.add("is-open");
  detailRoot.setAttribute("aria-hidden", "false");
  document.body.classList.add("detail-open");
  detailPanel?.focus();
}

function closeDetail() {
  if (!detailRoot) return;
  detailRoot.classList.remove("is-open");
  detailRoot.setAttribute("aria-hidden", "true");
  document.body.classList.remove("detail-open");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";

    filters.forEach((item) => item.classList.toggle("is-active", item === button));

    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(/\s+/);
      card.hidden = filter !== "all" && !tags.includes(filter);
    });
  });
});

detailButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openDetail(button.dataset.detail);
  });
});

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest("a, button")) return;
    openDetail(card.dataset.project);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      openDetail(card.dataset.project);
    }
  });
});

document.querySelectorAll("[data-close-detail]").forEach((button) => {
  button.addEventListener("click", closeDetail);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetail();
  }
});
