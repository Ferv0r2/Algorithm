// 최소공배수와 최대공약수

function gcd(n, m) {
  while (m !== 0) {
    let r = n % m;
    n = m;
    m = r;
  }
  return n;
}

function lcm(n, m) {
  return (n * m) / gcd(n, m);
}

function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}
