function calculateMBTI() {
  const form = document.getElementById('mbtiForm');
  const answers = form.elements;

  let eCount = 0;
  let iCount = 0;
  let sCount = 0;
  let nCount = 0;
  let tCount = 0;
  let fCount = 0;
  let jCount = 0;
  let pCount = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].type === 'radio' && answers[i].checked) {
      const value = answers[i].value;

      switch (i) {
        case 0:
          if (value === 'E') eCount++;
          else if (value === 'I') iCount++;
          break;
        case 1:
          if (value === 'S') sCount++;
          else if (value === 'N') nCount++;
          break;
        case 2:
          if (value === 'T') tCount++;
          else if (value === 'F') fCount++;
          break;
        case 3:
          if (value === 'J') jCount++;
          else if (value === 'P') pCount++;
          break;
        case 4:
          if (value === 'E') eCount++;
          else if (value === 'I') iCount++;
          break;
      }
    }
  }

  const mbtiResult = `${eCount > iCount ? 'E' : 'I'}${sCount > nCount ? 'S' : 'N'}${tCount > fCount ? 'T' : 'F'}${jCount > pCount ? 'J' : 'P'}`;
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `당신의 MBTI 결과: ${mbtiResult}`;

  const personalityType = getPersonalityType(mbtiResult);
  const personalityElement = document.getElementById('personality');
  personalityElement.innerHTML = `당신의 성격 유형: ${personalityType}`;
}

function getPersonalityType(mbtiResult) {
  // 각 MBTI 유형에 따라 성격 유형을 반환하는 함수
  // 선택지에 따라 성격 유형이 변하도록 설정합니다.
  let personalityType = '';

  switch (mbtiResult) {
    case 'ISTJ':
      if (document.getElementById('question5E').checked) {
        personalityType = '차분한 전략가';
      } else {
        personalityType = '현실적인 관리자';
      }
      break;
    case 'ENFP':
      if (document.getElementById('question1E').checked) {
        personalityType = '재기발랄한 영감주의자';
      } else {
        personalityType = '사교적인 친선도모자';
      }
      break;
    case 'ISTP':
      if (document.getElementById('question4E').checked) {
        personalityType = '논리적인 공영주의자';
      } else {
        personalityType = '고립된 기술자';
      }
      break;
    case 'ESFJ':
      if (document.getElementById('question2E').checked) {
        personalityType = '자상한 외교관';
      } else {
        personalityType = '사교적인 친선도모자';
      }
      break;
    default:
      personalityType = '알 수 없음';
  }

  return personalityType;
}

const resultButton = document.querySelector('input[type="button"]');
resultButton.addEventListener('click', calculateMBTI);
