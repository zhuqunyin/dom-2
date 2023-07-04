const div = dom.find('#test>.black')[0]
dom.style(div, 'color', 'red')
const divList = dom.find('.red')
dom.each(divList, (n) => console.log(n))