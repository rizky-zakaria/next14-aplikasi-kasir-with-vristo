const FormCreateProduk = () => {
    return (
        <form>
            <div className="grid grid-cols-1 sm:flex justify-between gap-5 mt-2">
                <input type="text" placeholder="Nama Produk" className="form-input" />
                <input type="text" placeholder="Satuan Produk" className="form-input" />
            </div>
            <div className="grid grid-cols-1 sm:flex justify-between gap-5 mt-4">
                <input type="number" placeholder="Qty " className="form-input" />
                <input type="number" placeholder="Harga Produk" className="form-input" />
            </div>
            <button type="button" className="btn btn-success mt-6 w-full">
                Simpan
            </button>
        </form>
    );
};

export default FormCreateProduk;
