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

import Head from 'next/head'
import { RiFilePaper2Line, RiUser2Line } from 'react-icons/ri'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Head>
        <title>A Moreninha - Nota Fiscal - Secretaria de Fazenda de Itaboraí</title>
      </Head>

      {/* <HStack bg="#004B8B" justify="space-between" p="4" borderBottom="1px solid rgba(255, 255, 255, 0.2);">

        <HStack>
          <Image src="/moreninha.png" w="70px" />
          <Text fontSize="2xl" fontWeight="bold">A Moreninha</Text>
        </HStack>
        <Image src="/prefeitura.png" w="150px" h="40px" alt="prefeitura" />
        <Image src="/logo.svg" w="150px" h="35px" alt="fazenda" />

      </HStack> */}

      <Header />

      <Hero onOpen={onOpen}/>


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
          e-mail para o nosso suporte no contato.fazenda@itaborai.rj.gov.br
        </Text>

        <Button p="4" href="mailto:contato.fazenda@itaborai.rj.gov.br" as={Link} colorScheme="blue">Envie um e-mail para a Fazenda</Button>

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
                  <Button colorScheme="blue" target="_blank" as={Link} href="https://prefeituradeitaborai.online/engine8.php?m=modnfse_pref_nfe_inicial">Cadastre-se</Button>
                </Box>
              </Stack>

              <Stack spacing="4" bg="#eee" p="3">
                <Text fontWeight="bold">Cadastro de tomadores de serviços</Text>
                <Text fontSize="sm">Quem deve se cadastrar nessa área:
                  <br></br>
                  • Tomadores de serviços que estão estabelecidos ou não no Município de Itaboraí.<br></br>
                </Text>
                <Box>
                  <Button colorScheme="teal" target="_blank" as={Link} href="https://prefeituradeitaborai.online/engine8.php?m=modissretencao_even_home">Cadastre-se</Button>
                </Box>
              </Stack>

              <Stack spacing="4" bg="#eee" p="3">
                <Text fontWeight="bold">ISS Direto</Text>
                <Text fontSize="sm">Quem deve se cadastrar nessa área:
                  <br></br>
                  • Todos os contribuintes de fora do município que devem recolher o ISSQN no local da execução do serviço.
                </Text>
                <Box>
                  <Button colorScheme="teal" target="_blank" as={Link} href="https://prefeituradeitaborai.online/engine8.php?m=modissdireto_direto_home">Cadastre-se</Button>
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



    </>
  )
}
