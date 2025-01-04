import { MantineProvider } from '@mantine/core';
import { Metadata } from 'next';
import ComponentsDatatablesSkin from '../components/datatables/components-datatables-skin';
import TitlePage from '../components/title/title-page';

export const metadata: Metadata = {
    title: 'Produk',
};

const Produk = () => {
    return (
        <div className="bg-white p-3 rounded">
            <TitlePage title="Produk" />
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <ComponentsDatatablesSkin></ComponentsDatatablesSkin>
            </MantineProvider>
        </div>
    );
};

export default Produk;
