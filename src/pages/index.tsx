import {
  Button, HStack, Icon, Image, Link, SimpleGrid, Stack, Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react'

import Script from 'next/script'

import Head from 'next/head'
import { RiFilePaper2Line, RiFilePaperLine, RiMessageLine, RiUser2Line, RiVideoChatLine } from 'react-icons/ri'

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>

      <Script dangerouslySetInnerHTML={{
        __html: `
         var countDownDate = new Date("Feb 27, 2022 12:00:00").getTime();

         // Update the count down every 1 second
         var x = setInterval(function() {
 
         // Get today's date and time
         const now = new Date().getTime();
 
         // Find the distance between now and the count down date
         var distance = countDownDate - now;
 
         // Time calculations for days, hours, minutes and seconds
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
         // Display the result in the element with id="demo"
         document.getElementById("contador").innerHTML = days + "d " + hours + "h "
         + minutes + "m " + seconds + "s ";
 
         // If the count down is finished, write some text
         if (distance < 0) {
           clearInterval(x);
         document.getElementById("demo").innerHTML = "EXPIRED";
   }
 }, 1000);
      `}} />


      <Head>
        <title>A Moreninha - Nota Fiscal - Secretaria de Fazenda de Itaboraí</title>
      </Head>

      <Stack d="flex" m="0 auto" align="center" p="8">
        <HStack>
          <Image src="/prefeitura.png" w="150px" h="40px" alt="prefeitura" />
          <Image src="/logo.svg" w="150px" h="35px" alt="fazenda" />
        </HStack>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.800">Cadastro no sistema de NFS-e</ModalHeader>
          <ModalCloseButton color="gray.800" />
          <ModalBody color="gray.800">

            <Stack spacing="2">
              <Stack spacing="4" bg="#eee" p="3">
                <Text fontWeight="bold">Cadastro de prestadores de serviços localizados em Itaboraí</Text>
                <Text fontSize="sm">Quem deve se cadastrar nessa área:
                  <br></br>
                  • Prestadores de Serviços estabelecidos que estão obrigados à emissão de NFse.<br></br>
                </Text>
                <Box>
                  <Button colorScheme="blue">Cadastre-se</Button>
                </Box>
              </Stack>

              <Stack spacing="4" bg="#eee" p="3">
                <Text fontWeight="bold">Cadastro de tomadores de serviços</Text>
                <Text fontSize="sm">Quem deve se cadastrar nessa área:
                  <br></br>
                  • Tomadores de serviços que estão estabelecidos ou não no Município de Itaboraí.<br></br>
                </Text>
                <Box>
                  <Button colorScheme="teal">Cadastre-se</Button>
                </Box>
              </Stack>

              <Stack spacing="4" bg="#eee" p="3">
                <Text fontWeight="bold">ISS Direto</Text>
                <Text fontSize="sm">Quem deve se cadastrar nessa área:
                  <br></br>
                  • Todos os contribuintes de fora do município que devem recolher o ISSQN no local da execução do serviço.
                </Text>
                <Box>
                  <Button colorScheme="teal">Cadastre-se</Button>
                </Box>
              </Stack>
            </Stack>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Stack align="center" m="0 auto" maxWidth="1120" spacing={8} p="4" my="6">

        <Image src="/moreninha.png" w="100px"/>

        <Text textAlign="center" fontSize={{ base: "1xl", md: "4xl" }} fontFamily="Montserrat" fontWeight="bold" lineHeight="1">
          Nossa Nota Fiscal irá atualizar, uma nova versão está chegando.
        </Text>

        <SimpleGrid columns={3} gap="4" w="100%" minChildWidth={320}>
          <Stack
            bg="rgba(255, 255, 255, 0.2);"
            borderRadius="5"
            backdropBlur="100px"
            p="6"
            border=""
          >
            <Icon as={RiUser2Line} fontSize={24}/>
            <Text fontWeight="bold">ETAPA 1</Text>
            <Text>Liberação do cadastro de usuário na nova versão</Text>
            <Text fontSize="sm">A partir do dia 27/02/2021 12h.</Text>
          </Stack>

          <Stack
            bg="rgba(255, 255, 255, 0.09);"
            borderRadius="5"
            backdropBlur="100px"
            p="6"
          >
            <Icon as={RiFilePaper2Line} fontSize={24}/>
            <Text fontWeight="bold">ETAPA 2</Text>
            <Text>Liberação da emissão de notas na versão nova</Text>
            <Text fontSize="sm">A partir do dia 01/03/2021</Text>
          </Stack>

          <Stack
            bg="rgba(255, 255, 255, 0.05);"
            borderRadius="5"
            backdropBlur="100px"
            p="6"
          >
            <Icon as={RiFilePaperLine} fontSize={24}/>
            <Text fontWeight="bold">ETAPA 3</Text>
            <Text>Fim da emissão de notas na versão antiga</Text>
            <Text fontSize="sm">Dia 21/03/2021</Text>
          </Stack>
        </SimpleGrid>

        <Text textAlign="center" fontSize={{ base: "md", md: "1xl" }} fontFamily="Montserrat" fontWeight="bold" lineHeight="1">
          Liberação da etapa 1 - Cadastro na nova versão em:
        </Text>

        <Text id="contador" textAlign="left" fontSize={{ base: "1xl", md: "4xl" }} fontFamily="Montserrat" fontWeight="bold" lineHeight="1" />

        <Text textAlign="justify" fontSize={{ base: "md", sm: "xl" }}>Se você é contador ou empresário, não fique de fora, confira o que mudou na nossa Nota Fiscal (A Moreninha), ficou ainda mais rápido e fácil fazer a emissão das suas notas fiscais,
          fique por dentro das melhorias e novidades que implantamos para aprimorar o nosso sistema. Você pode mandar
          um e-mail ou falar conosco através do chat de atendimento abaixo, nossos operadores estão prontos para responder você! Se optar por mandar e-mail, o tempo médio de resposta é de no máximo 16 horas devido a alta demanda.
        </Text>


        <SimpleGrid columns={3} gap={2} minChildWidth={320} w="100%" justify="flex-start" m="0 auto" maxWidth="1120" p="4" my="6">

          <HStack
            align="center"
            bg="rgba(255, 255, 255, 0.25);"
            borderRadius="5"
            h="80px"
            backdropBlur="100px"
            px="12"
            spacing="4"
            // onClick={onOpen}
            cursor="not-allowed"
          >
            <Icon as={RiUser2Line} fontSize="25" />
            <Text fontSize="lg">Cadastre-se aqui</Text>
          </HStack>

          <HStack
            align="center"
            bg="rgba(255, 255, 255, 0.25);"
            borderRadius="5"
            h="80px"
            backdropBlur="100px"
            px="12"
            spacing="4"
            as={Link}
            cursor="not-allowed"
            href="#"
          >
            <Icon as={RiVideoChatLine} fontSize="25" />
            <Text fontSize="lg">Acesse os tutoriais</Text>
          </HStack>

          <HStack
            align="center"
            bg="rgba(255, 255, 255, 0.25);"
            borderRadius="5"
            h="80px"
            backdropBlur="100px"
            px="12"
            spacing="4"
            as={Link}
            cursor="not-allowed"
            href="#"
          >
            <Icon as={RiMessageLine} fontSize="25" />
            <Text fontSize="lg">Fale conosco</Text>
          </HStack>

        </SimpleGrid>

        <Button p="4" href="mailto:contato.fazenda@itaborai.rj.gov.br" as={Link} colorScheme="blue">Envie um e-mail para a Fazenda</Button>

      </Stack>



    </>
  )
}
