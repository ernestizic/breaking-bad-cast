import React from 'react';
import Spinner from '../ui/Spinner';
import CharacterItem from './CharacterItem';

const CharacterGrid = (props) => {
    const { items, isLoading } = props
    let characters = isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item} />
            ))}
        </section>
    )

    return ( 
        <div>
            {characters}
        </div>
     );
}
 
export default CharacterGrid;