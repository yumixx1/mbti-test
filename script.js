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

  // 선택지에 따라 카운트 수 증가
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

  // MBTI 결과 계산
  const mbtiResult = `${eCount > iCount ? 'E' : 'I'}${sCount > nCount ? 'S' : 'N'}${tCount > fCount ? 'T' : 'F'}${jCount > pCount ? 'J' : 'P'}`;
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `당신의 MBTI 결과: ${mbtiResult}`;

  // MBTI 결과에 따른 성격 유형 반환
  const personalityType = getPersonalityType(mbtiResult);
  const personalityElement = document.getElementById('personality');
  personalityElement.innerHTML = `당신의 성격 유형: ${personalityType}`;
}

function getPersonalityType(mbtiResult) {
  let personalityType = '';

  switch (mbtiResult) {
    case 'ISTJ':
      personalityType = '차분한 전략가';
      break;
    case 'ISFJ':
      personalityType = '용감한 수호자';
      break;
    case 'INFJ':
      personalityType = '예언자';
      break;
    case 'INTJ':
      personalityType = '용의주도한 전략가';
      break;
    case 'ISTP':
      personalityType = '만능 재주꾼';
      break;
    case 'ISFP':
      personalityType = '호기심 많은 예술가';
      break;
    case 'INFP':
      personalityType = '열정적인 중재자';
      break;
    case 'INTP':
      personalityType = '논리적인 사색가';
      break;
    case 'ESTP':
      personalityType = '모험을 즐기는 사업가';
      break;
    case 'ESFP':
      personalityType = '자유로운 영혼의 연예인';
      break;
    case 'ENFP':
      personalityType = '재기발랄한 영감주의자';
      break;
    case 'ENTP':
      personalityType = '뜨거운 논쟁을 즐기는 변론가';
      break;
    case 'ESTJ':
      personalityType = '엄격한 관리자';
      break;
    case 'ESFJ':
      personalityType = '사교적인 외교관';
      break;
    case 'ENFJ':
      personalityType = '정의로운 사회운동가';
      break;
    case 'ENTJ':
      personalityType = '대담한 통솔자';
      break;
    default:
      personalityType = '알 수 없음';
  }

  return personalityType;
}

const resultButton = document.querySelector('input[type="button"]');
resultButton.addEventListener('click', calculateMBTI);

