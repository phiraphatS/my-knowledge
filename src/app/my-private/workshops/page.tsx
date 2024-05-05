import { Flex, HStack, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import styles from '@/styles/components/workshops.module.scss'
import CardIconText from '@/shared/components/card-icon-text'

export default function WorkshopComponent() {
  const mockUpData = [
    {
      preview: '/assets/next-js.1024x1024.png',
      title: 'Next.js implementation',
      description: 'See how I implemented Next.js in my project, basic to advanced',
    },
    {
      preview: '/assets/nestjs.1024x1020.png',
      title: 'Nest.js implementation',
      description: 'APIs are the backbone of any project, see how I implemented Nest.js in my project',
    },
  ]

  return (
    <Flex
      className={styles.outerContainer}
    >
      <Heading as='h2' size='md' textAlign={{ base: 'center', md: 'left' }}>
        Workshops
      </Heading>

      <Stack alignItems='stretch' gap={10} direction={{ base: 'column', md: 'row'}}>
        {mockUpData.map(({ preview, title, description }) => (
          <CardIconText preview={preview} title={title} description={description} />
        ))}
      </Stack>
    </Flex>
  )
}
