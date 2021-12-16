import { Button, HStack, Icon, Image, Link, Stack, Text } from '@chakra-ui/react'

import Head from 'next/head'
import { RiFacebookLine, RiInstagramLine } from 'react-icons/ri'

export default function Home() {

  return (
    <>
      <Head>
        <title>Nova Nota Fiscal - Secretaria de Fazenda de Itaboraí</title>
      </Head>

      <Stack w="100vw" h="100vh" align="center" justify="center" m="0 auto" maxWidth="1120" spacing={12} p="4" my="6">
        <HStack>
          <Image src="/prefeitura.png" w="150px" h="40px" alt="prefeitura"/>
          <Image src="/logo.svg" w="150px" h="35px" alt="fazenda"/>
        </HStack>
        <Text textAlign="center" fontSize={{base: "2xl", md: "7xl"}} fontFamily="Montserrat" fontWeight="bold" lineHeight="1">Nossa Nota Fiscal de cara nova, melhor e mais rápida.</Text>
        <Text textAlign="center" fontSize={{base: "md", sm: "xl"}}>Se você é contador ou empresário, não fique de fora, confira o que mudou na nossa Nota Fiscal (Pedra Bonita), ficou ainda mais rápido e fácil fazer a emissão das suas notas fiscais,
        fique por dentro das melhorias e novidades que implantamos para aprimorar o nosso sistema. Você pode mandar
          um e-mail ou falar conosco através do chat de atendimento abaixo, nossos operadores estão prontos para responder você! Se optar por mandar e-mail, o tempo médio de resposta é de no máximo 16 horas devido a alta demanda.
        </Text>
        <Button p="4" href="mailto:contato.fazenda@itaborai.rj.gov.br" as={Link} colorScheme="blue">Envie um e-mail para a Fazenda</Button>
        <HStack spacing="4">
          <Link href="https://www.instagram.com/fazendaitaborai/">
            <Icon as={RiInstagramLine} fontSize="28"/>
          </Link>
          <Link href="https://www.facebook.com/fazendaitaborai">
            <Icon as={RiFacebookLine} fontSize="28"/>
          </Link>
        </HStack>
      </Stack>
    </>
  )
}
