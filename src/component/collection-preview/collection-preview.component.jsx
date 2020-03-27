import React from 'react';
import ColletionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 classname='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) =>(
                    <ColletionItem key={id} { ...otherItemProps}/>
            ))}
        </div>
    </div>
);

export default CollectionPreview;