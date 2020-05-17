export function debounce(method,delay) {
  
  let timer = null;
  return function () {
         let args = arguments;
      timer && clearTimeout(timer);
      timer = setTimeout(function () {
          method.apply(this,args);
      },delay);
  }
}
