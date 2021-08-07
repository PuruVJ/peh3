let isLazysizesImported = false;

export function lazy(node: HTMLImageElement) {
  const srcVal = node.src;
  node.src = '';
  node.dataset.src = srcVal;

  node.classList.add('lazyload');

  if (!isLazysizesImported) {
    import('lazysizes');
    isLazysizesImported = true;
  }

  return { destroy() {} };
}
