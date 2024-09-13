'use client'

import Image from 'next/image'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react'

interface ImageCoverCardProps {
    preview: string
    title: string
    description: string
}

export default function ImageCoverCard({ preview, title, description }: ImageCoverCardProps) {

    return (
        <Center py={8} px={3} alignSelf={'stretch'}>
            <Box
                w={{ base: '100%', md: '15rem' }}
                h={'100%'}
                // bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'xl'}
                rounded={'md'}
                overflow={'hidden'}
                cursor={'pointer'}
                _hover={{
                    // boxShadow: 'xl',
                    bg: useColorModeValue('gray.100', 'gray.900'),
                }}>
                <Box
                    position={'relative'}
                    w={'full'}
                    pt={'60%'}
                    maxW={'20rem'}
                >
                    <Image
                        src={preview}
                        alt={'preview'}
                        layout='fill'
                        objectFit='cover'
                        priority={true}
                    />
                </Box>
                <Stack padding={2}>
                    <Heading
                        fontSize={'1xl'}
                        fontFamily={'body'}
                    >
                        {title}
                    </Heading>
                    <Text fontSize={'smaller'}>
                        {description}
                    </Text>
                </Stack>
            </Box>
        </Center>
    )
}