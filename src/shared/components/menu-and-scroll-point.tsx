'use client';
import { Box, Heading, ListItem, OrderedList, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll';

interface MenuAndScrollPointProps {
    menuItems: {
        id: string,
        title: string
    }[];
}

export default function MenuAndScrollPoint({ menuItems }: MenuAndScrollPointProps) {
    const bgColor = useColorModeValue('gray.100', 'gray.900')
    const headerTextColor = useColorModeValue('gray.700', 'gray.300')
    return (
        <Box
            minW={250}
            alignSelf={'flex-start'}
            display={{ base: 'none', md: 'block' }}
            position={'relative'}
        >
            <Box
                paddingTop={4}
                paddingLeft={8}
                paddingRight={8}
                paddingBottom={4}
                borderRadius={'md'}
                maxH={'60%'}
                position={'fixed'}
                bg={bgColor}>
                    <Heading as='h3' size='sm' color={headerTextColor} marginBottom={4}>
                        List
                    </Heading>
                    <OrderedList marginInlineStart={6}>
                        {menuItems.map(({ id, title }) => (
                            <ListItem 
                                key={id}
                                cursor={'pointer'}
                                color={'gray.500'}
                                marginBottom={4}
                                _hover={{
                                    color: 'gray.400'
                                }}>
                                <Link
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass='active'
                                >
                                    {title}
                                </Link>
                            </ListItem>
                        ))}
                    </OrderedList>
                {/* <VStack alignItems='start'>
                    {menuItems.map(({ id, title }) => (
                        <Box
                            cursor={'pointer'}
                            color={'gray.500'}
                            _hover={{
                                color: 'gray.700'
                            }}
                        >
                            <Link
                                key={id}
                                to={id}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass='active'
                            >
                                {title}
                            </Link>
                        </Box>
                    ))}
                </VStack> */}
            </Box>
        </Box>
    )
}
