import { Flex, Text, HStack, Icon, Image } from "@chakra-ui/react";

import { RiHome2Line } from 'react-icons/ri'

import Link from 'next/link'

export function Header() {
    return (
        <>
            <Flex
                px="4"
                py="6"
                bg="rgba(255, 255, 255, 0.1);"
                color="white"
                backdropBlur="100px"
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
                            <HStack>
                                <Image src="/moreninha.png" w="70px" />
                                <Text fontSize="lg">A Moreninha - NFS-e</Text>
                            </HStack>
                        </a>
                    </Link>

                    <HStack spacing={6} d={{ base: "none", md: "flex" }}>
                        <Link
                            href="/"
                        >
                            <a>
                                <HStack
                                    align="center"
                                >
                                    <Icon as={RiHome2Line} />
                                    <Text>Página Inicial</Text>
                                </HStack>
                            </a>
                        </Link>
                        <Link
                            href="https://prefeituradeitaborai.online" 
                        >
                            <a>Nota Fiscal</a>
                        </Link>
                    </HStack>
                </Flex>
            </Flex>
        </>
    )
}
