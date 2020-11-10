const inject = (items, sections) => {
  let i = 0;
  sections.forEach(section =>{
    const {content, index} = section;
    items.splice(index + i, 0, content);
    i++;
  })
  return items;
}
export { inject };
