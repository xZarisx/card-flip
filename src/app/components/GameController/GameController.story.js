import { storiesOf, action } from '@kadira/storybook';
import GameController from './GameController.js';
import { withKnobs, boolean, number } from '@kadira/storybook-addon-knobs';

storiesOf('GameController', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
    .addDecorator(withKnobs)

    .add('default', () => (
        <GameController flipped={boolean('flipped', false)} card={number('card', 0)} onClick={action('clicked')}/>
    ))
