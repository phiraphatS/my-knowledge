'use client';
import { Flex, HStack, Button, useToast } from '@chakra-ui/react';
import copy from 'copy-to-clipboard';
import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as testCss } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface PostComponentProps {
    content: string;
}

export default function SyntaxCode({ content }: PostComponentProps) {
    const [copied, setCopied] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const toast = useToast()
    
    const handleCopy = () => {
        // copy to clipboard
        copy(content);
        // show toast
        toast({
            duration: 1600,
            render: () => (
                <Flex p={3} bg='gray.700' color='white' borderRadius='md'>
                    Copied!
                </Flex>
            )
        });
        // set text copied
        setCopied(true);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimeoutId(setTimeout(() => {
            setCopied(false);
        }
        , 2000));
    };

    return (
        <Flex w='100%' display='flex' position='relative' flexDirection='column' alignItems='stretch'>
            <HStack position='absolute' right='0' top='2'>
                <Button 
                    size='xs' 
                    bg='none' 
                    color='gray.600' 
                    _hover={{ bg: 'none', color: 'gray.400' }} 
                    spinner={<></>}
                    onClick={handleCopy}>
                    {copied ? 'Copied!' : 'Copy'}
                </Button>
            </HStack>
            <SyntaxHighlighter language="typescript" style={testCss}>
                {content}
            </SyntaxHighlighter>
        </Flex>
    )
}
