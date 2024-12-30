import { KeyIcon } from "./icons/KeyIcon";
import { MoneyIcon } from "./icons/MoneyIcon";

export function FormQrCode() {

    return (

        <form className="md:w-1/3 md:flex-col space-y-5 pt-4">
            <div>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chave</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <KeyIcon />
                    </div>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@hotmail.com"
                    />
                </div>
            </div>
            <div>

                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Valor
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <MoneyIcon />
                    </div>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="R$ 2,00"
                    />
                </div>
            </div>
            <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
                Gerar qrcode
            </button>
        </form>

    )
}