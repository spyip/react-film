const { userAgent } = navigator;
const firefox = /Firefox\//.test(userAgent);
const edgeUWP = /Edge\//.test(userAgent);
const chrome = !edgeUWP && /Chrome\//.test(userAgent);
const safari = !(chrome || edgeUWP || firefox);

export {
  chrome,
  edgeUWP,
  firefox,
  safari,
}