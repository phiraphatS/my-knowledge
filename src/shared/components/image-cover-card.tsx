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
        <Center py={6} alignSelf={'stretch'}>
            <Box
                w={{ base: '95%', md: '15rem' }}
                h={'100%'}
                // bg={useColorModeValue('white', 'gray.900')}
                // boxShadow={'xl'}
                rounded={'md'}
                overflow={'hidden'}
                cursor={'pointer'}
                _hover={{
                    boxShadow: 'xl',
                }}>
                <Box
                    position={'relative'}
                    w={'full'}
                    maxW={'20rem'}
                    h={'10rem'}
                >
                    <Image
                        src={preview}
                        alt={'preview'}
                        layout='fill'
                        objectFit='contain'
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