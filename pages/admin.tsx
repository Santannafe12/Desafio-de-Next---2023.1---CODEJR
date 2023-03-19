import Head from 'next/head';
import AdminTabela from "./components/Admin"

export default function Admin() {

    return (
        <>
            <Head>
                <title>Admin</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <AdminTabela />
        </>
    )
}