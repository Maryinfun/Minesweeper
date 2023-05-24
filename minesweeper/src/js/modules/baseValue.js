export const baseValue = {
  level: 'BEGINNER',
  bombsLeft: 0,
  defFlags: 0,
  defBombs: 10,
  defSteps: 0,
  defTime: 0,
  defThem: 'Dark',
  defSound: 'On',
  firstInd: ' ',
  bombsArray: [],
  cellsCount: 10 * 10,
  cell: '',
  records: JSON.parse(localStorage.getItem('records')) || ['', '', '', '', '', '', '', '', '', ''],
  stepsCount: 0
};
