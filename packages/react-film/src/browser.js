const { userAgent } = navigator;

const chromium = !/Edge\//u.test(userAgent) && /Chrome\//u.test(userAgent);
const edgeAnaheim = /Edg\//u.test(userAgent);
const edgeUWP = /Edge\//u.test(userAgent);
const firefox = /Firefox\//u.test(userAgent);
const internetExplorer = /Trident\/7.0/u.test(userAgent);

const chrome = chromium && !edgeAnaheim;
const safari = !(chrome || edgeUWP || internetExplorer || firefox);

export { chrome, chromium, edgeAnaheim, edgeUWP, firefox, internetExplorer, safari };
