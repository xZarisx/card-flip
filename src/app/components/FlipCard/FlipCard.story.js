import { storiesOf, action } from '@kadira/storybook';
import FlipCard from './FlipCard.js';
import { withKnobs, boolean, number } from '@kadira/storybook-addon-knobs';

storiesOf('FlipCard', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
    .addDecorator(withKnobs)

    .add('default', () => (
        <FlipCard flipped={boolean('flipped', false)} card={number('card', 0)} onClick={action('clicked')}/>
    ))
