import { Button, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'

export default function Home() {

  return (
    <>
      <Stack w="100vw" h="100vh" align="center" justify="center" m="0 auto" maxWidth="1120" spacing={12} p="4">
        <HStack>
          <Image src="/prefeitura.png" w="150px" h="40px" alt="prefeitura"/>
          <Image src="/logo.svg" w="150px" h="35px" alt="fazenda"/>
        </HStack>
        <Text textAlign="center" fontSize={{base: "2xl", md: "7xl"}} fontFamily="Montserrat" fontWeight="bold" lineHeight="1">Uma nova Nota Fiscal está chegando</Text>
        <Text textAlign="center" fontSize={{base: "md", sm: "xl"}}>Se você é contador ou empresário, não fique de fora, conheça e aprenda a usar o novo sistema de Nota fiscal da Prefeitura de Itaboraí. Você pode mandar
          um e-mail ou falar conosco através do chat de atendimento abaixo, nossos operadores estão prontos para responder você! Se optar por mandar um e-mail, o tempo médio de resposta é de no máximo 16 horas devido a alta demanda.
        </Text>
        <Button href="mailto:contato.fazenda@itaborai.rj.gov.br" as={Link} colorScheme="blue">Envie um e-mail para a Fazenda</Button>
      </Stack>
    </>
  )
}
