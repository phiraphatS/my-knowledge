import { ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

interface TreeFolderListProps {
    name: string;
    children?: TreeNodeProps['node'][];
}

interface TreeNodeProps {
    node: {
        name: string;
        children?: TreeNodeProps['node'][];
    };
}

const TreeNode = ({ node }: TreeNodeProps) => (
    <UnorderedList>
        <ListItem>
            {node.name}
            {node.children && node.children.length > 0 && (
                <UnorderedList>
                    {node.children.map(child => (
                        <TreeNode key={child.name} node={child} />
                    ))}
                </UnorderedList>
            )}
        </ListItem>
    </UnorderedList>
);

// const data = {
//     name: 'root',
//     children: [
//         {
//             name: 'parent',
//             children: [
//                 { name: 'child1' },
//                 { name: 'child2' }
//             ]
//         },
//         {
//             name: 'parent',
//             children: [
//                 { name: 'child1' },
//                 { name: 'child2' }
//             ]
//         },
//         // ... more data
//     ]
// };

export default function TreeFolderList(props: TreeNodeProps) {
    return <TreeNode node={props.node} />
};
