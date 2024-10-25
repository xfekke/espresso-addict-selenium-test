// right now chrome is our only options since
// we haven't installed other drivers
// and have special settings in support/world.js
export const browser = 'chrome';
// run headless (don't show browser)
export const headless = true;
// max execution time
export const timeout = 30000;
// to run in 'slow motion' increase this time
// and to run at maximal speed keep at 0
export const sleepBetweenSteps = 0;