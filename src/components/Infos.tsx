import { Box, Button, SimpleGrid, Stack, Text, HStack, Image } from "@chakra-ui/react";
import Link from 'next/link'


export function Infos() {


  return (
    <>
      <Box
        maxWidth={1280}
        margin="0 auto"
        my="12"
        px="4"
        fontFamily="Archivo"
        pt="8"
      >

        <Stack
          maxWidth={800}
          spacing="6"
        >
          <Text
            fontSize="lg"
            color="gray.400"
          >
            Informações importantes</Text>

          <Text
            fontSize="2xl"
            color="blue.500"
            fontWeight="bold"
          >
            Atendimento via chat
          </Text>

          <Text
            fontSize="lg"
            color="gray.400"
            fontWeight="400"
          >
            O nosso atendimento é feito de 8h às 17h. Todos os dias excetos aos finais de semana,
            no sábado o nosso horário de atendimento exclusivo para nota fiscal é de 8h às 14h. Após este horário, você pode enviar
            um e-mail para o nosso suporte no empresarial.sefaz@itaborai.rj.gov.br

          </Text>

          <Box>
            <Button bg="blue.100" color="blue.300" w={{ base: "300px", sm: "300px" }} h="50px">
              <Link href="mailto:empresarial.sefaz@itaborai.rj.gov.br">
                <a>
                  Enviar e-mail
                </a>
              </Link>
            </Button>
          </Box>

        </Stack>

      </Box>
    </>
  )
}
