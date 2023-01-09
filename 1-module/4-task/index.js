function checkSpam(str) {
  return (str.match(/1[x|X][b|B][e|E][t|T]/) || str.match(/[x|X][x|X][x|X]/)) ? true : false;
}
