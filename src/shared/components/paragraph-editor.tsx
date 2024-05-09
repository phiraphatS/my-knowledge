'use client';
import { EditIcon, EmailIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import ImageCoverCard from './image-cover-card';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import styles from '@/styles/components/workshops.module.scss'

interface ParagraphEditorProps {
    children: React.ReactNode,
    colorMode: string
}

interface EditorDialogProps {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

function EditorDialog({ isOpen, onOpen, onClose }: EditorDialogProps) {
    const [selectedType, setSelectedType] = useState(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (!scrollContainerRef.current) return;
        scrollContainerRef.current.scrollTo({
            left: scrollContainerRef.current.scrollLeft - 250, // adjust scroll amount as needed
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        if (!scrollContainerRef.current) return;
        scrollContainerRef.current.scrollTo({
            left: scrollContainerRef.current.scrollLeft + 250, // adjust scroll amount as needed
            behavior: 'smooth'
        });
    };

    const mockCardData = [
        {
            preview: '/assets/image-syntax.png',
            title: 'Syntax',
            description: 'Past you function code to the editor and see the magic happen',
        },
        {
            preview: '/assets/image-syntax.png',
            title: 'Header',
            description: 'provide a header to your paragraph',
        },
        {
            preview: '/assets/image-syntax.png',
            title: 'Text',
            description: 'Write your paragraph here',
        },
        {
            preview: '/assets/image-syntax.png',
            title: 'Image',
            description: 'Add an image to your paragraph',
        },
        {
            preview: '/assets/image-syntax.png',
            title: 'Code',
            description: 'Add code snippet to your paragraph',
        },
        {
            preview: '/assets/image-syntax.png',
            title: 'Tree Node',
            description: 'Show your data in tree structure',
        },
    ];

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size={{ base: 'full', md: '4xl' }}
            motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Paragraph Editor</ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody>
                    <Box
                        ref={scrollContainerRef}
                        className={styles['fade-wrapper']}
                        overflow={'hidden'}
                        marginLeft={'5rem'}
                        marginRight={'5rem'}>
                        <Stack
                            alignItems='stretch'
                            gap={10}
                            direction={{ base: 'column', md: 'row' }}
                            width={'max-content'}>

                            {mockCardData.map((props) => (
                                <ImageCoverCard {...props} />
                            ))}
                        </Stack>
                    </Box>

                    <Box
                        backgroundColor={'gray.900'}
                        borderRadius={'50%'}
                        cursor={'pointer'}
                        p={4}
                        left={2}
                        top={'50%'}
                        position={'absolute'}
                        _hover={{
                            backgroundColor: 'gray.600'
                        }}
                        onClick={scrollLeft}
                    >
                        <BiLeftArrowAlt fontSize={25} />
                    </Box>

                    <Box
                        backgroundColor={'gray.900'}
                        borderRadius={'50%'}
                        cursor={'pointer'}
                        p={4}
                        right={2}
                        top={'50%'}
                        position={'absolute'}
                        _hover={{
                            backgroundColor: 'gray.600'
                        }}
                        onClick={scrollRight}
                    >
                        <BiRightArrowAlt fontSize={25} />
                    </Box>

                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='red' mr={3} onClick={onClose}>
                        Delete
                    </Button>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    {/* <Button variant='ghost'>Secondary Action</Button> */}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default function ParagraphEditor({ children, colorMode }: ParagraphEditorProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box
            p={4}
            w={'full'}
            borderRadius={10}
            transition={'all 0.3s'}
            color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
            position={'relative'}
            onClick={onOpen}
            _hover={{
                bg: colorMode === 'dark' ? 'gray.900' : 'gray.100',
                cursor: 'pointer',
                '& > div.chakra-stack': {
                    display: 'flex'
                }
            }}
        >
            <HStack
                display={'none'}
                position={'absolute'}
                right={0}
                top={-12}>
                <IconButton
                    variant='ghost'
                    aria-label='Edit'
                    icon={<EditIcon />}
                />
            </HStack>
            {children}

            <EditorDialog isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Box>
    )
}
