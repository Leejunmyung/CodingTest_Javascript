function solution(tickets) {
  const graph = {};
  const answer = [];

  // 그래프 생성
  for (const [from, to] of tickets) {
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
  }

  // 알파벳 순서로 정렬
  for (const city in graph) {
    graph[city].sort();
  }

  function dfs(node, path) {
    path.push(node);

    if (path.length === tickets.length + 1) {
      answer.push([...path]);
      return;
    }

    if (graph[node]) {
      for (let i = 0; i < graph[node].length; i++) {
        const nextNode = graph[node][i];
        graph[node].splice(i, 1); // 사용한 항공권 제거
        dfs(nextNode, path);
        graph[node].splice(i, 0, nextNode); // 복구
      }
    }

    path.pop();
  }

  dfs('ICN', []);

  return answer[0];
}