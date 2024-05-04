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
import styles from '@/styles/sub-components/card-icon-text.module.scss'

interface CardIconTextProps {
    preview: string
    title: string
    description: string
}

export default function CardIconText({ preview, title, description }: CardIconTextProps) {
    const gradiantTextColor = useColorModeValue(styles.gradiantTextLightMode, styles.gradiantTextDarkMode)

    return (
        <Center py={6}>
            <Box
                maxW={{ base: '95%', md: '20rem' }}
                className={styles.contentBox}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'xl'}
                rounded={'md'}
                _hover={{ 
                    boxShadow: '2xl',
                }}>
                <Box
                    className={styles.imgBox}
                >
                    <Image
                        src={preview}
                        alt={'preview'}
                        layout='fill'
                        objectFit='contain'
                    />
                </Box>
                <Stack>
                    <Heading
                        fontSize={'1xl'}
                        fontFamily={'body'}
                        className={gradiantTextColor}>
                        {title}
                    </Heading>
                    <Text color={'gray.500'}>
                        {description}
                    </Text>
                </Stack>
            </Box>
        </Center>
    )
}