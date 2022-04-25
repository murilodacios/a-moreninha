import { Flex, Text, HStack, Icon, Image, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { RiHome2Line, RiMenuLine, RiPhoneLine } from 'react-icons/ri'

import Link from 'next/link'

export function Header() {
    return (
        <>
            <Flex
                py="6"
                color="blue.500"
                fontFamily="Archivo"
                bg="white"
               
            >
                <Flex
                    align="center"
                    justify="space-between"
                    maxWidth={1400}
                    m="0 auto"
                    w="100%"
                >
                    <Link
                        href="/"
                    >
                        <a>
                            <Image src="/logo.svg" width="170px" height="50" alt="logo" />
                        </a>
                    </Link>

                    <HStack spacing={6} d={{ base: "none", md: "flex" }} color="gray.300">
                        <Link
                            href="https://contribuinte.ib.itaborai.rj.gov.br"
                        >
                            <a>
                                <Text>Portal do Contribuinte</Text>
                            </a>
                        </Link>
                        <Link
                            href="https://contribuinte.ib.itaborai.rj.gov.br/blog"
                        >
                            <a>Notícias</a>
                        </Link>
                        <Link
                            href="#servicos"
                        >
                            <a>
                                <Text>
                                    Nossos serviços
                                </Text>
                            </a>
                        </Link>
                        <Link
                            href="#atendimento"
                        >
                            <a>Atendimento</a>
                        </Link>
                    </HStack>

                    <Menu>
                        <MenuButton bg="transparent" d={{ base: "flex", sm: "none" }}>
                            <Icon as={RiMenuLine} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link
                                    href="https://contribuinte.ib.itaborai.rj.gov.br/#servicos"
                                >
                                    <a>
                                        <Text>
                                            Nossos serviços
                                        </Text>
                                    </a>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    href="https://contribuinte.ib.itaborai.rj.gov.br/#atendimento"
                                >
                                    <a>Atendimento</a>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    href="https://contribuinte.ib.itaborai.rj.gov.br/blog"
                                >
                                    <a>Notícias</a>
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                </Flex>
            </Flex>
        </>
    )
}
