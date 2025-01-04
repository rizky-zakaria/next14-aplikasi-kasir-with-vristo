import { Metadata } from 'next';
import FormCreateProduk from '../../components/form/form-create-produk';
import TitlePage from '../../components/title/title-page';

export const metadata: Metadata = {
    title: 'Create Produk',
};

export default function CreateProduk() {
    return (
        <div className="bg-white p-3 rounded">
            <TitlePage title="Create Produk" />
            <div className="card-body bg-white">
                <FormCreateProduk />
            </div>
        </div>
    );
}
