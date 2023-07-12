function calculateMBTI() {
  const form = document.getElementById('mbtiForm');
  const answers = form.elements;

  let mbtiResult = '';

  if (answers.question1.value === 'E') {
    mbtiResult += 'E';
  } else {
    mbtiResult += 'I';
  }

  if (answers.question2.value === 'S') {
    mbtiResult += 'S';
  } else {
    mbtiResult += 'N';
  }

  if (answers.question3.value === 'T') {
    mbtiResult += 'T';
  } else {
    mbtiResult += 'F';
  }

  if (answers.question4.value === 'J') {
    mbtiResult += 'J';
  } else {
    mbtiResult += 'P';
  }

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `당신의 MBTI 결과: ${mbtiResult}`;

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
