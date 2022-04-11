import { Box, Text, HStack, Icon, Flex, SimpleGrid, Stack, Button, AvatarGroup, Avatar } from "@chakra-ui/react";
import { RiArrowLeftRightLine, RiArrowRightUpLine, RiCodepenLine, RiFilePaper2Line, RiHome7Line, RiMoneyDollarBoxLine, RiMoneyDollarCircleLine, RiPenNibFill } from "react-icons/ri";

import Link from 'next/link'

export function Services() {
    return (
        <>

            <Box
                maxWidth={1280}
                m="0 auto"
                px="4"
                mt="8"
                id="servicos"
                fontFamily="Archivo"
                mb="24"
            >
                <Stack
                    maxWidth={800}
                    spacing="4"
                >
                    <Text
                        fontSize="lg"
                        color="gray.400"
                    >
                        Disponibilizamos abaixo alguns tutoriais em vídeo e manuais em PDF para
                        lhe auxiliar na emissão de notas fiscais, retenções e cadastro de obras.</Text>

                    <Text
                        fontSize="2xl"
                        color="blue.500"
                        fontWeight="bold"
                    >
                        O que podemos fazer por você hoje?
                    </Text>
                </Stack>


                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} flex='1' gap='2' align='flex-start' mt="8">

                    <Stack
                        w="100%"
                        align="center"
                        justify="space-between"
                        spacing="2"
                        color="blue.300"
                        bg="#F2F9FF"
                        borderRadius="2"
                    >
                        <Stack px="8" py="12">
                            <Text fontSize="2xl" fontWeight="bold">Tutoriais em vídeo</Text>
                            <Text color="gray.400">Veja nossos vídeos tutoriais sobre a emissão de notas fiscais na nova
                                versão da plataforma.</Text>
                        </Stack>

                        <HStack justify="space-between" borderTop="3px solid white" w="100%" px="8" py="4">
                            <Link href="https://www.youtube.com/playlist?list=PLQFxcuRo_0ur05CATa8q8xvGZTwzepNBI">
                                <a>Acessar tutoriais </a>
                            </Link>
                            <Icon as={RiArrowRightUpLine} />
                        </HStack>
                    </Stack>

                    <Stack
                        w="100%"
                        align="center"
                        justify="space-between"
                        spacing="2"
                        color="blue.300"
                        bg="#F2F9FF"
                        borderRadius="2"
                    >
                        <Stack px="8" py="12">
                            <Text fontSize="2xl" fontWeight="bold">Atendimento contador</Text>
                            <Text color="gray.400">Atendimento presencial exclusivo para tirar dúvidas dos contadores do município</Text>
                        </Stack>

                        <HStack justify="space-between" borderTop="3px solid white" w="100%" px="8" py="4">
                            <Link href="https://calendly.com/atendimentosemfat/atendimentopresencial?month=2022-04">
                                <a>Realizar agendamento </a>
                            </Link>
                            <Icon as={RiArrowRightUpLine} />
                        </HStack>
                    </Stack>

                    <Stack
                        w="100%"
                        align="center"
                        justify="space-between"
                        spacing="2"
                        color="blue.300"
                        bg="#F2F9FF"
                        borderRadius="2"
                    >
                        <Stack px="8" py="12">
                            <Text fontSize="2xl" fontWeight="bold">Manuais (E-book)</Text>
                            <Text color="gray.400">Acesse e baixe todos os manuais relacionados a nota fiscal de serviços de Itaboraí</Text>
                        </Stack>

                        <HStack justify="space-between" borderTop="3px solid white" w="100%" px="8" py="4">
                            <Link href="https://drive.google.com/drive/folders/1hksN_LDZG20AUTKSh5q1XGCt0OQ9UuWc?usp=sharing">
                                <a>Baixar manuais </a>
                            </Link>
                            <Icon as={RiArrowRightUpLine} />
                        </HStack>
                    </Stack>





                </SimpleGrid>

            </Box>

        </>
    )
}