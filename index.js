function getFirstSelector(sel) {
  return document.querySelector(sel)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  const all = document.querySelectorAll(ul.ranked-list)
  for (let i = 0; i < all.length; i++) {
    all[i] += n
  }
  return all
}

function deepestChild() {

}
