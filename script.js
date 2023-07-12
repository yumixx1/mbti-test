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

  const personalityType = getPersonalityType(mbtiResult, answers);
  const personalityElement = document.getElementById('personality');
  personalityElement.innerHTML = `당신의 성격 유형: ${personalityType}`;
}

function getPersonalityType(mbtiResult, answers) {
  let personalityType = '';

  switch (mbtiResult) {
    case 'ISTJ':
      if (answers[4].value === 'E') {
        personalityType = '차분한 전략가';
      } else {
        personalityType = '현실적인 관리자';
      }
      break;
    case 'ENFP':
      if (answers[0].value === 'E' && answers[3].value === 'J') {
        personalityType = '재기발랄한 영감주의자';
      } else {
        personalityType = '사교적인 친선도모자';
      }
      break;
    case 'ISTP':
      if (answers[3].value === 'E') {
        personalityType = '논리적인 공영주의자';
      } else {
        personalityType = '고립된 기술자';
      }
      break;
    case 'ESFJ':
      if (answers[1].value === 'E') {
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
