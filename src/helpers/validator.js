export const validateTitle = (title) => {
  // eslint-disable-next-line no-useless-escape
  if (title.trim().match(/^[\d\p{L} \.,_-]+$/u) === null) {
    return ['Uncorrect title.',
            `Title can't be empty. 
            It can use numbers, letters (a, A), spaces, dashes, dots, underscores.`]
        
  }
  return null;
}