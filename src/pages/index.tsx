import Head from 'next/head'
import Script from 'next/script'

import { Oswald, Fira_Code } from '@next/font/google'
import { Main } from "../components/Main/Main";
import { Header } from "../components/Header/Header";

const oswald = Oswald({ subsets: ['latin'] })
const fira_code = Fira_Code({ subsets: ['latin'] })

export default function Home() {

    // const aboutMyself = `Meu nome é Luiz Filipe Lima e sou Desenvolvedor FullStack com uma certa paixão por web performance. Gosto muito de aprender tecnologias novas, além das novidades de tecnologias existentes. Um pensamento que me motiva muito é "Entregue me desafios que entrego soluções". Sei que com esse pensamento vou além da minha zona de conforto, aprendendo novas formas de solucionar qualquer problema. Atualmente, moro em Brasília-DF, Brasil, trabalhando para a Alright Adtech Company. No meu tempo livre, gosto de assistir bons filmes e séries, cozinhar e comer. Além de tudo isso, gosto muito de ensinar. Creio que é o melhor método para reforçar um conhecimento, sem contar com a ação de estar ajudando outras pessoas.`;

    const name = `Luiz Filipe Flores de Lima`;

    const job = `Desenvolvedor Web - FullStack`;

    const socials = {
        "github": "https://github.com/luiz-floresdelima",
        "linkedin": "https://www.linkedin.com/in/luizfloresdelima/"
    }

    const skills = [
        {
            name: "HTML",
            percent: 90
        },
        {
            name: "JavaScript",
            percent: 90
        },
        {
            name: "CSS",
            percent: 85
        },
        {
            name: "PHP",
            percent: 85
        },
        {
            name: "React",
            percent: 80
        },
        {
            name: "Python",
            percent: 75
        },
        {
            name: "Git",
            percent: 75
        },
        {
            name: "SCSS",
            percent: 75
        },
        {
            name: "Vue",
            percent: 70
        },
    ]

    // const education = [
    //     {
    //         "year": "2017",
    //         "what": "Graduando em Ciência da Computação",
    //         "where": "IESB"
    //     },
    //     {
    //         "year": "2015",
    //         "what": "Conclusão da graduação dem Jogos Digitais",
    //         "where": "IESB"
    //     },
    //     {
    //         "year": "2014",
    //         "what": "Conclusão de Língua Inglesa",
    //         "where": "Cultura Inglesa - Asa Sul - Brasília/DF"
    //     },
    //     {
    //         "year": "2012",
    //         "what": "Curso de Design e Diagramação",
    //         "where": "EIBNET"
    //     },
    //     {
    //         "year": "2011",
    //         "what": "Conclusão Ensino Médio",
    //         "where": "Colégio Militar de Brasília"
    //     },
    //     {
    //         "year": "2009",
    //         "what": "Conclusão de Língua Espanhola",
    //         "where": "CCAA São João del Rei - MG"
    //     }
    // ]

    const experiences = [
        {
            "role": "Líder Técnico",
            "where": "Alright Adtech Company",
            "start": "07/2021",
            "end": "...",
            "description": "Desenvolvimento Web e Gestão de TI."
        },
        {
            "role": "Desenvolvedor Web",
            "where": "Alright Adtech Company",
            "start": "04/2021",
            "end": "07/2022",
            "description": "Desenvolvimento Web com PHP e JavaScript."
        },
        {
            "role": "Desenvolvedor Web",
            "where": "IDP",
            "start": "02/2021",
            "end": "03/2021",
            "description": "Desenvolvimento Web com Python e React."
        },
        {
            "role": "Desenvolvedor Web",
            "where": "Correio Braziliense S/A",
            "start": "09/2019",
            "end": "01/2021",
            "description": "Desenvolvimento Web com Python, JavaScript e PHP."
        },
        {
            "role": "Assistente técnico",
            "where": "Correio Braziliense S/A",
            "start": "03/2018",
            "end": "09/2019",
            "description": "Criação de sites, configurações em sistemas internos, análise de dados, criação de relatórios e criação de códigos de automatização."
        },

        {
            "role": "Estágio",
            "where": "Correio Braziliense S/A",
            "start": "09/2017",
            "end": "03/2018",
            "description": "Criação de sites, configurações em sistemas internos, análise de dados e criação de relatórios."
        },
        {
            "role": "Estágio",
            "where": "Anatel",
            "start": "11/2014",
            "end": "05/2015",
            "description": "Detectar erros de programação, alterar programas no sistema, auxiliar no desenvolvimento de sistemas."
        },
    ]

    const ldjsonWebsite = {
        "@context": "https://schema.org",
        "@type": "Website",
        "name": `${name} - Portifólio`,
        "author": {
            "@type": "Person",
            "@id": "#luizlima"
        },
        "description": `${job}`,
        "image": `/perfil.jpeg`,
        "url": "http://www.luizflima.com.br",
        "keywords": "developer, portifolio, luiz lima, fullstack, desenvolvedor, web, tecnologia, tecnology"
    }

    const ldjsonPerson = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "#luizlima",
        "name": `${name}`,
        "url": "http://www.luizflima.com.br"
    }

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <title>{`${name} - Portifólio`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={job} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#fff" />
                <meta name="keywords" content="developer, portifolio, luiz lima, fullstack, desenvolvedor, web, tecnologia, tecnology" />
                <meta name="author" content={name} />

                <meta property="og:locale" content="pt_BR" />
                <meta property="og:url" content="http://www.luizflima.com.br/" />
                <meta property="og:title" content={`${name} - Portifólio`} />
                <meta property="og:site_name" content={`${name} - Portifólio`} />
                <meta property="og:description" content={job} />
                <meta property="og:image" content="/perfil.jpeg" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="360" />
                <meta property="og:image:height" content="240" />
                <meta property="og:type" content="website" />

                <meta name="twitter:title" content={`${name} - Portifólio`} />
                <meta name="twitter:description" content={job} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="/perfil.jpeg" />

                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldjsonWebsite) }} />
                <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldjsonPerson) }} />
                
            </Head>
            <div className="container">
                <Header name={name} job={job} {...socials} />
                <Main skills={skills} experiences={experiences} />
            </div>

        </>
    )
}
