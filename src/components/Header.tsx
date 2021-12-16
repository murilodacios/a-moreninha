import { Flex, Text, HStack, Link, Icon } from "@chakra-ui/react";

import { RiHome2Line } from 'react-icons/ri'

import Image from 'next/image'

export function Header() {
    return (
        <>
            <Flex
                px="6"
                py="6"
                bg="blue.200"
            >
                <Flex
                    align="center"
                    justify="space-between"
                    maxWidth={1400}
                    m="0 auto"
                    w="100%"
                >
                    <Image src="/logo.svg" width="150" height="50" alt="logo" />
                    <HStack spacing={6}>
                        <Link
                            as="a"
                            href="https://github.com/"
                            color="white"
                        >
                            <HStack
                                align="center"
                            >
                                <Icon as={RiHome2Line} />
                                <Text>Página Inicial</Text>
                            </HStack>
                        </Link>

                        <Link
                            as="a"
                            href="https://github.com/"
                            color="white"
                        >
                            Serviços
                        </Link>
                        <Link
                            as="a"
                            href="https://github.com/"
                            color="white"
                        >
                            Notícias
                        </Link>

                        <Link
                            as="a"
                            href="https://github.com/"
                            color="white"
                        >
                            Contato
                        </Link>
                    </HStack>
                </Flex>
            </Flex>
        </>
    )
}