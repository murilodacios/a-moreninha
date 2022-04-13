import {
  Box,
  Button, Flex, HStack, Icon, Image, Link, SimpleGrid, Stack, Text
} from '@chakra-ui/react'

import Head from 'next/head'
import { RiFilePaper2Line, RiUser2Line } from 'react-icons/ri'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Infos } from '../components/Infos'

export default function Home() {

  return (
    <>
      <Head>
        <title>A Moreninha - Nota Fiscal - Secretaria de Fazenda de Itaboraí</title>
      </Head>
      
      <Hero />
      
      <Services />

      <Infos />

    </>
  )
}
