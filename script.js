document.getElementById('change_button').addEventListener('click', function () {
  // Reset all grid items' background to transparent
  let gridItems = document.getElementsByClassName('grid-item');
  for (let item of gridItems) {
    item.style.backgroundColor = 'transparent';
  }

  // Get block ID and color
  let blockId = document.getElementById('block_id').value;
  let color = document.getElementById('colour_id').value;

  // Change color of the selected block
  let block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
});

document.getElementById('Reset').addEventListener('click', function () {
  let gridItems = document.getElementsByClassName('grid-item');
  for (let item of gridItems) {
    item.style.backgroundColor = 'transparent';
  }
});
