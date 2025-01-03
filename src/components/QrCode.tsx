import Image from "next/image";
import Link from "next/link";

interface QrCodeProps {
    imageUrl: string;

}

export function QrCode({ imageUrl }: QrCodeProps) {
    return (

        <div className="flex flex-col justify-center items-center pb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image src={imageUrl} width={250} height={250} alt="" />

            <Link href={imageUrl} download target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-greenBase rounded-lg hover:bg-greenBase focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-greenBase dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Baixar
            </Link>
        </div>

    );
}