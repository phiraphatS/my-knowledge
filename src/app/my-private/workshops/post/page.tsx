import React, { use } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import generateQueryString from '@/shared/functions/toQueryString'
import styles from '@/styles/components/workshops.module.scss'
import { Container, Flex, Heading, VStack, Text, Center, Code, Alert, AlertIcon, Box, HStack, Button } from '@chakra-ui/react'
import SyntaxCode from '@/shared/components/syntax-highlighter'
import Image from 'next/image'
import MenuAndScrollPoint from '@/shared/components/menu-and-scroll-point'
import TreeExample from '@/shared/components/tree-beared'
import ParagraphEditor from '@/shared/components/paragraph-editor'

interface PostComponentProps {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}

const mockUpData = {
    title: 'Nest.js implementationn',
    paragraps_list: [
        {
            type: 'header',
            content: 'Introduction',
        },
        {
            type: 'text',
            content: <>
                Nest.js is a framework for building efficient,
                scalable Node.js server-side applications. It uses
                progressive JavaScript, is built with TypeScript
                (preserves compatibility with pure JavaScript)
                and combines elements of OOP (Object Oriented Programming),
                FP (Functional Programming), and FRP (Functional Reactive Programming).
            </>,
        },
        {
            type: 'text',
            content: <>
                Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default)
                and optionally can be configured to use Fastify as well!
            </>,
        },
        {
            type: 'text',
            content: <>
                Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify),
                but also exposes their APIs directly to the developer.
                This gives developers the freedom to use the myriad of third-party modules
                which are available for the underlying platform.
            </>,
        },
        {
            type: 'header',
            content: 'Philosophy',
        },
        {
            type: 'text',
            content: <>
                In recent years, thanks to Node.js, JavaScript has become the
                “lingua franca” of the web for both front and backend applications.
                This has given rise to awesome projects like Angular, React and Vue,
                which improve developer productivity and enable the creation of fast,
                testable, and extensible frontend applications. However,
                while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript),
                none of them effectively solve the main problem of - Architecture.
            </>
        },
        {
            type: 'text',
            content: <>
                Nest provides an out-of-the-box application architecture
                which allows developers and teams to create highly testable,
                scalable, loosely coupled, and easily maintainable applications.
                The architecture is heavily inspired by Angular.
            </>
        },
        {
            type: 'header',
            content: 'Installation',
        },
        {
            type: 'text',
            content: <>
                To get started, you can either scaffold the project with the Nest CLI,
                or clone a starter project (both will produce the same outcome).
            </>
        },
        {
            type: 'text',
            content: <>
                To scaffold the project with the Nest CLI,
                run the following commands. This will create a new project directory,
                and populate the directory with the initial core Nest files and supporting modules,
                creating a conventional base structure for your project.
                Creating a new project with the Nest CLI is recommended for first-time users.
                We'll continue with this approach in First Steps.
            </>
        },
        {
            type: 'code',
            content: <>
                $ npm i -g @nestjs/cli
            </>
        },
        {
            type: 'code',
            content: <>
                $ nest new project-name
            </>
        },
        {
            type: 'info',
            content: <>
                To create a new TypeScript project with stricter feature set,
                pass the --strict flag to the nest new command.
            </>
        },
        {
            type: 'syntax',
            content: (
`'use client'

import { ChakraProvider, createCookieStorageManager } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { Suspense } from 'react'
import Loading from './loading'

const manager = createCookieStorageManager('chakra-color-mode')
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading/>}>
      <ChakraProvider theme={theme} colorModeManager={manager}>
        {children}
      </ChakraProvider>
    </Suspense>
  )
}`
            )
        },
        {
            type: 'image',
            content: '/assets/Modules_1.png',
        },
        {
            type: 'treenode',
            content: {
                name: 'root',
                children: [
                    {
                        name: 'src',
                        children: [
                            { 
                                name: 'app',
                                children: [
                                    { name: 'app.controller.ts' },
                                    { name: 'app.module.ts' },
                                    { name: 'app.service.ts' },
                                    { name: 'main.ts' },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'node_modules',
                        children: [
                            { name: '@nest' },
                            { name: '@other' },
                        ]
                    }
                    // ... more data
                ]
            }
        }
    ]
}

export default async function PostComponent({ searchParams, params }: PostComponentProps) {
    if (!searchParams || searchParams.postid === undefined) {
        redirect('/my-private/workshops')
    }

    // const postId = searchParams.postid
    // const accessToken = cookies().get('access_token')

    // const reqParams = {
    //     postId: postId,
    // }

    // const requestOption = {
    //     methods: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${accessToken}`
    //     },
    // }

    // const queryString = generateQueryString(reqParams)
    // const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/post-detail?${queryString}`
    // const response = await fetch(url, requestOption)
    // if (!response.ok) {
    //     redirect('/my-private/workshops')
    // }

    // const data = await response.json()

    const colorMode = cookies().get('chakra-color-mode')?.value || 'dark';
    const menuItems = mockUpData.paragraps_list.filter(({ type }) => type === 'header').map(({ content }) => {
        return {
            id: content.toString().toLowerCase().replace(/ /g, '-'),
            title: content as string,
        }
    })

    return (
        <Flex className={styles.outerContainerRow}>
            <Container maxW='100%'>
                <VStack alignItems='flex-start' gap={2}>
                    {/* <Heading as='h2' size='md' textAlign={{ base: 'center', md: 'left' }}>
                        {mockUpData.title}
                    </Heading> */}

                    {mockUpData.paragraps_list.map(({ type, content }) => {
                        const contentTypeEl = (): React.JSX.Element => {
                            const anyVariable = content as any // This is a hacky way to get rid of typescript error

                            if (type === "treenode") {
                                return <TreeExample node={anyVariable} />
                            }

                            if (type === "text") {
                                return <Text> {anyVariable} </Text>
                            }

                            if (type === "header") {
                                return <Heading
                                    id={anyVariable.toString().toLowerCase().replace(/ /g, '-')}
                                    as='h2'
                                    size='md'
                                    textAlign={{ base: 'center', md: 'left' }}
                                >
                                    {anyVariable}
                                </Heading>
                            }

                            if (type === "code") {
                                return <Code>{anyVariable}</Code>
                            }

                            if (type === "syntax") {
                                return (
                                    <SyntaxCode content={anyVariable} />
                                )
                            }

                            if (type === "info" || type === "warning" || type === "error" || type === "success" || type === "loading") {
                                return <Alert status={type}>
                                    <AlertIcon />
                                    {anyVariable}
                                </Alert>
                            }

                            if (type === "image") {
                                const srcString = anyVariable as string
                                return <Box
                                    position='relative'
                                    minH={{ base: '200px', md: '400px' }}
                                >
                                    <Image
                                        src={srcString}
                                        alt='' layout='fill'
                                        objectFit='contain'
                                        priority={true}
                                    />
                                </Box>
                            }

                            return <Center>Something went wrong!</Center>
                        }

                        const Results = contentTypeEl();
                        return (
                            <ParagraphEditor colorMode={colorMode}>
                                {Results}
                            </ParagraphEditor>
                        )
                    })}
                </VStack>
            </Container>

            <MenuAndScrollPoint menuItems={menuItems} />
        </Flex>
    )
}
