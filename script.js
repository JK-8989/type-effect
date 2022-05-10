// create variables
let i = 0
let speed = 80
let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae odio officiis, nemo saepe similique voluptates maxime. Voluptatibus id, officia asperiores ratione at enim eaque labore nihil accusantium ullam vitae quas pariatur odit nesciunt est iure accusamus quibusdam animi minus tempora, unde explicabo necessitatibus nihil natus exercitationem aliquid maiores blanditiis! Excepturi et voluptatibus molestias officia enim, facere quod doloribus quasi numquam accusamus cumque a expedita eveniet laudantium? Excepturi voluptate consequuntur non?'

// create function that gives typing effect
typeEffect = () => {
  if (i < text.length){
    document.getElementById('text-content').innerHTML += text.charAt(i)
    i++
    setTimeout(typeEffect, speed)
  }
}
typeEffect()