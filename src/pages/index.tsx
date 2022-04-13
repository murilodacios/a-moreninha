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

      <Flex bg="yellow.300" align="center" justify="center" p="4">
        <Text>Nosso chat de atendimento neste site está com problemas técnicos, estamos trabalhando para retomar
          o mais rápido possível.
        </Text>
      </Flex>
      
      <Hero />
      
      <Services />

      <Infos />

    </>
  )
}
