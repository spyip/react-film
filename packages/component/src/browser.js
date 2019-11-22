const { userAgent } = navigator;
const firefox = /Firefox\//.test(userAgent);
const edgeUWP = /Edge\//.test(userAgent);
const chrome = !edgeUWP && /Chrome\//.test(userAgent);
const internetExplorer = /Trident\//.test(userAgent);
const safari = !(chrome || edgeUWP || firefox || internetExplorer);

export {
  chrome,
  edgeUWP,
  firefox,
  internetExplorer,
  safari
}