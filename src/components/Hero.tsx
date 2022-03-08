import { Box, Button, Flex, Grid, HStack, Icon, Image, Link, Stack, Text } from "@chakra-ui/react";
import { RiArrowLeftRightLine, RiChatSmile2Line, RiChatVoiceLine, RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiPenNibFill, RiUser2Line, RiVideoChatLine } from "react-icons/ri";

export function Hero({ onOpen }) {
    return (
        <Box
            bg="blue.600"
        >
            <Grid
                maxWidth={1400}
                m="0 auto"
                flex='1'
                gap='12'
                gridTemplateColumns={{ base: "1fr", sm: "1fr", md: "1fr", lg: "1fr 2fr 1fr" }}
                align='flex-start'
                justifyContent="center"
                color="white"
                px="4"
                py={{ base: "16", sm: "32" }}
            >
                <Stack justify="space-between" display={{ base: "flex", sm: "flex", md: "none", lg: "flex" }}>
                    <Box>
                        <Text fontSize="sm">Nota fiscal de serviços de Itaboraí</Text>
                        <Text fontWeight="bold" fontSize="lg">A MORENINHA DE CARA NOVA</Text>
                    </Box>

                    <Box>
                        <HStack>
                            <Icon as={RiChatSmile2Line} />
                            <Text> Fique informado</Text>
                        </HStack>

                        <HStack mt="2">

                            <Flex
                                bg="blue.100"
                                color="blue.600"
                                w="40px"
                                h="40px"
                                borderRadius="6"
                                d="flex"
                                align="center"
                                justify="center"
                                as={Link}
                                href="https://www.instagram.com/fazendaitaborai/"
                            >
                                <Icon as={RiInstagramFill} fontSize="24" />
                            </Flex>

                            <Flex
                                bg="blue.100"
                                color="blue.600"
                                w="40px"
                                h="40px"
                                borderRadius="6"
                                d="flex"
                                align="center"
                                justify="center"
                                as={Link}
                                href="https://www.facebook.com/fazendaitaborai"
                            >

                                <Icon as={RiFacebookFill} fontSize="24" />

                            </Flex>

                            <Flex
                                bg="blue.100"
                                color="blue.600"
                                w="40px"
                                h="40px"
                                borderRadius="6"
                                d="flex"
                                align="center"
                                justify="center"
                                as={Link}
                                href="https://www.linkedin.com/company/secretaria-de-fazenda-de-itaborai"
                            >
                                <Icon as={RiLinkedinFill} fontSize="24" />
                            </Flex>

                        </HStack>
                    </Box>
                </Stack>

                <Stack justify="space-between" spacing="20" position="relative">
                    <Stack spacing={8}>

                        {/* <Box
                            position="absolute"
                            top={{ base: "-60px", md: "-40px" }}
                            left={{ base: "-70px", md: "-50px" }}
                            d={{ base: "none", sm: "inline" }}
                        >
                            <Image
                                src="/circle.svg"
                                width="120px"
                                height="120px"
                                alt="Circle"
                            />
                        </Box> */}

                        <Text
                            fontSize={{ base: "4xl", sm: "7xl" }}
                            fontFamily="Montserrat"
                            fontWeight="bold"
                            lineHeight="106%"
                        >
                            A Nota fiscal irá atualizar. Uma nova versão.
                        </Text>
                        <Text fontSize="lg">
                            Se você é contador ou empresário, não fique de fora, confira o que mudou na nossa Nota Fiscal (A Moreninha),
                            ficou ainda mais rápido e fácil fazer a emissão das suas notas fiscais, fique por dentro das melhorias e novidades que
                            implantamos para aprimorar o nosso sistema. Você pode mandar um e-mail ou falar conosco através do chat de atendimento abaixo,
                            nossos operadores estão prontos para responder você!

                        </Text>
                    </Stack>
                    <Button bg="#004B8B" color="white" w={{ base: "100%", sm: "350px" }} >
                        <Link href="https://prefeituradeitaborai.online" target="_blank">Acesse a nota fiscal</Link>
                    </Button>
                </Stack>

                <Stack justify="flex-start">
                    <Text>Comece por aqui</Text>

                    <Stack spacing="1">

                        <HStack
                            align="center"
                            bg="rgba(255, 255, 255, 0.25);"
                            borderRadius="5"
                            h="80px"
                            backdropBlur="100px"
                            px="12"
                            spacing="4"
                            onClick={onOpen}
                            cursor="pointer"
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
                            cursor="pointer"
                            href="https://www.youtube.com/playlist?list=PLQFxcuRo_0ur05CATa8q8xvGZTwzepNBI"
                            target="_blank"
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
                            cursor="pointer"
                            href="#horariodeatendimento"
                        >
                            <Icon as={RiChatVoiceLine} fontSize="25" />
                            <Text fontSize="lg">Atendimento via chat</Text>
                        </HStack>

                    </Stack>

                </Stack>

            </Grid>
        </Box>
    )
}