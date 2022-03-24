import {
  Button, HStack, Icon, Image, Link, SimpleGrid, Stack, Text
} from '@chakra-ui/react'

import Head from 'next/head'
import { RiFilePaper2Line, RiUser2Line } from 'react-icons/ri'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Tutoriais } from '../components/Tutoriais'

export default function Home() {

  return (
    <>
      <Head>
        <title>A Moreninha - Nota Fiscal - Secretaria de Fazenda de Itaboraí</title>
      </Head>


      <Header />

      <Hero />


      <Stack align="center" m="0 auto" maxWidth="1120" spacing={8} p="4" my="6">

        <SimpleGrid columns={3} gap="4" w="100%" minChildWidth={320}>
          <Stack
            bg="rgba(255, 255, 255, 0.2);"
            borderRadius="5"
            backdropBlur="100px"
            p="6"
            border=""
          >
            <Icon as={RiUser2Line} fontSize={24} />
            <Text fontWeight="bold">ETAPA 1</Text>
            <Text>Liberação do cadastro de usuário na nova versão</Text>
            <Text fontSize="sm">A partir do dia 27/02/2021 23:59h</Text>
          </Stack>

          <Stack
            bg="rgba(255, 255, 255, 0.09);"
            borderRadius="5"
            backdropBlur="100px"
            p="6"
          >
            <Icon as={RiFilePaper2Line} fontSize={24} />
            <Text fontWeight="bold">ETAPA 2</Text>
            <Text>Liberação da emissão de notas na versão nova</Text>
            <Text fontSize="sm">A partir do dia 01/03/2021</Text>
          </Stack>


        </SimpleGrid>

        <Text id="horariodeatendimento" textAlign="center" fontSize={{ base: "1xl", md: "4xl" }} fontFamily="Montserrat" fontWeight="bold" lineHeight="1">
          Informações sobre o atendimento via chat.
        </Text>

        <Text textAlign="center" fontSize={{ base: "1xl", md: "2xl" }}>O nosso atendimento é feito de 8h às 17h. Todos os dias excetos aos finais de semana, no
          sábado o nosso horário de atendimento é de 8h às 14h. Após este horário, você pode enviar um
          e-mail para o nosso suporte no empresarial.sefaz@itaborai.rj.gov.br
        </Text>

        <Button p="4" href="mailto:empresarial.sefaz@itaborai.rj.gov.br" as={Link} colorScheme="blue">Envie um e-mail para a Fazenda</Button>

        <HStack bg="#004B8B" justify="space-between" p="4" >

          <Image src="/prefeitura.png" w="150px" h="40px" alt="prefeitura" />
          <Image src="/logo.svg" w="150px" h="35px" alt="fazenda" />

        </HStack>

      </Stack>

      <Tutoriais />

    </>
  )
}
