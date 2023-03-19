import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Table from "./components/Funcionarios";
import Head from 'next/head';

export default function Funcionarios() {
    return (
        <>
            <Head>
                <title>Membros</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
                <Navbar />
                <Table />
                <Footer />
        </>
    )
}