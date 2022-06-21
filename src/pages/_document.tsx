// PARA IMPORTAR FONTES E OUTROS ITENS QUE VÃO SER CARREGADOS APENAS UMA VEZ.
// É COMO SE FOSSE O INDEX.HTML DO REACTJS

import Document, {Html, Head, Main, NextScript} from "next/document";


export default class MyDocument extends Document{
    render() {
        return(
            <Html>
                <Head>

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>

            </Html>
        )
    }
}