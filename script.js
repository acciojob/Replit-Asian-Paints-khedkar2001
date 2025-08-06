document.getElementById('change_button').addEventListener('click', function () {
  let blockId = document.getElementById('block_id').value;
  let color = document.getElementById('colour_id').value;

  // Reset all block colors
  const allBlocks = document.querySelectorAll('.grid-item');
  allBlocks.forEach(block => {
    block.style.backgroundColor = 'transparent';
  });

  // Change the selected block's background
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
});

document.getElementById('reset_button').addEventListener('click', function () {
  const allBlocks = document.querySelectorAll('.grid-item');
  allBlocks.forEach(block => {
    block.style.backgroundColor = 'transparent';
  });
});
