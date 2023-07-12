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
}

const resultButton = document.querySelector('input[type="button"]');
resultButton.addEventListener('click', calculateMBTI);
