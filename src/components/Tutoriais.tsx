
import { Box, SimpleGrid, Button, Flex, Grid, HStack, Icon, Image, Link, Stack, Text } from "@chakra-ui/react";

export function Tutoriais() {
    return (
        <Box align="center" m="0 auto" maxWidth="1120" p="4" my="6">

            <Box mb="12">
                <Text id="horariodeatendimento" textAlign="center" fontSize={{ base: "1xl", md: "4xl" }} fontFamily="Montserrat" fontWeight="bold" lineHeight="1">
                    Tutoriais em vídeo.
                </Text>
                <Text mt="8" textAlign="center" fontSize={{ base: "1xl", md: "2xl" }}>
                    Abaixo você poderá encontrar um passo a passo para realizar o seu cadastro e emissão de
                    de notas fiscais na nova versão do sistema.
                </Text>
            </Box>

            <SimpleGrid columns={2} minChildWidth="350px" mt="8" gap="4">
                <Stack spacing="4"> 
                    <Text>Cadastro inicial e primeiro acesso</Text>
                    <iframe
                        width="100%"
                        height="315" src="https://www.youtube.com/embed/tZjKMT4FHDc"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture; fullscreen">
                    </iframe>
                </Stack>

                <Stack spacing="4">
                    <Text>Emissão de notas fiscais (Tributação Normal)</Text>
                    <iframe
                        width="100%"
                        height="315" src="https://www.youtube.com/embed/eKMkHuTFYLc"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture; fullscreen">
                    </iframe>
                </Stack>
            </SimpleGrid>

        </Box>
    )
}