import React from 'react';
import { StyledTagsInput } from './StyledTagsInput';
import { AiFillCloseCircle } from 'react-icons/ai';

const TagsInput = ({ tags, setTags, label }) => {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ' ) {
            if (event.target.value !== '') {
                setTags([
                    ...tags,
                    event.target.value.replace(/(<([^>]+)>)/gi, ''),
                ]);
                event.target.value = '';
            }
        }
    };
    

    const removeTagHandler = (tag) => {
        let filteredTags = tags.filter((t) => t !== tag);
        setTags(filteredTags);
    };

    return (
        <StyledTagsInput>
            <div className='tags-container'>
                {tags &&
                    tags.map((tag, idx) => (
                        <div
                            className='tag-container'
                            onClick={() => removeTagHandler(tag)}
                        >
                            <p>{tag}</p>
                            <AiFillCloseCircle />
                        </div>
                    ))}
            </div>
            <div className='form-group'>
                <span>{label}</span>

                <input
                    className='form-field'
                    type='text'
                    name=''
                    id=''
                    onKeyPress={handleKeyPress}
                />
            </div>
        </StyledTagsInput>
    );
};

export default TagsInput;
