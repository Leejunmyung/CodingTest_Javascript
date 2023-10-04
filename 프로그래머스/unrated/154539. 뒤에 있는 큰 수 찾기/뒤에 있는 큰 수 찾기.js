function solution(numbers) {
  const result = [];
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
      const topIndex = stack.pop();
      result[topIndex] = numbers[i];
    }
    stack.push(i);
  }

  // 스택에 남아있는 인덱스들에 대해 뒷 큰수가 없는 경우 -1로 설정
  for (const index of stack) {
    result[index] = -1;
  }

  return result;
}






