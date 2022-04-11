import {
    Box, Button, Flex, Grid, HStack, Icon, Image, Link, Stack, Text, useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    AvatarGroup,
    Avatar
} from "@chakra-ui/react";
import { RiArrowLeftRightLine, RiChatSmile2Line, RiChatVoiceLine, RiFacebookFill, RiHeadphoneFill, RiInstagramFill, RiLinkedinFill, RiPenNibFill, RiUser2Line, RiVideoChatLine } from "react-icons/ri";
import { Header } from "./Header";

export function Hero() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box
                bg="linear-gradient(346.93deg, #FCFCFC 7.78%, rgba(252, 252, 252, 0) 54.44%);"
                fontFamily="Archivo"
            >
                <Stack
                    backgroundImage="url('/fundo-linhas.png')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    maxWidth={1280}
                    m="0 auto"
                    justify="space-between"
                    px="4"
                >

                    <Header />

                    <Grid
                        flex='1'
                        gap='12'
                        gridTemplateColumns={{ base: "1fr", sm: "1fr", md: "1fr", lg: "1fr 1fr" }}
                        align='flex-start'
                        justifyContent="flex-start"
                        color="#00325C"
                        py={{ base: "8", sm: "16" }}
                    >

                        <Stack spacing="20" position="relative">
                            <Stack spacing={8}>

                                <Box
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
                                </Box>

                                <Text
                                    fontSize={{ base: "4xl", sm: "6xl" }}
                                    fontFamily="Montserrat"
                                    fontWeight="bold"
                                    lineHeight="106%"
                                >
                                   A Nota fiscal está de cara nova. Venha conferir!
                                </Text>
                                <Text fontSize="2xl" color="gray.400">Tem dúvidas quanto ao uso da nova versão do sistema? Chame-nos no chat! Estamos disponíveis</Text>
                            </Stack>
                            <Button bg="blue.100" color="blue.300" w={{ base: "300px", sm: "300px" }} h="50px">
                                <Link href="https://prefeituradeitaborai.online">
                                    <a>
                                        Acessar nota fiscal
                                    </a>
                                </Link>
                            </Button>

                        </Stack>

                        <Stack justify="flex-start" align="flex-end" position="relative">


                            <Flex
                                bg="white"
                                position="absolute"
                                top="10"
                                left="10"
                                borderRadius="5"
                                boxShadow="2px 4px 158px 49px rgba(0, 0, 0, 0.09)"
                                width="64px"
                                height="64px"
                                align="center"
                                justify="center"
                            >
                                <Icon as={RiHeadphoneFill} fontSize="23" />
                            </Flex>

                            <Flex
                                position="absolute"
                                top="1"
                                right="1"
                                align="center"
                                justify="center"
                            >
                                <Text color="gray.500">Atendimento online<br />
                                    e humanizado.</Text>
                            </Flex>



                            <Image
                                src="/homem-celular.png"
                                width="100%"
                                height="auto"
                                padding="12"
                            />
                        </Stack>
                    </Grid>

                    <Stack
                        justify="space-between"
                        py={{ base: "4", sm: "12" }}
                        direction={{ base: "column", md: "row" }}
                    >

                        <HStack>
                            <AvatarGroup size='sm'>
                                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                            </AvatarGroup>
                            <Text>Junte-se ao nossos seguidores nas redes sociais</Text>
                        </HStack>

                        <HStack spacing={{ base: "2", sm: "4" }} py={{ base: "6", sm: "0" }}>

                            <Flex
                                as={Link}
                                cursor="pointer"
                                href="https://www.instagram.com/fazendaitaborai/"
                            >
                                <Icon as={RiInstagramFill} fontSize="24" color="blue.400" cursor="pointer" />
                            </Flex>

                            <Flex
                                as={Link}
                                cursor="pointer"
                                href="https://www.facebook.com/fazendaitaborai"
                            >

                                <Icon as={RiFacebookFill} fontSize="24" color="blue.400" cursor="pointer" />

                            </Flex>

                            <Flex
                                as={Link}
                                cursor="pointer"
                                href="https://www.linkedin.com/company/secretaria-de-fazenda-de-itaborai"
                            >
                                <Icon as={RiLinkedinFill} fontSize="24" color="blue.400" cursor="pointer" />
                            </Flex>

                        </HStack>

                    </Stack>

                </Stack>
            </Box>


        </>


    )
}