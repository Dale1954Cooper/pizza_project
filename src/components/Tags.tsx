import React, {FC} from 'react';
import {Tag} from 'antd';


interface Props {
    tags: string[]
}

const Tags: FC<Props> = ({tags}) => {
    return (
        <>
            {tags.map(tag =>
                <Tag key={tag}>{tag}</Tag>
            )}
        </>
    );
};

export default Tags;