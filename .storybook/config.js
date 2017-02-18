import { configure } from '@kadira/storybook';

function loadStories() {
    require('../src/app/components/FlipCard/FlipCard.story.js');
    require('../src/app/components/GameController/GameController.story.js');
}

configure(loadStories, module);
