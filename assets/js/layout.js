// import Bricks
import Bricks from 'bricks.js'

// define your grid at different breakpoints, mobile first (smallest to largest)
const sizes = [
  { columns: 2, gutter: 10 },
  { mq: '768px', columns: 3, gutter: 25 },
  { mq: '1024px', columns: 4, gutter: 50 }
]

// create an instance

const instance = Bricks({
  container: '.bricks',
  packed: 'data-packed',
  sizes: sizes,
  position: true
})

// bind callbacks

instance
  .on('pack',   () => console.log('ALL grid items packed.'))
  .on('update', () => console.log('NEW grid items packed.'))
  .on('resize', size => console.log('The grid has be re-packed to accommodate a new BREAKPOINT.'))

// start it up, when the DOM is ready
// note that if images are in the grid, you may need to wait for document.readyState === 'complete'

document.addEventListener('DOMContentLoaded', event => {
  instance
    .resize(true)     // bind resize handler
    .pack()           // pack initial items
})

