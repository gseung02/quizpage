const mockData = {
  categories: [
    {
      id: 1,
      name: "기본 지리 문제",
      flashcards: [
        { id: 101, question: "세계에서 가장 큰 대륙은?", answer: "아시아" },
        { id: 102, question: "미국의 수도는?", answer: "워싱턴 D.C." },
        { id: 103, question: "인도의 수도는?", answer: "뉴델리" },
        { id: 104, question: "아프리카에서 가장 큰 나라는?", answer: "알제리" },
        { id: 105, question: "유럽에서 가장 작은 나라", answer: "바티칸 시국" },
      ],
    },
    {
      id: 2,
      name: "세계 역사 문제",
      flashcards: [
        { id: 201, question: "제2차 세계대전은 언제 끝났나요?", answer: "1945년" },
        { id: 202, question: "로마 제국은 언제 멸망했나요?", answer: "476년" },
        { id: 203, question: "프랑스 혁명은 언제 일어났나요?", answer: "1789년" },
        { id: 204, question: "영국 왕 헨리 8세가 주도한 사건은?", answer: "영국 국교회 설립" },
        { id: 205, question: "아메리카 대륙을 발견한 탐험가는?", answer: "크리스토퍼 콜럼버스" },
      ],
    },
    {
      id: 3,
      name: "과학 상식 문제",
      flashcards: [
        { id: 301, question: "물이 끓는 점은 몇 도인가요?", answer: "100도" },
        { id: 302, question: "태양계에서 가장 큰 행성은?", answer: "목성" },
        { id: 303, question: "인간의 DNA를 발견한 과학자는?", answer: "왓슨과 크릭" },
        { id: 304, question: "빛의 속도는 초당 몇 킬로미터인가요?", answer: "약 30만 킬로미터" },
        { id: 305, question: "지구의 대기는 어떤 가스로 주로 이루어져 있나요?", answer: "질소" },
      ],
    },
    {
      id: 4,
      name: "문학 상식 문제",
      flashcards: [
        { id: 401, question: "‘햄릿’의 작자는?", answer: "윌리엄 셰익스피어" },
        { id: 402, question: "‘노인과 바다’의 작자는?", answer: "어니스트 헤밍웨이" },
        { id: 403, question: "‘어린 왕자’를 쓴 작가는?", answer: "앙투안 드 생텍쥐페리" },
        { id: 404, question: "‘1984’를 쓴 작자는?", answer: "조지 오웰" },
        { id: 405, question: "‘죄와 벌’을 쓴 작자는?", answer: "표도르 도스토옙스키" },
      ],
    },
    {
      id: 5,
      name: "음악 상식 문제",
      flashcards: [
        { id: 501, question: "비틀즈의 첫 앨범은 무엇인가요?", answer: "Please Please Me" },
        { id: 502, question: "모차르트는 어느 나라 출신인가요?", answer: "오스트리아" },
        { id: 503, question: "‘작은 별’의 원곡은 무엇인가요?", answer: "프랑스 민속가요" },
        { id: 504, question: "‘비행기’를 부른 가수는?", answer: "김광석" },
        { id: 505, question: "‘보헤미안 랩소디’를 부른 밴드는?", answer: "퀸" },
      ],
    },
  ],
};

export default mockData;
